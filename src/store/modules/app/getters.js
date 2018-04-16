
export default {

  isOpenMenu : state => {
    return state.menuStatus  == 1;
  },

  menuList : state => {
    return state.menuList || [];
  }

}
