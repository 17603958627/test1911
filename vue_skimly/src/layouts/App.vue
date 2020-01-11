<template>
  <div class="container">
    <router-view></router-view>
    <router-view name="footer" />
  </div>
</template>

<script>
// import Banner from '../components/Banner.vue'
// import Home from '../pages/Home.vue'

import Footer from "../layouts/Footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    Footer
  },
  mounted() {},
  updated() {},
  methods: {}
};
</script>
<style lang="scss">
@import "../assets/lib/reset.scss";
html,
body,
.container,
.detail {
  @include rect(100%, 100%);
}
.container,
.detail {
  @include flexbox();
  @include flex-direction(column);
  .box {
    // @include flex();
    @include rect(100%, auto);
    @include overflow();
    // @include flexbox();
    @include flex-direction(column);
    .header {
      @include rect(100%, 0.44rem);
    }
    .content {
      @include flex();
      @include rect(100%, auto);
      @include overflow();
    }
  }
  .footer {
    @include rect(100%, 0.5rem);
    @include background-color(rgb(253, 252, 252));
    position: fixed;
    left: 0;
    bottom: 0;
    border-top: 0.02rem solid #ccc;

    ul {
      @include rect(100%, 100%);
      @include flexbox();
      li {
        @include flex();
        @include rect(auto, 100%);
        @include flexbox();
        @include flex-direction(column);
        @include justify-content();
        @include align-items();
        &.router-link-exact-active {
          // 底部选中样式
          @include color(orange);
        }
      }
    }
  }
}
</style>