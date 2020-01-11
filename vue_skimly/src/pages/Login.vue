<template>
  <div class="box">
    <header class="headerr">登录</header>
    <div class="content">
      <div class="boox">
        <div class="logintel">
          <input type="text" name="tel" placeholder="请输入手机号" v-model="tel">
          <p v-html="logintel" class="pp1"></p>
        </div>
        <div class="loginpassword">
          <input type="password" name="password" placeholder="请输入密码" v-model="password">
          <p v-html="loginpassword" class="pp2"></p>
        </div>
        <button @click="login" :disabled="!flag">登录</button>
        <router-link to="registe" tag="a" style="margin-left:2.5rem">还未注册 去注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import { Toast } from 'vant'
Vue.use(Toast)
export default {
  data () {
    return {
      tel: '',
      password: ''
    }
  },
  computed: {
    logintel () {
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/
      if (this.tel === '') {
        return ''
      } else if (!myreg.test(this.tel)) {
        return '<span class="error" style="color:red;">手机号无效</span>'
      } else {
        return '手机号正确'
      }
    },
    loginpassword () {
      if (this.password === '') {
        return ''
      } else if (this.password.length < 6) {
        return '<span class="error" style="color:red;">密码无效</span>'
      } else {
        return '格式正确'
      }
    },
    flag () {
      if (this.logintel === '手机号正确' && this.loginpassword === '格式正确') {
        console.log('为真')
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    login () {
      console.log('你点击了登录')
      axios.post('/api/users/login', {
        tel: this.tel,
        password: this.password
      }).then(res => {
        if (res.data.code === '10086') {
          Toast('该用户未注册，请先注册')
        } else if (res.data.code === '10100') {
          Toast('密码错误')
          this.password = ''
        } else {
          // 登陆成功，存储信息，返回上一页
          localStorage.setItem('userid', res.data.data.userid)
          localStorage.setItem('username', res.data.data.username)
          localStorage.setItem('token', res.data.data.token)
          this.$router.push('/user')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/lib/reset.scss';
header.headerr{
  @include flexbox();
  @include flex-direction(column);
  @include justify-content();
  @include align-items();
  @include rect(100%, 0.44rem);
  @include background-color(#ff8114);
  @include line-height(0.44rem);
  @include color(#fff);
  font: 0.16rem/0.44rem "";
}
  .boox{
    width:90%;
    margin: auto;
    input{
      display: block;
      border:none;
      width: 100%;
      height: 0.40rem;
      border-bottom: 1px solid #ccc;
      margin: 0.1rem 0;
      text-indent: 0.1rem;
    }
    .logintel {
      height: 0.40rem;
      width: 100%;
      position: relative;
    }
    .loginpassword {
      height: 0.40rem;
      width: 100%;
      position: relative;
    }
    .pp1, .pp2{
      position: absolute;
      right: 0;
      top: 0;
      font: 0.12rem/0.4rem "";
      color: green;
      .error{
        color: red;
      }
    }
    button {
      width: 100%;
      height: 0.45rem;
      margin:0.2rem auto;
      display: block;
      border: none;
      background: #3091f2;
      font: 0.14rem/0.45rem "";
      color: #fff;
      border-radius: 0.07rem;
      font: 0.14rem/0.45rem "";
      }
  }
</style>
