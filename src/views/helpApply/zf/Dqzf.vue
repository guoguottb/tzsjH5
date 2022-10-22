<template>
	<div class="helpApply">
		<header>
			<div class="headerHead">
				<div>
					<div :class="{headerF:isShow}">走访信息</div>
				</div>
				<div class="headerRectangle"></div>
				<div>
					<div :class="{headerF:isShow2}">走访照片</div>
				</div>
			</div>
		</header>
		<main>
			<div id="page1" v-show="page1" style="height: 600px; display: block;text-align: left;">
				<div style="font-size:12px;padding-left:20px;padding-right:20px;text-align: left;">
					<div style="border-bottom:#aaa solid 1px;font-size: 16px;">
						<span style="background-color: #00AAFF;display: inline-block;width: 5px;height: 10px;"></span>
						<span style="color: #00AAFF;">走访信息</span>
					</div>
					<van-form ref='apply' @submit="next1" style="margin-top: 20px;">
						<van-field v-model="form.arv_ex1" name="arv_ex1" maxlength="10" label="走访对象" placeholder="走访对象" required
							:rules="[{ required: true, message: '请填写走访对象' }]" />
							
							
							
						
						<van-field v-model="form.arv_ex2" name="arv_ex2" label="身份证号" placeholder="身份证号" required
							:rules="[{ required: true, message: '请填写身份证号' }]" />
							
						<van-field readonly clickable name="arv_ex4" v-model="form.arv_ex4" label="保障类别" required
							placeholder="点击选择保障类别" :rules="rules.rules3" @click="showPicker1 = true" />
						<van-popup v-model="showPicker1" position="bottom">
							<van-picker show-toolbar :columns="columns" @confirm="onConfirm1($event,'arv_ex4','showPicker1')"
								@cancel="showPicker1 = false" />
						</van-popup>
						
						<van-field v-model="ab_ex162_2"  name="ab_ex162_2" center readonly label="行政区划" placeholder="请选择所在行政区划" required
							@click="show = true" :rules="rules.rules4">
   						</van-field>
						<van-popup v-model="show" round position="bottom">
							<van-cascader title="请选择所在行政区划" :options="options"
								@close="show = false" @finish="onFinish" />
						</van-popup>
						
						<van-field v-model="form.arv_ex3" name="arv_ex3" maxlength="50" label="家庭住址" placeholder="家庭住址" required
							:rules="rules.rules5" />
						<van-field v-model="form.arv_ex5" center name="arv_ex5" maxlength="11" type="digit" label="联系电话" placeholder="联系电话" required
							:rules="rules.rules6">
						</van-field>
						<van-field v-model="form.arv_ex6" name="arv_ex6" maxlength="10" label="走访人" placeholder="走访人" required
							:rules="rules.rules7" />
						<van-field v-model="form.arv_ex7" name="arv_ex7" maxlength="100" label="走访内容" placeholder="走访内容" required
							:rules="rules.rules8" />
						<van-field readonly clickable name="arv_ex8" :value="form.arv_ex8" label="走访类型" required
							placeholder="点击选择走访类型" :rules="rules.rules9" @click="showPicker2 = true" />
						<van-popup v-model="showPicker2" position="bottom">
							<van-picker show-toolbar :columns="columns2" @confirm="onConfirm1($event,'arv_ex8','showPicker2')"
								@cancel="showPicker2 = false" />
						</van-popup>
						<van-field v-model="form.arv_ex9" name="arv_ex9" maxlength="300" label="发现问题" placeholder="发现问题" required
							:rules="rules.rules10" />
						<div style="margin: 16px 0 0 0;display: flex;justify-content: space-around;">
							<van-button block type="info" native-type="button" @click="next1">下一步</van-button>
						</div>
					</van-form>
				</div>
			</div>

			<div id="page2" v-show="page2" style="height: auto;margin-top: 100px;">
				<div class="page2Div">
					<div style="height:40px;line-height:40px;font-size: 17px;">走访照片:</div>
					<div style="margin-top:10px;">
						<div style="position:relative;width:91%;float: left;">
							<van-uploader v-model="fileList" :after-read="uploadImg()" :before-delete="beforeDelete('arv_ex10')" />

						</div>
					</div>
				</div>
				<div style="margin-top: 20px;display: flex;justify-content: space-around;">
					<van-button block native-type="button" @click="back2">上一步</van-button>
					<van-button block type="info" @click="save">提交</van-button>
				</div>
			</div>
		</main>
		<footer>
		</footer>
	</div>
</template>

