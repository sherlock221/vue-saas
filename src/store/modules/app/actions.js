import TYPE from "./types";


export default {

  toggleMenu({ commit }) {
      commit(TYPE.TOGGLE_MENU);
  },


  async getMenuList({commit}){

   //暂时模拟权限
   let rightList = [
     {
       //财务模块
       key : "finance",
       values : [
         {
           //收费
           key : "charge",
           values : [
             {
               //账单
               key : "plan",
               values : []
             },
             {
               //收费记录
               key : "charge",
               values : []
             }
           ]
         },

         {
           //退费管理
           key : "refund",
           values : [
             {
               //退费记录
               key : "charge",
               values : []
             },
             {
               //退费记录
               key : "setting",
               values : []
             }
           ]
         },

         {
           //报表中心
           key : "report",
           values : []
         },

       ]
     }
   ];



    commit(TYPE.GET_MENU_LIST,{data : rightList});
  }





}
