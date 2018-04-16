import  getters from "./getters";
import  actions from "./actions";
import  mutations from "./mutations";

export  const  appModule = {
  state : {
    //菜单展开状态
    menuStatus : 1,
  },
  getters,
  actions,
  mutations
}


