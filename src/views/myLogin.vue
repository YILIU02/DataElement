<template>
    <div class="body-login">
        <el-form :model="loginForm" class="login-container">
            <h1>欢迎登录 </h1>
            <el-form-item>
                <el-input type="input" placeholder="请输入账号" v-model="loginForm.username"></el-input>
                <el-input type="password" placeholder="请输入密码" v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type='primary' @click="handleLogin()">登录</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>

<script setup>
import { ElMessage } from "element-plus";
import { reactive } from "vue"
import { useRouter } from "vue-router"
// import api from '@/utils/api/course'
const router = useRouter()
const loginForm = reactive({
    username: '',
    password: '',
});
const handleLogin=() => {
    // if(loginForm.username&&loginForm.password){
    //     api.Login(loginForm).then((data) => {
    //         localStorage.setItem('token',data.token)
    //     })
    if(loginForm.username&&loginForm.password){
    localStorage.setItem('token',1)
        router.push('/')
        ElMessage({
            message: '成功登录',
            type: 'success',
        })
    }else{
        ElMessage({
            message: '账户密码不能为空',
            type: 'warning',
        })
    }

}


</script>

<style lang="less" scoped>
.body-login {
    width: 100%;
    height: 99.2vh;
    background-image: url('../assets/img/login.jpg');
    background-size: 100% 100%;
    overflow: hidden;
}

.login-container {
    width: 30vw;
    background-color: #fff;
    border: 0.1vw solid #eaeaea;
    border-radius: 0.5vw;
    padding: 2.2vh 2.2vh 1vh 2.2vh;
    box-shadow: 0 0 2vh hsla(0, 0%, 79%, 0.849);
    margin: 25vh auto;
    opacity: 0.8;
.el-input{
    height: 5vh;
    font-size: 2vh;
    margin: 0.8vh;
}
.el-button{
    height: 5vh;
    width: 10vh;
    font-size: 2vh;
}
span{
    font-size: 1vh;
    color: #cacaca;
    margin-left: 40%;
}
    h1 {
        text-align: center;
        margin-bottom: 1vh;
        color: #505450;
    }

    :deep(.el-form-item__content) {
        justify-content: center;
    }
}
</style>