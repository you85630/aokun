webpackJsonp([13],{"4BVj":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{details:JSON.parse(sessionStorage.getItem("item"))}},mounted:function(){this.init()},methods:{init:function(){var t=window.outerHeight;document.getElementById("info").style.height=t+"px"}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"details"},[s("bg-color",[s("div",{staticClass:"intro"},[s("Row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[s("Col",[s("p",[s("span",[t._v("名称：")]),t._v(t._s(t.details.title))])])],1),t._v(" "),s("Row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[s("Col",[s("p",[s("span",[t._v("分类：")]),t._v(t._s(t.details.subject?t.details.subject:"暂无"))])])],1),t._v(" "),s("Row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[s("Col",{attrs:{span:"10"}},[s("p",[s("span",[t._v("大类别：")]),t._v(t._s(t.details.bigCatagoryName?t.details.bigCatagoryName:"暂无"))])]),t._v(" "),s("Col",{attrs:{span:"10",offset:"2"}},[s("p",[s("span",[t._v("小类别：")]),t._v(t._s(t.details.subCatagoryName?t.details.subCatagoryName:"暂无"))])])],1),t._v(" "),s("Row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[s("Col",{attrs:{span:"10"}},[s("p",[s("span",[t._v("办文单位：")]),t._v(t._s(t.details.company_name?t.details.company_name:"暂无"))])]),t._v(" "),s("Col",{attrs:{span:"10",offset:"2"}},[s("p",[s("span",[t._v("发文日期：")]),t._v(t._s(t.details.time))])])],1),t._v(" "),s("Row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[s("Col",{attrs:{span:"10"}},[s("p",[s("span",[t._v("文号：")]),t._v(t._s(t.details.wenhao?t.details.wenhao:"暂无"))])]),t._v(" "),s("Col",{attrs:{span:"10",offset:"2"}},[s("p",[s("span",[t._v("有效期：")]),t._v(t._s(1===t.details.status?"有效期":"其他"))])])],1)],1)]),t._v(" "),s("div",{staticClass:"info",attrs:{id:"info"}},[s("iframe",{attrs:{frameborder:"no",border:"0",src:t.details.uri}})])],1)},staticRenderFns:[]};var n=s("VU/8")(a,i,!1,function(t){s("oD7s")},"data-v-06ce1689",null);e.default=n.exports},oD7s:function(t,e){}});