<template>
    <div class="common-layout">    
    <el-container class="lay-container">
         <el-container>
            <el-header class="el-header">
                <common-header/>
            </el-header>
         <router-view></router-view>
         </el-container>
    </el-container>
    </div>
 </template>
 
 <script setup>
import CommonHeader from '../components/CommonHeader.vue';
 </script>
 
 <style lang="less" scoped>
 .common-layout,.lay-container{
     height: 100vh;

    background-image: url('../assets/img/head-bg.jpg');
    background-size: cover;
 }


 </style>