(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44dad16e"],{"90f2":function(i,t,s){"use strict";s("d959")},b652:function(i,t,s){"use strict";s.r(t);var a=function(){var i=this,t=i._self._c;return t("div",{staticClass:"inspect"},[i._m(0),t("main",[t("div",[t("div",{staticClass:"maindivbox"},[t("div",{staticClass:"maindiv maindivimg1",on:{click:function(t){return i.routePush("/dbhc","群众申请")}}}),t("div",[i._v("群众申请")])]),t("div",{staticClass:"maindivbox"},[t("div",{staticClass:"maindiv maindivimg2",on:{click:function(t){return i.routePush("/dsrhc","主动排查")}}}),t("div",[i._v("主动排查")])]),t("div",{staticClass:"maindivbox"},[t("div",{staticClass:"maindiv maindivimg3",on:{click:function(t){return i.routePush("/tkhc","预警推送")}}}),t("div",[i._v("预警推送")])]),t("div",{staticClass:"maindivbox"},[t("div",{staticClass:"maindiv maindivimg4",on:{click:function(t){return i.routePush("/lshc","临时救助")}}}),t("div",[i._v("临时救助")])]),t("div",{staticStyle:{}})])])])},n=[function(){var i=this,t=i._self._c;return t("header",[t("div",[t("div",{staticClass:"headerFont"},[t("img",{staticClass:"headerImg",attrs:{src:s("dd16")}}),t("span",{staticStyle:{"font-size":"25px",display:"block","margin-top":"10px"}},[i._v("智慧民政社会救助")])])])])}],e=(s("caad"),{data(){return{}},methods:{routePush(i,t){let s=localStorage.getItem("username"),a=sessionStorage.getItem("token");["群众申请","预警推送","预警推送","主动排查","临时救助"].includes(t)?window.location.href="http://zhmz.tlt.cn:10111/assistanceWeixin/WXhechaList?stype="+t+"&username="+s+"&token="+a:this.$router.push({path:i,query:{stype:t}})}}}),c=e,d=(s("90f2"),s("2877")),o=Object(d["a"])(c,a,n,!1,null,"600af944",null);t["default"]=o.exports},d959:function(i,t,s){}}]);