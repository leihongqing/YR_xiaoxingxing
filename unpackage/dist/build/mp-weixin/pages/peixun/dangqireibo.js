(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/peixun/dangqireibo"],{"091d":function(t,i,n){},"16bf":function(t,i,n){"use strict";n.r(i);var e=n("2692"),s=n("3b50");for(var a in s)"default"!==a&&function(t){n.d(i,t,function(){return s[t]})}(a);n("216f");var o=n("2877"),u=Object(o["a"])(s["default"],e["a"],e["b"],!1,null,null,null);i["default"]=u.exports},"216f":function(t,i,n){"use strict";var e=n("091d"),s=n.n(e);s.a},2692:function(t,i,n){"use strict";var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("view",{staticClass:"content"},[n("view",{staticClass:"uni-tx-box"},[n("view",{staticClass:"uni-user-img"},[n("image",{attrs:{src:t.baseinfo.Headimgurl,mode:""}})]),n("view",{staticClass:"textcss"},[n("text",[t._v(t._s(t.baseinfo.Truename))]),n("text",[t._v(t._s(t.baseinfo.Address))])]),n("button",{staticClass:"uni-icon",attrs:{"open-type":"share",eventid:"5077bab0-0"},on:{tap:function(i){t.onShareAppMessage()}}},[n("uni-icon",{staticClass:"fa fa-share-square-o",attrs:{mpcomid:"5077bab0-0"}})],1)],1),n("view",{staticClass:"container"},[n("view",{staticClass:"title"},t._l(t.list,function(i,e){return n("view",{key:e,class:t.activeIndex==e?"on":"",attrs:{eventid:"5077bab0-1-"+e},on:{tap:function(i){t.tabClick(e)}}},["作品"==i?n("block",[n("text",[t._v(t._s(t.zpcount))]),n("text",[t._v(t._s(i))])]):t._e(),"说说"==i?n("block",[n("text",[t._v(t._s(t.sscount))]),n("text",[t._v(t._s(i))])]):t._e()],1)})),n("view",{staticClass:"content"},[n("view",{style:{display:0!==t.activeIndex?"none":"block"}},t._l(t.topiclist,function(i,e){return n("view",{key:e,staticClass:"uni-item"},[n("image",{attrs:{src:i.pics,eventid:"5077bab0-2-"+e},on:{tap:function(n){t.bf_but(e,i.Video)}}})])})),n("button",{staticStyle:{display:"none"},attrs:{type:"primary"}},[t._v("上传作品")])],1),n("view",{style:{display:1!==t.activeIndex?"none":"block"}},[t._l(t.topiclist,function(i,e){return n("view",{key:e,staticClass:"uni-item1"},[n("view",{staticClass:"uni-info"},[n("view",{staticClass:"uni-img"},[n("image",{attrs:{src:i.HeadUrl,mode:""}})]),n("text",[t._v(t._s(i.TrueName))])]),n("view",{staticClass:"item-content"},[t._v(t._s(i.contents))]),n("view",{staticClass:"item-image",style:{display:null==i.piclist?"none":"block"}},t._l(i.piclist,function(t,i){return n("block",{key:i},[n("image",{staticClass:"user-img",attrs:{src:t,mode:""}})])})),n("view",{staticClass:"uni-icon-box"},[n("text",[t._v("15天前")]),n("view",{staticClass:"icon-item"},[n("image",{attrs:{src:0==i.Isfocus?"../../static/icon_01.png":"../../static/icon_05.png",eventid:"5077bab0-3-"+e},on:{tap:function(n){t.shoucang(i.Id,e)}}}),n("image",{attrs:{src:"../../static/icon_02.png",eventid:"5077bab0-4-"+e},on:{tap:function(i){t.onInput(e)}}})])]),n("view",{staticClass:"pinlun"},[n("view",{staticClass:"dianZan",style:{display:0==i.reply?"none":"flex"}},[n("image",{attrs:{src:"../../static/icon_02.png",mode:""}}),n("text",[t._v(t._s(i.reply))])]),n("view",{staticClass:"pinlun-in"},t._l(t.pinlunlist,function(e,s){return n("view",{key:s},[e.topicid==i.Id?n("block",[n("text",[t._v(t._s(e.TrueName)+":")]),n("text",[t._v(t._s(e.contents))])]):t._e()],1)}))]),n("view",{directives:[{name:"show",rawName:"v-show",value:1==t.inputList[e],expression:"inputList[index] == true"}],staticClass:"pinlunshuru"},[n("input",{staticClass:"plsr_input",attrs:{value:t.ssContent,placeholder:"想说点...",eventid:"5077bab0-5-"+e},on:{input:t.onKeyInput}}),n("button",{attrs:{eventid:"5077bab0-6-"+e},on:{tap:function(n){t.fabupinlun(i.Id)}}},[t._v("评论")])],1)])}),n("button",{staticClass:"but-in",staticStyle:{display:"none"},attrs:{type:"primary"}},[t._v("发表说说")])],2)])])},s=[];n.d(i,"a",function(){return e}),n.d(i,"b",function(){return s})},"3b50":function(t,i,n){"use strict";n.r(i);var e=n("5843"),s=n.n(e);for(var a in e)"default"!==a&&function(t){n.d(i,t,function(){return e[t]})}(a);i["default"]=s.a},5843:function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e,s=a(n("f55d"));function a(t){return t&&t.__esModule?t:{default:t}}function o(t,i,n){return i in t?Object.defineProperty(t,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[i]=n,t}var u=n("e3f6").dateUtils,l={data:function(){return{inputList:[],list:["作品","说说"],activeIndex:0,type:"1",topiclist:"",baseinfo:"",zpcount:0,sscount:0,pinlunlist:[],ssId:"",ssContent:"",num:10}},onLoad:function(t){s.default.islogin(!0),this.userinfo(this.type)},onPullDownRefresh:function(){t.stopPullDownRefresh(),this.userinfo(this.type)},methods:(e={tabClick:function(t){this.activeIndex=t,this.type=this.activeIndex+1,this.userinfo(this.type)},pinluntap:function(t){this.ssId=t},onInput:function(t){for(var i=0;i<this.inputList.length;i++)this.inputList[i]=!1;this.inputList[t]=!0,this.userinfo(this.type)},onKeyInput:function(t){this.ssContent=t.target.value}},o(e,"onKeyInput",function(t){this.ssContent=t.target.value}),o(e,"fabupinlun",function(i){var n=this;""!=this.ssContent&&null!=this.ssContent?t.request({url:s.default.websiteUrl+"hotlive/addreply",method:"POST",data:s.default.postdata({topicid:i,userId:s.default.getstate().userid,contents:this.ssContent,Isok:!0,Lat:0,lng:0}),success:function(i){200==i.data.code?(n.ssId="",n.ssContent="",t.showToast({icon:"none",title:i.data.info}),n.userinfo(2)):(t.showToast({icon:"none",title:i.data.info}),t.hideLoading()),"未找到登录信息"==i.data.info&&t.reLaunch({url:"/pages/login/login"})},fail:function(){t.hideLoading(),t.showToast({icon:"none",title:"网络异常,请重试！"})}}):t.showToast({icon:"none",title:"请输入评论内容!"})}),o(e,"blur_input",function(){t.pageScrollTo({scrollTop:0,duration:0})}),o(e,"bf_but",function(i,n){t.navigateTo({url:"../zhangzishi/PlayVideo?videosrc="+n})}),o(e,"shoucang",function(i,n){var e=this;t.request({url:s.default.websiteUrl+"hotlive/followtopic",method:"POST",data:s.default.postdata({uid:s.default.getstate().userid,fid:i}),success:function(i){200==i.data.code?(e.topiclist[n].Isfocus=0==e.topiclist[n].Isfocus?1:0,t.showToast({icon:"none",title:i.data.info}),t.hideLoading()):(t.showToast({icon:"none",title:i.data.info}),t.hideLoading()),t.hideLoading()},fail:function(){t.hideLoading(),t.showToast({icon:"none",title:"网络异常,请重试！"})}})}),o(e,"userinfo",function(i){var n=this,e=0;2==i&&(e=2),this.pinlunlist=[],this.topiclist="",t.showLoading({mask:!0,title:"加载中..."}),t.request({url:s.default.websiteUrl+"hotlive/hotlivelist",method:"POST",data:s.default.postdata({Ctype:2,UserId:s.default.getstate().userid,page:"1",num:this.num,rtype:i,replylist:e}),success:function(e){if(200==e.data.code){t.hideLoading(),n.baseinfo=e.data.data.baseinfo,n.topiclist=e.data.data.topiclist,1==i&&(n.zpcount=e.data.data.baseinfo.ZPcount,n.sscount=e.data.data.baseinfo.SSCount);for(var s=0;s<e.data.data.topiclist.length;s++)if(null!=e.data.data.topiclist[s].replylist)for(var a=0;a<e.data.data.topiclist[s].replylist.length;a++)n.pinlunlist.push(e.data.data.topiclist[s].replylist[a]);var o=n.topiclist.length;if(n.inputList.length!=o){n.inputList=[];for(var u=0;u<o;u++)n.inputList.push(!1)}}else t.hideLoading(),t.showToast({icon:"none",title:e.data.info})},fail:function(){t.hideLoading(),t.showToast({icon:"none",title:"网络异常,请重试！"})}})}),o(e,"setTime",function(t){var i=[];return t.forEach(function(t){i.push({Content:t.Content,ID:t.ID,CreateDate:u.format(t.CreateDate),Title:t.Title})}),i}),o(e,"onShareAppMessage",function(){return{title:"分享",path:""}}),e)};i.default=l}).call(this,n("543d")["default"])},b292:function(t,i,n){"use strict";n("4651");var e=a(n("b0ce")),s=a(n("16bf"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(s.default))}},[["b292","common/runtime","common/vendor"]]]);