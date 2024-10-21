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
              <p>{{ conster.home_info }}</p>
            </div>
        </el-card>
    </div>
    </div>
  </template>
  
  <script setup>
import conster from '../conster'
  </script>
  
  <style lang="less" scoped>
  .head {
    .user {
      text-align: center;
      align-items: center;
      margin-bottom: 20px;
      font-size: 30px;
      color: white;
  
      img {
        width: 180px;
        height: 150px;
        border-radius: 50%;
        margin: 30px;
      }
    }
    .int {
    width: 80%;
    margin: 10px auto;
    opacity: 0.8;
  
}
  }
  </style>