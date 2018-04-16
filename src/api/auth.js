import  Net from "@util/net";
import  Config from  "@config";
export  default  class  AuthSev{

    /**
     * 登录接口
     * @param data
     * @returns {*}
     */
      static login(data){
        return Net.postJSON(Config.SERVER.url.uc+"/user/saasLogin",{},data);
      }


      /**
       * 获得用户信息
       * @returns {*}
       */
      static getUserInfo(){
        return Net.postJSON(Config.SERVER.url.kidscare + "/user/queryUserInfo");
      }



}
