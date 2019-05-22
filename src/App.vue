<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('route/addRoutes', this.$store.state.userInfo.role);
  }
};
</script>

<style lang="less">
</style>
