webpackJsonp([8],{hrcb:function(t,e){},vbDQ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Dd8w"),i=n.n(a),s=n("NYxO"),c={data:function(){return{now:"0",open:"0"}},computed:i()({},Object(s.c)(["contoryList","cdetailList"])),methods:i()({},Object(s.b)(["getContory","getCdetail"]),{init:function(){this.getContory()},cdetail:function(t){this.now=t,this.getCdetail(t)}}),created:function(){this.init(),this.cdetail(4e4)}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relation"},[n("bg-color",[n("Collapse",{attrs:{accordion:""},model:{value:t.open,callback:function(e){t.open=e},expression:"open"}},t._l(t.contoryList,function(e,a){return n("Panel",{key:a},[t._v("\n          "+t._s(e.areaName)+"\n          "),n("div",{staticClass:"content",attrs:{slot:"content"},slot:"content"},t._l(e.data,function(a,i){return n("p",{key:i,class:{active:a.id===t.now},on:{click:function(n){t.cdetail(a.id,e.area_id)}}},[t._v(t._s(a.name))])}))])}))],1),t._v(" "),t.cdetailList.areaName?n("div",{staticClass:"contory"},[n("div",{staticClass:"name"},[n("p",[n("span",[t._v("国家：")]),t._v(t._s(t.cdetailList.name))]),t._v(" "),n("p",[n("span",[t._v("地区：")]),t._v(t._s(t.cdetailList.areaName))])]),t._v(" "),n("div",{staticClass:"info"},[n("h2",[t._v("附件：")]),t._v(" "),t._l(t.cdetailList.pdflist,function(e,a){return n("p",{key:a},[n("a",{attrs:{href:e.link}},[t._v(t._s(e.name))])])})],2)]):t._e()],1)},staticRenderFns:[]};var r=n("VU/8")(c,o,!1,function(t){n("hrcb")},"data-v-73ddadef",null);e.default=r.exports}});