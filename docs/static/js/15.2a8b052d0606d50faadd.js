webpackJsonp([15],{hjpZ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("yp89"),s=a("7zLi"),r={name:"BasicUse",data:function(){return{document_url:"http://element-cn.eleme.io/#/zh-CN/component/table",page:{current:1,limit:4},tableData:[]}},mounted:function(){this.list()},methods:{list:function(){var t=this;Object(s.a)(this.page.current,this.page.limit,null).then(function(e){t.page=e.page,t.tableData=e.data.map(function(t){var e=t.date;return"number"==typeof e&&(e=new Date(e)),t.date=Object(l.a)(e,"yyyy-MM-dd"),t})})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-body table"},[t._m(0),t._v(" "),a("hr"),t._v(" "),t._m(1),t._v(" "),a("el-table",{ref:"basicTable",staticStyle:{width:"100%"},attrs:{"tooltip-effect":"light",data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"date",label:"Date",width:"90"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"Name",width:"78"}}),t._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"Phone",width:"90"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"Address","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"Status",width:"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:t._f("statusTransStyle")(e.row.status)}},[t._v(t._s(t._f("statusTransName")(e.row.status)))])]}}])})],1),t._v(" "),a("br"),t._v(" "),t._m(2),t._v(" "),a("el-table",{ref:"basicTable",staticStyle:{width:"100%"},attrs:{"tooltip-effect":"light",data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"date",label:"Date",width:"90"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"Name",width:"78"}}),t._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"Phone",width:"90"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"Address","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"Status",width:"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:t._f("statusTransStyle")(e.row.status)}},[t._v(t._s(t._f("statusTransName")(e.row.status)))])]}}])})],1),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("br")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{staticClass:"page-title"},[this._v("Basic Tables "),e("small",{staticClass:"text-muted"},[this._v("Refers to the table component of the\n    "),e("a",{attrs:{href:"http://element-cn.eleme.io/#/zh-CN/component/table",target:"_blank"}},[this._v("element ui")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("blockquote",[a("p",[a("code",[t._v("stripe")]),t._v("属性可以创建带斑马纹的表格。它接受一个"),a("code",[t._v("Boolean")]),t._v("，默认为"),a("code",[t._v("false")]),t._v("，设置为"),a("code",[t._v("true")]),t._v("即为启用。")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("blockquote",[a("p",[a("code",[t._v("bordered")]),t._v("默认情况下，Table 组件是不具有竖直方向的边框的，如果需要，可以使用"),a("code",[t._v("border")]),t._v("属性，它接受一个"),a("code",[t._v("Boolean")]),t._v("，设置为"),a("code",[t._v("true")]),t._v("即可启用。")])])}]},n=a("VU/8")(r,o,!1,null,null,null);e.default=n.exports}});