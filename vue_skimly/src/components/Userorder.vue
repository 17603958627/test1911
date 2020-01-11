<template>
<div class="box">
  <Header>
       <!-- <div slot="left"></div> -->
      <div slot="center">订单管理</div>
      <!-- <div slot="left"></div> -->
    </Header>
    <header class="order-header">
      <div :class="num===0 ? 'active' : ''" @click="order0()">全部</div>
      <div :class="num===1 ? 'active' : ''" @click="order1()">待付款</div>
      <div :class="num===2 ? 'active' : ''" @click="order2()">待收货</div>
      <div :class="num===3 ? 'active' : ''" @click="order3()">待评价</div>
      <div :class="num===4 ? 'active' : ''" @click="order4()">售后</div>
    </header>
    <div class="content">
      <div class="order-search">
        <input type="text" placeholder="搜索全部订购单">
        <button>搜索</button>
      </div>
      <div class="nothingorder" v-if="!flag">
        <img src="https://img.alicdn.com/tfs/TB1vJ_.vTqWBKNjSZFxXXcpLpXa-330-330.png" alt="没有了">
        <p>您还没有相关订单</p>
        <span>可以去看看哪些想买的</span>
        <router-link to="/home" tag="button">
        随便逛逛
      </router-link>
        <!-- {{orderlist}} -->
      </div>
      <div class="orderlist" v-else>
        <div class="listitem" v-for="item of orderlist" :key="item.orderid">
          <div class="list-top">
            <div>
              <img src="http://gw.alicdn.com/tfs/TB1LmH7SXXXXXXYXFXXXXXXXXXX-63-63.png_50x50_.webp" alt="店铺名">
              <span>店铺名</span>
            </div>
            <p style="color:#f55000">{{item.status==0?'待付款':item.status==1?'待收货':item.status==2?'待评价':item.status==3?'已完成':''}}</p>
          </div>
          <!-- <div class="pro"> -->
          <div class="list-pro" v-for="it of item.list" :key="it.proid" @click="goDetail(it.proid)">
            <img :src="it.proimg" alt="">
            <div class="itempro">
              <p>{{it.proname}}</p>
              <span>商品规格</span>
            </div>
            <div class="itemtotal">
              <!-- <p>￥{{it.price.toFixed(2)}}</p>
              <span>X {{it.num}}</span> -->
            </div>
          <!-- </div> -->
          </div>
          <div class="list-total">
            <span>共{{item.num}}件商品</span>
            <p>合计￥{{item.price}}元</p>
          </div>
          <div class="list-server">
            <p @click="delOrder(item.orderid)">删除订单</p>
            <p v-if="item.status!=1" @click="goShouhuo()">订单详情</p>
            <p v-else-if="item.status==1" @click="goShouhuo()">查看物流</p>
            <p v-if="item.status==0" @click="goPay()">去付款</p>
            <p v-else-if="item.status==1" @click="confirm()">确认收货</p>
            <p v-else-if="item.status==2" @click="goEvaluate()">评价</p>
            <p v-else-if="item.status==3" @click="service()">联系客服</p>
          </div>
        </div>
      </div>
    </div>
