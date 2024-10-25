<template>
    <div ref="projectSigningOverview" style="width: 35vw; height: 35vh;"></div>
</template>
  
  <script setup>
  import { ref, onMounted, onUnmounted, nextTick } from 'vue';
  import * as echarts from 'echarts';
  
  // 创建一个响应式引用来保存DOM元素
  const projectSigningOverview = ref(null);
  let projectSigningOverviewElement= null;
  
  // 初始化ECharts实例并设置配置项（这里以折线图为例，但可灵活替换）
  onMounted(async () => {
    await nextTick(); // 确保DOM已经渲染完成
    const projectSigningOverviewElement = echarts.init(projectSigningOverview.value);
  const option = {
    legend: {
      orient: 'vertical',
      right: 9,
      align: 'left',
      top: 'center',
      textStyle: {
        rich: {
          name: {
            color: '#929292',
          },
          value: {
            color: '#000',
            fontWeight: 'bold',
            fontSize: 16, // 根据需要调整字体大小
          },
        },
      },
      data: [
        {
          name: '已签约 {value|80}{name| 个/5800万}',
          textStyle: { rich: { value: {}, name: {} } },
        },
        {
          name: '未签约 {value|18}{name| 个/5800万}',
          textStyle: { rich: { value: {}, name: {} } },
        },
        {
          name: '跟进中 {value|24}{name| 个/5800万}',
          textStyle: { rich: { value: {}, name: {} } },
        },
      ],
      icon: 'circle', // 设置图例图标为圆形
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['50%', '65%'],
        center: ['22%', '50%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: false,
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 80, name: '已签约 {value|80}{name| 个/5800万}' }, // 已签约
          { value: 18, name: '未签约 {value|18}{name| 个/5800万}' }, // 未签约
          { value: 24, name: '跟进中 {value|24}{name| 个/5800万}' }, // 跟进中
        ],
        itemStyle: {
          borderRadius: 0,
          borderColor: '#fff',
          borderWidth: 0,
        },
      },
    ],
    graphic: [
      {
        type: 'text',
        left: '65%', // 将文本水平居中
        top: '19%', // 根据实际情况调整，确保文本显示在legend上方
        style: {
          // 使用富文本格式
          rich: {
            a: {
              // 为“80”设置的样式
              fontSize: 16, // 放大字体大小
              fontWeight: 'bold', // 加粗
              color: '#000', // 字体颜色
            },
            b: {
              // 为“个/5800万”设置的样式
              fontSize: 14, // 字体大小
              color: '#929292',
            },
          },
          text: '项目总数 {a|80} {b|个/5800万}', // 显示的文本内容，使用上面定义的样式标签
          textAlign: 'center',
          fill: '#000', // 默认文本颜色，这里可能不会生效因为已经在rich中指定了颜色
        },
      },
      {
        type: 'text',
        left: '18%',
        top: '40%',
        style: {
          text: '72%',
          textAlign: 'center',
          fill: '#000',
          fontSize: 20,
        },
      },
      {
        type: 'text',
        left: '18%',
        top: '55%',
        z: 100,
        style: {
          text: '转化率',
          textAlign: 'center',
          fill: '#000',
          fontSize: 14,
        },
      },
    ],
  };
  projectSigningOverviewElement.setOption(option);
  projectSigningOverviewElement.resize()
  window.addEventListener('resize', () => {  // 窗口大小变化后，重绘图
    projectSigningOverviewElement.resize()
  })
  });
  
  // 销毁ECharts实例
  onUnmounted(() => {
    if (projectSigningOverviewElement!= null && projectSigningOverviewElement.dispose) {
      window.removeEventListener('resize', projectSigningOverviewElement.resize)
        projectSigningOverviewElement.dispose();
    }
  });
  </script>
  
  <style scoped>
  /* 添加一些CSS样式来美化图表容器（可选） */
  div{
  margin-left: 4vw;
}
  </style>
  