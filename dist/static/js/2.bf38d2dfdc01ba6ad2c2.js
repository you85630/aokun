webpackJsonp([2],{"8hXn":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Dd8w"),s=i.n(n),r={props:{nav:{type:Array,required:!0,default:null},user:{type:Object}},methods:{exit:function(){this.$emit("out")},login:function(){this.$emit("go")},linkTo:function(){for(var t=this.$store.state.home.linklist,e=0;e<t.length;e++){var i=t[e].item;for(var n in i){if(i.hasOwnProperty(n))i[n].type=!1}}}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("div",{staticClass:"left"},[i("div",{staticClass:"logo"},[t._v("翱坤数据库")]),t._v(" "),i("div",{staticClass:"nav"},t._l(t.nav,function(e,n){return i("router-link",{key:n,attrs:{to:e.link}},[i("p",{on:{click:t.linkTo}},[t._v(t._s(e.name))])])}))]),t._v(" "),t.user.name?i("div",{staticClass:"right"},[i("p",[t._v(t._s(t.user.name))]),t._v(" "),i("p",{staticClass:"gap"},[t._v("|")]),t._v(" "),i("p",{on:{click:t.exit}},[t._v("退出")])]):i("div",{staticClass:"right",on:{click:t.login}},[i("Icon",{attrs:{type:"ios-contact"}}),t._v("登录")],1)])},staticRenderFns:[]};var o=i("VU/8")(r,a,!1,function(t){i("LtKC")},"data-v-5aa6d552",null).exports,c={props:{title:{type:String,required:!0,default:null},icon:{type:Array,required:!0,default:null},footer:{type:Array,required:!0,default:null}},computed:{time:function(){return(new Date).getFullYear()}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer"},[i("div",{staticClass:"top"},[i("div",{staticClass:"slogan"},[t._v(t._s(t.title))]),t._v(" "),i("div",{staticClass:"iconList"},t._l(t.icon,function(t,e){return i("Icon",{key:e,staticClass:"icon",attrs:{type:t}})}))]),t._v(" "),i("div",{staticClass:"middle"},t._l(t.footer,function(e,n){return i("router-link",{key:n,attrs:{to:e.link}},[t._v(t._s(e.name))])})),t._v(" "),i("div",{staticClass:"bottom"},[t._v("©"+t._s(t.time)+"翱坤数据库，版权所有")])])},staticRenderFns:[]};var u=i("VU/8")(c,l,!1,function(t){i("S4bc")},"data-v-26b70fe2",null).exports,v=i("NYxO"),d={components:{yHeader:o,yFooter:u},mounted:function(){this.getCompany(),this.getResource()},computed:s()({},Object(v.c)(["navList","user","title","iconList","footerList"])),methods:s()({},Object(v.b)(["exit","login","getCompany","getResource"]))},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"index"},[i("y-header",{attrs:{nav:t.navList,user:t.user},on:{go:t.login,out:t.exit}}),t._v(" "),i("div",{staticClass:"container"},[i("router-view")],1),t._v(" "),i("y-footer",{attrs:{title:t.title,footer:t.footerList,icon:t.iconList}})],1)},staticRenderFns:[]};var _=i("VU/8")(d,f,!1,function(t){i("L9eH")},"data-v-a77f8ef0",null);e.default=_.exports},L9eH:function(t,e){},LtKC:function(t,e){},S4bc:function(t,e){}});