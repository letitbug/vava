(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-32ce"],{CE9z:function(t,e,a){"use strict";var i=a("qJ9A");a.n(i).a},DPyL:function(t,e,a){"use strict";var i=a("sHkq");a.n(i).a},Z9V1:function(t,e,a){},nF8C:function(t,e,a){"use strict";var i=a("Z9V1");a.n(i).a},qJ9A:function(t,e,a){},sHkq:function(t,e,a){},zW9K:function(t,e,a){"use strict";a.r(e);var i=a("GQeE"),r=a.n(i),s=a("JrP0"),o=function(){var t={start:0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,end:1<arguments.length&&void 0!==arguments[1]?arguments[1]:null};return s.a.post("/statistics/pv",t).then(function(t){return t.data})},l=a("XJYT"),n={props:{chartData:{type:Array,required:!0}},data:function(){return{tooltip:{backgroundColor:"rgba(255, 255, 255, .86)",extraCssText:"box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);",padding:[7,12],textStyle:{color:"#343a40",fontSize:12}}}},computed:{isMobile:function(){return"mobile"===this.$store.getters.device},themeColor:function(){return this.$store.getters.theme.color}},mounted:function(){this.chartData&&0<this.chartData.length&&this.draw()},beforeDestroy:function(){window.removeEventListener("resize",this.resizeHandler),this.sidebar&&this.sidebar.removeEventListener("transitionend",this.resizeHandler),this.chart&&(this.chart.dispose(),this.chart=null)},methods:{draw:function(){var t=this;!this.chartData||this.chartData.length<1||(this.init(),this.resizeHandler=function(){t.chart&&t.chart.resize()},window.addEventListener("resize",this.resizeHandler),this.sidebar=document.querySelector(".va-side-wrapper"),this.sidebar&&this.sidebar.addEventListener("transitionend",this.resizeHandler))}}},c=a("7BsA"),h=a.n(c),d=a("MT78"),u=a.n(d),p={components:{ICountTo:h.a},mixins:[n],props:{title:{type:String,required:!0},category:{type:Array,required:!0},total:{type:Number,required:!1,default:void 0},chartData:{type:Array,required:!1,default:null},dataType:{type:String,required:!1,default:"normal"},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},decimals:{type:Number,required:!1,default:0},active:{type:Boolean,required:!1,default:!1}},data:function(){return{animateDuration:1500}},computed:{totalSpanClass:function(){return{"text-primary":!this.chartData&&!this.isMobile,"null-data":!this.chartData&&!this.isMobile,"text-center":this.isMobile}}},watch:{themeColor:function(){this.chart&&this.chart.setOption({color:this.themeColor,series:[{areaStyle:{color:this.areaColor()}}]})}},methods:{areaColor:function(){return this.themeColor+"30"},init:function(){this.isMobile||(this.chart||(this.chart=u.a.init(this.$refs.chartEl)),this.chart.setOption({color:[this.themeColor],tooltip:{show:!1},grid:{top:12,right:7,bottom:7,left:7},xAxis:{type:"category",boundaryGap:!1,data:this.category,show:!1,inverse:!0},yAxis:{type:"value",boundaryGap:!1,show:!1},series:[{data:this.chartData,type:"line",sampling:"average",showSymbol:!1,smooth:!0,areaStyle:{color:this.areaColor()}}]}))}}},f=(a("CE9z"),a("KHd+")),v=Object(f.a)(p,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"va-panels panel-card",class:{"border-primary":t.active&&!t.isMobile,"text-primary":t.active&&t.isMobile}},[t.isMobile?t._e():a("h6",{staticClass:"panel-card-title",class:t.active?"text-primary":"text-secondary"},[a("span",[t._v(t._s(t.title))]),t._v(" "),a("a",{staticClass:"handle-tab-detail",class:{"text-primary":t.active}},[a("i",{staticClass:"el-icon-arrow-right float-r handle-tab-detail"})])]),t._v(" "),a("i-count-to",{staticClass:"panel-card-total",class:t.totalSpanClass,attrs:{"start-val":0,"end-val":"percent"===t.dataType?100*t.total:t.total,prefix:t.prefix,suffix:t.suffix,decimals:t.decimals,duration:t.animateDuration}}),t._v(" "),t.isMobile?a("h6",{staticClass:"panel-card-title is-mobile",class:t.active?"text-primary":"text-secondary"},[t._v(t._s(t.title))]):t._e(),t._v(" "),!t.isMobile&&t.chartData?a("div",{ref:"chartEl",staticClass:"panel-card-chart"}):t._e()],1)},[],!1,null,"3b607892",null).exports,m=a("P2sY"),b=a.n(m),y=(a("xU2t"),a("3WHy")),g=a.n(y),x={mixins:[n],props:{category:{type:Array,required:!0},isPercent:{type:Boolean,required:!1,default:!1},isChartMap:{type:Boolean,required:!1,default:!1}},data:function(){return{chartTypeChanged:!1}},watch:{isChartMap:function(){this.chartTypeChanged=!0},themeColor:function(){if(this.chart){var t=this.isChartMap?{visualMap:{inRange:{color:[this.colorStart(),this.themeColor]}},series:[{},{itemStyle:{color:this.themeColor}}]}:{color:[this.themeColor],series:[{areaStyle:{color:this.areaColor()}}]};this.chart.setOption(t)}}},methods:{areaColor:function(){return this.themeColor+"30"},colorStart:function(){return g.a.convert("color("+this.themeColor+" tint(90%))")},optionsLine:function(){var e=this;return{color:[this.themeColor],grid:this.isMobile?{top:10,right:10,bottom:20,left:40}:{top:40,right:40,bottom:40,left:60},tooltip:b()({},this.tooltip,{trigger:"axis",formatter:function(t){return t[0].name+"<br />"+t[0].marker+t[0].value+(e.isPercent?"%":"")}}),xAxis:{type:"category",axisLine:{show:!1},axisTick:{show:!1},boundaryGap:!1,data:this.category,inverse:!0,axisLabel:{color:"#6a6d71"}},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{color:"#e6edf1"}},axisLabel:{color:"#6a6d71"}},axisPointer:{lineStyle:{color:"#ced4da"}},series:[{data:this.chartData,type:"line",sampling:"average",showSymbol:!1,smooth:!0,areaStyle:{color:this.areaColor()}}]}},optionsMap:function(){var t=this.chartData.map(function(t){return t.name}).slice(0,5);return{title:{text:"TOP5 COUNTRIES FOR PV",textStyle:{color:"#6a6d71",fontSize:14},left:"65.6%",top:20},tooltip:b()({},this.tooltip,{trigger:"item",formatter:function(t){return t.data?""+t.marker+t.name+": "+t.value:void 0}}),visualMap:{left:"right",min:0,max:this.chartData[0].value,inRange:{color:[this.colorStart(),this.themeColor]},text:["High","Low"],seriesIndex:0,calculable:!1,show:!1},geo:{map:"world",itemStyle:{areaColor:"#e9ebf0",borderColor:"#e9ebf0"},top:30,right:this.isMobile?0:"40%",bottom:30,left:30},grid:[{top:66,right:60,bottom:6,left:"66%",z:99}],xAxis:{type:"value",show:!1},yAxis:{type:"category",axisTick:{show:!1},axisLine:{show:!1},axisLabel:{fontSize:13,inside:!0,margin:0,verticalAlign:"bottom",padding:[0,0,16,0]},data:t,inverse:!0},series:[{type:"map",data:this.chartData,geoIndex:0},{type:"bar",barWidth:6,label:{show:!0,position:"right",color:"#343a40"},itemStyle:{barBorderRadius:3,color:this.themeColor},data:this.chartData.map(function(t){return t.value}).slice(0,5),silent:!0}]}},init:function(){this.chart||(this.chart=u.a.init(this.$el)),this.chartTypeChanged&&(this.chart.clear(),this.chartTypeChanged=!1),this.chart.setOption(this.isChartMap?this.optionsMap():this.optionsLine())}}},C=Object(f.a)(x,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"va-panels chart-detail-wrapper"})},[],!1,null,null,null).exports,w={mixins:[n],watch:{themeColor:function(){this.chart&&this.chart.setOption({color:[this.calcColors(this.themeColor)],series:[{itemStyle:{borderColor:this.themeColor},emphasis:{itemStyle:{color:this.calcColors(this.themeColor)}}}]})}},methods:{calcColors:function(t){return g.a.convert("color("+t+" tint(80%))")},init:function(){this.chart||(this.chart=u.a.init(this.$el)),this.chart.setOption({title:{text:"AGE & GENDER DISTRIBUTION",textStyle:{color:"#6a6d71",fontSize:14}},grid:{top:this.isMobile?70:60,right:0,bottom:20,left:this.isMobile?0:50},tooltip:b()({},this.tooltip,{trigger:"axis"}),color:[this.calcColors(this.themeColor),this.calcColors("#d90378"),this.calcColors("#6a6d71")],legend:{top:this.isMobile?30:0,left:this.isMobile?0:"auto",right:this.isMobile?"auto":0,data:["male","female","unknown"],itemGap:20},xAxis:{type:"category",axisTick:{show:!1},axisLine:{lineStyle:{color:"#e6edf1"}},axisLabel:{color:"#6a6d71"}},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{color:"#e6edf1"}},axisLabel:{color:"#6a6d71"}},axisPointer:{lineStyle:{color:"#ced4da"}},dataset:{dimensions:["section","male","female","unknown"],source:this.chartData},series:[{type:"bar",barWidth:12,itemStyle:{barBorderRadius:3,borderWidth:1,borderColor:this.themeColor},emphasis:{itemStyle:{color:this.calcColors(this.themeColor)}},silent:!0},{type:"bar",barWidth:12,itemStyle:{barBorderRadius:3,borderWidth:1,borderColor:"#d90378"},emphasis:{itemStyle:{color:this.calcColors("#d90378")}},silent:!0,barGap:this.isMobile?"16%":"50%"},{type:"bar",barWidth:12,itemStyle:{barBorderRadius:3,borderWidth:1,borderColor:"#adb5bd"},emphasis:{itemStyle:{color:this.calcColors("#6a6d71")}},silent:!0}]})}}},_=Object(f.a)(w,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"va-panels chart-detail-wrapper"})},[],!1,null,null,null).exports,S={props:{totalPv:{type:Number,required:!0},sources:{type:Array,required:!0},interviews:{type:Array,required:!0}},data:function(){return{tabs:["TOP6 SOURCE","TOP6 INTERVIEW"],actives:0}},methods:{calcRatio:function(t,e){return(t/e*100).toFixed(2)+"%"}}},k=(a("DPyL"),{name:"Dashboard",metaInfo:{title:"Dashboard"},components:{ChartTabs:v,ChartDetails:C,ChartAges:_,TrafficAnalysis:Object(f.a)(S,function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"va-panels",staticStyle:{height:"400px"}},[i("div",{staticClass:"traffic-tab"},a._l(a.tabs,function(t,e){return i("span",{key:e,staticClass:"traffic-tab-item",class:{active:e===a.actives},on:{click:function(t){a.actives=e}}},[a._v("\n      "+a._s(t)+"\n    ")])}),0),a._v(" "),i("el-table",{attrs:{data:0===a.actives?a.sources:a.interviews,"default-sort":{prop:"pv",order:"descending"},size:"large"}},[i("el-table-column",{attrs:{prop:"url",label:"URL","show-overflow-tooltip":""},scopedSlots:a._u([{key:"default",fn:function(t){return[0===a.actives?[i("a",{staticClass:"link-theme",attrs:{target:"_blank",href:"https://"+t.row.url}},[a._v(a._s(t.row.url))])]:[i("router-link",{staticClass:"link-theme",attrs:{to:t.row.url}},[a._v(a._s(t.row.url))])]]}}])}),a._v(" "),i("el-table-column",{attrs:{prop:"pv",label:"PV",width:"90"}}),a._v(" "),i("el-table-column",{attrs:{prop:"ratio",label:"RATIO",width:"70",align:"right"},scopedSlots:a._u([{key:"default",fn:function(t){return[a._v(a._s(a.calcRatio(t.row.pv,a.totalPv)))]}}])})],1)],1)},[],!1,null,"6442cd90",null).exports},data:function(){return{dateRange:31,datePreset:[31,61,92,183,365],profilePreset:["pv","sales"],category:[],data:{pv:{total:0,data:[]},uv:{total:0,data:[]},cvr:{total:0,data:[],dataType:"percent",suffix:" %",decimals:2},countries:{total:0,data:[],top5:[]}},activeIndex:0,detailData:[],attach:{ages:[],sources:[],interviews:[]}}},computed:{isMobile:function(){return"mobile"===this.$store.getters.device},panelGutter:function(){return this.isMobile?0:15}},mounted:function(){this.requestPv()},updated:function(){this.checkDetails(),this.$refs.chartAges.draw()},methods:{checkDetails:function(){this.detailData=this.data[r()(this.data)[this.activeIndex]].data,this.$refs.chartDetails.draw()},requestPv:function(){var e=this;this.loadingInstance=l.Loading.service({lock:!0,text:"loading...",background:"rgba(255, 255, 255, .5)"}),o().then(function(t){e.loadingInstance.close(),e.data.pv.total=t.totalPV,e.data.uv.total=t.totalUV,e.data.cvr.total=t.averageCVR,e.data.countries.total=t.totalArea,t.data.forEach(function(t){e.category.push(t.date),e.data.pv.data.push(t.pv),e.data.uv.data.push(t.uv),e.data.cvr.data.push((100*t.cvr).toFixed(2))}),e.data.countries.data=t.areas,e.attach.ages=t.ages,e.attach.sources=t.traffics.source,e.attach.interviews=t.traffics.interview,e.isMobile||e.$refs.panel_chart.forEach(function(t){t.draw()})})}}}),D=(a("nF8C"),Object(f.a)(k,function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"va-body-container"},[a.isMobile?a._e():i("h1",{staticClass:"dashboard-title"},[i("va-icon",{staticClass:"text-primary",attrs:{icon:"chart-dashboard"}}),a._v(" "),i("span",[a._v(a._s(a.$t("router.dashboard")))]),a._v(" "),i("span",{staticClass:"float-r dashboard-filters"},[i("el-select",{attrs:{placeholder:"Your Profile",value:""}},a._l(a.profilePreset,function(t){return i("el-option",{key:t,attrs:{label:a.$t("dashboard.filters."+t),value:t,disabled:""}})}),1),a._v(" "),i("el-select",{model:{value:a.dateRange,callback:function(t){a.dateRange=t},expression:"dateRange"}},a._l(a.datePreset,function(t){return i("el-option",{key:t,attrs:{label:a.$t("dashboard.filters."+t),value:t}})}),1)],1)],1),a._v(" "),i("el-row",{staticClass:"panel-groups",attrs:{gutter:a.panelGutter}},[a._l(Object.keys(a.data),function(t,e){return[i("el-col",{key:t,attrs:{xs:6,sm:6,lg:6}},[i("chart-tabs",{ref:"panel_chart",refInFor:!0,attrs:{title:a.$t("dashboard."+t),category:a.category,total:a.data[t].total,"chart-data":"countries"!==t?a.data[t].data:void 0,"data-type":a.data[t].dataType,suffix:a.data[t].suffix,decimals:a.data[t].decimals,active:e===a.activeIndex},nativeOn:{click:function(t){a.activeIndex=e}}})],1)]})],2),a._v(" "),i("chart-details",{ref:"chartDetails",attrs:{"chart-data":a.detailData,category:a.category,"is-percent":2===a.activeIndex,"is-chart-map":3===a.activeIndex}}),a._v(" "),i("el-row",{staticStyle:{"margin-top":"15px"},attrs:{gutter:15}},[i("el-col",{staticStyle:{"margin-bottom":"15px"},attrs:{md:24,lg:16}},[i("chart-ages",{ref:"chartAges",attrs:{"chart-data":a.attach.ages}})],1),a._v(" "),i("el-col",{staticStyle:{"margin-bottom":"15px"},attrs:{md:24,lg:8}},[i("traffic-analysis",{attrs:{"total-pv":a.data.pv.total,sources:a.attach.sources,interviews:a.attach.interviews}})],1)],1)],1)},[],!1,null,"8685f316",null));e.default=D.exports}}]);