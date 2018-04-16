import TYPE from "./types";
import Storage from "@util/storage";
import  Router from "@common/router";
export default {

  [TYPE.TOGGLE_MENU] (state, action) {
      state.menuStatus = state.menuStatus == 1 ? 0 : 1;
  },

  // [TYPE.GET_MENU_LIST] (state, action) {
  //
  //   let rightList = action.data;
  //   let rootPath = Router.getInstance().rootPath;
  //   //应用权限
  //   let appRouter  = rootPath[1].children;
  //
  //   let userRouter = [];
  //
  //   //根据权限生成用户路由
  //   for(let router of appRouter){
  //     if(_hasRight(router.meta.pms,rightList)){
  //       userRouter.push(router);
  //     }
  //   }
  //
  //   console.log(userRouter);
  //
  //   Router.getInstance().rootPath[1] = userRouter;
  //   Router.getInstance().vueRouter.addRoutes(Router.getInstance().rootPath);
  //
  //   state.menuList = userRouter;
  //
  // },


  [TYPE.GET_MENU_LIST] (state, action) {
    state.menuList = Router.getInstance().rootPath[1].children;
  }


}


const  _hasRight = function(pms,rightList = []){

  if(!pms || rightList.length <=0 ) return false;

  let pmsArray = pms.split(".");

  for(let first of rightList) {
    if (pmsArray[0] == first.key) {
      for (let second of first.values) {
        if (pmsArray[1] == second.key) {
          return true;
        }
      }

    }
  }

  return false;
}
