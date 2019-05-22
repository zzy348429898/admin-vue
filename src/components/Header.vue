<script>
import { Header, Icon, Breadcrumb, BreadcrumbItem } from 'element-ui';
export default {
  name: 'admin-header',
  methods: {
    trigCollapse() {
      this.$store.commit('trigCollapse');
    }
  },
  components: {
    'el-header': Header,
    'el-i': Icon,
    'el-breadcrumb': Breadcrumb,
    'el-breadcrumbitem': BreadcrumbItem
  },
  render() {
    let path = this.$route.path;
    let breadcrumbitems = path.split('/').filter((i) => i).map((value, index, arr) => {
      let url = '/' + arr.slice(0, index + 1).join('/');
      return <el-breadcrumbitem to={url} key={url}>{value}</el-breadcrumbitem>;
    });
    return <el-header class="header">
      <span class="header"></span>
      <span onClick={this.trigCollapse}>
        <el-i class={this.$store.state.userInterface.sider.isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'}
          onClick={this.trigCollapse}
        ></el-i>
      </span>
      <el-breadcrumb class="breadcrumb">
        {breadcrumbitems}
      </el-breadcrumb>
      <div class="header-right">
      </div>
    </el-header>;
  }
};
</script>

<style lang="less" scoped>
.header {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.breadcrumb {
  display: inline-block;
  margin: 0 20px;
}
.header {
  border-bottom: #e6e6e6 1px solid;
}
.header-right {
  float: right;
  height: 100%;
}
</style>
