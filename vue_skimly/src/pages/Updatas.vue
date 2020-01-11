<template>
  <div class="box">
    <Header>
      <div slot="center">修改</div>
    </Header>
    <div class="content">
      <div class = "nameinp">
        <input type="text" name="text" placeholder="" v-model="username">
        <p>昵  称</p>
      </div>
      <div class = "telinp">
        <input type="text" name="tel" placeholder="" v-model="tel">
        <p>手机号</p>
      </div>
      <!-- <div class = "passinp">
        <input type="password" name="passeord" placeholder="" v-model="password">
        <p>密码</p>
      </div> -->
      <div class = "sexinp">
        <span>性  别</span>
        <input type="radio" name="sex" value="1" :checked= "sex === 1 ? true : true"> 男
        <input type="radio" name="sex" value="0" :checked= "sex === 0 ? true : false"> 女
      </div>
      <div class="happy">
        <span>生  日</span>
        <!-- <input type="text" name="boddy" id="" placeholder=""> -->
        <div class="boddy">
          <input type="text" v-model="birthday" placeholder="年/月/日">
        </div>
        <p>注: 生日设置后不能修改</p>
        <div class="butt">
          <button class="but1" @click="but1">保存</button>
          <button class="but2" @click="but2">退出登录</button>
        </div>
      </div>
      <footer><p>请完善个人信息，以便我们更好的服务</p></footer>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import Header from '../layouts/Header'
import { Popup, Toast, Dialog } from 'vant'
Vue.use(Dialog)
Vue.use(Toast)
Vue.use(Popup)
export default {
  components: {
    Header
  },
  data () {
    return {
      value: '',
      username: '',
      password: '',
      tel: '',
      sex: '1',
      birthday: ''
    }
  },
  methods: {
    but1 () {
      Toast.success('修改成功')
      let userid = localStorage.getItem('userid')
      axios.post('/api/users/update', {
        userid: userid,
        username: this.username,
        sex: this.sex,
        tel: this.tel,
        birthday: this.birthday
      }).then(res => {
        console.log(res.data.code)
        if (res.data.code === '11009') {
          console.log(res)
          Toast.success('修改成功')
          this.$router.back()
        } else {
          Toast.fail('修改失败')
        }
      })
    },
    but2 () {
      Dialog.confirm({
        title: '确认退出'
      }).then(() => {
        // on confirm
        localStorage.removeItem('token')
        this.$router.back()
      }).catch(() => {
        // on cancel
        // this.$router.back()
      })
    }
  },
  mounted () {
    axios.get('/api/users/getInfo', {
      params: {
        userid: localStorage.getItem('userid'),
        token: localStorage.getItem('token')
      }
    }).then(res => {
      if (res.data.code === 10119) {
        Toast('你还未登录')
        this.$router.push('/login')
      } else {
        console.log(res.data)
        this.username = res.data.data.username
        this.sex = res.data.data.sex
        this.password = res.data.data.password
        this.tel = res.data.data.tel
        this.value = res.data.data.value
        this.birthday = res.data.data.birthday
      }
    })
  }
}
</script>>

<style lang="scss" scoped>
.box {
  background: #fff;
  footer {
    width: 100%;
    p {
      height: 0.4rem;
      font: 0.14rem/0.4rem "";
      text-align: center;
      color: #ccc;
      display: block;
      line-height: 0.5rem;
      }
      span.error{
        color: red;
      }
  }
}
.content {
  width: 100%;
  height: 100%;
  .nameinp {
    width: 100%;
    height: 0.5rem;
    position: relative;
    p {
      position: absolute;
      font: 0.14rem/0.5rem "";
      top:0;
      left: 0;
      background: #fff;
      width: 15%;
      border-bottom: 0.01rem #ccc solid;
      text-indent: 0.1rem;
      height: 100%;
      display: block;
      line-height: 0.5rem;
    }
    input {
      width: 85%;
      height: 100%;
      border: none;
      background: #fff;
      display: block;
      border-bottom: 0.01rem #ccc solid;
      text-indent: 0.1rem;
      float: right;
    }
  }
  .passinp {
    width: 100%;
    height: 0.5rem;
    position: relative;
    p {
      position: absolute;
      font: 0.14rem/0.5rem "";
      top:0;
      left: 0;
      background: #fff;
      width: 15%;
      border-bottom: 0.01rem #ccc solid;
      text-indent: 0.1rem;
      display: block;
      line-height: 0.5rem;
    }
    input {
      width: 85%;
      height: 100%;
      border: none;
      background: #fff;
      display: block;
      border-bottom: 0.01rem #ccc solid;
      text-indent: 0.1rem;
      float: right;
    }
  }
  .telinp {
    width: 100%;
    height: 0.5rem;
    position: relative;
    p {
      position: absolute;
      font: 0.14rem/0.49rem "";
      top:0;
      left: 0;
      background: #fff;
      width: 15%;
      border-bottom: 0.01rem #ccc solid;
      text-indent: 0.1rem;
      display: block;
      line-height: 0.5rem;
    }
    input {
      width: 85%;
      height: 100%;
      border: none;
      display: block;
      background: #fff;
      border-bottom: 0.01rem #ccc solid;
      text-indent: 0.1rem;
      float: right;
    }
    span {font: 0.14rem/0.5rem "";display: block;line-height: 0.5rem;}
  }
  .sexinp {
    width: 100%;
    height: 0.5rem;
    border-bottom: 0.01rem #ccc solid;
    background: #fff;
    text-indent: 0.1rem;
    span {
      font: 0.14rem/0.5rem "";
      line-height: 0.5rem;
    }
    input {
      margin: 0 0 0 0.2rem;
      line-height: 0.5rem;
      font: 0.14rem/0.5rem "";
    }
  }
  .happy {
    width: 100%;
    height: 0.5rem;
    border-bottom: 0.01rem #ccc solid;
    background: #fff;
    text-indent: 0.1rem;
    position: relative;
    div.boddy {
      position: absolute;
      left: 0.6rem;
      width: 100%;
      height:100%;
      font: 0.14rem/0.5rem "";
      top: 0;
    }
    input {
      width: 100%;
      height: 100%;
      border: none;
      display: block;
      background: #fff;
      text-indent: 0.1rem;
      position: absolute;
      left: 0;
      top: 0;
    }
    span {
      font: 0.14rem/0.5rem "";
      display: block;
      line-height: 0.5rem;
    }
    p {
      position: absolute;
      font: 0.12rem/0.12rem "";
      left: 0.6rem;
      top: 0.32rem;
      color: burlywood;
    }
  }
  .butt {
    width: 100%;
    height: 0.4rem;
    position: fixed;
    bottom: 0;
    display: flex;
    .but1 {
      flex: 1;
      border: none;
      background: #ff8114;
    }
    .but2 {
      flex: 1;
      border: none;
    }
  }
}
</style>
