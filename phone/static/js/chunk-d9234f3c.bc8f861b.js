(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d9234f3c"],{"3f37":function(e,t,s){},"4b46":function(e,t,s){"use strict";s("3f37")},b775:function(e,t,s){"use strict";var o=s("bc3a"),a=s.n(o),l=s("a18c");let i=Object({NODE_ENV:"production",BASE_URL:"/phone/"}).baseURL;const r=a.a.create({baseURL:i,timeout:3e4});r.interceptors.request.use(e=>(sessionStorage.token&&(e.headers.token=sessionStorage.token),e),e=>{console.log(e),Promise.reject(e)}),r.interceptors.response.use(e=>"blob"==e.config.responseType?200==e.status?e:Promise.reject(error):200===e.status?e.data:407!==e.status?Promise.reject("error1"):void 0,e=>{if(console.log("err"+e),console.log(e.response),e.response)switch(e.response.data.message){case"401":console.log("token过期了，需要重新登录"),l["a"].replace({path:"/login",query:{redirect:l["a"].currentRoute.fullPath}})}return Promise.reject(e.response.data)}),t["a"]=r},f06d:function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"infinite-list-wrapper",staticStyle:{overflow:"auto"},attrs:{model:e.helpData,"infinite-scroll-immediate-check":"true"}},[e._m(0),t("div",{staticClass:"select-list"},[t("div",[t("span",[e._v("街镇：")]),t("select",{staticStyle:{width:"60%",border:"0","background-color":"#fff",padding:"2px 10px","border-radius":"2px","box-sizing":"border-box"},attrs:{id:"select1"},domProps:{value:e.select1},on:{change:function(t){return e.fn()}}},[t("option",{attrs:{value:"请选择"}},[e._v("请选择")]),t("option",{attrs:{value:"济川街道"}},[e._v("济川街道")]),t("option",{attrs:{value:"延令街道"}},[e._v("延令街道")]),t("option",{attrs:{value:"黄桥镇"}},[e._v("黄桥镇")]),t("option",{attrs:{value:"珊瑚镇"}},[e._v("珊瑚镇")]),t("option",{attrs:{value:"广陵镇"}},[e._v("广陵镇")]),t("option",{attrs:{value:"古溪镇"}},[e._v("古溪镇")]),t("option",{attrs:{value:"元竹镇"}},[e._v("元竹镇")]),t("option",{attrs:{value:"张桥镇"}},[e._v("张桥镇")]),t("option",{attrs:{value:"曲霞镇"}},[e._v("曲霞镇")]),t("option",{attrs:{value:"河失镇"}},[e._v("河失镇")]),t("option",{attrs:{value:"张甸镇"}},[e._v("张甸镇")]),t("option",{attrs:{value:"新街镇"}},[e._v("新街镇")]),t("option",{attrs:{value:"姚王街道"}},[e._v("姚王街道")]),t("option",{attrs:{value:"宣堡镇"}},[e._v("宣堡镇")]),t("option",{attrs:{value:"分界镇"}},[e._v("分界镇")]),t("option",{attrs:{value:"滨江镇"}},[e._v("滨江镇")]),t("option",{attrs:{value:"虹桥镇"}},[e._v("虹桥镇")]),t("option",{attrs:{value:"根思乡"}},[e._v("根思乡")])])]),t("div",[t("span",[e._v("需求类型：")]),t("select",{staticStyle:{width:"55%",border:"0","background-color":"#fff",padding:"2px 10px","border-radius":"2px","box-sizing":"border-box"},attrs:{id:"select2"},domProps:{value:e.select2},on:{change:function(t){return e.fn()}}},[t("option",{attrs:{value:"请选择"}},[e._v("请选择")]),t("option",{attrs:{value:"物品"}},[e._v("物品")]),t("option",{attrs:{value:"资金"}},[e._v("资金")]),t("option",{attrs:{value:"服务"}},[e._v("服务")]),t("option",{attrs:{value:"其他"}},[e._v("其他")])])])]),t("el-row",{staticStyle:{margin:"70px 0 10px 0"},attrs:{gutter:12}},[t("el-col",{attrs:{offset:1,span:22}},[t("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.load,expression:"load"}],attrs:{"infinite-scroll-distance":"0","infinite-scroll-disabled":"disabled","infinite-scroll-immediate":"flase"}},[t("li",e._l(e.helpData,(function(s,o){return t("el-card",{key:o,staticStyle:{"margin-top":"10px","text-align":"left"},attrs:{shadow:"always"}},[t("el-row",{attrs:{gutter:12}},[t("el-col",{staticStyle:{"font-size":"16px"},attrs:{span:8}},[e._v(" "+e._s(s.abc_ex1)+" ")]),t("el-col",{staticStyle:{"font-size":"16px","text-align":"center",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"},attrs:{span:8}},[e._v(" "+e._s(s.abc_ex3)+" ")]),t("el-col",{staticStyle:{"font-size":"16px","text-align":"right"},attrs:{span:8}},[e._v(" "+e._s(s.abc_ex5)+" ")])],1),t("el-row",{attrs:{gutter:12,left:""}},[t("el-col",{staticClass:"need_content",attrs:{span:20}},[e._v(" "+e._s(s.abc_ex6)+" ")]),t("el-col",{attrs:{span:4}})],1),t("el-row",{attrs:{gutter:12}},[t("el-col",{staticStyle:{"text-align":"right"},attrs:{offset:9,span:15}},[t("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(t){return e.routerPush("/helpLook",s.abc_id)}}},[e._v("查看")]),t("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.routerPush("/helpClaim",s.abc_id)}}},[e._v("认领")])],1)],1)],1)})),1)])])],1),e.loading?t("p",[e._v("加载中...")]):e._e(),e.noMore?t("p",[e._v("没有更多了")]):e._e()],1)},a=[function(){var e=this,t=e._self._c;return t("header",[t("div",[e._v("我要救助")])])}],l=s("b775"),i={data(){return{helpData:[],num:0,helpList:[],lastpage:!1,page:1,sqlwherer:"",loading:!1,select1:"请选择",select2:"请选择"}},created(){},computed:{noMore(){return this.lastpage},disabled(){return this.loading||this.noMore}},methods:{routerPush(e,t){console.log("id:"+t),this.$router.push({path:e+"?id="+t})},load(){this.sqlwhere="";document.getElementById("select1").value,document.getElementById("select2").value;""!=sessionStorage.getItem("select1")&&null!=sessionStorage.getItem("select1")&&void 0!=sessionStorage.getItem("select1")&&(this.select1=sessionStorage.getItem("select1"),this.select1),""!=sessionStorage.getItem("select2")&&null!=sessionStorage.getItem("select2")&&void 0!=sessionStorage.getItem("select2")&&(this.select2=sessionStorage.getItem("select2"),this.select2),""!=this.select1&&void 0!=this.select1&&null!=this.select1&&"请选择"!=this.select1&&(this.sqlwhere+="and abc_ex1= '"+this.select1+"'",this.select1),""!=this.select2&&void 0!=this.select2&&null!=this.select2&&"请选择"!=this.select2&&(this.sqlwhere+="and abc_ex5= '"+this.select2+"'",this.select2),console.log(this.lastpage,"lastpage"),0==this.num&&this.needList({page:this.page,sqlwhere:this.sqlwhere}).then(e=>{if(console.log(e,"res"),0==e.length)this.lastpage=!0,console.log(this.lastpage,"lastpage");else{for(let t in e)for(let s in e[t])e[t][s]=unescape(e[t][s]);for(let t in e)this.helpData.push(e[t])}console.log(this.helpData,"this.helpData")}).catch(e=>{console.log("请求失败了",e),this.$message.error("数据获取失败或请求超时"),this.$router.go(-1)}),this.loading=!0,this.page=1*this.page+1,this.loading=!1,console.log("page",this.page),console.log(this.helpList,"this.helpList")},needList(e){return console.log(e,"data"),Object(l["a"])({method:"post",url:"/social/assistanceWeixin/WXListByPageCharity",data:e})},fn(){this.sqlwhere="",this.page=1,this.helpData=[];var e=document.getElementById("select1").value,t=document.getElementById("select2").value;console.log(e,t),console.log("==========tselect1,select2================"),sessionStorage.setItem("select1",e),sessionStorage.setItem("select2",t),this.select1=e,this.select2=t,"请选择"!=e&&""!=e&&void 0!=e&&null!=e&&(this.sqlwhere+="and abc_ex1= '"+e+"'"),"请选择"!=t&&""!=t&&void 0!=t&&null!=t&&(this.sqlwhere+="and abc_ex5= '"+t+"'"),this.load()}}},r=i,n=(s("4b46"),s("2877")),c=Object(n["a"])(r,o,a,!1,null,"da4289e4",null);t["default"]=c.exports}}]);