<template>
    <div class="head">
      <div class="user">
        <img src="../assets/img/avater.jpg">
        <p>admin</p>
      </div>
      <div class="int">
        <el-card  shadow="hover">
          <template #header>
            <h1>{{ conster.home_title }}</h1>
          </template>
            <div>
              <p id="info"></p>
            </div>
        </el-card>
    </div>
    </div>
  </template>
  
  <script setup>
import { onMounted } from 'vue'
import conster from '../conster'
onMounted(() => {
  document.getElementById('info').innerHTML=conster.home_info
})
  </script>
  
  <style lang="less" scoped>
  .head {
    .user {
      text-align: center;
      align-items: center;
      font-size: 2vw;
      color: white;
  
      img {
        width: 10vw;
        height: 10vw;
        border-radius: 50%;
        margin: 2vw;
      }
    }
    .int {
    width: 80%;
  margin: auto;
    opacity: 0.8;
  
}
  }
  </style>