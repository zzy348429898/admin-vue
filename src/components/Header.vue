<script>
import { Header, Icon, Breadcrumb, BreadcrumbItem, Tooltip } from 'element-ui';
export default {
  name: 'admin-header',
  methods: {
    trigCollapse() {
      this.$store.commit('trigCollapse');
    },
    handlerLogout(e) {
      this.$store.dispatch('userInfo/clearUserInfo');
      this.$router.push('/login');
      e.preventDefault();
    }
  },
  components: {
    'el-header': Header,
    'el-i': Icon,
    'el-breadcrumb': Breadcrumb,
    'el-breadcrumbitem': BreadcrumbItem,
    'el-tooltip': Tooltip
  },
  render() {
    let path = this.$route.path;
    let breadcrumbitems = path.split('/').filter((i) => i).map((value, index, arr) => {
      let url = '/' + arr.slice(0, index + 1).join('/');
      return <el-breadcrumbitem to={url} key={url}>{value}</el-breadcrumbitem>;
    });
    return <el-header class="header">
      <span class="mid-span"></span>
      <span onClick={this.trigCollapse}>
        <el-i class={this.$store.state.userInterface.sider.isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'}
          onClick={this.trigCollapse}
        ></el-i>
      </span>
      <el-breadcrumb class="breadcrumb">
        {breadcrumbitems}
      </el-breadcrumb>
      <div class="header-right">
        <el-tooltip effect="dark" content="我的github" placement="bottom">
          <div class="right-item">
            <a href="https://github.com/zzy348429898" target="view-window">
              <div class="github"></div>
            </a>
          </div>
        </el-tooltip>
        <el-tooltip effect="dark" content="退出登录" placement="bottom">
          <div class="right-item">
            <a onClick={this.handlerLogout} href="">
              <div class="logout"></div>
            </a>
          </div>
        </el-tooltip>
      </div>
    </el-header>;
  }
};
</script>

<style lang="less" scoped>
.header {
  border-bottom: #e6e6e6 1px solid;
  .mid-span {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
  .breadcrumb {
    display: inline-block;
    margin: 0 20px;
  }
  .header-right {
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    .right-item {
      height: 32px;
      margin: 0 10px;
    }
    .github {
      width: 32px;
      height: 32px;
      background-image: url("../images/github.svg");
      background-size: contain;
    }
    .logout {
      width: 32px;
      height: 32px;
      background-image: url("../images/log-out.svg");
      background-size: contain;
    }
  }
}
</style>
