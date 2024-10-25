<template>
    <div ref="salesRanking" style="width: 35vw; height:35vh;"></div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted, nextTick } from 'vue';
  import * as echarts from 'echarts';
  
  // 创建一个响应式引用来保存DOM元素
  const salesRanking = ref(null);
  let salesRankingElement= null;
  const name=ref(['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月'])
const data=ref([620, 132, 701, 234, 890, 430, 120,300])
  // 初始化ECharts实例并设置配置项（这里以折线图为例，但可灵活替换）
  onMounted(async () => {
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
      data: name.value, // 示例数据
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
        formatter: function (value, index) {
          // 根据index或value来决定显示哪个排名的图标
          const rankIcons = {
            2: '{iconStyle|🥇}',
            1: '{iconStyle|🥈}',
            0: '{iconStyle|🥉}',
          };
          return `${rankIcons[index]} {nameStyle|${value}}`;
        },
      },
    },
    series: [
      {
        name: '销售额',
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
          formatter: '{c}万', // 自定义显示的内容，{c}是指当前数据点的值
        },
      },
    ],
  };
  salesRankingElement.setOption(option);
  salesRankingElement.resize()
  window.addEventListener('resize', () => {  // 窗口大小变化后，重绘图
    salesRankingElement.resize()
  })
  });
  
  // 销毁ECharts实例
  onUnmounted(() => {
    if (salesRankingElement!= null && salesRankingElement.dispose) {
      window.removeEventListener('resize', salesRankingElement.resize)
        salesRankingElement.dispose();
    }
    
  });
  </script>
  
  <style scoped>
  /* 添加一些CSS样式来美化图表容器（可选） */
  div{
  margin-left: 4vw;
}
  </style>
  