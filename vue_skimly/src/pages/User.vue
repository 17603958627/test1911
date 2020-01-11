<template>
  <div class="box">
    <header class="headerr">急速应用</header>
    <div class="content">
      <div class="login">
        <div class = "login-img">
          </div>
        <div class="login-name">
          <div v-if="flag">
            <a href="#">{{ username }}</a>
          </div>
          <div v-else>
            <router-link to="/login" tag="button" class="but">登录</router-link>
            <router-link to="/register" tag="button" class="but">注册</router-link>
          </div>
        </div>
        <router-link to= "updatas" tag = "div" >
          <van-icon name="arrow" />
        </router-link>
      </div>
      <div class="box">
        <van-collapse v-model="activeName" accordion>
          <van-collapse-item title="会员卡" value="展开" name="1">
            <p class="tit">Svip:  {{ tit }}</p>
          </van-collapse-item>
        </van-collapse>
      </div>
      <div class="booxx">
        <div class="stopp1">
            <p>我的订单</p>
          <van-grid>
            <van-grid-item icon="printer" text="待付款" to="/userorder?num=1" />
            <van-grid-item icon="underway" text="待发货" to="userorder?num=0"/>
            <van-grid-item icon="printer" text="待收货" to="userorder?num=2"/>
            <van-grid-item icon="more" text="待评价" to="userorder?num=3"/>
          </van-grid>
          <van-grid>
            <van-grid-item icon="service" text="售后" to="userorder?num=4"/>
          </van-grid>
        </div>
        <div class="stopp2">
            <p>我的工具</p>
          <van-grid>
            <van-grid-item icon="location" :to ="'/address?userid=' + userid" text="收获地址" />
            <van-grid-item icon="cart" text="购物车" to="/cart"/>
            <van-grid-item icon="volume" text="系统通知" />
            <van-grid-item icon="browsing-history" to="zuji" text="足迹" />
            <van-grid-item icon="like" text="收藏" />
          </van-grid>
        </div>
        <div class="stopp3">
            <p>会员中心</p>
          <van-grid>
            <van-grid-item icon="vip-card" text="会员卡" />
            <van-grid-item icon="bill" to = "/coupon" text="优惠卷" />
            <van-grid-item icon="award" text="积分" />
            <van-grid-item icon="gem" text="储值金" />
          </van-grid>
        </div>
        <div class="stopp4">
            <p>营销工具</p>
          <van-grid>
            <van-grid-item icon="friends" text="我的拼团" />
            <van-grid-item icon="medel" text="中奖记录" />
            <van-grid-item icon="manager" to="/tuanzhang" text="团长中心" />
          </van-grid>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import { Collapse, CollapseItem, Icon, Grid, GridItem } from 'vant'
Vue.use(Collapse).use(CollapseItem)
Vue.use(Icon)
Vue.use(Grid).use(GridItem)
export default {
  data () {
    return {
      userid: '',
      flag: false,
      username: '',
      activeName: '1',
      tit: '',
      fileList: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        { url: 'https://cloud-image', isImage: true }
      ]
    }
  },
  mentods: {
    map () {
      // axios.post('/routes/banner/add').then(res => {
      //   console.log(res)
      // })
      // console.log()
    }
  },
  mounted () {
    let userid = localStorage.getItem('userid')
    console.log(userid)
    axios.get('/api/users/getInfo?userid=' + userid, {
      params: {
        // userid: localStorage.getItem('userid'),
        token: localStorage.getItem('token')
      }
    }).then(res => {
      if (res.data.code === '10119') {
        this.flag = false
        // this.$router.push('login')
      } else {
        this.flag = true
        this.username = res.data.data.username
        this.tit = res.data.data.tel
      }
    })
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
.content{
  width: 100%;
  height:100%;
  p.tit {
    color:burlywood;
  }
  .booxx {
    // background: #fff;
    .stopp1{
      width: 100%;
      margin: 0.1rem 0 0.1rem 0;
      background: #fff;
      p {
        font:0.14rem/0.5rem "";
        color: #000;
        text-indent: 0.2rem;
      }
    }
    .stopp2{
      width: 100%;
      margin: 0.1rem 0 0.1rem 0;
      background: #fff;
      p {
        font:0.14rem/0.5rem "";
        color: #000;
        text-indent: 0.2rem;
      }
    }
    .stopp3{
      width: 100%;
      margin: 0.1rem 0 0.1rem 0;
      background: #fff;
      p {
        font:0.14rem/0.5rem "";
        color: #000;
        text-indent: 0.2rem;
      }
    }
    .stopp4{
      width: 100%;
      margin: 0.1rem 0 0.1rem 0;
      background: #fff;
      p {
        font:0.14rem/0.5rem "";
        color: #000;
        text-indent: 0.2rem;
      }
    }
  }
  .login{
  width: 100%;
  height:15%;
  .but{
    border: none;
    background:none;
    color:green;
    font: 0.14/0.45rem "";
    margin: 0 0.1rem;
  }
  .van-icon.van-icon-arrow {
    float: right;
    padding: 0.3rem 0.1rem 0;
    width: 0.3rem;
    height: 100%;
  }
  .login-img{
    width: 0.6rem;
    height: 0.6rem;
    border:0.01rem solid #000;
    float: left;
    border-radius: 50%;
    margin: 0.1rem 0.1rem;
    overflow: hidden;
    background: burlywood;
  }
  .login-name {
      width: 2rem;
      height: 0.3rem;
      float: left;
      padding: 0.3rem 0.1rem 0;
    a{
      display: block;
      width: 2rem;
      height: 0.3rem;
    }
  }
  }
}
</style>
