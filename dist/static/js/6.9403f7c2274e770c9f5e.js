webpackJsonp([6],{QBnV:function(t,e){},o68h:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Dd8w"),s=n.n(a),i=n("NYxO"),l={data:function(){return{status:!0,headline:["指令编号","修正案号","标题","颁发单位","参考文件","生效日期"]}},computed:s()({},Object(i.c)(["shzlList","allList"]),{tablePage:function(){return{all:Math.ceil(this.allList/10),active:1}}}),methods:s()({},Object(i.b)(["getShzl"]),{init:function(){this.getShzl(1)},nowPage:function(t){this.tablePage.active=t,this.status=!1,this.$nextTick(function(){this.status=!0}),this.getShzl(t)}}),mounted:function(){this.init()}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"airworthiness"},[n("bg-color",[n("table",{staticClass:"table"},[n("tr",t._l(t.headline,function(e,a){return n("th",{key:a,staticClass:"btn-bg"},[t._v(t._s(e))])})),t._v(" "),t._l(t.shzlList,function(e,a){return n("tr",{key:a},[n("td",[t._v(t._s(e.no))]),t._v(" "),n("td",[t._v(t._s(e.xzno))]),t._v(" "),n("td",[t._v(t._s(e.title))]),t._v(" "),n("td",[t._v(t._s(e.company))]),t._v(" "),n("td",[n("a",{attrs:{href:e.pdflink,target:"_blank"}},[t._v(t._s(e.pdfname))])]),t._v(" "),n("td",[t._v(t._s(e.time))])])})],2),t._v(" "),t.status?n("div",{staticClass:"page"},[n("y-page",{attrs:{page:t.tablePage},on:{"on-click":t.nowPage}})],1):t._e()])],1)},staticRenderFns:[]};var o=n("VU/8")(l,c,!1,function(t){n("QBnV")},"data-v-efaadcd2",null);e.default=o.exports}});