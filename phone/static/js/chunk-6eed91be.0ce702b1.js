(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6eed91be"],{3057:function(e,a,s){"use strict";s.r(a);var t=function(){var e=this,a=e._self._c;return a("hc",{attrs:{headername:"困境儿童核查",jz:"kjetjz"}})},c=[],i=s("d9c5"),n={data(){return{}},methods:{},components:{hc:i["a"]}},o=n,r=s("2877"),h=Object(r["a"])(o,t,c,!1,null,null,null);a["default"]=h.exports},"828a":function(e,a,s){},"8925c":function(e,a,s){"use strict";s("828a")},d9c5:function(e,a,s){"use strict";var t=function(){var e=this,a=e._self._c;return a("div",{staticClass:"dbhc"},[a("header",[e._v(" "+e._s(e.headername)+" ")]),a("main",[a("van-search",{attrs:{"show-action":"",placeholder:"请输入姓名/身份证号码"},on:{search:e.onSearch},scopedSlots:e._u([{key:"action",fn:function(){return[a("div",{on:{click:e.onSearch}},[e._v("搜索")])]},proxy:!0}]),model:{value:e.searchValue,callback:function(a){e.searchValue=a},expression:"searchValue"}}),a("van-pull-refresh",{on:{refresh:e.onRefresh},model:{value:e.refreshing,callback:function(a){e.refreshing=a},expression:"refreshing"}},[a("van-list",{attrs:{finished:e.finished,"finished-text":"没有更多了"},on:{load:e.onLoad},model:{value:e.loading,callback:function(a){e.loading=a},expression:"loading"}},e._l(e.items,(function(s,t){return a("div",{key:t,staticClass:"hc",on:{click:function(a){return e.routerPush(s.ab_id)}}},[a("div",{staticClass:"hcHeader"},[a("div",{staticClass:"hcHeader1"},[a("div",{staticClass:"circle",style:{backgroundColor:s.bgcolor}}),a("div",{staticStyle:{color:"#333333"}},[e._v(e._s(s.ab_ex3)+"("+e._s(s.ab_ex13)+")")])]),a("div",{staticStyle:{color:"#666666"}},[e._v(e._s(s.ab_ex15))])]),a("div",{staticClass:"hcHeader2"},[a("div",[e._v("是否完成线下核查："+e._s(s.ab_ex96?s.ab_ex96:"未完成"))])]),a("div",{staticClass:"hcHeader2"},[a("div",[e._v("联系电话："+e._s(s.ab_ex28))]),a("div",{staticStyle:{"margin-left":"10px"}},[e._v("家庭人口："+e._s(s.ab_ex5))])]),a("div",{staticClass:"hcHeader3"},[e._v("现住地："+e._s(s.ab_ex11))]),a("div",{staticClass:"hcHeader4"},[e._v("申请日期："+e._s(s.ab_dat14))])])})),0)],1)],1)])},c=[],i=s("b775"),n=s("fa7d"),o={name:"hc",props:["headername","jz"],data(){return{items:[],page:"1",ab_ex15:"",ab_ex96:"",ab_ex3:"",ab_ex13:"",bgcolor:"#bcbcbc",loading:!1,finished:!1,refreshing:!1,searchValue:"",searchName:"",searchIdCard:""}},created(){},watch:{$route:{handler(e,a){console.log(sessionStorage.getItem("token")),this.loadData({page:this.page.toString(),sqlwhere:""}).then(e=>{console.log(e);for(let a=0;a<e.length;a++)this.$set(this.items,a,{ab_ex15:unescape(e[a].ab_ex15),ab_ex3:unescape(e[a].ab_ex3),ab_ex13:unescape(e[a].ab_ex13),ab_ex28:unescape(e[a].ab_ex28),ab_ex5:unescape(e[a].ab_ex5),ab_ex11:unescape(e[a].ab_ex11),ab_dat14:unescape(e[a].ab_dat14),bgcolor:"申请"!=unescape(e[a].ab_ex15)?"#bcbcbc":"#48b4fd"}),console.log(this.items)}).catch(e=>{console.log(e)})},deep:!0,immediate:!0}},methods:{loadData(e){return Object(i["a"])({method:"post",url:"/social/assistanceWeixin/WXListByPage?stype="+escape(escape(this.$route.query.stype)),data:e,headers:{token:sessionStorage.getItem("token")}})},onLoad(){this.refreshing&&(this.items=[],this.page="1"),this.loadData({page:this.page.toString(),sqlwhere:"",ab_ex3:this.searchName,ab_ex7:this.searchIdCard}).then(e=>{this.refreshing=!1,console.log(e);for(let a=0;a<e.length;a++){let s=parseInt(e[a].rownumber)-1;console.log(s),this.$set(this.items,s,{ab_ex15:unescape(e[a].ab_ex15),ab_ex96:unescape(e[a].ab_ex96),ab_ex3:unescape(e[a].ab_ex3),ab_ex13:unescape(e[a].ab_ex13),ab_ex28:unescape(e[a].ab_ex28),ab_ex5:unescape(e[a].ab_ex5),ab_ex11:unescape(e[a].ab_ex11),ab_dat14:unescape(e[a].ab_dat14),ab_id:e[a].ab_id,bgcolor:"申请"!=unescape(e[a].ab_ex15)?"#bcbcbc":"#48b4fd"})}this.loading=!1,console.log(this.items),this.page++,console.log(this.page),0==e.length&&(this.finished=!0)}).catch(e=>{console.log(e)})},onRefresh(){this.finished=!1,this.loading=!0,this.onLoad()},onSearch(){this.refreshing=!0,this.searchIdCard="",this.searchName="",""==Object(n["e"])(this.searchValue)?this.searchIdCard=this.searchValue:this.searchName=this.searchValue,this.onRefresh()},routerPush(e){console.log(e),console.log(this.$route.query.stype),this.$router.push({path:"/"+this.jz,query:{sId:e,type:this.$route.query.stype}})}}},r=o,h=(s("8925c"),s("2877")),l=Object(h["a"])(r,t,c,!1,null,"049919b8",null);a["a"]=l.exports}}]);