<template>
  <div class="detail">
    <div class="box">
      <header class="header">详情{{proname}}</header>
      <div class="content"></div>
    </div>
    <footer class="footer">详情</footer>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      proname: ''
    }
  },
  mounted () {
    console.log(this.$route)
    let { proid } = this.$route.params
        console.log(proid)
    axios.get('/api/pro/detail?proid=' + proid).then(res => {
      console.log(res.data.data)
      this.proname = res.data.data.proname
    })
  }
}
</script>
<style lang="scss">

</style>
