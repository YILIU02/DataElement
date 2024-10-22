<template>
  <div class="data-flow-background">
    <div
      v-for="item in flowItems"
      :key="item.id"
      class="data-item"
      :style="{
        top: item.top + 'px',
        left: item.left + 'px',
        animationDuration: item.duration + 's',
        animationDelay: item.delay + 's'
      }"
    >
   <span>{{ item.data }}</span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'DataFlowBackground',
  setup() {
    const flowItems = ref([]);

    const generateFlowItems = () => {
      const numberOfItems = 50; // 根据需要调整数据点的数量
      const dataOptions = ['1', '0']; // 数据选项
      for (let i = 0; i < numberOfItems; i++) {
        flowItems.value.push({
          id: i,
          data: dataOptions[Math.floor(Math.random() * dataOptions.length)], // 随机数据
          top: -100, // 初始位置在屏幕上方外
          left:Math.random()* 100 * window.innerWidth / 100, // 随机水平位置
          duration: 3, // 随机动画时长
          delay: Math.random() * 5 // 随机动画延迟
        });
      }
    };

    onMounted(() => {
      generateFlowItems();
    });

    return {
      flowItems
    };
  }
};
</script>

<style lang="less" scoped>
.data-flow-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000; /* 背景颜色 */
  overflow: hidden;
  z-index: -1; /* 如果需要将背景置于内容之下 */
}

.data-item {
  position: absolute;
  font-size: 2rem; /* 数据字体大小 */
  color: aliceblue; /* 数据颜色 */
  white-space: nowrap;
  opacity: 0.8;
  animation: flow linear infinite;
  span{
    opacity: 0.5;
  }
}

@keyframes flow {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100vh);
  }
}
</style>

<script>

</script>

<style scoped>
#app{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
