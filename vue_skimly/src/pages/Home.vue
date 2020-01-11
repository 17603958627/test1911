<template>

  <div class="box">
    <!-- 头部 -->
    <!-- <header class="header"> -->

    <!-- </header> -->
    <!-- 内容 -->
    <div class="content" id="content">
      <Banner/>
      <div class="recommend">
        <ul>
          <div class="recommend_left">
            <li>
              <span>店内点单</span>
              <br />
              <b>畅享更多优惠</b>
              <img src="https://img.zhichiwangluo.com/zcimgdir/album/file_5b97cbeeb4989.png" />
            </li>
          </div>
          <div class="recommend_right">
            <li>
              <span>外卖速达</span>
              <br />
              <b>上门更方便</b>
              <img src="https://img.zhichiwangluo.com/zcimgdir/album/file_5b97cbeeb4989.png" />
            </li>
          </div>
        </ul>
      </div>
      <van-notice-bar
        class="van-notice-bar"
        text="亲，第二杯半价！有礼进店享！即日起，在本平台消费满50元减5元，满100元减10元，满200元减50元！欢迎选购！"
        left-icon="volume-o"
      />
      <!-- 导航条 -->
      <div class="nav">
        <ul>
          <li>
            <img src="http://img.zhichiwangluo.com/zcimgdir/thumb/t_15264395715afb9e932aedd.jpg" />
          </li>
          <li>
            <h3>你的专属奶茶</h3>
          </li>
          <li>
            <p>深圳市南三区软件基地芒果网大厦</p>
          </li>
          <li class="te">
            <img src="http://img.zhichiwangluo.com/zcimgdir/album/file_5afa820166c84.png" />
          </li>
        </ul>
      </div>
      <!--买单 优惠券 储存有礼 会员卡 优先排号-->
      <div class="recharge">
        <ul>
          <li v-for="(item,index) of list" :key="index">
            <img :src="item.img" />
            <p>{{item.name}}</p>
          </li>
        </ul>
      </div>
      <!-- 店铺活动 -->
      <div class="recommend">
        <div class="recommend-header">
          <img src="https://img.zhichiwangluo.com/zcimgdir/album/file_5b72a928be307.png" />
          <div class="title1">
            <span>店铺活动</span>
          </div>
          <div class="title2">
            <p>Hot sale today</p>
          </div>
        </div>
      </div>
      <div class="custom-component">
        <!-- 美味 -->
        <ul>
          <div class="delicious">
            <li>
              <span>转出美味</span>
              <b>邀你一起开心大转盘</b>
              <img src="https://img.zhichiwangluo.com/zcimgdir/album/file_5d414c95d4ae5.png" />
            </li>
          </div>
          <!-- 优惠 -->
          <div class="discount">
            <li>
              <span>优惠拼团</span>
              <b>实惠大划算</b>
              <img src="https://img.zhichiwangluo.com/zcimgdir/album/file_5d414c9310ac9.png" />
            </li>
          </div>
        </ul>
      </div>
      <Prolist :prolist = "prolist"/>
    </div>
    <!-- 返回顶部和购物车 -->
      <!-- <div class="backtop">
        <div class="icons" @click="tocart"><van-icon name="cart-o" size=".24rem" color="#ccc"/></div>
        <div class="icons goTop"><van-icon name="arrow-up" size=".24rem" color="#ccc" v-show="goTop" @click="backTop()"/></div>
      </div> -->
  </div>
</template>

<script>
import Vue from "vue";
import axios from 'axios';
import { NoticeBar } from "vant";
Vue.use(NoticeBar);
import Banner from "../components/Banner.vue";
import Prolist from "../pages/Prolist";
export default {
  data() {
    return {
      goTop: true,
      prolist:[],
      list:[{
        id:1,
        img:'https://img.zhichiwangluo.com/zcimgdir/album/file_5d2efc714a60d.png',
        name:'我要买单'
      },{
         id:2,
        img:'https://img.zhichiwangluo.com/zcimgdir/album/file_5d2efd71531e6.png',
        name:'优惠券'
      },{
         id:3,
        img:'https://img.zhichiwangluo.com/zcimgdir/album/file_5d2efc6920ce9.png',
        name:'储存有礼'
      },{
        id:4,
        img:'https://img.zhichiwangluo.com/zcimgdir/album/file_5d2efc6d48898.png',
        name:'会员卡'
      },{
         id:5,
        img:'https://img.zhichiwangluo.com/zcimgdir/album/file_5d2efc6d48898.png',
        name:'优先排号'
      }

      ]
    };
  },
  components: {
    Banner,Prolist
  },
  mounted() {
     axios.get('api/pro').then(
       res=>{
         console.log(res.data)
         this.prolist=res.data.data
       } 
    )
  },
  updated() {},
  //自定义方法
  methods: {
      backTop () {
      let top = document.getElementById('content').scrollTop
      console.log(top);
      const timeTop = setInterval(() => {
        document.getElementById('content').scrollTop = document.getElementById('content').scrollTop = top -= 50
        if (top <= 0) {
          clearInterval(timeTop)
        }
      }, 10)
    },
     tocart () {
      this.$router.push('/cart')
    }
  }
}
</script>

<style lang='scss' scoped>

