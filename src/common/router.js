import VueRouter from  "vue-router";
import SingletonObject from  "@common/class/SingletonObject";

//基础page 不进行懒加载
import AppLayout from "@common/component/layout/Content";
import AuthLayout from "@common/component/layout/Auth";


export default class Router extends  SingletonObject{

  /**
   * 认证系统模块路由映射
   * @type {[null]}
   */
  authRouterModules = [
    require("@biz/auth/auth.router").routers
  ];

  /**
   * 权限系统路由映射路径
   * @type {*[]}
   */
  appRouterModules =  [

    //财务模块
    require("@biz/finance/finance.router").routers,
  ];


  rootPath = [
    {
      path: '/auth',
      component : AuthLayout,
      children :[]
    },

    {
      path : "/app",
      component : AppLayout,
      requiresAuth : true,
      children : [

      ]
    },

    {path: '*', redirect: '/auth/login'},
  ];


  constructor(){

    super();

    this.vueRouter = new VueRouter({
      //默认 hash 模式
      // mode: 'history',
      routes : this.rootPath,
      scrollBehavior
    });


    /**
     * 钩子函数
     */

    //前置
    this.vueRouter.beforeEach((to, from, next) => {
      console.log("进入钩子函数..");

      //根据路由meta的title 设置网站title
      if(to.meta.title) document.title = to.meta.title;

      //统计工具


      //路由权限验证
      if(to.matched.some(m => m.meta.requireAuth)){
        console.log("需要验证当前是否具备权限");
        next();
        // next({
        //   path: '/login',
        //   query: { redirect: to.fullPath }
        // })

      }
      else{
        next();
      }




    });

    //后置
    this.vueRouter.afterEach((to, from) => {
      console.log("tt钩子函数..");
    });


    //加载路由
    this.loadRouters();
  }



  /**
   * 加载路由到系统
   * @returns {Promise.<void>}
   */
  loadRouters (){

    let authChildRouter = [],
        appChildRouter  = [];

    this.authRouterModules.forEach((r)=>{ authChildRouter = authChildRouter.concat(r)});
    this.appRouterModules.forEach((r)=>{appChildRouter = appChildRouter.concat(r) });





    console.log(appChildRouter);


    //去vuex获取菜单
    //todo

    console.log(this.appRouterModules);

    this.rootPath[0].children = authChildRouter;
    this.rootPath[1].children = appChildRouter;



    this.vueRouter.addRoutes(this.rootPath);

  }

}



const scrollBehavior = (to, from, savedPosition) =>{
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    setTimeout(() => {
      window.scrollTo(savedPosition.x, savedPosition.y);
    }, 400);
    return savedPosition;
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
}






