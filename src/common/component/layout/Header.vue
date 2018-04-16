<template>
  <div class="app-header clearFix">

    <div class="app-header-brand">
          <!-- brand -->
          <a href="javascript:void(0)" class="app-logo" >
            <span>极<span v-if="isOpenMenu">速校园</span></span>
          </a>
         <!-- / brand -->
    </div>



    <div class="app-header-content">

      <el-row class="app-header-bar">
        <el-col :span="12" class="text-left">

          <a href="javascript:void(0)" class="ib mr10" @click="toggleMenu">
            <i class="fa" :class="{'fa-dedent' : isOpenMenu , 'fa-indent' : !isOpenMenu}"></i>
          </a>

          <!--<a href="javascript:void(0)" class="ib mr10" @click="toggleMenu">-->
            <!--<i class="fa-usd"></i>-->
          <!--</a>-->

        </el-col>
        <el-col :span="12" class="text-right">

          <el-dropdown class="avatar-container" trigger="click">
            <div class="avatar-wrapper">
              <span class="ib vm avatar-user text-ellipsis">大奥博</span>
              <i class="ib vm mr5 el-icon-caret-bottom"></i>
              <img class="user-avatar" src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80">
            </div>

            <el-dropdown-menu class="user-dropdown" slot="dropdown">
              <router-link class="inlineBlock" to="/">
                <el-dropdown-item>
                  Home
                </el-dropdown-item>
              </router-link>
              <el-dropdown-item divided>
                <span @click="logout" style="display:block;">LogOut</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

        </el-col>

      </el-row>

      <!--<hamburger class="hamburger-container"  :toggleClick="toggleMenu" :isActive="isOpenMenu"></hamburger>-->
      <!--<i class="el-icon-delete"></i>-->

      <!--<span>-->

            <!--31231231-->
          <!--</span>-->


      <!--<breadcrumb></breadcrumb>-->


    </div>


  </div>
</template>

<script>
  import { mapGetters,mapActions } from 'vuex';
//  import Breadcrumb from '@common/component/Breadcrumb'
  import Hamburger from '@common/component/Hamburger';
//  Breadcrumb,

  export default {

    computed: {
      ...mapGetters(['isOpenMenu']),

    },
    methods: {

      ...mapActions(['toggleMenu']),

      logout() {
//        this.$store.dispatch('LogOut').then(() => {
//          location.reload() // 为了重新实例化vue-router对象 避免bug
//        })
      }
    },

    components: {
      Hamburger
    },
  }
</script>

