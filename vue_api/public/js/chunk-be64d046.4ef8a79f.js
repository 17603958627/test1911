(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-be64d046"],{"005b":function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return s})),n.d(e,"b",(function(){return r})),n.d(e,"e",(function(){return c})),n.d(e,"a",(function(){return l}));var i=/scroll|auto/i;function o(t,e){void 0===e&&(e=window);var n=t;while(n&&"HTML"!==n.tagName&&1===n.nodeType&&n!==e){var o=window.getComputedStyle(n),s=o.overflowY;if(i.test(s)){if("BODY"!==n.tagName)return n;var a=window.getComputedStyle(n.parentNode),r=a.overflowY;if(i.test(r))return n}n=n.parentNode}return e}function s(t){return"scrollTop"in t?t.scrollTop:t.pageYOffset}function a(t,e){"scrollTop"in t?t.scrollTop=e:t.scrollTo(t.scrollX,e)}function r(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function c(t){a(window,t),a(document.body,t)}function l(t){return(t===window?0:t.getBoundingClientRect().top)+r()}},"2b97":function(t,e,n){"use strict";var i=n("23c4"),o=n.n(i),s=n("280f"),a=n("e823"),r=n("13cf"),c=Object(s["a"])("loading"),l=c[0],u=c[1];function d(t,e){if("spinner"===e.type){for(var n=[],i=0;i<12;i++)n.push(t("i"));return n}return t("svg",{class:u("circular"),attrs:{viewBox:"25 25 50 50"}},[t("circle",{attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])}function f(t,e,n){if(n.default){var i=e.textSize&&{fontSize:Object(a["a"])(e.textSize)};return t("span",{class:u("text"),style:i},[n.default()])}}function h(t,e,n,i){var s=e.color,c=e.size,l=e.type,h={color:s};if(c){var p=Object(a["a"])(c);h.width=p,h.height=p}return t("div",o()([{class:u([l,{vertical:e.vertical}])},Object(r["b"])(i,!0)]),[t("span",{class:u("spinner",l),style:h},[d(t,e)]),f(t,e,n)])}h.props={color:String,size:[Number,String],vertical:Boolean,textSize:[Number,String],type:{type:String,default:"circular"}},e["a"]=l(h)},"3a59":function(t,e,n){"use strict";var i=n("a797"),o=n.n(i);o.a},5472:function(t,e,n){"use strict";var i={zIndex:2e3,lockCount:0,stack:[],get top(){return this.stack[this.stack.length-1]}},o=n("9ea0"),s=n("0261");function a(t){return"string"===typeof t?document.querySelector(t):t()}function r(t){var e=t.ref,n=t.afterPortal;return s["a"].extend({props:{getContainer:[String,Function]},watch:{getContainer:"portal"},mounted:function(){this.getContainer&&this.portal()},methods:{portal:function(){var t,i=this.getContainer,o=e?this.$refs[e]:this.$el;i?t=a(i):this.$parent&&(t=this.$parent.$el),t&&t!==o.parentNode&&t.appendChild(o),n&&n.call(this)}}})}var c=n("c1b9"),l=n("a9e2"),u=s["a"].extend({mixins:[Object(l["a"])((function(t,e){this.handlePopstate(e&&this.closeOnPopstate)}))],props:{closeOnPopstate:Boolean},data:function(){return{bindStatus:!1}},watch:{closeOnPopstate:function(t){this.handlePopstate(t)}},methods:{handlePopstate:function(t){if(!this.$isServer&&this.bindStatus!==t){this.bindStatus=t;var e=t?c["b"]:c["a"];e(window,"popstate",this.close)}}}}),d=n("9ed5"),f=n("23c4"),h=n.n(f),p=n("280f"),v=n("bb85"),m=n("13cf"),g=Object(p["a"])("overlay"),b=g[0],y=g[1];function C(t){Object(c["c"])(t,!0)}function O(t,e,n,i){var o=Object(d["a"])({zIndex:e.zIndex},e.customStyle);return Object(v["b"])(e.duration)&&(o.animationDuration=e.duration+"s"),t("transition",{attrs:{name:"van-fade"}},[t("div",h()([{directives:[{name:"show",value:e.show}],style:o,class:[y(),e.className],on:{touchmove:C}},Object(m["b"])(i,!0)]),[n.default&&n.default()])])}O.props={show:Boolean,duration:[Number,String],className:null,customStyle:Object,zIndex:{type:[Number,String],default:1}};var w,k=b(O),x={className:"",customStyle:{}};function S(){if(i.top){var t=i.top.vm;t.$emit("click-overlay"),t.closeOnClickOverlay&&(t.onClickOverlay?t.onClickOverlay():t.close())}}function j(){if(w||(w=Object(m["c"])(k,{on:{click:S}})),i.top){var t=i.top,e=t.vm,n=t.config,o=e.$el;o&&o.parentNode?o.parentNode.insertBefore(w.$el,o):document.body.appendChild(w.$el),Object(d["a"])(w,x,n,{show:!0})}else w.show=!1}function $(t,e){i.stack.some((function(e){return e.vm===t}))||(i.stack.push({vm:t,config:e}),j())}function T(t){var e=i.stack;e.length&&(i.top.vm===t?(e.pop(),j()):i.stack=e.filter((function(e){return e.vm!==t})))}var N=n("005b");n.d(e,"a",(function(){return z}));var z={mixins:[o["a"],u,r({afterPortal:function(){this.overlay&&j()}})],props:{value:Boolean,overlay:Boolean,overlayStyle:Object,overlayClass:String,closeOnClickOverlay:Boolean,zIndex:[Number,String],lockScroll:{type:Boolean,default:!0},lazyRender:{type:Boolean,default:!0}},data:function(){return{inited:this.value}},computed:{shouldRender:function(){return this.inited||!this.lazyRender}},watch:{value:function(t){var e=t?"open":"close";this.inited=this.inited||this.value,this[e](),this.$emit(e)},overlay:"renderOverlay"},mounted:function(){this.value&&this.open()},activated:function(){this.value&&this.open()},beforeDestroy:function(){this.close(),this.getContainer&&this.$parent&&this.$parent.$el&&this.$parent.$el.appendChild(this.$el)},deactivated:function(){this.close()},methods:{open:function(){this.$isServer||this.opened||(void 0!==this.zIndex&&(i.zIndex=this.zIndex),this.opened=!0,this.renderOverlay(),this.lockScroll&&(Object(c["b"])(document,"touchstart",this.touchStart),Object(c["b"])(document,"touchmove",this.onTouchMove),i.lockCount||document.body.classList.add("van-overflow-hidden"),i.lockCount++))},close:function(){this.opened&&(this.lockScroll&&(i.lockCount--,Object(c["a"])(document,"touchstart",this.touchStart),Object(c["a"])(document,"touchmove",this.onTouchMove),i.lockCount||document.body.classList.remove("van-overflow-hidden")),this.opened=!1,T(this),this.$emit("input",!1))},onTouchMove:function(t){this.touchMove(t);var e=this.deltaY>0?"10":"01",n=Object(N["c"])(t.target,this.$el),i=n.scrollHeight,o=n.offsetHeight,s=n.scrollTop,a="11";0===s?a=o>=i?"00":"01":s+o>=i&&(a="10"),"11"===a||"vertical"!==this.direction||parseInt(a,2)&parseInt(e,2)||Object(c["c"])(t,!0)},renderOverlay:function(){var t=this;!this.$isServer&&this.value&&this.$nextTick((function(){t.updateZIndex(t.overlay?1:0),t.overlay?$(t,{zIndex:i.zIndex++,duration:t.duration,className:t.overlayClass,customStyle:t.overlayStyle}):T(t)}))},updateZIndex:function(t){void 0===t&&(t=0),this.$el.style.zIndex=++i.zIndex+t}}}},"8ae1":function(t,e,n){},"8ed0":function(t,e,n){"use strict";var i=n("9ed5"),o=n("0261"),s=n("280f"),a=n("bb85"),r=n("5472"),c=n("a0c8"),l=n("2b97"),u=Object(s["a"])("toast"),d=u[0],f=u[1],h=d({mixins:[r["a"]],props:{icon:String,className:null,iconPrefix:String,loadingType:String,forbidClick:Boolean,closeOnClick:Boolean,message:[Number,String],type:{type:String,default:"text"},position:{type:String,default:"middle"},transition:{type:String,default:"van-fade"},lockScroll:{type:Boolean,default:!1}},data:function(){return{clickable:!1}},mounted:function(){this.toggleClickable()},destroyed:function(){this.toggleClickable()},watch:{value:"toggleClickable",forbidClick:"toggleClickable"},methods:{onClick:function(){this.closeOnClick&&this.close()},toggleClickable:function(){var t=this.value&&this.forbidClick;if(this.clickable!==t){this.clickable=t;var e=t?"add":"remove";document.body.classList[e]("van-toast--unclickable")}},onAfterEnter:function(){this.$emit("opened"),this.onOpened&&this.onOpened()},onAfterLeave:function(){this.$emit("closed")},genIcon:function(){var t=this.$createElement,e=this.icon,n=this.type,i=this.iconPrefix,o=this.loadingType,s=e||"success"===n||"fail"===n;return s?t(c["a"],{class:f("icon"),attrs:{classPrefix:i,name:e||n}}):"loading"===n?t(l["a"],{class:f("loading"),attrs:{type:o}}):void 0},genMessage:function(){var t=this.$createElement,e=this.type,n=this.message;if(Object(a["b"])(n)&&""!==n)return"html"===e?t("div",{class:f("text"),domProps:{innerHTML:n}}):t("div",{class:f("text")},[n])}},render:function(){var t,e=arguments[0];return e("transition",{attrs:{name:this.transition},on:{afterEnter:this.onAfterEnter,afterLeave:this.onAfterLeave}},[e("div",{directives:[{name:"show",value:this.value}],class:[f([this.position,(t={},t[this.type]=!this.icon,t)]),this.className],on:{click:this.onClick}},[this.genIcon(),this.genMessage()])])}}),p={icon:"",type:"text",mask:!1,value:!0,message:"",className:"",overlay:!1,onClose:null,onOpened:null,duration:2e3,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,getContainer:"body",overlayStyle:null,closeOnClick:!1,closeOnClickOverlay:!1},v={},m=[],g=!1,b=Object(i["a"])({},p);function y(t){return Object(a["c"])(t)?t:{message:t}}function C(){if(a["d"])return{};if(!m.length||g){var t=new(o["a"].extend(h))({el:document.createElement("div")});t.$on("input",(function(e){t.value=e})),m.push(t)}return m[m.length-1]}function O(t){return Object(i["a"])({},t,{overlay:t.mask||t.overlay,mask:void 0,duration:void 0})}function w(t){void 0===t&&(t={});var e=C();return e.value&&e.updateZIndex(),t=y(t),t=Object(i["a"])({},b,{},v[t.type||b.type],{},t),t.clear=function(){e.value=!1,t.onClose&&t.onClose(),g&&!a["d"]&&e.$on("closed",(function(){clearTimeout(e.timer),m=m.filter((function(t){return t!==e}));var t=e.$el.parentNode;t&&t.removeChild(e.$el),e.$destroy()}))},Object(i["a"])(e,O(t)),clearTimeout(e.timer),t.duration>0&&(e.timer=setTimeout((function(){e.clear()}),t.duration)),e}var k=function(t){return function(e){return w(Object(i["a"])({type:t},y(e)))}};["loading","success","fail"].forEach((function(t){w[t]=k(t)})),w.clear=function(t){m.length&&(t?(m.forEach((function(t){t.clear()})),m=[]):g?m.shift().clear():m[0].clear())},w.setDefaultOptions=function(t,e){"string"===typeof t?v[t]=e:Object(i["a"])(b,t)},w.resetDefaultOptions=function(t){"string"===typeof t?v[t]=null:(b=Object(i["a"])({},p),v={})},w.allowMultiple=function(t){void 0===t&&(t=!0),g=t},w.install=function(){o["a"].use(h)},o["a"].prototype.$toast=w;e["a"]=w},"9ea0":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("0261"),o=10;function s(t,e){return t>e&&t>o?"horizontal":e>t&&e>o?"vertical":""}var a=i["a"].extend({data:function(){return{direction:""}},methods:{touchStart:function(t){this.resetTouchStatus(),this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY},touchMove:function(t){var e=t.touches[0];this.deltaX=e.clientX-this.startX,this.deltaY=e.clientY-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||s(this.offsetX,this.offsetY)},resetTouchStatus:function(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0}}})},a797:function(t,e,n){},a9e2:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("c1b9");function o(t){function e(){this.binded||(t.call(this,i["b"],!0),this.binded=!0)}function n(){this.binded&&(t.call(this,i["a"],!1),this.binded=!1)}return{mounted:e,activated:e,deactivated:n,beforeDestroy:n}}},c1b9:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return r})),n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return l}));var i=n("bb85"),o=!1;if(!i["d"])try{var s={};Object.defineProperty(s,"passive",{get:function(){o=!0}}),window.addEventListener("test-passive",null,s)}catch(u){}function a(t,e,n,s){void 0===s&&(s=!1),i["d"]||t.addEventListener(e,n,!!o&&{capture:!1,passive:s})}function r(t,e,n){i["d"]||t.removeEventListener(e,n)}function c(t){t.stopPropagation()}function l(t,e){("boolean"!==typeof t.cancelable||t.cancelable)&&t.preventDefault(),e&&c(t)}},d5c2:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("header",{staticClass:"headerr"},[t._v("注册")]),n("div",{staticClass:"content"},[n("div",{staticClass:"boox"},[n("div",{staticClass:"usernamebox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"username",name:"username",placeholder:"请输入用户名"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),n("p",{staticClass:"p1",domProps:{innerHTML:t._s(t.usernametip)}})]),n("div",{staticClass:"passwordbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password",placeholder:"请输入密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("p",{staticClass:"p2",domProps:{innerHTML:t._s(t.passwordtip)}})]),n("div",{staticClass:"telbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.tel,expression:"tel"}],attrs:{type:"text",name:"tel",placeholder:"请输入手机号"},domProps:{value:t.tel},on:{input:function(e){e.target.composing||(t.tel=e.target.value)}}}),n("p",{staticClass:"p3",domProps:{innerHTML:t._s(t.teltip)}})]),n("div",{staticClass:"yz"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"clo",attrs:{type:"text",name:"code",placeholder:"请输入验证码"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),n("p",{staticClass:"p4",domProps:{innerHTML:t._s(t.texttip)}}),n("button",{staticClass:"span",attrs:{disabled:t.codeflag},on:{click:t.yzm}},[t._v(t._s(t.msg))])]),n("button",{staticClass:"register",attrs:{disabled:!t.registerflag},on:{click:t.register}},[t._v("注册")]),n("router-link",{staticStyle:{"margin-left":"2.5rem"},attrs:{to:"login",tag:"a"}},[t._v("已注册 去登陆")])],1)])])},o=[],s=(n("fa70"),n("8ed0")),a=n("2427"),r=n.n(a),c=n("0261");c["a"].use(s["a"]);var l={data:function(){return{username:"",password:"",tel:"",code:"",msg:"点击发送验证码",codeflag:!1,time:5,adminCode:""}},computed:{usernametip:function(){return""===this.username?"":this.username.length<3?'<span class="error" style="color:red;">长度不能少于3位</span>':"用户名正确"},passwordtip:function(){return""===this.password?"":this.password.length<6?'<span class="error" style="color:red;">长度不能少于6位</span>':"密码格式正确"},teltip:function(){var t=/^[1][3,4,5,7,8][0-9]{9}$/;return""===this.tel?"":t.test(this.tel)?"手机号码正确":'<span class="error" style="color:red;">手机号无效</span>'},texttip:function(){return""===this.code?"":1*this.code!==this.adminCode&&""!==this.code?"":'<a href="#" class="success">验证码正确</a>'},registerflag:function(){return"用户名正确"===this.usernametip&&"密码格式正确"===this.passwordtip&&"手机号码正确"===this.teltip&&'<a href="#" class="success">验证码正确</a>'===this.texttip?(console.log("ok"),!0):(console.log("no"),!1)},codema:function(){return"5"===this.time}},methods:{yzm:function(){var t=this;if("手机号码正确"===this.teltip){console.log("发送验证码"),this.codeflag=!0,this.msg=this.time+"后重新发送";var e=setInterval((function(){t.time--,0===t.time?(t.time=5,t.msg="点击发送验证码",t.codeflag=!1,clearInterval(e)):t.msg=t.time+" 后重新发送"}),1e3);this.sendTelCode()}else Object(s["a"])("手机号不正确")},sendTelCode:function(){var t=this;r.a.get("/api/users/sendCode?tel="+this.tel).then((function(e){"10000"===e.data.code?Object(s["a"])("该用户已注册,请直接登录"):"10005"===e.data.code?Object(s["a"])("发送验证码失败"):(t.adminCode=e.data.data,console.log(t.adminCode))}))},register:function(){var t=this;console.log("你点击了注册按钮"),r.a.post("/api/users/register",{username:this.username,tel:this.tel,password:this.password}).then((function(e){"10000"===e.data.code?(Object(s["a"])("该用户已注册，请直接登录"),t.$router.push("/login")):"10003"===e.data.code?Object(s["a"])("注册失败，请重新注册"):t.$router.back()}))}}},u=l,d=(n("3a59"),n("5511")),f=Object(d["a"])(u,i,o,!1,null,"2b742e51",null);e["default"]=f.exports},ee9e:function(t,e,n){},fa70:function(t,e,n){"use strict";n("067d"),n("ee9e"),n("3aef"),n("8ae1")}}]);
//# sourceMappingURL=chunk-be64d046.4ef8a79f.js.map