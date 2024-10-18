<template>
    <div class="header">
        <div class="l-content">
          <el-dropdown >
                <img src="../assets/img/avater.jpg" class="user" />
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item >退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <span>人体数据结构组</span>
        </div>
        <div class="r-content">
        <span>首页</span>
        <span>数据大厅</span>
           

        </div>
    </div>
</template>

<script setup>

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
  
  width: 10%;
  span{
    margin: 10px;
  }
}
}

</style>