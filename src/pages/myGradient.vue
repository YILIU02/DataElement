<template>
    <div ref="businessTrends" style="width: 600px; height: 35vh;"></div>
</template>

<script setup>
import { onMounted, ref,onUnmounted, nextTick} from "vue";
import * as echarts from 'echarts';
const businessTrends = ref(null);
let  businessTrendsElement = null;
const name=ref(['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月'])
const data=ref([620, 132, 701, 234, 890, 430, 120,300])
// 绘制折线图
onMounted(async () => {
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
      data: name.value, // 示例数据
      axisLine: {
        show: false, // 不显示横坐标轴线
      },
      axisTick: {
        show: false, // 不显示刻度线
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
        name: '销售额',
        type: 'line',
        data: data.value, // 示例数据，模拟起伏更大
        smooth: true, // 折线平滑
        lineStyle: {
          width: 2,
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
  window.addEventListener('resize', () => {  // 窗口大小变化后，重绘图
     businessTrendsElement.resize()
  })
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
  margin-left: 4vw;
}
</style>