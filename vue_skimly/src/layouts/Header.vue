<template>
  <header class="header">
      <div class="header-left">
        <slot name="left">
          <span class="iconfont icon-zuo"></span>
          <p class="gobcak" @click="goback">返回</p>
        </slot>
      </div>
      <div class="header-center">
        <!-- <p>购物车</p> -->
        <slot name="center"></slot>
      </div>
      <div class="header-right">
        <!-- 右侧的图标 -->
        <slot name="Icon">
          <span class="iconfont icon-mine"></span>
          <span class="iconfont icon-xiaochengxu"></span>
        </slot>
        <!-- 发布的文字 -->
        <slot name="release"></slot>
      </div>
  </header>
</template>

<script>
export default {
  methods: {
    goback () {
      this.$router.back()
    }
  }
}
</script>
