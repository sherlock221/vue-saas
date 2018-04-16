import  getters from "./getters";
import  actions from "./actions";
import  mutations from "./mutations";

export  const  userModule = {
  state : {
    userInfo  : {},
    token : ''
  },
  getters,
  actions,
  mutations
}
