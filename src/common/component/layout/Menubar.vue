<template>

    <div class="app-aside">
      <el-menu router :default-active="routerActive" class="el-menu-vertical-demo"  :collapse="!isOpenMenu">


        <el-submenu  :index="menu.path"  :key="index"  v-for="(menu,index) in menuList" >

          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{menu.meta.title}}</span>
          </template>

          <el-menu-item   :key="subIndex"  v-for="(sub,subIndex) in menu.children" :index="sub.path">
                {{sub.meta.title}}
          </el-menu-item>

        </el-submenu>




      </el-menu>
    </div>
</template>

<script>
  import { mapGetters,mapActions } from 'vuex';
    export default {
        data() {
            return {

            }
        },
        computed:{

          routerActive(){
            return this.$route.path;
          },

          ...mapGetters(['isOpenMenu','menuList'])



        },

        methods : {

        }
    }
</script>


