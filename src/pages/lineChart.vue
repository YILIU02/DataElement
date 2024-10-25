<template>
    <div ref="chartDom" style="width: 35vw; height: 35vh;"></div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted, nextTick } from 'vue';
  import * as echarts from 'echarts';
  
  // 创建一个响应式引用来保存DOM元素
  const chartDom = ref(null);
  let chartInstance = null;
  const name=ref(['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月'])
const data=ref([620, 132, 701, 234, 890, 430, 120,300])
  // 初始化ECharts实例并设置配置项（这里以折线图为例，但可灵活替换）
  onMounted(async () => {
    await nextTick(); // 确保DOM已经渲染完成
    chartInstance = echarts.init(chartDom.value);
    const option = {
      // 这里是ECharts的配置项，可以根据需要绘制不同类型的图表
      title: {
        text: 'ECharts 示例图表'
      },
      tooltip: {},
      xAxis: {
        data: name.value
      },
      yAxis: {},
      series: [{
        name: '数据系列',
        type: 'line', // 这里可以是'line'、'bar'、'pie'等，根据图表类型选择
        data: data.value
      }]
    };
    chartInstance.setOption(option);
     chartInstance.resize()
  window.addEventListener('resize', () => {  // 窗口大小变化后，重绘图
     chartInstance.resize()
  })
  });
  
  // 销毁ECharts实例
  onUnmounted(() => {
    if (chartInstance != null && chartInstance.dispose) {
      window.removeEventListener('resize', chartInstance.resize)
      chartInstance.dispose();
    }
  });
  </script>
  
  <style scoped>
  /* 添加一些CSS样式来美化图表容器（可选） */
div{
  margin-left: 2vw;
}
  </style>
  