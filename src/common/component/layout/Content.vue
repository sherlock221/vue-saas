<template>
    <div class="app-wrapper" :class="{'app-wrapper-collapse' : !isOpenMenu}">

        <!--顶部-->
        <header-top></header-top>
        <!-- 侧边栏 -->
        <menu-bar></menu-bar>

        <!-- 中间内容区域 -->
        <div class="app-content">
            <transition name="move" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>

    </div>
</template>

<script>
    import HeaderTop from './Header.vue';
    import MenuBar from './Menubar.vue';
    import {mapGetters} from  "vuex";

    export default {
        computed : {
          ...mapGetters(['isOpenMenu'])
        },
        components:{
          HeaderTop, MenuBar
        }
    }
</script>
