import  Net from "@util/net";
import  Config from  "@config";
export  default  class  FinanceSev{

  /**
   * 获取用户账单
   * @param data
   * @returns {*}
   */
  static getUserPlanList(params,data){
    return Net.postJSON(Config.SERVER.url.yucai+"/planChargeMain/queryPlanChargeMain",params,data);
  }






}
