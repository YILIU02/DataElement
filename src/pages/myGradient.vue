<template>
    <div ref="businessTrends" style="width: 35vw; height: 35vh;"></div>
</template>

<script setup>
import { onMounted, ref,onUnmounted, nextTick, watch} from "vue";
import * as echarts from 'echarts';
import { useAllDataStore } from '@/stores';
//接受页面传参
 const store=useAllDataStore()
 const result=ref(store.result)
const businessTrends = ref(null);
let  businessTrendsElement = null;
const year=ref(['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月'])
const data=ref([620, 132, 701, 234, 890, 430, 120,300])
// 绘制折线图
onMounted(async () => {
  if(store.result){
year.value=result.value.map((item) => {
  return item.province||item.year
})

data.value=result.value.map((item) => {
  let gdp=item.gdp.replace(/[^\d.]/g,'')
  return gdp
})}
    await nextTick(); //
 const businessTrendsElement = echarts.init(businessTrends.value);
  const option = {
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      left: '3%', // 调整左边距
      right: '3%', // 调整右边距
      bottom: '3%', // 调整底部边距
      top: '5%', // 调整顶部边距
      containLabel: true, // 确保标签和轴标题被包含在容器内
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: year.value, // 示例数据
      axisLine: {
        show: false, // 不显示横坐标轴线
      },
      axisTick: {
        show: false, // 不显示刻度线
      },
      axisLabel: {
              interval: 0,
              rotate: 40,
            },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}',
      },
    },
    series: [
      {
        name: 'GDP',
        type: 'line',
        data: data.value, // 示例数据，模拟起伏更大
        smooth: true, // 折线平滑
        lineStyle: {
          width: 1,
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            { offset: 0, color: '#62c1fe' },
            { offset: 0.5, color: '#ad90f7' },
            { offset: 1, color: '#e875f2' },
          ]),
        },
        symbolSize: (value, params) => {
          // 获取数据系列的长度
          const seriesLength = option.series[0].data.length;
          // 中间节点放大
          if (params.dataIndex === Math.floor(seriesLength / 2)) {
            return 8; // 中间节点的大小
          }
          return 8; // 其他节点的大小
        },
      },
    ],
  };
  businessTrendsElement.setOption(option);
   businessTrendsElement.resize()
   watch(() => store.result, (newValue) => {
  result.value = newValue
  year.value = result.value.map((item) => {
    return item.province || item.year
  })

  data.value = result.value.map((item) => {
    let gdp = item.gdp.replace(/[^\d.]/g, '')
    return gdp
  })
  businessTrendsElement.setOption({
    series: [{
      data: data.value
    }],
    xAxis: {
      data: year.value
    }
  })
}
)
}
)
onUnmounted(() => {
    if ( businessTrendsElement!= null && businessTrendsElement.dispose) {
        businessTrendsElement.dispose();
    }
  });
</script>

<style scoped>
div{
  margin-left: 2vw;
}
</style>