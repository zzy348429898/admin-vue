<template>
  <el-form
    class="login-form"
    v-bind:model="form"
    :rules="rules"
    label-position="right"
    label-width="auto"
    ref="form"
  >
    <el-form-item label="账号" prop="name">
      <el-input v-model="form.name" placeholder="请输入账号"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="form.password" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-checkbox :checked="form.remenber" label="记住" prop="remenber"></el-checkbox>
    </el-form-item>
    <el-form-item>
      <el-button v-on:click="onSubmit" type="primary" class="submit-button">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { Form, FormItem, Input, Checkbox, Button } from 'element-ui';
export default {
  name: 'loginform',
  data() {
    let validators = {
      name(rule, value, callback) {
        if (!value) {
          callback(new Error('请输入账号'));
        } else {
          callback();
        }
      },
      password(rule, value, callback) {
        if (!value) {
          callback(new Error('请输入密码'));
        } else if (value.length < 1) {
          callback(new Error('密码位数必须大于8'));
        } else {
          callback();
        }
      }
    };
    return {
      form: {
        name: '',
        password: '',
        remenber: true
      },
      rules: {
        name: [{
          validator: validators.name,
          trigger: 'blur'
        }],
        password: [{
          validator: validators.password,
          trigger: 'blur'
        }]
      }
    };
  },
  components: {
    'el-form': Form,
    'el-form-item': FormItem,
    'el-input': Input,
    'el-checkbox': Checkbox,
    'el-button': Button
  },
  methods: {
    onSubmit() {
      this.$refs['form'].validate((valid, obj) => {
        if (valid) {
          this.$store.dispatch('userInfo/updateUserInfo', { role: 'admin' });
          this.$router.push('/admin');
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.submit-button {
  // display: block;
  width: 100%;
}
.login-form {
  border: #409eff 1px solid;
  padding: 12px;
  border-radius: 4px;
  max-width: 400px;
}
</style>
