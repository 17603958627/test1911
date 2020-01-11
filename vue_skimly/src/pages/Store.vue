<template>
  <div class="box">
      <!-- 轮播图 -->
    <div class="content">
       <div class="banner">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img src="../assets/image/store-1.png" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="../assets/image/store-2.png" alt />
          </van-swipe-item>
        </van-swipe>
      </div>
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
    </div>
<!-- 营业时间 -->
    <div class="time">
      <li>
        <p>营业时间</p>
        <p>周一至周日 09：00-22：00</p>
      </li>
      <li>
        <p>WiFi</p>
        <p>zhichiwangluo666</p>
      </li>
    </div>
    <!-- 服务 -->
    <div class="service">
      <div class="recharge">
           <span>门店服务</span>
        <ul>
          <li>
            <img src="../assets/image/store-3.png" />
            <p>免费wifi</p>
          </li>
          <li>
            <img src="../assets/image/store-4.png" />
            <p>视频放映</p>
          </li>
          <li>
            <img src="../assets/image/store-5.png" />
            <p>音乐间</p>
          </li>
          <li>
            <img src="../assets/image/store-6.png" />
            <p>免费图书</p>
          </li>
          <li>
            <img src="../assets/image/store-7.png" />
            <p>冷暖气</p>
          </li>
          <li>
            <img src="../assets/image/store-8.png" />
            <p>残障设施</p>
          </li>
          <li>
            <img src="../assets/image/store-10.png" />
            <p>安全监控</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 百度地图 -->
    <BdMap></BdMap>
    
    
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
import BdMap from '../components/BdMap.vue';
Vue.use(Swipe).use(SwipeItem);

export default {
  components:{
    BdMap
  }

};
</script>
<style lang="scss">
.box {
  // 轮播图
  .van-swipe {
    width: 100%;
    height: 180px;
    .van-swipe__track {
      .van-swipe-item {
        img {
          width: 100%;
          height: 180px;
          border-radius: 0.3%;
        }
      }
    }
  }
  //导航栏
  .nav {
    position: relative;
    margin-bottom: 0.03rem;
    width: 100%;
    height: 1rem;
    border-radius: 0.03rem;
      // border-bottom:.01rem solid #ccc;

      box-shadow: 0rem 0rem 0.06rem #ccc;
    //   margin-left: 0.1rem;
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
  .time {
    width: 100%;
    li {
      height: 0.8rem;
      list-style: none;
      border-bottom:.02rem solid #ccc;
      p {
        font: 0.15rem/0.3rem "";
        color: grey;
        text-indent: 1em;
      }
    }
  }
  .service {
      height:2rem;
      span{
          font:.14rem/2 '';
          color:grey;
      }
    .recharge {
      width:100%;
      height:2rem;
      padding: 0 0.1rem;
      border-bottom:.02rem solid #ccc;
      
      ul {
          float: left;
        li {
          margin-left:0.04rem;
          margin-bottom:0.2rem;
          float: left;
          width: 0.8rem;
            height: 0.6rem;
          img {
            width: 0.8rem;
            height: 0.6rem;
          }
          p {
            color: grey;
            font-size: 0.08rem;
            text-align:center;
          }
        }
      }
    }
  }
}
</style>