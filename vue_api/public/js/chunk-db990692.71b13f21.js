(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-db990692"],{"0418":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("div",{staticClass:"header-left"},[t._t("left",[n("span",{staticClass:"iconfont icon-zuo"}),n("p",{staticClass:"gobcak",on:{click:t.goback}},[t._v("返回")])])],2),n("div",{staticClass:"header-center"},[t._t("center")],2),n("div",{staticClass:"header-right"},[t._t("Icon",[n("span",{staticClass:"iconfont icon-gengduo"}),n("span",{staticClass:"iconfont icon-xiaochengxu"})]),t._t("release")],2)])},i=[],a={methods:{goback:function(){this.$router.back()}}},o=a,s=n("5511"),c=Object(s["a"])(o,r,i,!1,null,null,null);e["a"]=c.exports},"04fd":function(t,e,n){"use strict";var r=n("852d");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},"068d":function(t,e,n){"use strict";var r=n("5352"),i=n("ea2a");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},"1ac6":function(t,e,n){var r=n("70e4"),i=n("ed69"),a="["+i+"]",o=RegExp("^"+a+a+"*"),s=RegExp(a+a+"*$"),c=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},"236d":function(t,e,n){"use strict";n("067d"),n("ee9e"),n("3aef"),n("eef2")},"24aa":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("Header",[n("div",{attrs:{slot:"center"},slot:"center"},[t._v("订单管理")])]),n("header",{staticClass:"order-header"},[n("div",{class:0===t.num?"active":"",on:{click:function(e){return t.order0()}}},[t._v("全部")]),n("div",{class:1===t.num?"active":"",on:{click:function(e){return t.order1()}}},[t._v("待付款")]),n("div",{class:2===t.num?"active":"",on:{click:function(e){return t.order2()}}},[t._v("待收货")]),n("div",{class:3===t.num?"active":"",on:{click:function(e){return t.order3()}}},[t._v("待评价")]),n("div",{class:4===t.num?"active":"",on:{click:function(e){return t.order4()}}},[t._v("售后")])]),n("div",{staticClass:"content"},[t._m(0),t.flag?n("div",{staticClass:"orderlist"},t._l(t.orderlist,(function(e){return n("div",{key:e.orderid,staticClass:"listitem"},[n("div",{staticClass:"list-top"},[t._m(1,!0),n("p",{staticStyle:{color:"#f55000"}},[t._v(t._s(0==e.status?"待付款":1==e.status?"待收货":2==e.status?"待评价":3==e.status?"已完成":""))])]),t._l(e.list,(function(e){return n("div",{key:e.proid,staticClass:"list-pro",on:{click:function(n){return t.goDetail(e.proid)}}},[n("img",{attrs:{src:e.proimg,alt:""}}),n("div",{staticClass:"itempro"},[n("p",[t._v(t._s(e.proname))]),n("span",[t._v("商品规格")])]),n("div",{staticClass:"itemtotal"},[n("p",[t._v("￥"+t._s(e.price.toFixed(2)))]),n("span",[t._v("X "+t._s(e.num))])])])})),n("div",{staticClass:"list-total"},[n("span",[t._v("共"+t._s(e.num)+"件商品")]),n("p",[t._v("合计￥"+t._s(e.price)+"元")])]),n("div",{staticClass:"list-server"},[n("p",{on:{click:function(n){return t.delOrder(e.orderid)}}},[t._v("删除订单")]),1!=e.status?n("p",{on:{click:function(n){return t.goShouhuo(e.orderid,e.status)}}},[t._v("订单详情")]):1==e.status?n("p",{on:{click:function(n){return t.goShouhuo(e.orderid,e.status)}}},[t._v("查看物流")]):t._e(),0==e.status?n("p",{on:{click:function(n){return t.goPay(e.orderid)}}},[t._v("去付款")]):1==e.status?n("p",{on:{click:function(n){return t.confirm(e.orderid)}}},[t._v("确认收货")]):2==e.status?n("p",{on:{click:function(n){return t.goEvaluate(e.orderid)}}},[t._v("评价")]):3==e.status?n("p",{on:{click:function(e){return t.service()}}},[t._v("联系客服")]):t._e()])],2)})),0):n("div",{staticClass:"nothingorder"},[n("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1vJ_.vTqWBKNjSZFxXXcpLpXa-330-330.png",alt:"没有了"}}),n("p",[t._v("您还没有相关订单")]),n("span",[t._v("可以去看看哪些想买的")]),n("router-link",{attrs:{to:"/home",tag:"button"}},[t._v(" 随便逛逛 ")])],1)])],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"order-search"},[n("input",{attrs:{type:"text",placeholder:"搜索全部订购单"}}),n("button",[t._v("搜索")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{attrs:{src:"http://gw.alicdn.com/tfs/TB1LmH7SXXXXXXYXFXXXXXXXXXX-63-63.png_50x50_.webp",alt:"店铺名"}}),n("span",[t._v("店铺名")])])}],a=(n("9757"),n("068d"),n("6273"),n("fa70"),n("8ed0")),o=(n("236d"),n("35f1")),s=n("b775"),c=n("0418"),l=n("0261");l["a"].use(o["a"]),l["a"].use(a["a"]);var u={components:{Header:c["a"]},data:function(){return{active:parseInt(this.$route.query.num)||0,flag:!1,list:"",orderlist:"",payment:"",received:"",evaluate:"",aftersale:""}},created:function(){var t=this,e=1*this.$route.query.num,n=localStorage.getItem("userid");s["a"].get("/order/allorder?userid="+n).then((function(e){t.list=e.data.data})),s["a"].get("/order/allorder?userid="+n+"&status=0").then((function(e){t.payment=e.data.data})),s["a"].get("/order/allorder?userid="+n+"&status=1").then((function(e){t.received=e.data.data})),s["a"].get("/order/allorder?userid="+n+"&status=2").then((function(e){t.evaluate=e.data.data})),s["a"].get("/order/allorder?userid="+n+"&status=3").then((function(n){t.aftersale=n.data.data,0===e?t.order0():1===e?t.order1():2===e?t.order2():3===e?t.order3():4===e?t.order4():t.order0()}))},computed:{num:function(){return this.active}},methods:{order0:function(){this.active=0,this.list.length>0?(this.orderlist=this.list,this.flag=!0):this.flag=!1},order1:function(){this.active=1,this.payment.length>0?(this.orderlist=this.payment,this.flag=!0):this.flag=!1,console.log(this.orderlist)},order2:function(){this.active=2,this.received.length>0?(this.orderlist=this.received,this.flag=!0):this.flag=!1,console.log(this.orderlist)},order3:function(){this.active=3,this.evaluate.length>0?(this.orderlist=this.evaluate,this.flag=!0):this.flag=!1},order4:function(){this.active=4,this.aftersale.length>0?(this.orderlist=this.aftersale,this.flag=!0):this.flag=!1},delOrder:function(t){var e=this,n=this.active;o["a"].confirm({title:"删除订单",message:"是否删除该订单"}).then((function(){s["a"].get("order/delete?orderid="+t).then((function(t){Object(a["a"])("删除成功"),e.$router.replace("userorder?num="+n),location.reload()})),console.log(t)})).catch((function(){}))},goPay:function(t){this.$router.push("/order?orderid="+t)},confirm:function(t){var e=this,n=this.active;o["a"].confirm({title:"确认收货",message:"是否确认收货"}).then((function(){s["a"].get("/order/updatestatus?orderid="+t+"&status=2").then((function(t){Object(a["a"])("已收货"),e.$router.replace("userorder?num="+n),location.reload()})),console.log(t)})).catch((function(){}))},goEvaluate:function(t){this.$router.push("/evaluate?orderid="+t)},service:function(){console.log("我能联系客服吗")},goDetail:function(t){this.$router.push("/detail?proid="+t)},goShouhuo:function(t,e){this.$router.push("/shouhuo?orderid="+t+"&status="+e)}}},d=u,f=(n("8483"),n("5511")),v=Object(f["a"])(d,r,i,!1,null,"3aba483d",null);e["default"]=v.exports},6273:function(t,e,n){"use strict";var r=n("f702"),i=n("b53e"),a=n("7dad"),o=n("30d6"),s=n("7767"),c=n("70e4"),l=n("910e"),u=n("8298"),d=Math.max,f=Math.min,v=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,p=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){return[function(n,r){var i=c(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,i,r):e.call(String(i),n,r)},function(t,a){if(r.REPLACE_KEEPS_$0||"string"===typeof a&&-1===a.indexOf("$0")){var c=n(e,t,this,a);if(c.done)return c.value}var v=i(t),h=String(this),p="function"===typeof a;p||(a=String(a));var x=v.global;if(x){var b=v.unicode;v.lastIndex=0}var _=[];while(1){var y=u(v,h);if(null===y)break;if(_.push(y),!x)break;var k=String(y[0]);""===k&&(v.lastIndex=l(h,o(v.lastIndex),b))}for(var C="",E=0,$=0;$<_.length;$++){y=_[$];for(var S=String(y[0]),O=d(f(s(y.index),h.length),0),I=[],X=1;X<y.length;X++)I.push(g(y[X]));var R=y.groups;if(p){var w=[S].concat(I,O,h);void 0!==R&&w.push(R);var A=String(a.apply(void 0,w))}else A=m(S,h,O,I,R,a);O>=E&&(C+=h.slice(E,O)+A,E=O+S.length)}return C+h.slice(E)}];function m(t,n,r,i,o,s){var c=r+t.length,l=i.length,u=p;return void 0!==o&&(o=a(o),u=h),e.call(s,u,(function(e,a){var s;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(c);case"<":s=o[a.slice(1,-1)];break;default:var u=+a;if(0===u)return e;if(u>l){var d=v(u/10);return 0===d?e:d<=l?void 0===i[d-1]?a.charAt(1):i[d-1]+a.charAt(1):e}s=i[u-1]}return void 0===s?"":s}))}}))},8298:function(t,e,n){var r=n("b995"),i=n("ea2a");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},8483:function(t,e,n){"use strict";var r=n("fea8"),i=n.n(r);i.a},"8ae1":function(t,e,n){},"8ed0":function(t,e,n){"use strict";var r=n("9ed5"),i=n("0261"),a=n("280f"),o=n("bb85"),s=n("5472"),c=n("a0c8"),l=n("2b97"),u=Object(a["a"])("toast"),d=u[0],f=u[1],v=d({mixins:[s["a"]],props:{icon:String,className:null,iconPrefix:String,loadingType:String,forbidClick:Boolean,closeOnClick:Boolean,message:[Number,String],type:{type:String,default:"text"},position:{type:String,default:"middle"},transition:{type:String,default:"van-fade"},lockScroll:{type:Boolean,default:!1}},data:function(){return{clickable:!1}},mounted:function(){this.toggleClickable()},destroyed:function(){this.toggleClickable()},watch:{value:"toggleClickable",forbidClick:"toggleClickable"},methods:{onClick:function(){this.closeOnClick&&this.close()},toggleClickable:function(){var t=this.value&&this.forbidClick;if(this.clickable!==t){this.clickable=t;var e=t?"add":"remove";document.body.classList[e]("van-toast--unclickable")}},onAfterEnter:function(){this.$emit("opened"),this.onOpened&&this.onOpened()},onAfterLeave:function(){this.$emit("closed")},genIcon:function(){var t=this.$createElement,e=this.icon,n=this.type,r=this.iconPrefix,i=this.loadingType,a=e||"success"===n||"fail"===n;return a?t(c["a"],{class:f("icon"),attrs:{classPrefix:r,name:e||n}}):"loading"===n?t(l["a"],{class:f("loading"),attrs:{type:i}}):void 0},genMessage:function(){var t=this.$createElement,e=this.type,n=this.message;if(Object(o["b"])(n)&&""!==n)return"html"===e?t("div",{class:f("text"),domProps:{innerHTML:n}}):t("div",{class:f("text")},[n])}},render:function(){var t,e=arguments[0];return e("transition",{attrs:{name:this.transition},on:{afterEnter:this.onAfterEnter,afterLeave:this.onAfterLeave}},[e("div",{directives:[{name:"show",value:this.value}],class:[f([this.position,(t={},t[this.type]=!this.icon,t)]),this.className],on:{click:this.onClick}},[this.genIcon(),this.genMessage()])])}}),h={icon:"",type:"text",mask:!1,value:!0,message:"",className:"",overlay:!1,onClose:null,onOpened:null,duration:2e3,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,getContainer:"body",overlayStyle:null,closeOnClick:!1,closeOnClickOverlay:!1},p={},g=[],m=!1,x=Object(r["a"])({},h);function b(t){return Object(o["c"])(t)?t:{message:t}}function _(){if(o["d"])return{};if(!g.length||m){var t=new(i["a"].extend(v))({el:document.createElement("div")});t.$on("input",(function(e){t.value=e})),g.push(t)}return g[g.length-1]}function y(t){return Object(r["a"])({},t,{overlay:t.mask||t.overlay,mask:void 0,duration:void 0})}function k(t){void 0===t&&(t={});var e=_();return e.value&&e.updateZIndex(),t=b(t),t=Object(r["a"])({},x,{},p[t.type||x.type],{},t),t.clear=function(){e.value=!1,t.onClose&&t.onClose(),m&&!o["d"]&&e.$on("closed",(function(){clearTimeout(e.timer),g=g.filter((function(t){return t!==e}));var t=e.$el.parentNode;t&&t.removeChild(e.$el),e.$destroy()}))},Object(r["a"])(e,y(t)),clearTimeout(e.timer),t.duration>0&&(e.timer=setTimeout((function(){e.clear()}),t.duration)),e}var C=function(t){return function(e){return k(Object(r["a"])({type:t},b(e)))}};["loading","success","fail"].forEach((function(t){k[t]=C(t)})),k.clear=function(t){g.length&&(t?(g.forEach((function(t){t.clear()})),g=[]):m?g.shift().clear():g[0].clear())},k.setDefaultOptions=function(t,e){"string"===typeof t?p[t]=e:Object(r["a"])(x,t)},k.resetDefaultOptions=function(t){"string"===typeof t?p[t]=null:(x=Object(r["a"])({},h),p={})},k.allowMultiple=function(t){void 0===t&&(t=!0),m=t},k.install=function(){i["a"].use(v)},i["a"].prototype.$toast=k;e["a"]=k},"90d2":function(t,e,n){"use strict";var r=n("b53e");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"910e":function(t,e,n){"use strict";var r=n("9607").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9607:function(t,e,n){var r=n("7767"),i=n("70e4"),a=function(t){return function(e,n){var a,o,s=String(i(e)),c=r(n),l=s.length;return c<0||c>=l?t?"":void 0:(a=s.charCodeAt(c),a<55296||a>56319||c+1===l||(o=s.charCodeAt(c+1))<56320||o>57343?t?s.charAt(c):a:t?s.slice(c,c+2):o-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},9757:function(t,e,n){var r=n("5352"),i=n("a65f");r({global:!0,forced:parseInt!=i},{parseInt:i})},a65f:function(t,e,n){var r=n("93ef"),i=n("1ac6").trim,a=n("ed69"),o=r.parseInt,s=/^[+-]?0[Xx]/,c=8!==o(a+"08")||22!==o(a+"0x16");t.exports=c?function(t,e){var n=i(String(t));return o(n,e>>>0||(s.test(n)?16:10))}:o},b775:function(t,e,n){"use strict";var r=n("2427"),i=n.n(r),a=i.a.create();a.defaults.headers["token"]=localStorage.getItem("token"),e["a"]=a},ea2a:function(t,e,n){"use strict";var r=n("90d2"),i=n("04fd"),a=RegExp.prototype.exec,o=String.prototype.replace,s=a,c=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=i.UNSUPPORTED_Y||i.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=c||u||l;d&&(s=function(t){var e,n,i,s,d=this,f=l&&d.sticky,v=r.call(d),h=d.source,p=0,g=t;return f&&(v=v.replace("y",""),-1===v.indexOf("g")&&(v+="g"),g=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(h="(?: "+h+")",g=" "+g,p++),n=new RegExp("^(?:"+h+")",v)),u&&(n=new RegExp("^"+h+"$(?!\\s)",v)),c&&(e=d.lastIndex),i=a.call(f?n:d,g),f?i?(i.input=i.input.slice(p),i[0]=i[0].slice(p),i.index=d.lastIndex,d.lastIndex+=i[0].length):d.lastIndex=0:c&&i&&(d.lastIndex=d.global?i.index+i[0].length:e),u&&i&&i.length>1&&o.call(i[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(i[s]=void 0)})),i}),t.exports=s},ed69:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},f702:function(t,e,n){"use strict";var r=n("d116"),i=n("852d"),a=n("7c39"),o=n("ea2a"),s=n("a53b"),c=a("species"),l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var v=a(t),h=!i((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),p=h&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return e=!0,null},n[v](""),!e}));if(!h||!p||"replace"===t&&(!l||!u)||"split"===t&&!d){var g=/./[v],m=n(v,""[t],(function(t,e,n,r,i){return e.exec===o?h&&!i?{done:!0,value:g.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u}),x=m[0],b=m[1];r(String.prototype,t,x),r(RegExp.prototype,v,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}f&&s(RegExp.prototype[v],"sham",!0)}},fa70:function(t,e,n){"use strict";n("067d"),n("ee9e"),n("3aef"),n("8ae1")},fea8:function(t,e,n){}}]);
//# sourceMappingURL=chunk-db990692.71b13f21.js.map