.recommend .recommend_left {
  float: left;
  position: relative;
  left: 0.1rem;
  top: 0.14rem;
}
.recommend .recommend_left {
  float: left;
  width: 1.7rem;
  height: 0.8rem;
  background: url(https://img.zhichiwangluo.com/zcimgdir/album/file_5b97cc899d8f0.png)
    no-repeat;
  border-radius: 0.05rem;
}
.recommend .recommend_left li span {
  float: right;
  font: 700 0.15rem/2 "";
  color: blue;
  margin-right: 0.2rem;
  margin-top: 0.12rem;
}
.recommend .recommend_left li b {
  float: right;
  font: 100 0.08rem/1 "";
  color: #ccc;
  margin-right: 0.2rem;
  text-align: left;
}
.recommend .recommend_right {
  float: left;
  position: relative;
  right: 0.1rem;
  top: 0.14rem;
}
.recommend .recommend_right {
  float: right;
  width: 1.7rem;
  height: 0.8rem;
  background: url(https://img.zhichiwangluo.com/zcimgdir/album/file_5b97cc899d8f0.png)
    no-repeat;
  border-radius: 0.05rem;
}
.recommend .recommend_right li span {
  float: right;
  font: 700 0.15rem/2 "";
  color: green;
  margin-right: 0.16rem;
  margin-top: 0.12rem;
}
.recommend .recommend_right li b {
  float: right;
  font: 100 0.04rem/5 "";
  color: #ccc;
  margin-right: 0.2rem;
  text-align: center;
  position:absolute;
  right:.02rem;
}
.recommend li img {
  display: block;
  height: 0.6rem;
  width: 0.4rem;
  position: absolute;
  left: 0.1rem;
  top: 0.16rem;
}
.van-notice-bar {
  margin-top: 0.3rem;
}
// 导航条
.nav {
  position: relative;
  margin-top: 0.2rem;
  width: 95%;
  height: 1rem;
  border-radius: 0.02rem;
  box-shadow: 0rem 0rem 0.06rem #ccc;
  margin-left: 0.1rem;
  ul {
    li {
      float: left;
      img {
        display: block;
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
        margin: 0.2rem 0.1rem;
      }
      h3 {
        margin-top: 0.2rem;
        font: 600 0.15rem/0.3rem "";
      }
      p {
        font: 0.15rem/0.2rem "";
        color: grey;
      }
    }
    .te {
      img {
        position: absolute;
        right: 0.02rem;
        top: 0.2rem;
        width: 0.25rem;
        height: 0.25rem;
      }
    }
  }
}
// 买单 优惠券 储存有礼 会员卡 优先排号
.recharge {
  padding: 0 0.1rem;
  background: #fff;
  margin-top: 0.3rem;

  ul {
    height: 0.7rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      text-align: center;
      img {
        width: 0.4rem;
        height: 0.4rem;
      }
      p {
        color: grey;
        font: 0.08rem/3 "";
      }
    }
  }
}
// 店铺活动
.recommend {
  position: relative;
  height: 0.8rem;
  text-align: center;
  .recommend-header {
    margin-left:0.2rem;
    height: 1rem;
    img {
      float: left;
      width: 0.3rem;
      position: absolute;
      left:36%;
      top:14%;
    }
    .title1 {
      float: right;
      font: 0.02rem/2 "";
      line-height: 0.5rem;
      position: absolute;
      left: 1.78rem;
    }
    .title2 p {
      float: right;
      color: rgb(204, 204, 204);
      font-size: 0.1rem;
      line-height: 0.5rem;
      position: absolute;
      left: 1.65rem;
      top: 0.2rem;
    }
  }
}

.custom-component {
  height:100%;
  margin-bottom:2.3rem;
  .delicious {
    float: left;
    width: 1.7rem;
    height: 1.7rem;
    margin-left: 0.1rem;
    background: url(https://img.zhichiwangluo.com/zcimgdir/album/file_5b839f181d478.png)no-repeat;
    span{
      font:700 0.15rem/0.3rem "";
      text-align: center;
      margin-top:0.1rem;
      display: block;
      margin-bottom:0.1rem;
    }
    b{
      color: grey;
      text-align: center;
      line-height:0.12rem;
      display:block;
    }
    img {
       width:0.8rem;
       height:0.9rem;
       margin-left:0.45rem;
       margin-top:0.1rem;
    }
  }
  .discount {
    float: right;
    width: 1.7rem;
    height: 1.7rem;
    margin-right: 0.1rem;
    background: url(https://img.zhichiwangluo.com/zcimgdir/album/file_5b839f0f6fc08.png)
      no-repeat;
      span{
      font:700 0.15rem/0.3rem "";
      text-align: center;
      margin-top:0.1rem;
      display: block;
      margin-bottom:0.1rem;
    }
    b{
      color: grey;
      text-align: center;
      line-height:0.12rem;
      display:block;
    }
    img {
       width:0.8rem;
       height:0.9rem;
       margin-left:0.45rem;
       margin-top:0.1rem;
    }
  }
}
  // 回到顶部和购物车
  .backtop {
    width: .4rem;
    height: 1rem;
    position: fixed;
    right: .08rem;
    bottom: .28rem;
    .icons {
      width: 0.32rem;
      height: 0.32rem;
      display: flex;
      justify-content: center;
      align-content: center;
      border: 2px solid #ccc;
      border-radius: 50%;
      background: #fff;
      margin-bottom: .05rem;
      .van-icon {
        margin: 0 auto;
      }
    }
  }
</style>