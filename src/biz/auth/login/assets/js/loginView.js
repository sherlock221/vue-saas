import  AuthSev from "@api/auth";
import  md5 from "blueimp-md5";
import {mapActions, mapGetters,mapState} from  "vuex";


export default {
  data: function(){
    return {
      fm: {
        username: '13484620312',
        password: '000000'
      },

      isSubmit : false,
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },


  created(){

  },

  methods: {

    //this.login()` 映射为 `this.$store.dispatch('login')`
    ...mapActions([
      'getToken',
      'getUserInfo',
      "getMenuList"
    ]),



    onLogin  : async function(formName){


      this.$refs[formName].validate(async(isValid) => {

        //表单验证失败
        if (!isValid) return false;


        let params = {
          account : this.fm.username,
          pwd : md5(this.fm.password),
          sessionId : '',
          app : "zhiliao",
          code : ""
        }

        try {

          this.isSubmit = true;

          //登录
          await this.getToken(params);
          //获取用户信息
          await this.getUserInfo();

          //获得用户权限并且存在vuex中
          // await  this.getMenuList();


          this.isSubmit = false;

          this.$router.push({path : "/app/finance/charge"});

        }catch(e){
          this.isSubmit = false;
          console.log(e);
        }






      });
    }

  }
}
