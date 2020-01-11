<template>
    <div id="banner">
     <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item  >
        <img src="https://img.zhichiwangluo.com/zcimgdir/album/file_5d28518b03b0c.png" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://img.zhichiwangluo.com/zcimgdir/album/file_5d28518d453d1.png" alt="">
      </van-swipe-item>
    </van-swipe>
    </div>
</template>
<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
export default {
  data() {
    return {
    
    }
  }
}
</script>
<style lang="scss" scoped >
.van-swipe {
  width: 100%;
  height: 180px;
  .van-swipe__track{
    .van-swipe-item{
      img {
        width: 100%;
        height: 180px;
      }
    }
  }
}

</style>
