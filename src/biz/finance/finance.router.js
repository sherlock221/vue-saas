import Abstract from  "@common/component/layout/Abstract";

export const  routers =  [
  {

    path : "/app/finance",
    component : Abstract,
    meta : {
          title : "财务模块",
      },

    children : [
      {
        path : "/app/finance/charge",
        component: ()=> import("@biz/finance/charge/view/ChargeView"),
        meta : {
          title : "收费记录",
          pms : "app.finance.charge",
          requireAuth : true
        },
      },

      {

        path : "/app/finance/refund",
        component: ()=> import("@biz/finance/refund/view/RefundView"),
        meta : {
          title : "退费记录",
          pms : "app.finance.refund",
          requireAuth : true
        },
      }
    ],

  }

]
