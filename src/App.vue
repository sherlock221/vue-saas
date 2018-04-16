<template>
  <div id="app" class="app app-header-fixed">
     <router-view/>
  </div>
</template>

<script>

import  UI from "@util/ui";

export default {
  name: 'App',
  created(){
    this.$store.dispatch("getMenuList");
  },

}
</script>

<style type="text/css" lang="scss">
      /*全局样式*/
      @import "common/skin/global.scss";
      /*主题样式*/
      @import "common/skin/theme.scss";
</style>
