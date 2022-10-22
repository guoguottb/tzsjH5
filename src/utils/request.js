import axios from 'axios'
import router from '@/router/index.js'
//import CancelStore from '@/axios/store';
// import { getHeader } from '@/axios/header'
// import { Message, MessageBox } from 'element-ui'

let baseURL = process.env.baseURL;
// if (process.env.NODE_ENV === "development") {
//   baseURL = process.env.baseURL;
// } else {
//   baseURL = process.env.baseURL;
// }

// axios.defaults.timeout = 30000;
// axios.defaults.retry = 1;
// axios.defaults.retryDelay = 1000;


//const CancelToken = axios.CancelToken;


// 创建axios实例
const service = axios.create({
  baseURL: baseURL, // api 的 base_url
  timeout: 30000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    // 这个是 取消重点
    //config.cancelToken = new CancelToken((cancel) => {
    //  CancelStore._axiosPromiseCancel.push(cancel);
    //});

    // let url = config.url.replace(config.baseURL,'');
    // let code = config.code;
    // config.headers = getHeader(url, code) // 让每个请求携带自定义签名
	// config.headers = {'Content-Type': 'application/json; charset=UTF-8',};
    if(sessionStorage.token){
      // config.headers.Authorization = sessionStorage.token
      config.headers.token = sessionStorage.token
    }
    if(process.env.NODE_ENV=="development"){
        let url=config.url;
        // url=url.replace("/social/","/testsocial/");
        config.url=url;
    }
   /* console.log(process.env.NODE_ENV)
    console.log("config==============================")
    console.log(config);*/
    return config
	

  },
  error => {
    console.log(error) // for debug 11
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    if(response.config.responseType=='blob'){
      if(response.status==200){
        return response;
      }else{
        return Promise.reject(error);
      }
    }else{
		if (response.status === 200) {
		  return response.data
		
		} else if(response.status === 407){
		  // console.log("Token失效跳转登陆页面");
		  // sessionStorage.clear();
		  // location.href="/ecloud-sp/logout";
		} else {
		  // Message({
		  //   message: res.message,
		  //   type: 'error',
		  //   duration: 5 * 1000
		  // })
		  // return Promise.reject('error1')
				return Promise.reject('error1')
		}
  //     const res = response.data;
  //     if (res.code === 200) {
  //       return response.data

  //     } else if(res.code === 407){
  //       // console.log("Token失效跳转登陆页面");
  //       // sessionStorage.clear();
  //       // location.href="/ecloud-sp/logout";
  //     } else {
  //       Message({
  //         message: res.message,
  //         type: 'error',
  //         duration: 5 * 1000
  //       })
  //       // return Promise.reject('error1')
		// return Promise.reject('error1')
  //     }
    }

  },
  error => {
    console.log('err' + error) // for debug
	
    // if (axios.isCancel(error)) {
    //   // 为了终结promise链 就是实际请求 不会走到.catch(rej=>{});这样就不会触发错误提示之类了。
    //   return new Promise(() => {});
    // } else {
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
	
    // return Promise.reject('error2')
    // }
	
	console.log(error.response)
	// 正常判断应该是判断error.response.status，但是后端返到error.response.data.message
	//  if (error.response) {// 对响应错误做出反应
	// 	switch (error.response.status) {
	// 		case 401:
	// 			// 401 清除token信息  并跳转到login
	// 	}
	// }
	
	if (error.response) {// 对响应错误做出反应
		switch (error.response.data.message) {
			case '401':
				// 401 清除token信息  并跳转到login
				console.log('token过期了，需要重新登录')
				router.replace({
					path:'/login',
					query:{redirect:router.currentRoute.fullPath}
				})
		}
	}
	// 返回接口返回的错误信息
	return Promise.reject(error.response.data);
  }
)

export default service