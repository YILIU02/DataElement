<template>
 <div> 

    <div ref="monthlyIndicators" style="width: 35vw; height: 35vh;"></div>
  </div>
 
</template>
  
  <script setup>
  import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue';
  import * as echarts from 'echarts';
import { useAllDataStore } from '@/stores';
//接受页面传参
 const store=useAllDataStore()
 const result=ref(store.result)
  //设置数据可变
  const year=ref(['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'])
  const data=ref([220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 234, 123])

  watch(() => store.result, (newValue) => {
    if(store.result){
    result.value=newValue
    year.value=result.value.map((item) => {
  return item.province||item.year
})

data.value=result.value.map((item) => {
  let gdp=item.gdp.replace(/[^\d.]/g,'')
  return gdp
})
console.log(monthlyIndicatorsElement);

    monthlyIndicatorsElement.setOption({series:{
         data:data.value
        },
        xAxis: {
          data:year.value
        }
    })}})
  let  monthlyIndicatorsElement = null;
  const monthlyIndicators = ref(null);

// 绘制柱状图


  // monthlyIndicatorsElement.setOption({series:{
  //   data:data.value

// 初始化ECharts实例并设置配置项（这里以折线图为例，但可灵活替换）
  onMounted(async () => {
    if(store.result){
year.value=result.value.map((item) => {
  return item.province||item.year
})

data.value=result.value.map((item) => {
  let gdp=item.gdp.replace(/[^\d.]/g,'')
  return gdp
})}

    await nextTick(); // 确保DOM已经渲染完成
   monthlyIndicatorsElement = echarts.init(monthlyIndicators.value);
   
  //  Object.defineProperty(document.getElementById('monthlyIndicators'),'clientWidth',{get:function(){return 500;}})
  //   Object.defineProperty(document.getElementById('monthlyIndicators'),'clientHeight',{get:function(){return 500;}})
  //   monthlyIndicatorsElement = echarts.init(document.getElementById('monthlyIndicators'))
   const option = {
    legend: {
      data: [ 'GDP'],
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
      data: year.value,
      axisTick: {
        alignWithLabel: true,
      },
      axisLine: {
        show: false, // 不显示横坐标轴线

      },
      axisLabel: {
              interval: 0,
              rotate: 40,
            },
   
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
    },
    series: [
      {
        name: 'GDP',
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
    ],
  };
  monthlyIndicatorsElement.setOption(option);
  monthlyIndicatorsElement.resize()

  });
  
  // 销毁ECharts实例
  onUnmounted(() => {
    if ( monthlyIndicatorsElement != null &&  monthlyIndicatorsElement.dispose) {
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
  