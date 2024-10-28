<template>
  <div ref="salesRanking" style="width: 35vw; height:35vh;"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue';
import * as echarts from 'echarts';
import { useAllDataStore } from '@/stores';
//接受页面传参
const store = useAllDataStore()
const result = ref(store.result)
// 创建一个响应式引用来保存DOM元素

const year = ref(['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月'])
const data = ref([620, 132, 701, 234, 890, 430, 120, 300])
// 初始化ECharts实例并设置配置项（这里以折线图为例，但可灵活替换）

const salesRanking = ref(null);
let salesRankingElement = null;
onMounted(async () => {
  if (store.result) {
    year.value = result.value.map((item) => {
      return item.province || item.year
    })

    data.value = result.value.map((item) => {
      let gdp = item.gdp.replace(/[^\d.]/g, '')
      return gdp
    })
  }
  await nextTick(); // 确保DOM已经渲染完成

  const salesRankingElement = echarts.init(salesRanking.value);
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '0%', // 调整左边距
      right: '5%', // 调整右边距
      bottom: '3%', // 调整底部边距
      top: '5%', // 调整顶部边距
      containLabel: true, // 确保标签和轴标题被包含在容器内
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
      axisLine: {
        show: false, // 不显示横坐标轴线
      },
      axisTick: {
        show: false, // 不显示刻度线
      },
      splitLine: {
        show: false, // 不显示x轴网格线
      },
    },
    yAxis: {
      type: 'category',
      data: year.value, // 示例数据
      axisLine: {
        show: false, // 不显示横坐标轴线
      },
      axisTick: {
        show: false, // 不显示刻度线
      },
      splitLine: {
        show: false, // 不显示y轴网格线
      },
      axisLabel: {
        rich: {
          iconStyle: {
            fontSize: 20, // 设置图标的字体大小为20
          },
          nameStyle: {
            // 定义名字的样式
            fontSize: 12, // 设置名字的字体大小为12，或者您希望的任何大小
          },
        },
      },
    },
    series:
    {
      name: 'GDP',
      type: 'bar',
      data: data.value, // 示例数据
      barWidth: '30%', // 调整柱子宽度
      itemStyle: {
        borderRadius: [0, 5, 5, 0], // 只有右侧圆角
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          // 设置渐变色，方向也要调整为横向
          { offset: 0, color: '#bdd1f6' },
          { offset: 1, color: '#4282ff' },
        ]),
      },
      label: {
        show: true, // 显示标签
        position: 'right', // 标签位置在顶部
        formatter: '{c}亿', // 自定义显示的内容，{c}是指当前数据点的值
      },
    },

  };
  salesRankingElement.setOption(option);
  salesRankingElement.resize()
  watch(() => store.result, (newValue) => {
  result.value = newValue
  year.value = result.value.map((item) => {
    return item.province || item.year
  })

  data.value = result.value.map((item) => {
    let gdp = item.gdp.replace(/[^\d.]/g, '')
    return gdp
  })
  
  salesRankingElement.setOption({
    series: {
      data: data.value
    },
    yAxis: {
      data: year.value
    }
  })
}
)

});

// 销毁ECharts实例
onUnmounted(() => {
  if (salesRankingElement != null && salesRankingElement.dispose) {
    salesRankingElement.dispose();
  }

});
</script>

<style scoped>
/* 添加一些CSS样式来美化图表容器（可选） */
div {
  margin-left: 4vw;
}
</style>