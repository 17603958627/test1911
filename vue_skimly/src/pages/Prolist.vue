<template>
  <ul class="prolist">
    <li class="proitem" v-for="item of prolist" @click="toDetail(item.proid)" :key="item.proid">
      <div class="probox">
        <div class="proimg">
          <img :src="item.proimg" alt="">
        </div>
        <div class="proinfo">
          <h3 class="pro-title">{{ item.proname }}</h3>
          <div class="freeship">包邮</div>
          <p class="pro-price">￥{{ item.price }}</p>
          <p class="pro-sales">已售 {{ item.sales }}</p>
          <div class="cartadd" @click="showPopup" @click.stop >
            <van-icon name="cart-circle-o" color="#ff8114" size="28" />
          </div>
        </div>
      </div>
    </li>
    <van-popup
      v-model="show"
      closeable
      position="bottom"
      :style="{ height: '38%' }"
      v-for="(item,index) of prolist" :key="index"
    >
      <div class="goods-msg">
        <div class="msg-img"><img :src="item.proimg" alt=""></div>
        <div class="msg-price">
          <h4>￥{{ item.price }}</h4>
          <p>库存：{{ item.stock }}</p>
        </div>
      </div>
      <div class="goods-number">
        <span>购买数量：</span>
        <span class="add-reduce">
          <button>+</button><span>1</span><button>-</button>
        </span>
      </div>
      <div class="goodscart">加入购物车</div>
    </van-popup>
  </ul>
</template>
<script>
import Vue from 'vue'
import { Icon, Popup } from 'vant'

Vue.use(Icon)
Vue.use(Popup)
export default {
  props: {
    prolist: Array
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    showPopup () {
      this.show = true
    },
    toDetail (proid) {
      // this.$router.push('/detail/' + proid)
      // this.$router.push({ name: 'detail', params: { proid } })
      this.$router.push({ path: '/detail/' + proid })
    }
  }
}
</script>
<style lang="scss">
@import '../assets/lib/reset.scss';
.prolist {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background: #fff;
  .proitem {
    @include rect(1.6rem, 2.8rem);
    .probox {
      // width: 50%;
      .proimg {
        img {
          @include rect(1.6rem,1.5rem);
        }
      }
    }
    .proinfo {
      position: relative;
      .pro-title {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        font-weight: 500;
        line-height: .18rem;
        margin-top: .04rem;
      }
      .freeship {
        width: .36rem;
        height: .16rem;
        background: #ff8114;
        border-radius: .2rem;
        text-align: center;
        font-size: .12rem;
        line-height: .16rem;
        margin: 6px 0;
        color: #fff;
      }
      .pro-price {
        line-height: .24rem;
        font-size: .18rem;
        color: red;
      }
      .pro-sales {
        line-height: .2rem;
        font-size: .12rem;
        color: #666;
      }
      .cartadd {
        width: 0.3rem;
        height: 0.3rem;
        position: absolute;
        right: .1rem;
        bottom: 0.1rem;
      }
    }
  }
  .van-popup {
    .goods-msg {
      @include rect(100%, 1.2rem);
      display: flex;
      margin: .2rem .14rem .2rem .14rem;
      .msg-img {
        margin-right: .2rem;
        img {
          @include rect(1.1rem, 1.1rem);
        }
      }
      .msg-price {
        h4 {
          line-height: .24rem;
          font-size: .2rem;
          color: red;
        }
        p {
          line-height: .2rem;
          font-size: .12rem;
          color: #666;
        }
      }
    }
    .goods-number {
      height: .32rem;
      padding: .1rem .14rem;
      border-top: 1px solid #dcdcdc;
      border-bottom: 1px solid #dcdcdc;
      display: flex;
      justify-content: space-between;
      box-sizing: content-box;
      span {
        font-size: .16rem;
        line-height: .32rem;
      }
      .add-reduce {
        font-size: .16rem;
        button {
          height: .32rem;
          width: .28rem;
          background: #f1f1f1;
          border: 1px solid #dcdcdc;
        }
        span {
          display: inline-block;
          width: .32rem;
          text-align: center;
        }
      }
    }
    .goodscart {
      width: 100%;
      height: .4rem;
      background: #ff8114;
      color: #fff;
      font-size: .16rem;
      line-height: .4rem;
      text-align: center;
    }
  }
}
</style>
