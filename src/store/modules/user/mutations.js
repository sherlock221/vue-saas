import TYPE from "./types";
import Storage from "@util/storage";
export default {

  [TYPE.GET_USER_INFO_SUCCESS] (state, action) {
      state.userInfo = action.data.userInfo;
  },


  [TYPE.GET_TOKEN] (state, action) {
    state.token = action.data.token;
  }

}
