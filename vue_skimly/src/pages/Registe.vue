<template>
  <div class="box">
    <header class="headerr">注册</header>
    <div class="content">
      <div class="boox">
        <div class="usernamebox">
          <input type="username" name="username" placeholder="请输入用户名" v-model="username">
          <p v-html="usernametip" class="p1"></p>
        </div>
        <div class="passwordbox">
          <input type="password" name="password" placeholder="请输入密码" v-model="password">
          <p v-html="passwordtip" class="p2"></p>
        </div>
        <div class="telbox">
          <input type="text" name="tel" placeholder="请输入手机号" v-model="tel">
          <p v-html="teltip" class="p3"></p>
        </div>
        <div class="yz">
          <input type="text" name="code" placeholder="请输入验证码" class="clo" v-model="code"><p v-html="texttip" class="p4"></p><button class="span" @click="yzm" :disabled="codeflag">{{ msg }}</button>
        </div>
        <button @click="register" :disabled="!registerflag" class="register">注册</button>
        <router-link to="login" tag="a" style="margin-left:2.5rem">已注册 去登陆</router-link>
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
      username: '',
      password: '',
      tel: '',
      code: '',
      msg: '点击发送验证码',
      codeflag: false,
      time: 5,
      adminCode: ''
    }
  },
  computed: {
    usernametip () {
      if (this.username === '') {
        return ''
      } else if (this.username.length < 3) {
        return '<span class="error" style="color:red;">长度不能少于3位</span>'
      } else {
        return '用户名正确'
      }
    },
    passwordtip () {
      if (this.password === '') {
        return ''
      } else if (this.password.length < 6) {
        return '<span class="error" style="color:red;">长度不能少于6位</span>'
      } else {
        return '密码格式正确'
      }
    },
    teltip () {
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/
      if (this.tel === '') {
        return ''
      } else if (!myreg.test(this.tel)) {
        return '<span class="error" style="color:red;">手机号无效</span>'
      } else {
        return '手机号码正确'
      }
    },
    texttip () {
      if (this.code === '') {
        return ''
      } else if (this.code * 1 !== this.adminCode && this.code !== '') {
        return ''
      } else {
        return '<a href="#" class="success">验证码正确</a>'
      }
    },
    registerflag () {
      if (this.usernametip === '用户名正确' && this.passwordtip === '密码格式正确' && this.teltip === '手机号码正确' && this.texttip === '<a href="#" class="success">验证码正确</a>') {
        console.log('ok')
        return true
      } else {
        console.log('no')
        return false
      }
    },
    codema () {
      if (this.time !== '5') {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    yzm () {
      if (this.teltip === '手机号码正确') {
        console.log('发送验证码')
        this.codeflag = true
        this.msg = this.time + '后重新发送'
        var time = setInterval(() => {
          this.time--
          if (this.time === 0) {
            this.time = 5
            this.msg = '点击发送验证码'
            this.codeflag = false
            clearInterval(time)
          } else {
            this.msg = this.time + ' 后重新发送'
          }
        }, 1000)
        this.sendTelCode()
      } else {
        Toast('手机号不正确')
      }
    },
    sendTelCode () {
      axios.get('/api/users/sendCode?tel=' + this.tel).then(res => {
        // console.log(res.data)
        if (res.data.code === '10000') {
          Toast('该用户已注册,请直接登录')
        } else if (res.data.code === '10005') {
          Toast('发送验证码失败')
        } else {
          this.adminCode = res.data.data
          console.log(this.adminCode)
          // console.log(121312)
        }
      })
    },
    register () {
      console.log('你点击了注册按钮')
      axios.post('/api/users/register', {
        username: this.username,
        tel: this.tel,
        password: this.password
      }).then(res => {
        if (res.data.code === '10000') {
          Toast('该用户已注册，请直接登录')
          this.$router.push('/login')
        } else if (res.data.code === '10003') {
          Toast('注册失败，请重新注册')
        } else {
          this.$router.back() // 注册成功，返回上一页
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
    position: relative;
    .usernamebox, .passwordbox, .telbox{
      width: 100%;
      height: 0.40rem;
      position: relative;
      .p1, .p2, .p3{
        position: absolute;
        right: 0;
        top: 0;
        font: 0.12rem/0.4rem "";
        color: green;
        .error{
          color: red;
        }
      }
    }
    input{
      display: block;
      border:none;
      width: 100%;
      height: 0.40rem;
      border-bottom: 1px solid #ccc;
      margin: 0.1rem 0;
      background: #fff;
      text-indent: 0.1rem;
    }
    .yz{
      display: flex;
      input.clo {
      width: 50%;
      height: 0.4rem;
      display:inline-block;
      flex: 1;
      position: relative;
      }
    .p4 {
      position: absolute;
      right:1.1rem;
      top:1.55rem;
      color: green;
    }
    .span {
      float: right;
      display: block;
      text-align: center;
      font: 0.14rem/0.4rem "";
      background: #3091f2;
      // height: 70%;
      width: 30%;
      color: #fff;
      border-radius: 0.03rem;
      margin-top: 0.1rem;
      height:0.4rem;
      }
    }
    button {
      width: 100%;
      height: 0.45rem;
      margin: auto;
      display: block;
      border: none;
      background: #3091f2;
      font: 0.14rem/0.45rem "";
      color: #fff;
      border-radius: 0.07rem;
      }
  }
</style>