<script>
	import request from '@/utils/request.js'
	import {tszfValidate,tszfFilter,isCardID,xzqh,compressImg} from '@/utils/utils.js'
	export default {
		data() {
			return {
				isShow: true,
				isShow2: false,
				checked: false,
				page1: true,
				page2: false,
				rules:{
					rules1:[
						{
							required:true,
							message:'请填写走访对象',
							trigger:'onBlur'
						}
					],
					rules2:[
						{
							required:true,
							message:'请填写身份证号',
							trigger:'onBlur'
						}
					],
					rules3:[
						{
							required:true,
							message:'请选择保障类别',
							trigger:'onBlur'
						}
					],
					rules4:[
						{
							required:true,
							message:'请选择行政区划',
							trigger:'onBlur'
						}
					],
					rules5:[
						{
							required:true,
							message:'请填写家庭住址',
							trigger:'onBlur'
						}
					],
					rules6:[
						{
							required:true,
							message:'请填写联系电话',
							trigger:'onBlur'
						}
					],
					rules7:[
						{
							required:true,
							message:'请填写走访人',
							trigger:'onBlur'
						}
					],
					rules8:[
						{
							required:true,
							message:'请填写走访内容',
							trigger:'onBlur'
						}
					],
					rules9:[
						{
							required:true,
							message:'请选择走访类型',
							trigger:'onBlur'
						}
					],
					rules10:[
						{
							required: true,
							message:'请填写发现问题',
							trigger:'onBlur'
						}
					],
				},
				//
				columns: ['城乡低保', '特困供养', '低收入家庭', '困境儿童', '残疾人补贴', '下放职工', '临时救助', '物价补贴', '水电费减免', '建档立卡扶贫', '医疗应急救助', '住房救助', '灾害救助', '工会救助', '团委救助', '妇联救助', '红会救助', '社会组织救助', '慈善救助', '其他救助', '保险救助', '流浪乞讨救助', '医疗救助', '教育救助', '就业救助', '司法援助', '尊老金'],
				columns2:['日常走访','定期回访','特殊走访','电话走访'],
				showPicker1:false,
				showPicker2:false,
				form: {
					arv_ex1 :'',
					arv_ex2 :'',
					arv_ex4 :'',
					arv_ex3 :'',
					arv_ex5 :'',
					arv_ex6 :'',
					arv_ex7 :'',
					arv_ex8 :'',
					arv_ex9 :'',
					arv_ex10 :'',
					arv_ex11 :'',
					arv_ex12 :'',
					arv_ex13 :'',
					arv_ex14:'', //xzqh
					arv_dat1:'',
				},
				fileList: [],
				ab_ex162_2:'',
				show: false,
				// 选项列表，children 代表子选项，支持多级嵌套
				options: xzqh,
			}
		},
		created() {
			request({
				method:'post',
				headers:{
					token:localStorage.getItem("token")
				},
				url: '/social/assistanceWeixin/getRegularVisits',
				data:{
					// arv_id: this.$route.query.sId
					sId: this.$route.query.sId
				},
			}).then(res=>{
				console.log(res,'数据');

				if(res[0].data.length>0){

					for(let i in res[0].data[0]){
						res[0].data[0][i] = unescape(res[0].data[0][i])
					}
					let json = res[0].data[0] 
					this.form = json

					// 行政区划显示
					if(json.arv_ex14){
						this.ab_ex162_2 = json.arv_ex13+'/' + json.arv_ex11+'/' + json.arv_ex12
					}
					//图片显示
					if(json.arv_ex10){
						let imgs = json.arv_ex10.split(",");
						imgs.forEach((value,index)=>{
							this.imageView(value).then(res=>{
								// 这个从正确的进来
								this.fileList.push({
									url: res,
									isImage: true
								})
								console.log(this.fileList)
							}).catch(res=>{
								console.log(res)
							})
						})
					}
				}
			}).catch(err=>{
				
			})
		},
		methods: {

			next1() {
				// 去除姓名的空白符号并且判断姓名是否合法
				this.form.arv_ex1 = this.form.arv_ex1.replace(/\s*/g,"")
				let tszf = tszfValidate(this.form.arv_ex1)
				if(tszf){
					this.$toast.fail("请输入正确的走访对象")
					return false
				}
				
				// 验证联系电话
				let myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
				if (!myreg.test(this.form.arv_ex5)) {
					this.$toast.fail('请填写正确的联系电话')
					return false
				}
				// 去除走访人的空白符号并且判断走访人是否合法
				this.form.arv_ex6 = this.form.arv_ex6.replace(/\s*/g,"")
				let tszf2 = tszfValidate(this.form.arv_ex6)
				if(tszf2){
					this.$toast.fail("请输入正确的走访人")
					return false
				}
				
				// 过滤家庭住址特殊字符和空格
				this.form.arv_ex3 = this.form.arv_ex3.replace(/\s*/g,"")
				this.form.arv_ex3 = tszfFilter(this.form.arv_ex3)
				// 判断身份证是否合法
				let msg = isCardID(this.form.arv_ex2)
				if(msg){
					this.$toast.fail(msg)
					return false
				}else{
					this.$refs.apply.validate().then(res=>{
						this.page1 = false
						this.page2 = true
						this.isShow = false
						this.isShow2 = true
					}).catch(err=>{
						console.log(err[0].message)
						this.$toast.fail(err[0].message)
					})
				}
			},
			back2() {
				this.page1 = true
				this.page2 = false
				this.isShow = true
				this.isShow2 = false
			},
			onConfirm1(value,itemval1,itemval2) {
				this.form[itemval1] = value
				this[itemval2] = false
			},
			imageView(url){
				return request({
					method: 'post',
					url: url,
					headers: {
						'token': sessionStorage.getItem('token')
					},
					data:{
						
					},
				})
			},
			save() {
				// 遮罩
				let toast = this.$toast({
					type:'loading',
					message:'提交中...',
					overlay:true,
					duration:0
				})
				
				var date=new Date();
				var year=date.getFullYear(); //获取当前年份
				var mon=date.getMonth()+1; //获取当前月份
				var da=date.getDate(); //获取当前日
				var day=date.getDay(); //获取当前星期几
				var h=date.getHours(); //获取小时
				var m=date.getMinutes(); //获取分钟
				var s=date.getSeconds(); //获取秒
				var d=document.getElementById('Date');
				h<10 ? h='0'+h:h
				m<10 ? m='0'+m:m
				s<10 ? s='0'+s:s
				var mytime=year+'-'+mon+'-'+da+' '+h+':'+m+':'+s;
				this.form.arv_dat1 = mytime
				// 提交
				request({
					method:'post',
					headers:{
						token:localStorage.getItem("token")
					},
					url: '/social/assistanceWeixin/saveRegularVisits',
					data:{
						data:'['+JSON.stringify(this.form)+']',
					},
				}).then(res=>{
					toast.clear()
					// 提示提交成功
					this.$dialog.alert({
					      message: '提交成功',
					    }).then(()=>{
							this.$router.push('/zfhc?stype=定期走访')
						})
					console.log(res)
				}).catch(error=>{
					toast.clear()
					// 提示提交失败
					this.$toast.fail('提交失败')
					console.log(error)
				})
			},
			back3() {
				this.page3 = false,
					this.page2 = true
				this.isShow3 = false,
					this.isShow2 = true
			},
			// 全部选项选择完毕后，会触发 finish 事件
			onFinish({
				selectedOptions
			}) {
				this.show = false;
				console.log(selectedOptions.map((option) => option.text))
				let area = selectedOptions.map((option) => option.text)
				let area2 = selectedOptions.map((option) => option.text+option.value)
				this.form.arv_ex12 = area[2]  //村
				this.form.arv_ex11 = area[1]  //街道
				this.form.arv_ex13 = area[0]  //区
				this.ab_ex162_2 = area.join('/');
				this.form.arv_ex14 = area2.join(','); //xzqh
				// 更改家庭住址
				if(this.form.arv_ex3==''){
					this.form.arv_ex3=area[0]+area[1]+area[2];
				}
			},
			imgRequest(param,file,num){
				request({
					method:'post',
					url: '/social/weixinMinios/fileUpload',
					data:param,
				}).then(res=>{
					 file.status = 'done';
					 file.message = '上传完成';
					 console.log(res)
					 if(this.form.arv_ex10){
						 this.form.arv_ex10 = this.form.arv_ex10.concat(',',res[0].filename)
					 }else{
						 this.form.arv_ex10 = this.form.arv_ex10.concat(res[0].filename)
					 }
					 console.log(this.form.arv_ex10)
				}).catch(erro=>{
					 file.status = 'failed';
					 file.message = '上传失败';
					 console.log(erro)
					 this.fileList.pop()
					 this.$toast.fail('上传失败')
				})
			},
			uploadImg() {
				return file=>{
					console.log(file)
					file.status = 'uploading';
					file.message = '上传中...';
					
					let obj = new compressImg(file,0,this.imgRequest)
					 
				}
			},
			beforeDelete(data){
				return (file,detail)=>{
					let arr = this.form[data].split(',')
					arr.splice(detail.index,1)
					this.form[data] = arr.join(',')
					
					console.log(this.form[data])
					console.log(data)
					console.log(file)
					console.log(detail)
					return true
				}
			},
		}
	}
</script>

<style scoped>
	.headerF {
		/* color: #409EFF; */
		color: #333333;
	}
	.marginstyle {
		margin: 10px;
	}
	.helpApply {
		width: 100%;
		height: 100%;
		background-color: #f5f5f5;
		background-size: 100% 100%;
		position: fixed;
		overflow: auto;
	}

	header {
		width: 100%;
		height: 88px;
		background-color: #3e80cc;
		box-shadow: 0px 0px 30px #a1a1a1;
		position: fixed;
		z-index: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28px;
		color:#ffffff;
	}

	.headerHead {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28px;
	}

	/* 	.headerCircle{
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-color: #008B8B;
	} */
	.headerRectangle {
		width: 100px;
		height: 8px;
		background-color: #e2e2e2;
		border-radius: 10px;
		margin: 0 20px 0 20px;
	}

	main {
		margin-top: 100px;

	}
	.page2Div{
		overflow: auto;
		margin-left:4%;
		width:80%;
		height:500px;
		font-size:28px;
		color:#545454;
		padding-left:40px;
		padding-right:40px;
		border-radius: 30px;
		border:#aaa solid 1px;
	}
</style>
