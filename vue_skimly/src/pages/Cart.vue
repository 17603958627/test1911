<template>
  <div class="noshop">
          <img src="http://img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png" alt="">
          <p class="kong">您的购物车为空<span></span></p>
      </div>
</template>
<style lang='scss' scoped>
@import '../assets/lib/reset.scss';
.noshop{
    @include rect(100%,100%);
    @include flexbox();
    flex-direction:column;
    align-items:center;
    justify-content:center;
    img{
      width:1.2rem;height: 1.2rem;
    }
    .kong{
      font-size: 0.18rem;margin-top: 5px;color: #000;
      span{
        color:red;font-weight: bold;margin-left:3px;
      }
    }
  }
</style>
