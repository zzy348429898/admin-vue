<template>
  <el-row class="login" type="flex" justify="center" align="middle">
    <el-col :span="8">
      <login-form></login-form>
    </el-col>
  </el-row>
</template>

<script>
import LoginForm from './LoginForm.vue';
import { Col, Row } from 'element-ui';

export default {
  name: 'login',
  components: {
    'login-form': LoginForm,
    'el-col': Col,
    'el-row': Row
  }
};
</script>

<style lang="less" scoped>
.login {
  height: 100vh;
}
</style>
