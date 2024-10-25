<template>
 <div> 

    <div ref="monthlyIndicators" style="width: 35vw; height: 35vh;"></div>
  </div>
 
</template>
  
  <script setup>
  import { ref, onMounted, onUnmounted, nextTick } from 'vue';
  import * as echarts from 'echarts';
//接受页面传参
  // const props=defineProps(['data'])
  //设置数据可变
  const month=ref(['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'])
  const data=ref([220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 234, 123])
 
  let  monthlyIndicatorsElement = null;
  const monthlyIndicators = ref(null);

// 绘制柱状图


  // monthlyIndicatorsElement.setOption({series:{
  //   data:data.value

// 初始化ECharts实例并设置配置项（这里以折线图为例，但可灵活替换）
  onMounted(async () => {
    await nextTick(); // 确保DOM已经渲染完成

   monthlyIndicatorsElement = echarts.init(monthlyIndicators.value);
   
  //  Object.defineProperty(document.getElementById('monthlyIndicators'),'clientWidth',{get:function(){return 500;}})
  //   Object.defineProperty(document.getElementById('monthlyIndicators'),'clientHeight',{get:function(){return 500;}})
  //   monthlyIndicatorsElement = echarts.init(document.getElementById('monthlyIndicators'))
   const option = {
    legend: {
      data: ['计划', '实际'],
      icon: 'circle', // 设置图例图标为圆形
      left: 'left', // 将图例定位到左侧
      top: 'top', // 将图例定位到顶部
    },
    grid: {
      top: '45', // 距离容器上边界的距离
      right: '10', // 距离容器右边界的距离
      bottom: '3', // 距离容器下边界的距离
      left: '10', // 距离容器左边界的距离
      containLabel: true, // 包含标签的绘图区域
    },
    xAxis: {
      type: 'category',
      data: month.value,
      axisTick: {
        alignWithLabel: true,
      },
      axisLine: {
        show: false, // 不显示横坐标轴线
      },
   
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
    },
    series: [
      {
        name: '实际',
        data: data.value,
        type: 'bar',
        stack: 'total', // 添加堆积效果
        barWidth: '30%', // 调整柱子宽度
        itemStyle: {
          borderRadius: [5, 5, 0, 0], // 只有顶部圆角
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            // 设置渐变色
            { offset: 0, color: '#bdd1f6' },
            { offset: 1, color: '#4282ff' },
          ]),
        },
      },
      {
        name: '计划',
        data: [320, 132, 101, 134, 90, 230, 210, 320, 132, 101, 134, 90],
        type: 'bar',
        stack: 'total', // 添加堆积效果
        barWidth: '30%', // 调整柱子宽度
        itemStyle: {
          borderRadius: [5, 5, 0, 0], // 只有顶部圆角
          color: '#ebf2ff', // 设置柱子颜色
        },
      },
    ],
  };
  monthlyIndicatorsElement.setOption(option);
  monthlyIndicatorsElement.resize()
  window.addEventListener('resize', () => {  // 窗口大小变化后，重绘图
    monthlyIndicatorsElement.resize()
  })

  });
  
  // 销毁ECharts实例
  onUnmounted(() => {
    if ( monthlyIndicatorsElement != null &&  monthlyIndicatorsElement.dispose) {
      window.removeEventListener('resize', monthlyIndicatorsElement.resize)
        monthlyIndicatorsElement.dispose();
    }
  });
  </script>
  
  <style scoped>
  /* 添加一些CSS样式来美化图表容器（可选） */
  div{
    color:aliceblue
  }
  </style>
  