webpackJsonp([2],{"8hXn":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Dd8w"),n=i.n(s),r={props:{nav:{type:Array,required:!0,default:null},user:{type:Object}},methods:{exit:function(){this.$emit("out")},login:function(){this.$emit("go")},linkTo:function(){sessionStorage.removeItem("key");for(var t=this.$store.state.home.linklist,e=0;e<t.length;e++){var i=t[e].item;for(var s in i){if(i.hasOwnProperty(s))i[s].type=!1}}}}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header-box"},[s("div",{staticClass:"main"},[s("div",{staticClass:"left"},[s("div",{staticClass:"logo"},[s("router-link",{attrs:{to:"/home"}},[s("img",{attrs:{src:i("hCdl"),alt:""}}),t._v(" "),s("p",[t._v("翱坤数据库")])])],1),t._v(" "),s("div",{staticClass:"nav"},t._l(t.nav,function(e,i){return s("router-link",{key:i,attrs:{to:e.link}},[s("p",{on:{click:t.linkTo}},[t._v(t._s(e.name))])])}))]),t._v(" "),t.user.name?s("div",{staticClass:"right"},[s("p",[t._v(t._s(t.user.name))]),t._v(" "),s("p",{staticClass:"gap"},[t._v("|")]),t._v(" "),s("p",{on:{click:t.exit}},[t._v("退出")])]):s("div",{staticClass:"right",on:{click:t.login}},[s("Icon",{attrs:{type:"ios-contact"}}),t._v("登录")],1)])])},staticRenderFns:[]};var o=i("VU/8")(r,a,!1,function(t){i("CzRE")},"data-v-13f3499c",null).exports,c={props:{title:{type:String,required:!0,default:null},icon:{type:Array,required:!0,default:null},footer:{type:Array,required:!0,default:null}},computed:{time:function(){return(new Date).getFullYear()}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer"},[i("div",{staticClass:"main"},[i("div",{staticClass:"top"},[i("div",{staticClass:"slogan"},[t._v(t._s(t.title))]),t._v(" "),i("div",{staticClass:"iconList"},t._l(t.icon,function(t,e){return i("Icon",{key:e,staticClass:"icon",attrs:{type:t}})}))]),t._v(" "),i("div",{staticClass:"middle"},t._l(t.footer,function(e,s){return i("router-link",{key:s,attrs:{to:e.link}},[t._v(t._s(e.name))])})),t._v(" "),i("div",{staticClass:"bottom"},[t._v("©"+t._s(t.time)+"翱坤数据库，版权所有")])])])},staticRenderFns:[]};var u=i("VU/8")(c,l,!1,function(t){i("nmvs")},"data-v-8ace744c",null).exports,v=i("NYxO"),d={components:{yHeader:o,yFooter:u},mounted:function(){this.getCompany(),this.getResource()},computed:n()({},Object(v.c)(["navList","user","title","iconList","footerList"])),methods:n()({},Object(v.b)(["exit","login","getCompany","getResource"]))},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"index"},[i("y-header",{attrs:{nav:t.navList,user:t.user},on:{go:t.login,out:t.exit}}),t._v(" "),i("div",{staticClass:"container"},[i("router-view")],1),t._v(" "),i("y-footer",{attrs:{title:t.title,footer:t.footerList,icon:t.iconList}})],1)},staticRenderFns:[]};var p=i("VU/8")(d,f,!1,function(t){i("vdkh")},"data-v-2d9bfd38",null);e.default=p.exports},CzRE:function(t,e){},hCdl:function(t,e,i){t.exports=i.p+"static/img/pic-01.c9017f9.jpeg"},nmvs:function(t,e){},vdkh:function(t,e){}});