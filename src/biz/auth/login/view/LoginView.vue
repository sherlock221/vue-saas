<template>
  <div class="full-screen login-layer">


    <div class="tran-center login-box">

      <h4 class="login-title mb20">起飞了</h4>
      <p class="login-slogan mb20">用有趣的方式看世界</p>

      <el-form
        :model="fm"
        :rules="rules"
        ref="loginForm"
        label-width="0px"
      >

        <el-form-item prop="username">
          <el-input v-model="fm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input  type="password" placeholder="请输入密码" v-model="fm.password" @keyup.enter.native="onLogin('loginForm')"></el-input>
        </el-form-item>

        <div class="text-center">
          <el-button type="primary"   :loading="isSubmit" class="login-btn" @click="onLogin('loginForm')">登录</el-button>
        </div>

        <p class="login-tips">Tips : 填一些你的看法。</p>

      </el-form>

    </div>
  </div>
</template>

<script type="text/javascript"  charset="utf-8" src="../assets/js/loginView.js"></script>

<style scoped lang="scss" type="text/css">
  @import "../assets/scss/loginView.scss";
</style>


