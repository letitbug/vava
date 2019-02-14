(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3aee"],{"1F8I":function(t,a,e){"use strict";e.r(a);var s=e("QbLZ"),i=e.n(s),n=e("Rle8"),r=e("7BsA"),l=e.n(r),o={name:"CountTo",metaInfo:{title:"CountTo"},directives:{Highlight:n.a},components:{ICountTo:l.a},data:function(){return{params:{start:0,end:12580,duration:2e3,decimals:2,decimal:".",separator:",",prefix:"$",suffix:"",easing:!0},paramsOrigin:{}}},created:function(){this.paramsOrigin=i()({},this.params)},methods:{handleSwap:function(){var t=this.params.end;this.params.end=this.params.start,this.params.start=t},handleStart:function(){this.$refs.countToViewer.reset(),this.$refs.countToViewer.start(function(){console.log("Clicked start button")})},handlePauseResume:function(){this.$refs.countToViewer.pauseResume()},handleReset:function(){this.$refs.countToViewer.reset()}}},u=(e("Fqc4"),e("KHd+")),c=Object(u.a)(o,function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"va-body-container"},[e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e("code",{staticClass:"html",domProps:{innerHTML:a._s(a.$t("countTo.intro"))}})]),a._v(" "),e("div",{staticClass:"text-center text-primary"},[e("i-count-to",{ref:"countToViewer",staticClass:"va-count-up",attrs:{"start-val":+a.params.start,"end-val":+a.params.end,duration:a.params.duration,decimals:a.params.decimals,separator:a.params.separator,prefix:a.params.prefix,suffix:a.params.suffix,autoplay:!0}})],1),a._v(" "),e("hr"),a._v(" "),e("dl",{staticClass:"dl-horizontal",staticStyle:{"line-height":"32px"}},[e("dt",[a._v(a._s(a.$t("countTo.params")))]),a._v(" "),e("dd",[e("span",{staticClass:"form-params"},[e("el-input",{staticStyle:{width:"70px"},attrs:{type:"number",size:"small"},model:{value:a.params.start,callback:function(t){a.$set(a.params,"start",t)},expression:"params.start"}}),a._v(" Start\n      ")],1),a._v(" "),e("span",{staticClass:"form-params"},[e("el-button",{attrs:{type:"text",size:"small"},on:{click:a.handleSwap}},[e("i",{staticClass:"el-icon-sort",staticStyle:{transform:"rotate(90deg)"}})])],1),a._v(" "),e("span",{staticClass:"form-params"},[e("el-input",{staticStyle:{width:"70px"},attrs:{type:"number",size:"small"},model:{value:a.params.end,callback:function(t){a.$set(a.params,"end",t)},expression:"params.end"}}),a._v(" End\n      ")],1),a._v(" "),e("span",{staticClass:"form-params"},[e("el-input",{staticStyle:{width:"70px"},attrs:{type:"number",size:"small"},model:{value:a.params.decimals,callback:function(t){a.$set(a.params,"decimals",t)},expression:"params.decimals"}}),a._v(" Decimals\n      ")],1),a._v(" "),e("span",{staticClass:"form-params"},[e("el-input",{staticStyle:{width:"70px"},attrs:{type:"number",size:"small"},model:{value:a.params.duration,callback:function(t){a.$set(a.params,"duration",t)},expression:"params.duration"}}),a._v(" Duration\n      ")],1)]),a._v(" "),e("dd",[e("span",{staticClass:"form-params"},[e("el-checkbox",{model:{value:a.params.easing,callback:function(t){a.$set(a.params,"easing",t)},expression:"params.easing"}},[a._v("Use easing")])],1),a._v(" "),e("span",{staticClass:"form-params"},[e("el-input",{staticStyle:{width:"70px"},attrs:{size:"small"},model:{value:a.params.separator,callback:function(t){a.$set(a.params,"separator",t)},expression:"params.separator"}}),a._v(" Separator\n      ")],1),a._v(" "),e("span",{staticClass:"form-params"},[e("el-input",{staticStyle:{width:"70px"},attrs:{size:"small"},model:{value:a.params.prefix,callback:function(t){a.$set(a.params,"prefix",t)},expression:"params.prefix"}}),a._v(" Prefix\n      ")],1),a._v(" "),e("span",{staticClass:"form-params"},[e("el-input",{staticStyle:{width:"70px"},attrs:{size:"small"},model:{value:a.params.suffix,callback:function(t){a.$set(a.params,"suffix",t)},expression:"params.suffix"}}),a._v(" Suffix\n      ")],1)])]),a._v(" "),e("hr"),a._v(" "),e("dl",{staticClass:"dl-horizontal",staticStyle:{"line-height":"32px"}},[e("dt",[a._v(a._s(a.$t("countTo.methods")))]),a._v(" "),e("dd",[e("span",{staticClass:"form-params"},[e("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:a.handleStart}},[a._v("\n          "+a._s(a.$t("countTo.start"))+"\n        ")])],1),a._v(" "),e("span",{staticClass:"form-params"},[e("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:a.handlePauseResume}},[a._v("\n          "+a._s(a.$t("countTo.pauseResume"))+"\n        ")])],1),a._v(" "),e("span",{staticClass:"form-params"},[e("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:a.handleReset}},[a._v("\n          "+a._s(a.$t("countTo.reset"))+"\n        ")])],1)])])])},[],!1,null,"4627f7b3",null);a.default=c.exports},"7BsA":function(t,a,e){t.exports=function(e){function s(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}var i={};return s.m=e,s.c=i,s.i=function(t){return t},s.d=function(t,a,e){s.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:e})},s.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="/dist/",s(s.s=2)}([function(t,a,e){var s=e(4)(e(1),e(5),null,null);t.exports=s.exports},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(3);a.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return 0<=t}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,a,e,s){return e*(1-Math.pow(2,-10*t/s))*1024/1023+a}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,s.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,s.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,s.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,s.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t);var a=(this.timestamp=t)-this.startTime;this.remaining=this.localDuration-a,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(a,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(a,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(a/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(a/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),a<this.localDuration?this.rAF=(0,s.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var a=(t+="").split("."),e=a[0],s=1<a.length?this.decimal+a[1]:"",i=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;i.test(e);)e=e.replace(i,"$1"+this.separator+"$2");return this.prefix+e+s+this.suffix}},destroyed:function(){(0,s.cancelAnimationFrame)(this.rAF)}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s,i=e(0),n=(s=i)&&s.__esModule?s:{default:s};a.default=n.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",n.default)},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=0,s="webkit moz ms o".split(" "),n=void 0,r=void 0;if("undefined"==typeof window)a.requestAnimationFrame=n=function(){},a.cancelAnimationFrame=r=function(){};else{a.requestAnimationFrame=n=window.requestAnimationFrame,a.cancelAnimationFrame=r=window.cancelAnimationFrame;for(var l=void 0,o=0;o<s.length&&(!n||!r);o++)l=s[o],a.requestAnimationFrame=n=n||window[l+"RequestAnimationFrame"],a.cancelAnimationFrame=r=r||window[l+"CancelAnimationFrame"]||window[l+"CancelRequestAnimationFrame"];n&&r||(a.requestAnimationFrame=n=function(t){var a=(new Date).getTime(),e=Math.max(0,16-(a-i)),s=window.setTimeout(function(){t(a+e)},e);return i=a+e,s},a.cancelAnimationFrame=r=function(t){window.clearTimeout(t)})}a.requestAnimationFrame=n,a.cancelAnimationFrame=r},function(t,a){t.exports=function(t,a,e,s){var i,n=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(n=(i=t).default);var l="function"==typeof n?n.options:n;if(a&&(l.render=a.render,l.staticRenderFns=a.staticRenderFns),e&&(l._scopeId=e),s){var o=Object.create(l.computed||null);Object.keys(s).forEach(function(t){var a=s[t];o[t]=function(){return a}}),l.computed=o}return{esModule:i,exports:n,options:l}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;return(t._self._c||a)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},Fqc4:function(t,a,e){"use strict";var s=e("GITf");e.n(s).a},GITf:function(t,a,e){},Rle8:function(t,a,e){"use strict";var s=e("FIf5"),i=e.n(s),n=(e("LEOp"),{bind:function(t){t.querySelectorAll("pre code").forEach(function(t){i.a.highlightBlock(t)})}});e.d(a,"a",function(){return n})}}]);