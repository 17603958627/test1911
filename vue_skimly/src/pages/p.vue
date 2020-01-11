<template>
  <ul class="prolist">
    <router-link :to="{ name:'detail', params: { proid: item.proid }}" tag="li" class="item" v-for="item of prolist" :key="item.proid">
      <div class="itemsbox">
        <div class="itemimg">
          <img :src="item.proimg" alt="">
        </div>
        <div class="iteminfo">
          <h3 class="item-title">{{ item.proname }}</h3>
          <div class="freeship">包邮</div>
          <p class="item-price">￥{{ item.price }}</p>
          <p class="item-sales">已售 {{ item.sales }}</p>
          <div class="cartadd" @click="showPopup(item.proid)" @click.stop>
            <van-icon name="cart-circle-o" color="#ff8114" size="28" />
          </div>
        </div>
      </div>
    </router-link>
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