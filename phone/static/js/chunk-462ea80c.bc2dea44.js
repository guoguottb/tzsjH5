(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-462ea80c"],{"0fee":function(e,t,a){"use strict";a("9e4a")},"3d34":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"helpApply"},[t("header",[t("div",{staticClass:"headerHead"},[t("div",[t("div",{class:{headerF:e.isShow}},[e._v("走访信息")])]),t("div",{staticClass:"headerRectangle"}),t("div",[t("div",{class:{headerF:e.isShow2}},[e._v("走访照片")])])])]),t("main",[t("div",{directives:[{name:"show",rawName:"v-show",value:e.page1,expression:"page1"}],staticStyle:{height:"600px",display:"block","text-align":"left"},attrs:{id:"page1"}},[t("div",{staticStyle:{"font-size":"12px","padding-left":"20px","padding-right":"20px","text-align":"left"}},[e._m(0),t("van-form",{ref:"apply",staticStyle:{"margin-top":"20px"},on:{submit:e.next1}},[t("van-field",{attrs:{name:"arv_ex1",maxlength:"10",label:"走访对象",placeholder:"走访对象",rules:e.rules.rules1},model:{value:e.form.arv_ex1,callback:function(t){e.$set(e.form,"arv_ex1",t)},expression:"form.arv_ex1"}}),t("van-field",{attrs:{name:"arv_ex2",label:"身份证号",placeholder:"身份证号",rules:e.rules.rules2},model:{value:e.form.arv_ex2,callback:function(t){e.$set(e.form,"arv_ex2",t)},expression:"form.arv_ex2"}}),t("van-field",{attrs:{readonly:"",clickable:"",name:"arv_ex4",label:"保障类别",placeholder:"点击选择保障类别",rules:e.rules.rules3},on:{click:function(t){e.showPicker1=!0}},model:{value:e.form.arv_ex4,callback:function(t){e.$set(e.form,"arv_ex4",t)},expression:"form.arv_ex4"}}),t("van-popup",{attrs:{position:"bottom"},model:{value:e.showPicker1,callback:function(t){e.showPicker1=t},expression:"showPicker1"}},[t("van-picker",{attrs:{"show-toolbar":"",columns:e.columns},on:{confirm:function(t){return e.onConfirm1(t,"arv_ex4","showPicker1")},cancel:function(t){e.showPicker1=!1}}})],1),t("van-field",{attrs:{name:"ab_ex162_2",center:"",readonly:"",label:"行政区划",placeholder:"请选择所在行政区划",rules:e.rules.rules4},on:{click:function(t){e.show=!0}},model:{value:e.ab_ex162_2,callback:function(t){e.ab_ex162_2=t},expression:"ab_ex162_2"}}),t("van-popup",{attrs:{round:"",position:"bottom"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[t("van-cascader",{attrs:{title:"请选择所在行政区划",options:e.options},on:{close:function(t){e.show=!1},finish:e.onFinish}})],1),t("van-field",{attrs:{name:"arv_ex3",maxlength:"50",label:"家庭住址",placeholder:"家庭住址",rules:e.rules.rules5},model:{value:e.form.arv_ex3,callback:function(t){e.$set(e.form,"arv_ex3",t)},expression:"form.arv_ex3"}}),t("van-field",{attrs:{center:"",name:"arv_ex5",maxlength:"11",type:"digit",label:"联系电话",placeholder:"联系电话",rules:e.rules.rules6},model:{value:e.form.arv_ex5,callback:function(t){e.$set(e.form,"arv_ex5",t)},expression:"form.arv_ex5"}}),t("van-field",{attrs:{name:"arv_ex6",maxlength:"10",label:"走访人",placeholder:"走访人",rules:e.rules.rules7},model:{value:e.form.arv_ex6,callback:function(t){e.$set(e.form,"arv_ex6",t)},expression:"form.arv_ex6"}}),t("van-field",{attrs:{name:"arv_ex7",maxlength:"100",label:"走访内容",placeholder:"走访内容",rules:e.rules.rules8},model:{value:e.form.arv_ex7,callback:function(t){e.$set(e.form,"arv_ex7",t)},expression:"form.arv_ex7"}}),t("van-field",{attrs:{readonly:"",clickable:"",name:"arv_ex8",value:e.form.arv_ex8,label:"走访类型",placeholder:"点击选择走访类型",rules:e.rules.rules9},on:{click:function(t){e.showPicker2=!0}}}),t("van-popup",{attrs:{position:"bottom"},model:{value:e.showPicker2,callback:function(t){e.showPicker2=t},expression:"showPicker2"}},[t("van-picker",{attrs:{"show-toolbar":"",columns:e.columns2},on:{confirm:function(t){return e.onConfirm1(t,"arv_ex8","showPicker2")},cancel:function(t){e.showPicker2=!1}}})],1),t("van-field",{attrs:{name:"arv_ex9",maxlength:"300",label:"发现问题",placeholder:"发现问题",rules:e.rules.rules10},model:{value:e.form.arv_ex9,callback:function(t){e.$set(e.form,"arv_ex9",t)},expression:"form.arv_ex9"}}),t("div",{staticStyle:{margin:"16px 0 0 0",display:"flex","justify-content":"space-around"}},[t("van-button",{attrs:{block:"",type:"info","native-type":"button"},on:{click:e.next1}},[e._v("下一步")])],1)],1)],1)]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.page2,expression:"page2"}],staticStyle:{height:"600px","margin-top":"100px"},attrs:{id:"page2"}},[t("div",{staticClass:"page2Div"},[t("div",{staticStyle:{height:"40px","line-height":"40px","font-size":"17px"}},[e._v("走访照片:")]),t("div",{staticStyle:{"margin-top":"10px"}},[t("div",{staticStyle:{position:"relative",width:"91%",float:"left"}},[t("van-uploader",{attrs:{"after-read":e.uploadImg(),"before-delete":e.beforeDelete("arv_ex10")},model:{value:e.fileList,callback:function(t){e.fileList=t},expression:"fileList"}})],1)])]),t("div",{staticStyle:{"margin-top":"20px",display:"flex","justify-content":"space-around"}},[t("van-button",{attrs:{block:"","native-type":"button"},on:{click:e.back2}},[e._v("上一步")]),t("van-button",{attrs:{block:"",type:"info"},on:{click:e.save}},[e._v("提交")])],1)])]),t("footer")])},s=[function(){var e=this,t=e._self._c;return t("div",{staticStyle:{"border-bottom":"#aaa solid 1px","font-size":"16px"}},[t("span",{staticStyle:{"background-color":"#00AAFF",display:"inline-block",width:"5px",height:"10px"}}),t("span",{staticStyle:{color:"#00AAFF"}},[e._v("走访信息")])])}],o=a("b775"),i=a("fa7d"),l={data(){return{isShow:!0,isShow2:!1,checked:!1,page1:!0,page2:!1,rules:{rules1:[{required:!0,message:"请填写走访对象",trigger:"onBlur"}],rules2:[{required:!0,message:"请填写身份证号",trigger:"onBlur"}],rules3:[{required:!0,message:"请选择保障类别",trigger:"onBlur"}],rules4:[{required:!0,message:"请选择行政区划",trigger:"onBlur"}],rules5:[{required:!0,message:"请填写家庭住址",trigger:"onBlur"}],rules6:[{required:!0,message:"请填写联系电话",trigger:"onBlur"}],rules7:[{required:!0,message:"请填写走访人",trigger:"onBlur"}],rules8:[{required:!0,message:"请填写联系电话",trigger:"onBlur"}],rules9:[{required:!0,message:"请选择走访类型",trigger:"onBlur"}],rules10:[{required:!0,message:"请填写发现问题",trigger:"onBlur"}]},columns:["城乡低保","特困供养","低收入家庭","困境儿童","残疾人补贴","下放职工","临时救助","物价补贴","水电费减免","建档立卡扶贫","医疗应急救助","住房救助","灾害救助","工会救助","团委救助","妇联救助","红会救助","社会组织救助","慈善救助","其他救助","保险救助","流浪乞讨救助","医疗救助","教育救助","就业救助","司法援助","尊老金"],columns2:["日常走访","定期回访","特殊走访","电话走访"],showPicker1:!1,showPicker2:!1,form:{arv_ex1:"",arv_ex2:"",arv_ex4:"",arv_ex3:"",arv_ex5:"",arv_ex6:"",arv_ex7:"",arv_ex8:"",arv_ex9:"",arv_ex10:"",arv_ex11:"",arv_ex12:"",arv_ex13:"",arv_ex14:"",arv_dat1:""},fileList:[],ab_ex162_2:"",show:!1,options:i["j"]}},created(){Object(o["a"])({method:"post",headers:{token:localStorage.getItem("token")},url:"/social/assistanceWeixin/getRegularVisits",data:{sId:this.$route.query.sId}}).then(e=>{if(e[0].data.length>0){let t=e[0].data[0];if(this.form=t,t.arv_ex14&&(this.ab_ex162_2=t.arv_ex13+"/"+t.arv_ex11+"/"+t.arv_ex12),t.arv_ex10){let e=t.arv_ex10.split(",");e.forEach((e,t)=>{this.imageView(e).then(e=>{this.fileList.push({url:e,isImage:!0}),console.log(this.fileList)}).catch(e=>{console.log(e)})})}}}).catch(e=>{})},methods:{next1(){this.form.arv_ex1=this.form.arv_ex1.replace(/\s*/g,"");let e=Object(i["i"])(this.form.arv_ex1);if(e)return this.$toast.fail("请输入正确的走访对象"),!1;let t=/^[1][3,4,5,7,8,9][0-9]{9}$/;if(!t.test(this.form.arv_ex5))return this.$toast.fail("请填写正确的联系电话"),!1;this.form.arv_ex6=this.form.arv_ex6.replace(/\s*/g,"");let a=Object(i["i"])(this.form.arv_ex6);if(a)return this.$toast.fail("请输入正确的走访人"),!1;this.form.arv_ex3=this.form.arv_ex3.replace(/\s*/g,""),this.form.arv_ex3=Object(i["g"])(this.form.arv_ex3);let r=Object(i["e"])(this.form.arv_ex2);if(r)return this.$toast.fail(r),!1;this.$refs.apply.validate().then(e=>{this.page1=!1,this.page2=!0,this.isShow=!1,this.isShow2=!0}).catch(e=>{console.log(e[0].message),this.$toast.fail(e[0].message)})},back2(){this.page1=!0,this.page2=!1,this.isShow=!0,this.isShow2=!1},onConfirm1(e,t,a){this.form[t]=e,this[a]=!1},imageView(e){return Object(o["a"])({method:"post",url:e,headers:{token:sessionStorage.getItem("token")},data:{}})},save(){let e=this.$toast({type:"loading",message:"提交中...",overlay:!0,duration:0});var t=new Date,a=t.getFullYear(),r=t.getMonth()+1,s=t.getDate(),i=(t.getDay(),t.getHours()),l=t.getMinutes(),n=t.getSeconds();document.getElementById("Date");i<10&&(i="0"+i),l<10&&(l="0"+l),n<10&&(n="0"+n);var c=a+"-"+r+"-"+s+" "+i+":"+l+":"+n;this.form.arv_dat1=c,Object(o["a"])({method:"post",headers:{token:localStorage.getItem("token")},url:"/social/assistanceWeixin/saveRegularVisits",data:{data:"["+JSON.stringify(this.form)+"]"}}).then(t=>{e.clear(),this.$dialog.alert({message:"提交成功"}).then(()=>{this.$router.push("/zfhc?stype=定期走访")}),console.log(t)}).catch(t=>{e.clear(),this.$toast.fail("提交失败"),console.log(t)})},back3(){this.page3=!1,this.page2=!0,this.isShow3=!1,this.isShow2=!0},onFinish({selectedOptions:e}){this.show=!1,console.log(e.map(e=>e.text));let t=e.map(e=>e.text),a=e.map(e=>e.text+e.value);this.form.arv_ex12=t[2],this.form.arv_ex11=t[1],this.form.arv_ex13=t[0],this.ab_ex162_2=t.join("/"),this.form.arv_ex14=a.join(","),""==this.form.arv_ex3&&(this.form.arv_ex3=t[0]+t[1]+t[2])},imgRequest(e,t,a){Object(o["a"])({method:"post",url:"/social/minios/fileUpload",data:e}).then(e=>{t.status="done",t.message="上传完成",console.log(e),this.form.arv_ex10?this.form.arv_ex10=this.form.arv_ex10.concat(",",e[0].filename):this.form.arv_ex10=this.form.arv_ex10.concat(e[0].filename),console.log(this.form.arv_ex10)}).catch(e=>{t.status="failed",t.message="上传失败",console.log(e),this.fileList.pop(),this.$toast.fail("上传失败")})},uploadImg(){return e=>{console.log(e),e.status="uploading",e.message="上传中...";new i["a"](e,0,this.imgRequest)}},beforeDelete(e){return(t,a)=>{let r=this.form[e].split(",");return r.splice(a.index,1),this.form[e]=r.join(","),console.log(this.form[e]),console.log(e),console.log(t),console.log(a),!0}}}},n=l,c=(a("0fee"),a("2877")),u=Object(c["a"])(n,r,s,!1,null,"1ca67254",null);t["default"]=u.exports},"9e4a":function(e,t,a){}}]);