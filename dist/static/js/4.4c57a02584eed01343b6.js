webpackJsonp([4],{"M+ZD":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("Dd8w"),a=e.n(i),c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"login"},[t._m(0),t._v(" "),e("div",{staticClass:"box"},[e("div",{staticClass:"left"},[e("h2",[t._v("已经注册？请登录：")]),t._v(" "),e("ul",[t._m(1),t._v(" "),t._m(2),t._v(" "),e("li",[e("span"),t._v(" "),e("p",[e("span",{class:{active:t.select},on:{click:function(s){t.select=!t.select}}},[e("Icon",{attrs:{type:t.select?"ios-checkbox":"ios-square"}}),t._v("记住我")],1),t._v(" "),e("button",{staticClass:"btn-bg"},[t._v("登陆")])])]),t._v(" "),e("li",[e("span"),t._v(" "),e("p",[e("router-link",{attrs:{to:""}},[t._v("忘记密码？")])],1)])])]),t._v(" "),e("div",{staticClass:"middle"},[t._v("- OR -")]),t._v(" "),e("div",{staticClass:"right"},[e("h2",[t._v("免费注册翱坤数据库账户")]),t._v(" "),e("router-link",{staticClass:"btn-bg",attrs:{to:"/register"}},[t._v("注册")])],1)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"msg"},[s("div",{staticClass:"header"},[this._v("翱坤数据库")]),this._v(" "),s("p",[this._v("没有翱坤数据库帐户？注册是免费的，让您有机会根据您的独特需求定制翱坤数据库平台。创建个人项目文件夹，最喜欢的出版物以便快速访问，进行个人注释等等。立即注册！")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("span",[this._v("手机号：")]),this._v(" "),s("p",[s("input",{attrs:{type:"text"}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("span",[this._v("密码：")]),this._v(" "),s("p",[s("input",{attrs:{type:"text"}})])])}]};var n=e("VU/8")({data:function(){return{select:!1}}},c,!1,function(t){e("Ubel")},"data-v-5bc8ab06",null).exports,r={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"about"},[e("div",{staticClass:"header"},[t._v("什么是翱坤数据库？")]),t._v(" "),e("div",{staticClass:"box"},[e("div",{staticClass:"left"},[t.video.play?e("div",{staticClass:"video"},[e("iframe",{attrs:{frameborder:"0",allowFullScreen:"true",src:t.video.video}})]):e("div",{staticClass:"play"},[e("img",{attrs:{src:t.video.cover,alt:""}}),t._v(" "),e("Icon",{attrs:{type:"md-arrow-dropright-circle"},on:{click:t.Play}})],1)]),t._v(" "),e("div",{staticClass:"right"},[e("ul",t._l(t.list,function(s,i){return e("li",{key:i},[e("h2",[t._v(t._s(s.class_name))]),t._v(" "),t._l(s.data,function(s,i){return e("div",{key:i,staticClass:"item"},[e("div",{staticClass:"title"},[e("Icon",{attrs:{type:"md-bookmark"}}),t._v(t._s(s.title))],1),t._v(" "),e("p",[t._v(t._s(s.desc))])])})],2)}))])])])},staticRenderFns:[]};var l=e("VU/8")({props:["list","video"],methods:{Play:function(){this.video.play=!this.video.play}}},r,!1,function(t){e("dXfW")},"data-v-7ec7750b",null).exports,o=e("NYxO"),v={components:{login:n,about:l},computed:a()({},Object(o.c)(["videoBox","aboutBox"])),methods:a()({},Object(o.b)(["getStudy","searchData"])),created:function(){this.getStudy()}},d={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"learn"},[s("bg-color",[s("y-search")],1),this._v(" "),s("bg-color",[s("login")],1),this._v(" "),s("bg-color",[s("about",{attrs:{video:this.videoBox,list:this.aboutBox}})],1)],1)},staticRenderFns:[]};var _=e("VU/8")(v,d,!1,function(t){e("Pi/v")},"data-v-1eb35a97",null);s.default=_.exports},"Pi/v":function(t,s){},Ubel:function(t,s){},dXfW:function(t,s){}});