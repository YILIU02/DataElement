<template>
    <div class="header">
        <div class="l-content">
          <el-dropdown >
                <img src="../assets/img/avater.jpg" class="user" />
            </el-dropdown>
            <span>{{ conster.team_name }}</span>
        </div>
        <div class="r-content">
          <el-menu 
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    background-color="#0c3c64"
    text-color="aliceblue">
            <el-menu-item v-for="item in menuList" :index="item.path" :key="item.path" @click="handleMenu(item)">
                <span>{{ item.label }}</span>
            </el-menu-item>
          </el-menu>
           

        </div>
    </div>
</template>

<script setup>

import conster from "@/conster"
import { useRouter } from "vue-router"
const menuList=conster.menuList
const router = useRouter()
const handleMenu = (item) => {
    router.push(item.path)
}
</script>

<style lang="less" scoped>
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7vh;
    width:80%;
    margin: auto;
    background-color: #04345c;
    opacity: 0.6;
    color: aliceblue;
    .l-content{
      display: flex;
    align-items: center;
    width: 50%;
    margin-left: 10%;
    .user{
        width: 70px;
        height: 50px;
        border-radius: 50%;
       
    }
    span{
      margin-left: 2%;
    }
}
.r-content{
  
  width: 20%;
  span{
    margin: 10px;
  }
}
}

</style>