import AuthSev from  "@api/auth";
import TYPE from "./types";


export default {


    /**
     * 获得用户信息
     * @param commit
     * @param params
     * @returns {Promise.<void>}
     */
    async getUserInfo({ commit },params = {}) {
      let res = await AuthSev.getUserInfo();
      commit(TYPE.GET_USER_INFO_SUCCESS,{ data : res.bizData });
    },

     /**
     * 获得用户当前token
     * @param commit
     * @param params
     * @returns {Promise.<void>}
     */
    async getToken({commit},params = {}){
      let res = await AuthSev.login(params);
      commit(TYPE.GET_TOKEN,{ data : res.bizData });
    },





}