</div>
</template>
<style lang="scss" scoped>
@import '../assets/lib/reset.scss';
.order-header {
   @include rect(100%, 0.44rem);
      @include background-color(#fff);
      @include flexbox();
      @include color(#333);
      @include justify-content(space-between);
      @include align-items();
      @include padding(0 10px);
      // font-size: 17px;
      div {
        height: 100%;
        line-height: 0.44rem;
      }
      .active {
        color: #ff5000;
        border-bottom: 3px solid #ff5000;
      }
}
.order-search {
  @include flexbox();
  @include justify-content(space-between);
  padding: 10px 20px 0;
  margin-top: .1rem;
  input {
    border-radius: 20px;
    width: 70%;
    height:0.3rem;
    outline: none;
    border: none;
    text-indent: 30px;
    background: #fff url("/images/search.png") no-repeat 10px center;
  }
  button {
    border-radius: 20px;
    background: #ff5000;
    color: #fff;
    width: 25%;
    outline: none;
    border: none;
    font-size:16px;
  }
}
.nothingorder {
  @include padding(1rem 0 0 0);
  @include flexbox();
  @include flex-direction(column);
  @include justify-content();
  @include align-items();

  img {
    width: 30%;
    margin-bottom: 0.2rem;
  }
  p {
    font-size:16px;
    margin-bottom: 0.05rem;
  }
  span {
    color: #999999;
    margin-bottom: 0.3rem;
  }
  button {
    border: none;
    width: 0.9rem;
    height: 0.35rem;
    border-radius: 20px;
    color: #fff;
    background-image: linear-gradient(to right, #fd9126, #ff5000);
  }
}
.orderlist {
  @include flexbox();
  @include margin(10px 5%);
  @include rect(90%, auto);
    @include flex-wrap(wrap);
  .listitem {
    margin: 10px 0;
    @include background-color(#fff);
    @include border-radius(15px);
    @include rect(100%, auto);
    @include flexbox();
    @include padding(5px 20px 10px 10px);
    @include flex-wrap(wrap);
    .list-top {
      width: 100%;
      @include rect(100%, .3rem);
      @include flexbox();
      @include justify-content(space-between);
      @include align-items();
      div {
      @include flexbox();
      @include align-items();
      img {
        margin-right: 10px;
        width:20px;
        display: block;
      }
      }
  }
  .list-pro {
    width: 100%;
    @include flexbox();
      @include justify-content(space-between);
      img {
        width: 25%;
        margin-right:10px;
        height: 100%;
      }
      .itempro {
    @include flexbox();
    @include flex-direction(column);
    @include flex();
    span {
      color:#aaa;
    }
      }
    .itemtotal {
    @include flexbox();
    @include flex-direction(column);
    width: 15%;
    span {
      color: #aaa;
    }

      }
  }
  .list-total {
    width: 100%;
    @include flexbox();
    @include justify-content(flex-end);
    margin-bottom: 10px;
    span {
      margin-right:10px;
      color: #aaa;
    }
  }
  .list-server {
    width: 100%;
    @include flexbox();
    @include justify-content(flex-end);
    p {
      width: 25%;
      border: 1px solid #aaa;
      border-radius: 20px;
      margin-right: 10px;
      text-align: center;
      height:.3rem;
      line-height: .28rem;
    }
  }
}
}
</style>
<script>
// import axios from '@/utils/request'
import Header from '../layouts/Header'
import Vue from 'vue'
import { Dialog, Toast } from 'vant'
Vue.use(Dialog)
Vue.use(Toast)
export default {
  components: {
    Header
  },
  data () {
    return {
      active: parseInt(this.$route.query.num) || 0,
      flag: false,
      list: '', // 全部数据
      orderlist: '', //  显示的数据
      payment: '', //  待付款
      received: '', // 待收货
      evaluate: '', // 待评价
      aftersale: '' // 售后
    }
  },
  created () {
    // // console.log(this.$route.query.num)
    // // this.flag = true
    // let order = this.$route.query.num * 1
    // let userid = localStorage.getItem('userid')
    // // 取得全部订单
    // axios.get('/order/allorder?userid=' + userid).then(res => {
    //   this.list = res.data.data
    // })
    // // 取得待付款订单
    // axios.get('/order/allorder?userid=' + userid + '&status=' + 0).then(res => {
    //   this.payment = res.data.data
    // })
    // // 取得待收货订单
    // axios.get('/order/allorder?userid=' + userid + '&status=' + 1).then(res => {
    //   this.received = res.data.data
    // })
    // // 取得待评价订单
    // axios.get('/order/allorder?userid=' + userid + '&status=' + 2).then(res => {
    //   this.evaluate = res.data.data
    // })
    // // 取得售后订单
    // axios.get('/order/allorder?userid=' + userid + '&status=' + 3).then(res => {
    //   this.aftersale = res.data.data
    //   order === 0 ? this.order0() : order === 1 ? this.order1() : order === 2 ? this.order2() : order === 3 ? this.order3() : order === 4 ? this.order4() : this.order0()
    // })
  },
  computed: {
    num () {
      return this.active
    }
  },
  methods: {
    order0 () {
      this.active = 0
      if (this.list.length > 0) {
        this.orderlist = this.list
        this.flag = true
      } else {
        this.flag = false
      }
      // console.log(this.orderlist)
    },
    order1 () {
    //   this.active = 1
    //   if (this.payment.length > 0) {
    //     this.orderlist = this.payment
    //     this.flag = true
    //   } else {
    //     this.flag = false
    //   }
      console.log(this.orderlist)
    },
    order2 () {
    //   this.active = 2
    //   if (this.received.length > 0) {
    //     this.orderlist = this.received
    //     this.flag = true
    //   } else {
    //     this.flag = false
    //   }
      console.log(this.orderlist)
    },
    order3 () {
    //   this.active = 3
    //   if (this.evaluate.length > 0) {
    //     this.orderlist = this.evaluate
    //     this.flag = true
    //   } else {
    //     this.flag = false
    //   }
    },
    order4 () {
      this.active = 4
      if (this.aftersale.length > 0) {
        this.orderlist = this.aftersale
        this.flag = true
      } else {
        this.flag = false
      }
    },
    delOrder (orderid) {
      // console.log(this.active)
      let index = this.active
      Dialog.confirm({
        title: '删除订单',
        message: '是否删除该订单'
      }).then(() => {
        axios.get('order/delete?orderid=' + orderid).then(res => {
          Toast('删除成功')
          this.$router.replace('userorder?num=' + index)
          location.reload()
        })
        console.log(orderid)
      }).catch(() => {
        // on cancel
      })
    },
    goPay (orderid) {
      this.$router.push('/order?orderid=' + orderid)
      // console.log(orderid)
    },
    // confirm (orderid) {
    //   let index = this.active
    //   Dialog.confirm({
    //     title: '确认收货',
    //     message: '是否确认收货'
    //   }).then(() => {
    //     axios.get('/order/updatestatus?orderid=' + orderid + '&status=' + 2).then(res => {
    //       Toast('已收货')
    //       this.$router.replace('userorder?num=' + index)
    //       location.reload()
    //     })
    //     console.log(orderid)
    //   }).catch(() => {
    //     // on cancel
    //   })
    // },
    goEvaluate (orderid) {
    //   this.$router.push('/evaluate?orderid=' + orderid)
    },
    service () {
      console.log('我能联系客服吗')
    },
    // goDetail (proid) {
    //   this.$router.push('/detail?proid=' + proid)
    // },
    // goShouhuo (orderid, status) {
    //   this.$router.push('/shouhuo?orderid=' + orderid + '&status=' + status)
    // }
  }
}
</script>
