import Vuex from "vuex";
import createLogger from 'vuex/dist/logger';
import createPersistedState from 'vuex-persistedstate'

const debug = process.env.NODE_ENV !== 'production';


const PersistedStateSetting = {
  key: 'appStore',

  //持久化的state路径
  paths : ["user","app"],

  // reducer: state => ({
  //   userInfo: state.user.userInfo,
  //   token : state.user.token,
  // }),
};

const getPlugins = function(){
  var plugins = [createPersistedState(PersistedStateSetting)];
  /**
   * logger 插件会生成状态快照，所以仅在开发环境使用。
   */
  if(debug)
      plugins.push(createLogger());

  return plugins;
}

console.log(require("./modules/app/state").appModule);

const store = new Vuex.Store({

  //默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的——这样使得多个模块能够对同一 mutation 或 action 作出响应。
  modules: {

    //用户信息模块
    user:  require("./modules/user/state").userModule,
    //页面框架模块
    app:   require("./modules/app/state").appModule
  },


  plugins: getPlugins(),

  /**
   * 在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到
   */
  strict : debug

})



export  default  store;
