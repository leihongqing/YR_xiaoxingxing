(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/userinfo/userinfo"],{"04b6":function(t,i,n){"use strict";var e=n("75ab"),a=n.n(e);a.a},"75ab":function(t,i,n){},"80ef":function(t,i,n){"use strict";var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("view",{staticClass:"content"},[n("view",{staticClass:"uni-info-title"},[n("view",{staticClass:"uni-user-img"},[n("image",{attrs:{src:t.info.Headimgurl}})]),n("view",{staticClass:"uni-user-text"},[n("view",{style:{display:t.postIds>0?"none":"block"}},[t._v("姓名:"+t._s(t.info.TrueName))]),n("view",{style:{display:0==t.postIds?"none":"block"}},[t._v("姓名:"+t._s(t.info.Principal))]),n("view",{staticClass:"uni-user-dz"},[t._v("地址:"+t._s(t.info.Sheng)+t._s(t.info.Shi)+t._s(t.info.Qu))]),n("view",{style:{display:0==t.postIds?"none":"block"}},[t._v("电话:"+t._s(t.info.Phone))]),n("view",{style:{display:t.postIds>0?"none":"block"}},[t._v("校长:"+t._s(t.info.Principal))]),n("view",{staticClass:"uni-bj-but uni-bm",attrs:{eventid:"05e9470a-0"},on:{tap:t.bianji_but}},[t._v("编辑信息")]),n("view",{style:{display:2==t.roleIds?"none":"inline-block"}},[n("view",{staticClass:"uni-bj-but",attrs:{eventid:"05e9470a-1"},on:{tap:t.baominglist_but}},[t._v("报名信息")])])])]),n("view",{staticClass:"uni-jf-box uni-back"},[n("text",{},[t._v("积分："+t._s(t.info.Integral))]),n("view",{staticClass:"uni-bj-but uni-bj-but1",attrs:{eventid:"05e9470a-2"},on:{tap:t.DH_but}},[t._v("积分兑换")]),n("view",{staticClass:"uni-bj-but uni-bj-but1",attrs:{eventid:"05e9470a-3"},on:{tap:t.dd_but}},[t._v("订单查询")])]),n("view",{staticClass:"uni-jf-box uni-back",style:{display:0==t.postIds?"none":"block"}},[n("text",{attrs:{id:"jm"}},[t._v("加盟时间："+t._s(t.info.JoinTime))])]),n("view",{staticClass:"uni-dw-box uni-back"},[n("text",[t._v("段位：")]),t._l(t.items,function(i,e){return n("view",{key:e,staticClass:"uni-lv-icon"},[n("uni-icon",{class:t.info.Level>=i?"icon4":"icon3",attrs:{mpcomid:"05e9470a-0-"+e}}),n("text",[t._v("LV"+t._s(i))])],1)})],2),n("view",{staticClass:"uni-ry-box uni-back"},[t._m(0),n("view",{staticClass:"cart",attrs:{hidden:t.iscart}},[n("view",[t._v("暂未获得荣誉，继续加油哦")])]),t._l(t.rongyulist,function(i,e){return n("view",{key:e,staticClass:"uni-ry-bt uni-ry-x",attrs:{hidden:!t.iscart}},[n("view",{},[t._v(t._s(i.CurriculumName))]),n("view",[n("uni-icon",{class:i.CurriculumLeavel>=1?"icon6":"icon5",attrs:{mpcomid:"05e9470a-1-"+e}})],1),n("view",[n("uni-icon",{class:i.CurriculumLeavel>=2?"icon7":"icon5",attrs:{mpcomid:"05e9470a-2-"+e}})],1),n("view",[n("uni-icon",{class:i.CurriculumLeavel>=3?"icon8":"icon5",attrs:{mpcomid:"05e9470a-3-"+e}})],1)])})],2),n("button",{staticClass:"uni-bc-but",attrs:{eventid:"05e9470a-4"},on:{tap:t.logout}},[t._v("退出登录")]),n("view",{staticClass:"ly-icon",attrs:{eventid:"05e9470a-5"},on:{tap:function(i){t.zxMessage()}}},[n("image",{attrs:{src:"../../static/user-icon.png",mode:""}})])],1)},a=[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("view",{staticClass:"uni-ry-bt"},[n("view",{},[t._v("荣誉:")]),n("view",{},[t._v("初")]),n("view",{},[t._v("进")]),n("view",{},[t._v("高")])])}];n.d(i,"a",function(){return e}),n.d(i,"b",function(){return a})},c7a0:function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=a(n("f55d"));function a(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{info:{},Levels:"",items:[1,2,3,4,5,6,7],rongyulist:{},postIds:"",iscart:!1,roleIds:2}},onLoad:function(){this.roleIds=e.default.getstate().roleIds,e.default.islogin(!0),this.userinfo()},onShow:function(){this.userinfo()},methods:{logout:function(){e.default.logout(),t.showToast({icon:"none",title:"您已退出登陆"})},baominglist_but:function(){t.navigateTo({url:"baominglist"})},userinfo:function(){var i=this;t.showLoading({mask:!0,title:"加载中..."}),t.request({url:e.default.websiteUrl+"user/getuserinfo",method:"POST",data:e.default.postdata({type:"1"}),success:function(n){200==n.data.code?(t.hideLoading(),i.info=n.data.data.baseinfo,-1==i.info.Headimgurl.indexOf("http")&&(i.info.Headimgurl=e.default.imgurl+i.info.Headimgurl),i.rongyulist=n.data.data.rongyulist,i.rongyulist.length>0?i.iscart=!0:i.iscart=!1,i.Levels=i.info.Level+1,i.postIds=e.default.getstate().postIds,null==i.info.Sheng&&(i.info.Sheng=""),null==i.info.Shi&&(i.info.Shi=""),null==i.info.Qu&&(i.info.Qu="")):(t.showToast({icon:"none",title:n.data.info}),t.hideLoading(),"未找到登录信息"==n.data.info&&t.reLaunch({url:"/pages/login/login"}))},fail:function(){t.hideLoading(),t.showToast({icon:"none",title:"网络异常,请重试！"})}})},DH_but:function(){t.navigateTo({url:"duihuan"})},dd_but:function(){t.navigateTo({url:"MakeDeal"})},bianji_but:function(){t.navigateTo({url:"bianjixinxi"})},zxMessage:function(){t.navigateTo({url:"message"})}}};i.default=s}).call(this,n("543d")["default"])},f7a0:function(t,i,n){"use strict";n("4651");var e=s(n("b0ce")),a=s(n("fb6b"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(a.default))},f817:function(t,i,n){"use strict";n.r(i);var e=n("c7a0"),a=n.n(e);for(var s in e)"default"!==s&&function(t){n.d(i,t,function(){return e[t]})}(s);i["default"]=a.a},fb6b:function(t,i,n){"use strict";n.r(i);var e=n("80ef"),a=n("f817");for(var s in a)"default"!==s&&function(t){n.d(i,t,function(){return a[t]})}(s);n("04b6");var o=n("2877"),u=Object(o["a"])(a["default"],e["a"],e["b"],!1,null,null,null);i["default"]=u.exports}},[["f7a0","common/runtime","common/vendor"]]]);