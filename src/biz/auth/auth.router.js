
export const routers = [
  {
    path : "/auth/login",
    component: () => import("@biz/auth/login/view/LoginView"),
    meta : {
      title : "登录页面"
    },
  }
]


