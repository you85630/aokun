webpackJsonp([9],{"+z98":function(t,e){},o68h:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Dd8w"),o=i.n(n),l=i("NYxO"),s={data:function(){return{columns:[{title:"指令编号",key:"no",width:160,align:"center"},{title:"修正案号",key:"xzno",width:110,align:"center"},{title:"标题",key:"title",tooltip:!0},{title:"颁发单位",key:"company",tooltip:!0},{title:"参考文件",key:"ck_titile",width:170,align:"center",render:function(t,e){return t("div",[t("a",{on:{click:function(){window.open(e.row.ck_href,"_blank")}}},e.row.ck_titile)])}},{title:"生效日期",key:"time",width:110,align:"center"}]}},computed:o()({},Object(l.c)(["shzlList","allList"])),methods:o()({},Object(l.b)(["getShzl"]),{init:function(){this.getShzl(1),sessionStorage.removeItem("home")},next:function(t){this.getShzl(t)}}),created:function(){this.init()}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"airworthiness"},[e("bg-color",[e("Table",{attrs:{columns:this.columns,data:this.shzlList}}),this._v(" "),e("div",{staticClass:"page-box"},[e("Page",{attrs:{total:this.allList,"show-elevator":""},on:{"on-change":this.next}})],1)],1)],1)},staticRenderFns:[]};var c=i("VU/8")(s,a,!1,function(t){i("+z98")},"data-v-7c5230a4",null);e.default=c.exports}});