webpackJsonp([11],{"4BVj":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={data:function(){return{details:JSON.parse(sessionStorage.getItem("item"))}},mounted:function(){this.init()},methods:{init:function(){var t=document.getElementById("iframeId"),e=document.documentElement.clientHeight;t.style.minHeight=e+"px"}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"details"},[a("bg-color",[a("div",{staticClass:"intro btn-bg"},[a("p",[a("span",[t._v("名称：")]),t._v(t._s(t.details.title))]),t._v(" "),a("p",[a("span",[t._v("分类：")]),t._v(t._s(t.details.subject?t.details.subject:"暂无"))]),t._v(" "),a("div",{staticClass:"line"},[a("p",[a("span",[t._v("大类别：")]),t._v(t._s(t.details.bigCatagoryName?t.details.bigCatagoryName:"暂无"))]),t._v(" "),a("p",[a("span",[t._v("小类别：")]),t._v(t._s(t.details.subCatagoryName?t.details.subCatagoryName:"暂无"))])]),t._v(" "),a("div",{staticClass:"line"},[a("p",[a("span",[t._v("办文单位：")]),t._v(t._s(t.details.company_name?t.details.company_name:"暂无"))]),t._v(" "),a("p",[a("span",[t._v("发文日期：")]),t._v(t._s(t.details.time))])]),t._v(" "),a("div",{staticClass:"line"},[a("p",[a("span",[t._v("文号：")]),t._v(t._s(t.details.wenhao?t.details.wenhao:"暂无"))]),t._v(" "),a("p",[a("span",[t._v("有效期：")]),t._v(t._s(1===t.details.status?"有效期":"其他"))])])])]),t._v(" "),a("div",{staticClass:"info"},[a("iframe",{attrs:{id:"iframeId",frameborder:"no",border:"0",src:t.details.uri}})])],1)},staticRenderFns:[]};var n=a("VU/8")(s,i,!1,function(t){a("NRTB")},"data-v-242b1064",null);e.default=n.exports},NRTB:function(t,e){}});