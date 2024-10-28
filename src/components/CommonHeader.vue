<template>
    <div class="header">
        <div class="l-content">
          <el-dropdown >
                <img src="../assets/img/avater.jpg" class="user" />
                <template #dropdown>
                  <el-dropdown-menu>
                <el-dropdown-item @click="handleLoginOut">退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                  </template>
            </el-dropdown>
            <span @click="router.push('/')" style="cursor: pointer;">{{ conster.team_name }}</span>
        </div>
        <div class="r-content">
          <el-menu 
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    background-color="#0c3c64"
    text-color="aliceblue">
            <el-menu-item v-for="item in notChildren" :index="item.path" :key="item.path" @click="handleMenu(item)">
                <span>{{ item.label }}</span>
            </el-menu-item>
            <el-sub-menu v-for="item in hasChildren" :index="item.path" :key="item.path">
                <template #title>
                    <component :is="item.icon" class="icons"></component>
                    <span>{{ item.label }}</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item v-for="(subItem) in item.children" :index="subItem.path"
                        @click="handleMenu(subItem)" :key="subItem.path">
                        <span>{{ subItem.label }}</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
           

        </div>
    </div>
</template>

<script setup>

import conster from "@/conster"
import { computed } from "vue"
import { useRouter } from "vue-router"
import {useAllDataStore} from '@/stores'
// import api from '@/utils/api/course'
const store=useAllDataStore()
const menuList=computed(() => conster.menuList)
const notChildren = computed(() => menuList.value.filter(item => !item.children))
const hasChildren = computed(() => menuList.value.filter(item => item.children))
const router = useRouter()

const handleMenu = (item) => {
  if(item.name=='find'|item.name=='compare'){
    store.find=true
  }else{store.find=false
  }
  store.pathname=item.name
    router.push(item.path)
}
const handleLoginOut=() => {
  localStorage.removeItem('token')
  localStorage.removeItem('allData')
  location.reload()
}
</script>

<style lang="less" scoped>
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7vh;
    width:90%;
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