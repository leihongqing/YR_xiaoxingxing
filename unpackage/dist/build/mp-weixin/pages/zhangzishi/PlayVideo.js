(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/zhangzishi/PlayVideo"],{7009:function(e,t,n){"use strict";var r=n("8169"),o=n.n(r);o.a},8169:function(e,t,n){},b5a5:function(e,t,n){"use strict";n.r(t);var r=n("c6e0"),o=n("d0ee");for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);n("7009");var a=n("2877"),c=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,null,null);t["default"]=c.exports},bcf7:function(e,t,n){"use strict";n("4651");var r=i(n("b0ce")),o=i(n("b5a5"));function i(e){return e&&e.__esModule?e:{default:e}}Page((0,r.default)(o.default))},c5b4:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("f55d"));function o(e){return e&&e.__esModule?e:{default:e}}var i={data:function(){return{videosrc:""}},onLoad:function(t){r.default.islogin(!0),this.videosrc=t.videosrc;var n=e.createVideoContext("Videoid",this);n.requestFullScreen()},methods:{videoErrorCallback:function(t){e.showModal({content:t.target.errMsg,showCancel:!1})}}};t.default=i}).call(this,n("543d")["default"])},c6e0:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"content"},[n("video",{staticClass:"videocss",attrs:{id:"Videoid",src:e.videosrc,direction:"90",eventid:"84d6cbd4-0"},on:{error:e.videoErrorCallback}})])},o=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})},d0ee:function(e,t,n){"use strict";n.r(t);var r=n("c5b4"),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);t["default"]=o.a}},[["bcf7","common/runtime","common/vendor"]]]);