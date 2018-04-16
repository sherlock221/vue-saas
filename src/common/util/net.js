import axios from 'axios'
import qs from "qs";
import  Vue from "vue";
import UI from "@util/ui";
import Storage from "@util/storage";
import Location from "@util/location";
import store from "../../store/store";
import Router from "../router";

var axInstance;

var requestBodyStructure  = {"style" : '', data : {}};
var requestBodyStructureDataName = 'data';


const init = function(){

  if(axInstance){
    console.error("axInstance已经初始化!");
    return;
  }

   axInstance = axios.create({
    //请求超时时间
    timeout: 5000,
    //跨站点访问控制请求 如果true  Access-Control-Allow-Origin 字段必须指定域名，不能为*
    withCredentials:false,
    responseType: "json"
  });


  //请求拦截器
  axInstance.interceptors.request.use(config=>{

    console.log(config);

    //json请求data包结构
    if(config.headers['Content-Type'] == "application/json" && requestBodyStructure){
      requestBodyStructure[requestBodyStructureDataName] = config.data;
      config.data = JSON.stringify(requestBodyStructure);
    }

    //是否携带token等参数
    if(store.state.user.token){
        config.url = Location.parseUrlByParams(config.url,{token : store.state.user.token});
    }

    return config;

  },(err)=>{

  });

  //响应拦截器
  axInstance.interceptors.response.use(response => {

    let bizRes = response.data;

    //业务异常判断(这里需要根据你自己业务情况做调整)
    switch (bizRes.rtnCode){
      case  "0000000" :
        return Promise.resolve(bizRes);
        break;
      case  "6666666" :
        //token不正确或过期 重新登录
        UI.toastError("token不正确或过期 请重新登录");
        Router.getInstance().vueRouter.replace({path : "/auth/login"});
        break;
      //业务错误弹窗提示 返回reject
      default :
        UI.toastError(bizRes.msg);
        return Promise.reject(bizRes);
    }


  }, error => {

    let message = {};

    if(!error.response) {
      message.content = "网络错误，请求超时";
      message.state =  error.code;
    }
    else {

      switch (error.response.status){
        case (500):
          message.content = "服务器错误";
          break;
        case (401):
          message.content = "请重新登录";
          break;
        case (403):
          message.content = "您没有权限";
          break;
        case (404):
          message.content = "获取资源错误404";
          break;
        case (408) :
          message.content = "服务器超时";
          break;
        default:
          message.content = "网络不给力,请稍后再试~";
      }

      message.status = error.response.status;

    }

    UI.toastError(message.content);

    return Promise.reject(error);
  });
}


const handlerParams = function(url,obj){
    var i = 0;
    var isHasParam;

    if (url.indexOf("?") != -1)
      isHasParam = true;

    for (var o in obj) {
      if (obj[o] == undefined || obj[o] == null) {
        continue;
      }

      if (i == 0 && !isHasParam) {
        url += "?" + o + "=" + obj[o];
      } else {
        url += "&" + o + "=" + obj[o];
      }
      i++;
    }
    return url;
}

const  baseJSON = function(method,url,params,data){
  params = params || {};
  data =  data  || {};

  url = handlerParams(url,params);
  return axInstance({
    method: method,
    headers: {
      "Content-Type": "application/json"
    },
    data: data,
    url,
  });
};

const  baseForm= function(method,url,params,data){

  params = params || {};
  data =  data  || {};

  url = handlerParams(url,params);

  return axInstance({
    method: method,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    },
    data: qs.stringify(data),
    url,
  });

};




/**
 * 公共方法
 */
export default {

  init : init,

  postJSON(url,params,data){
    return baseJSON("POST",url,params,data);
  },

  getJSON(url,params){
    return baseJSON("GET",url,params);
  },

  postForm(url,params,data){
    return baseForm("POST",url,params,data);
  },

  uploadFile(url,data){

  },






}



