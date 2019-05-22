<template>
  <el-container>
    <sider class="sider"></sider>
    <el-container>
      <admin-header></admin-header>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
      <el-footer>footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Vue from 'vue';
import { Container, Main, Footer } from 'element-ui';
import Aside from './Sider.vue';
import Header from './Header.vue';

Vue.use(Container);
Vue.use(Main);
Vue.use(Footer);

export default {
  name: 'admin',
  components: {
    'sider': Aside,
    'admin-header': Header
  }
};
</script>

<style lang="less" scoped>
.sider {
  height: 100vh;
}
.main {
  // background: #f5f5fa;
}
</style>
<style lang="less">
* {
  margin: 0;
}
</style>
