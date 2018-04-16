/**
 * Created by jiaaobo on 16/11/18.
 */
import Vue from 'vue';
import VueRouter from  "vue-router";
import Vuex from "vuex";
import Filter from "@common/filter";
import ElementUI from 'element-ui';
import '../lib/normalize/normalize.css';
import  "../lib/font-awesome/css/font-awesome.min.css";
import 'element-ui/lib/theme-chalk/index.css';
import SingletonObject from  "@common/class/SingletonObject";
import VueBus from  "@common/class/VueBus";
import axios from 'axios'
import VueAxios from 'vue-axios'
import Net from "@util/net";






class Config extends  SingletonObject {


  constructor(){
    super();

    //使用路由
    Vue.use(VueRouter);
    //使用ElementUI
    Vue.use(ElementUI);
    //使用axios
    Vue.use(VueAxios, axios);
    //使用状态管理
    Vue.use(Vuex);
    //使用EventBus
    Vue.use(VueBus);
    //导入过滤器
    Filter();
    //设置element组件大小
    Vue.use(ElementUI, { size: 'small' });

    //开启debug模式
    Vue.config.debug = true;
    Vue.config.productionTip = false;

    //网络初始化
    Net.init();




    //进行服务端配置检查
    this.checkEnv("test");

  }

  SERVER  = {
    url: {
      kidscare: "/kidscare",
      saas: "/kidscare",
      credit: "/credit",
      uc: "/uc",
      qrcode: "/qrcode",
      ucm: "/ucm",
      yucai: "/yucai",
      cmw: "/cmw",
      yxb: "/yxbAppWeb",
      freedom: "/freedom",
      boss: "/boss",
      baby: "/baby",
      robrain: "/robrain",
      message: "/message",
      file: "/file",
      vip: "/vip",
      topic: "/topic",
    }
  }

  checkEnv(env){

      let root = window.location.origin || '';
      let port = '';

      //自动匹配项目
      if(!env){
        //当前加载环境 dev：开发环境 test：测试环境 "": 生产环境或本地  pre 预发布
        env = (root.indexOf("localhost") > 0 || root.indexOf("127.0.0.1") > -1) ? 'dev' : root.indexOf("dev") > 0 ? "dev" : root.indexOf("test") > 0 ? "test" : root.indexOf("pre") > 0 ? "pre" : "";
      }
      else{
        env = env == "formal" ? "" : env;
      }

      this.SERVER.env = env;

      //端口检查
      for (var obj in this.SERVER.url) {

        //接口判断可以在这里
        switch (env){
          case  "dev":
            break;
          //todo
        }

        let domain =  env+ ".imzhiliao.com";
        this.SERVER.url[obj] = window.location.protocol+"//" + domain + port + this.SERVER.url[obj];
      }

      console.log("当前root : ", root);
      console.log("当前环境地址: ", this.SERVER.url);
    }

}


export  default  Config.getInstance();
