<template>
  <div class="dismap">
    <h3>店铺导航</h3>
    <div id="allmap" class="allmap">
    </div>
        <p>深圳市南山区软件基地芒果网大厦</p>
  </div>
</template>
<script>

export default {
  data(){
    return {
      start:'',
      end:'',
      eat:''
    }
  },
  methods:{
    search(){
      //创建路线实例
      var driving = new BMap.DrivingRoute(this.map, {renderOptions:{map: this.map, autoViewport: true},policy: 'BMAP_DRIVING_POLICY_AVOID_HIGHWAY'});

      this.map.clearOverlays(); //清除覆盖物
			driving.search(this.start,this.end);//检索路线
    }
  },
  mounted(){
    this.map = new BMap.Map("allmap");    // 创建Map实例
    this.point = new BMap.Point(121.48941,31.40527000000003)
    this.map.centerAndZoom(this.point, 14);  // 初始化地图,设置中心点坐标和地图级别
    this.marker = new BMap.Marker(this.point);  // 创建标注
    this.map.addOverlay(this.marker);// 将标注添加到地图中
    // this.marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    // this.map.enableScrollWheelZoom(true);//开启鼠标拖动功能
  }
}
</script>
<style lang='scss'>
.dismap{
    height:4rem;
    h3{
        margin-left:.1rem;
        line-height: .4rem;
        color:grey;
    }
.allmap{
    height:2rem;
    width:100%;
}
p{
    background: #ccc;
    font:.05rem/.35rem '';
    color:gray;
}
}




</style>

