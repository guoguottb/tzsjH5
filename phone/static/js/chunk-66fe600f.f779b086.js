(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66fe600f"],{1203:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e._self._c;return a("div",{staticClass:"helpApply"},[a("header",[a("div",{staticClass:"headerHead"},[a("div",[a("div",{class:{headerF:e.isShow}},[e._v("援助对象")])]),a("div",{staticClass:"headerRectangle"}),a("div",[a("div",{class:{headerF:e.isShow2}},[e._v("基本情况")])]),a("div",{staticClass:"headerRectangle"}),a("div",[a("div",{class:{headerF:e.isShow3}},[e._v("案件情况")])]),a("div",{staticClass:"headerRectangle"}),a("div",[a("div",{class:{headerF:e.isShow4}},[e._v("材料申报")])])])]),a("main",[a("div",{directives:[{name:"show",rawName:"v-show",value:e.page1,expression:"page1"}],staticStyle:{display:"block","padding-top":"20px"},attrs:{id:"page1"}},[a("div",{staticClass:"page1Div1"},[e._m(0),a("van-form",{ref:"apply",staticStyle:{"margin-top":"20px"},on:{submit:e.next1}},[a("van-field",{attrs:{required:"",readonly:"",name:"ab_ex175_1",label:"免于经济状况审查且不受事项范围限制对象(单选)","label-width":"100%"}}),a("van-checkbox-group",{staticStyle:{"background-color":"#ffffff"},attrs:{max:"1"},model:{value:e.ab_ex175_1,callback:function(a){e.ab_ex175_1=a},expression:"ab_ex175_1"}},[a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"农村“五保”对象",shape:"square"}},[e._v("农村“五保”对象")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"正在享受最低生活保障待遇的人员",shape:"square"}},[e._v("正在享受最低生活保障待遇的人员")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"领取市和各市（区）总工会发放的特困证的职工",shape:"square"}},[e._v("领取市和各市（区）总工会发放的特困证的职工")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"依靠抚恤金生活的人员",shape:"square"}},[e._v("依靠抚恤金生活的人员")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"社会福利机构中由政府供养的人员",shape:"square"}},[e._v("社会福利机构中由政府供养的人员")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"无固定生活来源的重度残疾人",shape:"square"}},[e._v("无固定生活来源的重度残疾人")])],1),a("div",{staticStyle:{margin:"16px 0 16px 0",display:"flex","justify-content":"space-around"}},[a("van-button",{attrs:{block:"","native-type":"button"},on:{click:e.back1}},[e._v("上一步")]),a("van-button",{attrs:{block:"",type:"info","native-type":"button"},on:{click:e.next1}},[e._v("下一步")])],1)],1)],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.page2,expression:"page2"}],staticClass:"stepPage",staticStyle:{display:"block","padding-top":"20px"},attrs:{id:"page2"}},[a("div",{staticClass:"page1Div1"},[e._m(1),a("van-form",{ref:"apply2",staticStyle:{"margin-top":"20px"},on:{submit:e.next2}},[a("van-field",{attrs:{required:"",name:"ab_ex75",label:"申请方式"},scopedSlots:e._u([{key:"input",fn:function(){return[a("van-radio-group",{attrs:{direction:"horizontal"},on:{change:e.changeSqfs},model:{value:e.form.ab_ex75,callback:function(a){e.$set(e.form,"ab_ex75",a)},expression:"form.ab_ex75"}},[a("van-radio",{attrs:{name:"委托代理"}},[e._v("代申请")]),a("van-radio",{attrs:{name:"本人"}},[e._v("本人")])],1)]},proxy:!0}])}),a("van-field",{attrs:{required:"",name:"ab_ex3",maxlength:"10",label:"申请人姓名",placeholder:"申请人姓名",rules:[{required:!0,message:"请填写申请人姓名"}]},model:{value:e.form.ab_ex3,callback:function(a){e.$set(e.form,"ab_ex3",a)},expression:"form.ab_ex3"}}),a("van-field",{attrs:{required:"",name:"ab_ex7",label:"身份证号",placeholder:"身份证号",rules:[{required:!0,message:"请填写身份证号"}]},on:{input:e.changeSfz},model:{value:e.form.ab_ex7,callback:function(a){e.$set(e.form,"ab_ex7",a)},expression:"form.ab_ex7"}}),a("van-field",{attrs:{required:"",name:"ab_ex14",maxlength:"10",label:"国籍",rules:[{required:!0,message:"请填写国籍"}],placeholder:"国籍"},model:{value:e.form.ab_ex14,callback:function(a){e.$set(e.form,"ab_ex14",a)},expression:"form.ab_ex14"}}),a("van-field",{attrs:{required:"",readonly:"",clickable:"",name:"ab_ex65",label:"民族",rules:[{required:!0,message:"请选择民族"}],placeholder:"点击选择民族"},on:{click:function(a){e.showPicker2=!0}},model:{value:e.form.ab_ex65,callback:function(a){e.$set(e.form,"ab_ex65",a)},expression:"form.ab_ex65"}}),a("van-popup",{attrs:{round:"",position:"bottom"},model:{value:e.showPicker2,callback:function(a){e.showPicker2=a},expression:"showPicker2"}},[a("van-picker",{attrs:{"show-toolbar":"",columns:e.columns2},on:{cancel:function(a){e.showPicker2=!1},confirm:function(a){return e.onConfirm(a,"ab_ex65","showPicker2")}}})],1),a("van-field",{attrs:{required:"",readonly:"",clickable:"",name:"ab_ex12",label:"文化程度",rules:[{required:!0,message:"请选择文化程度"}],placeholder:"点击选择文化程度"},on:{click:function(a){e.showPicker3=!0}},model:{value:e.form.ab_ex12,callback:function(a){e.$set(e.form,"ab_ex12",a)},expression:"form.ab_ex12"}}),a("van-popup",{attrs:{round:"",position:"bottom"},model:{value:e.showPicker3,callback:function(a){e.showPicker3=a},expression:"showPicker3"}},[a("van-picker",{attrs:{"show-toolbar":"",columns:e.columns3},on:{cancel:function(a){e.showPicker3=!1},confirm:function(a){return e.onConfirm(a,"ab_ex12","showPicker3")}}})],1),a("van-field",{attrs:{required:"",readonly:"",name:"ab_ex69",label:"性别"},model:{value:e.form.ab_ex69,callback:function(a){e.$set(e.form,"ab_ex69",a)},expression:"form.ab_ex69"}}),a("van-field",{attrs:{required:"",readonly:"",name:"ab_dat11",label:"出生日期"},model:{value:e.form.ab_dat11,callback:function(a){e.$set(e.form,"ab_dat11",a)},expression:"form.ab_dat11"}}),a("van-field",{attrs:{required:"",name:"ab_ex162_2",center:"",readonly:"",label:"行政区划",rules:[{required:!0,message:"请选择所在行政区划"}],placeholder:"请选择所在行政区划"},on:{click:function(a){e.show=!0}},model:{value:e.ab_ex162_2,callback:function(a){e.ab_ex162_2=a},expression:"ab_ex162_2"}}),a("van-popup",{attrs:{round:"",position:"bottom"},model:{value:e.show,callback:function(a){e.show=a},expression:"show"}},[a("van-cascader",{attrs:{title:"请选择所在行政区划",options:e.options},on:{close:function(a){e.show=!1},finish:e.onFinish}})],1),a("van-field",{attrs:{required:"",name:"ab_ex4",maxlength:"50",label:"户籍所在地",placeholder:"户籍所在地",rules:[{required:!0,message:"请填写户籍所在地"}]},model:{value:e.form.ab_ex4,callback:function(a){e.$set(e.form,"ab_ex4",a)},expression:"form.ab_ex4"}}),a("van-field",{attrs:{required:"",name:"ab_ex129",maxlength:"50",label:"住所地(经常居住地)",placeholder:"住所地(经常居住地)",rules:[{required:!0,message:"请填写住所地(经常居住地)"}]},model:{value:e.form.ab_ex129,callback:function(a){e.$set(e.form,"ab_ex129",a)},expression:"form.ab_ex129"}}),a("van-field",{attrs:{required:"",name:"ab_ex50",maxlength:"6",type:"number",label:"邮政编码",placeholder:"邮政编码",rules:[{required:!0,message:"请填写邮政编码"}]},model:{value:e.form.ab_ex50,callback:function(a){e.$set(e.form,"ab_ex50",a)},expression:"form.ab_ex50"}}),a("van-field",{attrs:{required:"",type:"number",name:"ab_ex28",label:"联系电话",placeholder:"联系电话",rules:[{required:!0,message:"请填写联系电话"}]},scopedSlots:e._u([{key:"button",fn:function(){return[a("van-button",{attrs:{size:"small",type:"info",disabled:e.hqyzmDis,"native-type":"button"},on:{click:e.hqyzm}},[e._v(e._s(e.hqyzmtext))])]},proxy:!0}]),model:{value:e.form.ab_ex28,callback:function(a){e.$set(e.form,"ab_ex28",a)},expression:"form.ab_ex28"}}),a("van-field",{attrs:{required:"",center:"",name:"yanzm",type:"number",label:"验证码",placeholder:"验证码",rules:[{required:!0,message:"请填写验证码"}]},model:{value:e.form.yanzm,callback:function(a){e.$set(e.form,"yanzm",a)},expression:"form.yanzm"}}),a("van-field",{attrs:{required:"",name:"ab_ex44",maxlength:"30",label:"工作单位",placeholder:"工作单位",rules:[{required:!0,message:"请填写工作单位"}]},model:{value:e.form.ab_ex44,callback:function(a){e.$set(e.form,"ab_ex44",a)},expression:"form.ab_ex44"}}),a("van-field",{attrs:{required:"",readonly:"",name:"ab_ex23_1",label:"身份类别（可重复交叉）","label-width":"200px"}}),a("van-checkbox-group",{staticStyle:{"background-color":"#ffffff"},attrs:{direction:"horizontal"},on:{change:e.changeSflb},model:{value:e.ab_ex23_1,callback:function(a){e.ab_ex23_1=a},expression:"ab_ex23_1"}},[a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"低保对象",shape:"square"}},[e._v("低保对象")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"社会福利机构中由政府供养人员",shape:"square"}},[e._v("社会福利机构中由政府供养人员")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"特困职工",shape:"square"}},[e._v("特困职工")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"优抚对象",shape:"square"}},[e._v("优抚对象")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"灾民",shape:"square"}},[e._v("灾民")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"农民",shape:"square"}},[e._v("农民(")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"农村“五保”对象",shape:"square"}},[e._v("农村“五保”对象")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"农民工",shape:"square"}},[e._v("农民工)")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"军人",shape:"square"}},[e._v("军人")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"军属",shape:"square"}},[e._v("军属")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"离退休人员",shape:"square"}},[e._v("离退休人员")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"无业、失业人员",shape:"square"}},[e._v("无业、失业人员")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"在校生",shape:"square"}},[e._v("在校生")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"未成年人",shape:"square"}},[e._v("未成年人(")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"学龄前儿童",shape:"square"}},[e._v("学龄前儿童")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"辍学生",shape:"square"}},[e._v("辍学生")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"单亲家庭儿童",shape:"square"}},[e._v("单亲家庭儿童")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"留守儿童",shape:"square"}},[e._v("留守儿童)")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"残疾人",shape:"square"}},[e._v("残疾人")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"老年人（60岁以上）",shape:"square"}},[e._v("老年人（60岁以上）")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"其他",shape:"square"}},[e._v("其他")])],1),-1!=e.ab_ex23_1.indexOf("其他")?a("van-field",{attrs:{required:"",name:"ab_ex24",maxlength:"30",label:"其他身份",placeholder:"其他身份",rules:[{required:!0,message:"请填写其他身份"}]},model:{value:e.form.ab_ex24,callback:function(a){e.$set(e.form,"ab_ex24",a)},expression:"form.ab_ex24"}}):e._e(),a("div",{staticStyle:{margin:"16px 0 16px 0",display:"flex","justify-content":"space-around"}},[a("van-button",{attrs:{block:"","native-type":"button"},on:{click:e.back2}},[e._v("上一步")]),a("van-button",{attrs:{block:"",type:"info","native-type":"button"},on:{click:e.next2}},[e._v("下一步")])],1)],1)],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.page3,expression:"page3"}],staticClass:"stepPage",staticStyle:{display:"block","padding-top":"20px"},attrs:{id:"page3"}},[a("div",{staticClass:"page1Div1"},[e._m(2),a("van-form",{ref:"apply3",staticStyle:{"margin-top":"20px"},on:{submit:e.next3}},["委托代理"==e.form.ab_ex75?a("div",[a("van-field",{attrs:{name:"ab_ex29",maxlength:"10",label:"姓名",placeholder:"姓名",rules:[{required:!0,message:"请填写姓名"}]},model:{value:e.form.ab_ex29,callback:function(a){e.$set(e.form,"ab_ex29",a)},expression:"form.ab_ex29"}}),a("van-field",{attrs:{name:"ab_ex30_1",label:"代理人类型",center:"",rules:[{required:!0,message:"请选择代理人类型"}]},scopedSlots:e._u([{key:"input",fn:function(){return[a("van-checkbox-group",{attrs:{direction:"horizontal"},on:{change:e.changeDlr},model:{value:e.ab_ex30_1,callback:function(a){e.ab_ex30_1=a},expression:"ab_ex30_1"}},[a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"法定代理人",shape:"square"}},[e._v("法定代理人")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"委托代理人",shape:"square"}},[e._v("委托代理人")])],1)]},proxy:!0}],null,!1,3335876342)}),a("van-field",{attrs:{name:"ab_ex31",label:"身份证号",placeholder:"身份证号",rules:[{required:!0,message:"请填写身份证号"}]},model:{value:e.form.ab_ex31,callback:function(a){e.$set(e.form,"ab_ex31",a)},expression:"form.ab_ex31"}}),a("van-field",{attrs:{name:"ab_ex32",maxlength:"30",label:"与申请人的关系",placeholder:"与申请人的关系",rules:[{required:!0,message:"请填写与申请人的关系"}]},model:{value:e.form.ab_ex32,callback:function(a){e.$set(e.form,"ab_ex32",a)},expression:"form.ab_ex32"}}),a("van-field",{attrs:{type:"number",name:"ab_ex33",label:"联系方式",placeholder:"联系方式",rules:[{required:!0,message:"请填写联系方式"}]},model:{value:e.form.ab_ex33,callback:function(a){e.$set(e.form,"ab_ex33",a)},expression:"form.ab_ex33"}})],1):e._e(),a("van-field",{attrs:{readonly:"",clickable:"",name:"ab_ex34",label:"律师",placeholder:"点击选择律师",rules:[{required:!0,message:"请选择律师"}]},on:{click:function(a){e.showPicker5=!0}},model:{value:e.form.ab_ex34,callback:function(a){e.$set(e.form,"ab_ex34",a)},expression:"form.ab_ex34"}}),a("van-popup",{attrs:{round:"",position:"bottom"},model:{value:e.showPicker5,callback:function(a){e.showPicker5=a},expression:"showPicker5"}},[a("van-cascader",{attrs:{title:"请选择律师",options:e.options2},on:{close:function(a){e.showPicker5=!1},change:e.onChange,finish:e.onFinish2},model:{value:e.form.ab_ex34,callback:function(a){e.$set(e.form,"ab_ex34",a)},expression:"form.ab_ex34"}})],1),a("van-field",{attrs:{disabled:"",name:"ab_ex35",label:"律师执业证号",placeholder:"律师执业证号",rules:[{required:!0,message:"请填写律师执业证号"}]},model:{value:e.form.ab_ex35,callback:function(a){e.$set(e.form,"ab_ex35",a)},expression:"form.ab_ex35"}}),a("van-field",{attrs:{disabled:"",name:"ab_ex36",label:"律师联系电话",placeholder:"律师联系电话",rules:[{required:!0,message:"请填写律师联系电话"}]},model:{value:e.form.ab_ex36,callback:function(a){e.$set(e.form,"ab_ex36",a)},expression:"form.ab_ex36"}}),a("van-field",{attrs:{required:"",readonly:"",name:"ab_ex37_1",label:"案件来源","label-width":"200px"}}),a("van-checkbox-group",{staticStyle:{"background-color":"#ffffff"},attrs:{direction:"horizontal"},on:{change:e.changeAjly},model:{value:e.ab_ex37_1,callback:function(a){e.ab_ex37_1=a},expression:"ab_ex37_1"}},[a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"当事人直接申请",shape:"square"}},[e._v("当事人直接申请")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"转交申请",shape:"square"}},[e._v("转交申请(")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"人民法院",shape:"square"}},[e._v("人民法院")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"人民检察院",shape:"square"}},[e._v("人民检察院")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"公安机关",shape:"square"}},[e._v("公安机关")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"监狱",shape:"square"}},[e._v("监狱")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"看守所",shape:"square"}},[e._v("看守所")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"强制隔离戒毒所",shape:"square"}},[e._v("强制隔离戒毒所)")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"其他来源",shape:"square"}},[e._v("其他来源")])],1),-1!=e.ab_ex37_1.indexOf("其他来源")?a("van-field",{attrs:{required:"",name:"ab_ex38",label:"其他来源",placeholder:"其他来源",rules:[{required:!0,message:"请填写其他来源"}]},model:{value:e.form.ab_ex38,callback:function(a){e.$set(e.form,"ab_ex38",a)},expression:"form.ab_ex38"}}):e._e(),a("van-field",{attrs:{required:"",name:"ab_ex39",maxlength:"100",label:"申请事项",placeholder:"申请事项",rules:[{required:!0,message:"请填写申请事项"}]},model:{value:e.form.ab_ex39,callback:function(a){e.$set(e.form,"ab_ex39",a)},expression:"form.ab_ex39"}}),a("van-field",{attrs:{required:"",readonly:"",name:"ab_ex40_1",label:"申请事项所处阶段","label-width":"200px"}}),a("van-checkbox-group",{staticStyle:{"background-color":"#ffffff"},attrs:{direction:"horizontal"},model:{value:e.ab_ex40_1,callback:function(a){e.ab_ex40_1=a},expression:"ab_ex40_1"}},[a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"尚未进入法律程序",shape:"square"}},[e._v("尚未进入法律程序")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"侦查",shape:"square"}},[e._v("侦查")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"审查起诉",shape:"square"}},[e._v("审查起诉")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"仲裁",shape:"square"}},[e._v("仲裁")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"调解",shape:"square"}},[e._v("调解")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"诉讼",shape:"square"}},[e._v("诉讼(")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"一审",shape:"square"}},[e._v("一审")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"二审",shape:"square"}},[e._v("二审")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"审判监督程序",shape:"square"}},[e._v("审判监督程序)")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"行政处理",shape:"square"}},[e._v("行政处理")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"行政复议",shape:"square"}},[e._v("行政复议")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"国家赔偿",shape:"square"}},[e._v("国家赔偿")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"死刑复核",shape:"square"}},[e._v("死刑复核")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"申诉",shape:"square"}},[e._v("申诉")]),a("van-checkbox",{staticClass:"marginstyle",attrs:{name:"执行",shape:"square"}},[e._v("执行")])],1),a("van-field",{attrs:{required:"",name:"ab_ex41",maxlength:"200",autosize:"",rows:"2",type:"textarea",label:"案情及申请理由概述",placeholder:"案情及申请理由概述",rules:[{required:!0,message:"请填写案情及申请理由概述"}]},model:{value:e.form.ab_ex41,callback:function(a){e.$set(e.form,"ab_ex41",a)},expression:"form.ab_ex41"}}),a("div",{staticStyle:{margin:"16px 0 16px 0",display:"flex","justify-content":"space-around"}},[a("van-button",{attrs:{block:"","native-type":"button"},on:{click:e.back3}},[e._v("上一步")]),a("van-button",{attrs:{block:"",type:"info","native-type":"button"},on:{click:e.next3}},[e._v("下一步")])],1)],1)],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.page4,expression:"page4"}],staticStyle:{display:"none"},attrs:{id:"page4"}},[a("div",{staticClass:"page4Class page4ClassMargin"},[a("div",{staticStyle:{height:"40px","line-height":"40px"}},[e._v("身份证照片:")]),a("div",{staticStyle:{"margin-top":"10px"},attrs:{id:"img"}},[a("div",{staticStyle:{position:"relative",width:"100%",float:"left"},attrs:{id:"be"}},[a("div",{staticStyle:{width:"40%",height:"100px","text-align":"center",float:"left","margin-left":"20px"},attrs:{id:"sfzm"}},[a("van-uploader",{attrs:{"before-read":e.beforeRead,"max-count":1,"after-read":e.uploadImg(1),"before-delete":e.beforeDelete("ab_ex10_1")},model:{value:e.fileList,callback:function(a){e.fileList=a},expression:"fileList"}}),a("br"),a("span",[e._v("上传身份证正面")])],1),a("div",{staticStyle:{width:"40%",height:"100px","text-align":"center",float:"right","margin-right":"20px"},attrs:{id:"sfzm2"}},[a("van-uploader",{attrs:{"before-read":e.beforeRead,"max-count":1,"after-read":e.uploadImg(2),"before-delete":e.beforeDelete("ab_ex10_2")},model:{value:e.fileList2,callback:function(a){e.fileList2=a},expression:"fileList2"}}),a("br"),a("span",[e._v("上传身份证反面")])],1)])])]),a("div",{staticClass:"page4Class page4ClassMargin2"},[a("div",{staticStyle:{height:"40px","line-height":"40px"}},[e._v("委托书和经济状况表:")]),a("div",{staticStyle:{"margin-top":"10px"},attrs:{id:"img"}},[a("div",{staticStyle:{position:"relative",width:"100%",float:"left"},attrs:{id:"be"}},[a("div",{staticStyle:{width:"40%",height:"100px","text-align":"center",float:"left","margin-left":"20px"}},[a("van-uploader",{attrs:{"before-read":e.beforeRead,"max-count":1,"after-read":e.uploadImg(4),"before-delete":e.beforeDelete("ab_ex141")},model:{value:e.fileList4,callback:function(a){e.fileList4=a},expression:"fileList4"}}),a("br"),a("span",[e._v("委托书")])],1),a("div",{staticStyle:{width:"40%",height:"100px","text-align":"center",float:"right","margin-right":"20px"}},[a("van-uploader",{attrs:{"before-read":e.beforeRead,"max-count":1,"after-read":e.uploadImg(5),"before-delete":e.beforeDelete("ab_ex142")},model:{value:e.fileList5,callback:function(a){e.fileList5=a},expression:"fileList5"}}),a("br"),a("span",[e._v("经济状况表")])],1)])])]),a("div",{staticClass:"page4Class2"},[a("div",{staticStyle:{height:"40px","line-height":"40px"}},[e._v("证明材料照片:")]),a("div",{staticStyle:{"margin-top":"10px"}},[a("div",{staticStyle:{position:"relative",width:"100%",float:"left"},attrs:{id:"zmcl"}},[a("van-uploader",{attrs:{"before-read":e.beforeRead,"after-read":e.uploadImg(3),"before-delete":e.beforeDelete("ab_ex16")},model:{value:e.fileList3,callback:function(a){e.fileList3=a},expression:"fileList3"}})],1)])]),a("div",{staticStyle:{"margin-top":"20px",display:"flex","justify-content":"space-around"}},[a("van-button",{attrs:{block:"","native-type":"button"},on:{click:e.back4}},[e._v("上一步")]),a("van-button",{attrs:{block:"",type:"info"},on:{click:e.save}},[e._v("提交")])],1)])]),a("footer")])},i=[function(){var e=this,a=e._self._c;return a("div",{staticClass:"page1Div2"},[a("span",{staticStyle:{"background-color":"#333333",display:"inline-block",width:"5px",height:"10px"}}),a("span",{staticStyle:{color:"#333333"}},[e._v("援助对象")])])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"page1Div2"},[a("span",{staticStyle:{"background-color":"#00AAFF",display:"inline-block",width:"5px",height:"10px"}}),a("span",{staticStyle:{color:"#333333"}},[e._v("基本信息")])])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"page1Div2"},[a("span",{staticStyle:{"background-color":"#00AAFF",display:"inline-block",width:"5px",height:"10px"}}),a("span",{staticStyle:{color:"#00AAFF"}},[e._v("代理人/案件情况")])])}],o=t("b775"),r=t("fa7d"),l={data(){return{isShow:!0,isShow2:!1,isShow3:!1,isShow4:!1,page1:!0,page2:!1,page3:!1,page4:!1,hqyzmtext:"获取验证码",m:60,form:{ab_ex75:"",ab_ex3:"",ab_ex69:"",ab_ex7:"",ab_ex14:"",ab_dat11:"",ab_ex65:"",ab_ex12:"",ab_ex129:"",ab_ex50:"",ab_ex44:"",ab_ex24:"",ab_ex29:"",ab_ex30:"",ab_ex31:"",ab_ex32:"",ab_ex33:"",ab_ex37:"",ab_ex40:"",ab_ex38:"",ab_ex39:"",ab_ex41:"",ab_ex34:"",ab_ex35:"",ab_ex36:"",ab_ex175:"",ab_ex1:"",ab_ex2:"",ab_ex4:"",ab_ex28:"",ab_ex23:"",ab_ex161:"",ab_ex162:"",yanzm:"",ab_dat14:"",ab_ex10_1:"",ab_ex10_2:"",ab_ex16:"",ab_ex141:"",ab_ex142:""},showPicker2:!1,showPicker3:!1,showPicker5:!1,ab_ex23_1:[],ab_ex30_1:[],ab_ex37_1:[],ab_ex40_1:[],ab_ex175_1:[],fileList:[],fileList2:[],fileList3:[],fileList4:[],fileList5:[],ab_ex162:"",ab_ex162_2:"",yzm:"",show:!1,hqyzmDis:!1,options:r["j"],options2:[],columns2:["汉族","壮族","满族","回族","苗族","维吾尔族","彝族","土家族","蒙古族","藏族","布依族","侗族","瑶族","朝鲜族","白族","哈尼族","哈萨克族","黎族","傣族","畲族","傈僳族","仡佬族","拉祜族","高山族","东乡族","佤族","水族","纳西族","羌族","土族","锡伯族","仫佬族","柯尔克孜族","达斡尔族","景颇族","傈僳族","撒拉族","布朗族","毛难族","塔吉克族","普米族","阿昌族","怒族","鄂温克族","京族","基诺族","德昂族","乌孜别克族","俄罗斯族","保安族","裕固族","门巴族","鄂伦春族","独龙族","塔塔尔族","赫哲族","珞巴族","其他","外国血统中国籍人士"],columns3:["研究生","本科","大专","高中","初中","小学","小学以下"]}},created(){this.form.ab_ex14="中国",this.form.ab_ex75="本人",Object(o["a"])({method:"post",url:"/social/assistanceWeixin/getLawyerList",data:{al_ex4:""}}).then(e=>{e.forEach((e,a)=>{this.options2.push({text:e.al_ex1,value:e.al_ex1,num:a,children:[]}),console.log(this.options2)})}).catch(e=>{this.$toast.fail("数据请求失败")}),"法律援助"==this.$route.query.stype&&this.$route.query.sId?Object(o["a"])({method:"post",url:"/social/assistanceWeixin/getFLBasic",data:{sId:this.$route.query.sId}}).then(e=>{console.log(e[0].data[0]),this.form=e[0].data[0],this.form.ab_ex23&&(this.ab_ex23_1=this.form.ab_ex23.split(",")),this.form.ab_ex37&&(this.ab_ex37_1=this.form.ab_ex37.split(",")),this.form.ab_ex30&&(this.ab_ex30_1=this.form.ab_ex30.split(",")),this.form.ab_ex40&&(this.ab_ex40_1=this.form.ab_ex40.split(",")),this.form.ab_ex175&&(this.ab_ex175_1=this.form.ab_ex175.split(",")),""!=this.form.ab_ex161&&""!=this.form.ab_ex2&&""!=this.form.ab_ex1&&(this.ab_ex162_2=this.form.ab_ex161+"/"+this.form.ab_ex2+"/"+this.form.ab_ex1);var a=e[0].data[0].ab_ex10.split(",");if(this.form.ab_ex10_1=a[0],this.form.ab_ex10_2=a.length>1?a[1]:"",this.form.ab_ex10_1&&this.imageView(this.form.ab_ex10_1).then(e=>{console.log(e),this.fileList.push({url:e,isImage:!0})}).catch(e=>{console.log(e)}),this.form.ab_ex10_2&&this.imageView(this.form.ab_ex10_2).then(e=>{this.fileList2.push({url:e,isImage:!0}),console.log(this.fileList2)}).catch(e=>{console.log(e)}),this.form.ab_ex141&&this.imageView(this.form.ab_ex141).then(e=>{this.fileList4.push({url:e,isImage:!0})}).catch(e=>{console.log(e)}),this.form.ab_ex142&&this.imageView(this.form.ab_ex142).then(e=>{this.fileList5.push({url:e,isImage:!0})}).catch(e=>{console.log(e)}),this.form.ab_ex16){let e=this.form.ab_ex16.split(",");e.forEach((e,a)=>{this.imageView(e).then(e=>{this.fileList3.push({url:e,isImage:!0})}).catch(e=>{console.log(e)})})}}).catch(e=>{this.$toast.fail("数据请求失败")}):Object(o["a"])({method:"post",url:"/social/assistanceWeixin/getUserInfo",params:{userId:localStorage.getItem("cs_userId")?localStorage.getItem("cs_userId"):""}}).then(e=>{console.log(e),e.success&&(this.form.ab_ex7=e.data.cardNo,this.form.ab_ex28=e.data.phone,this.form.ab_ex3=e.data.userName,this.form.ab_ex69=e.data.sex,this.changeSfz(e.data.cardNo))}).catch(e=>{this.$toast.fail("数据请求失败")})},methods:{next1(){this.page1=!1,this.page2=!0,this.isShow=!1,this.isShow2=!0},back1(){this.$router.go(-1)},next2(){this.form.ab_ex3=this.form.ab_ex3.replace(/\s*/g,"");let e=Object(r["i"])(this.form.ab_ex3);if(e)return this.$toast.fail("请输入正确的姓名"),!1;let a=this.isCardID(this.form.ab_ex7);return a?(this.$toast.fail(a),!1):(this.form.ab_ex14=this.form.ab_ex14.replace(/\s*/g,""),Object(r["i"])(this.form.ab_ex14)?(this.$toast.fail("请输入正确的国籍"),!1):(this.form.ab_ex4=this.form.ab_ex4.replace(/\s*/g,""),this.form.ab_ex4=Object(r["g"])(this.form.ab_ex4),this.form.ab_ex129=this.form.ab_ex129.replace(/\s*/g,""),this.form.ab_ex129=Object(r["g"])(this.form.ab_ex129),6!=this.form.ab_ex50.length&&this.$toast.fail("请输入正确的邮政编码"),this.yzm&&this.yzm==this.form.yanzm||(console.log(this.yzm),console.log(this.form.yanzm),console.log("0"==this.form.yanzm),"0"==this.form.yanzm)?(this.form.ab_ex44=this.form.ab_ex44.replace(/\s*/g,""),this.form.ab_ex44=Object(r["g"])(this.form.ab_ex44),0==this.ab_ex23_1.length?(this.$toast.fail("请选择身份类别（可重复交叉）"),!1):(-1!=this.ab_ex23_1.indexOf("其他")&&(this.form.ab_ex24=this.form.ab_ex24.replace(/\s*/g,""),this.form.ab_ex24=Object(r["g"])(this.form.ab_ex24)),void this.$refs.apply2.validate().then(()=>{this.page2=!1,this.page3=!0,this.isShow2=!1,this.isShow3=!0}).catch(e=>{console.log(e),this.$toast.fail(e[0].message)}))):(console.log("gg"),this.$toast.fail("验证码错误"),!1)))},back2(){this.page1=!0,this.page2=!1,this.isShow=!0,this.isShow2=!1},next3(){if("委托代理"==this.form.ab_ex75){this.form.ab_ex29=this.form.ab_ex29.replace(/\s*/g,"");let e=Object(r["i"])(this.form.ab_ex29);if(e)return this.$toast.fail("请输入正确的姓名"),!1;let a=this.isCardID(this.form.ab_ex31);if(a)return this.$toast.fail(a),!1;this.form.ab_ex32=this.form.ab_ex32.replace(/\s*/g,""),this.form.ab_ex32=Object(r["g"])(this.form.ab_ex32);let t=/^[1][3,4,5,7,8,9][0-9]{9}$/;if(!t.test(this.form.ab_ex33))return this.$toast.fail("请填写正确的联系方式"),!1}return 0==this.ab_ex37_1.length?(this.$toast.fail("请选择案件来源"),!1):(this.form.ab_ex39=this.form.ab_ex39.replace(/\s*/g,""),this.form.ab_ex39=Object(r["g"])(this.form.ab_ex39),0==this.ab_ex40_1.length?(this.$toast.fail("请选择申请事项所处阶段"),!1):(this.form.ab_ex41=this.form.ab_ex41.replace(/\s*/g,""),this.form.ab_ex41=Object(r["h"])(this.form.ab_ex41),void this.$refs.apply3.validate().then(()=>{this.page3=!1,this.page4=!0,this.isShow3=!1,this.isShow4=!0}).catch(e=>{console.log(e),this.$toast.fail(e[0].message)})))},back3(){this.page2=!0,this.page3=!1,this.isShow2=!0,this.isShow3=!1},save(){if(0==this.fileList.length)return void this.$dialog({message:"请上传身份证正面照片"});if(0==this.fileList2.length)return void this.$dialog({message:"请上传身份证反面照片"});if("委托代理"==this.form.ab_ex75){if(0==this.fileList4.length)return void this.$dialog({message:"请上传委托书照片"})}else if(0==this.ab_ex175_1.length&&0==this.fileList5.length)return void this.$dialog({message:"请上传经济状况表照片"});let e=this.$toast({type:"loading",message:"提交中...",overlay:!0,duration:0});var a=new Date,t=a.getFullYear(),s=a.getMonth()+1,i=a.getDate(),r=(a.getDay(),a.getHours()),l=a.getMinutes(),n=a.getSeconds();document.getElementById("Date");r<10&&(r="0"+r),l<10&&(l="0"+l),n<10&&(n="0"+n);var c=t+"-"+s+"-"+i+" "+r+":"+l+":"+n;this.form.ab_dat14=c,this.form.ab_ex23=this.ab_ex23_1.join(),this.form.ab_ex37=this.ab_ex37_1.join(),this.form.ab_ex30=this.ab_ex30_1.join(),this.form.ab_ex40=this.ab_ex40_1.join(),this.form.ab_ex175=this.ab_ex175_1.join(),Object(o["a"])({method:"post",url:"/social/assistanceWeixin/saveFlyz",data:{data:"["+JSON.stringify(this.form)+"]"}}).then(a=>{e.clear(),"error"==a[0].status?this.$toast.fail(a[0].msg):this.$dialog.alert({message:a[0].msg}).then(()=>{this.$router.push("/")}),console.log(a)}).catch(a=>{e.clear(),this.$toast.fail("提交失败"),console.log(a)})},back4(){this.page4=!1,this.page3=!0,this.isShow4=!1,this.isShow3=!0},onFinish({selectedOptions:e}){this.show=!1,console.log(e.map(e=>e.text));let a=e.map(e=>e.text),t=e.map(e=>e.text+e.value);this.form.ab_ex1=a[2],this.form.ab_ex2=a[1],this.form.ab_ex161=a[0],this.ab_ex162_2=a.join("/"),this.form.ab_ex162=t.join(","),""==this.form.ab_ex4&&(this.form.ab_ex4=a[0]+a[1]+a[2]),""==this.form.ab_ex129&&(this.form.ab_ex129=a[0]+a[1]+a[2])},onChange({selectedOptions:e}){console.log(e),1==e.length&&Object(o["a"])({method:"post",url:"/social/assistanceWeixin/getLawyerList",data:{al_ex4:e[0].value}}).then(a=>{this.options2[e[0].num].children=a,a.forEach((a,t)=>{this.options2[e[0].num].children[t].text=a.al_ex1,this.options2[e[0].num].children[t].value=a.al_ex1})}).catch(e=>{this.$toast.fail("数据请求失败")})},onFinish2({selectedOptions:e}){console.log(e[1]),this.showPicker5=!1,this.form.ab_ex35=e[1].al_ex2,this.form.ab_ex36=e[1].al_ex3,this.form.ab_ex42=e[1].al_ex4,this.form.ab_ex43=e[1].al_ex4+","+e[1].al_ex1},hqyzm(){var e=/^[1][3,4,5,7,8,9][0-9]{9}$/;if(!e.test(this.form.ab_ex28))return this.$toast.fail("请填写正确的手机号"),!1;console.log("-----------------"),Object(o["a"])({method:"get",url:"/social/assistanceWeixin/backTelCheck",params:{tel:this.form.ab_ex28}}).then(e=>{"+OK"==e[0].status?(this.yzm=e[0].Vcode,this.$toast.success(e[0].msg)):this.$toast.fail(e[0].msg)}).catch(e=>{console.log(e),this.$toast.fail("验证码发送失败")}),console.log("-----------------"),this.hqyzmtext=this.m+"s",this.hqyzmDis=!0;let a=setInterval(()=>{this.m--,this.hqyzmtext=this.m+"s",0==this.m&&(this.hqyzmtext="获取验证码",this.m=60,this.hqyzmDis=!1,clearInterval(a))},1e3)},beforeRead(e){return"image/heic"!=e.type&&""!=e.type||(this.$toast.fail("照片格式不正确"),!1)},imgRequest(e,a,t){Object(o["a"])({method:"post",url:"/social/minios/fileUpload",data:e}).then(e=>{a.status="done",a.message="上传完成",console.log(e),1==t?this.form.ab_ex10_1=e[0].filename:2==t?this.form.ab_ex10_2=e[0].filename:4==t?this.form.ab_ex141=e[0].filename:5==t?this.form.ab_ex142=e[0].filename:3==t&&(console.log(1111),this.form.ab_ex16?this.form.ab_ex16=this.form.ab_ex16.concat(",",e[0].filename):this.form.ab_ex16=this.form.ab_ex16.concat(e[0].filename),console.log(this.form.ab_ex16))}).catch(e=>{a.status="failed",a.message="上传失败",1==t?this.fileList.pop():2==t?this.fileList2.pop():3==t?this.fileList3.pop():4==t?this.fileList4.pop():5==t&&this.fileList5.pop(),this.$toast.fail("上传失败"),console.log(e)})},uploadImg(e){return a=>{console.log(a),console.log(e),a.status="uploading",a.message="上传中...";new r["a"](a,e,this.imgRequest)}},beforeDelete(e){return(a,t)=>{let s=this.form[e].split(",");return s.splice(t.index,1),this.form[e]=s.join(","),console.log(this.form[e]),console.log(e),console.log(a),console.log(t),!0}},onConfirm(e,a,t){this.form[a]=e,this[t]=!1},changeSflb(e){-1==e.indexOf("其他")&&(this.form.ab_ex24="")},changeAjly(e){console.log(e),-1==e.indexOf("其他来源")&&(this.form.ab_ex38="")},changeDlr(e){2==e.length&&e.splice(0,1)},changeSfz(e){let a=this.isCardID(this.form.ab_ex7);a||(this.form.ab_dat11=e.substring(6,10)+"-"+e.substring(10,12)+"-"+e.substring(12,14),this.form.ab_ex69=this.getSex(e))},getSex(e){let a="",t=this.isCardID(e);return t||(a=parseInt(e.substr(16,1))%2==1?"男":"女"),a},changeSqfs(e){"本人"==e&&(this.form.ab_ex29="",this.ab_ex30_1=[],this.form.ab_ex31="",this.form.ab_ex32="",this.form.ab_ex33="")},imageView(e){return Object(o["a"])({method:"post",url:e,headers:{token:sessionStorage.getItem("token")},data:{}})},isCardID(e){var a={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"},t=0;if(!/^\d{17}(\d|x)$/i.test(e))return"身份证长度或格式错误";if(e=e.replace(/x$/i,"a"),null==a[parseInt(e.substr(0,2))])return"身份证地区非法";let s=e.substr(6,4)+"-"+Number(e.substr(10,2))+"-"+Number(e.substr(12,2));var i=new Date(s.replace(/-/g,"/"));if(s!=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate())return"身份证上的出生日期非法";for(var o=17;o>=0;o--)t+=Math.pow(2,o)%11*parseInt(e.charAt(17-o),11);return t%11!=1?"身份证号非法":""}}},n=l,c=(t("f2bf"),t("2877")),h=Object(c["a"])(n,s,i,!1,null,"c3df3922",null);a["default"]=h.exports},db40:function(e,a,t){},f2bf:function(e,a,t){"use strict";t("db40")}}]);