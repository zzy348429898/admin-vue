<script>
import Vue from 'vue';
import { Aside, Menu, MenuItem, Submenu, Icon } from 'element-ui';
import { open } from 'fs';

Vue.use(Aside);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Icon);

export default {
  name: 'sider',
  methods: {
    generateMenu() {
      let menuItems = this.$store.state.userInterface.sider.menuList.map((value, index) => {
        let getPath = (value) =>
          this.$store.state.userInterface.sider.mapTitleToPath[value] ? this.$store.state.userInterface.sider.mapTitleToPath[value] : '/admin';
        let getIcon = (value) =>
          this.$store.state.userInterface.sider.mapTitleToIcon[value] ? this.$store.state.userInterface.sider.mapTitleToIcon[value] : 'el-icon-s-home';
        let item;
        // 如果有子菜单
        if (value.sub) {
          let subPath = getPath(value.title);
          item = <el-submenu class="submenu" key={value.title} index={value.title}>
            <template slot="title">
              <i class={getIcon(value.title)}></i>
              <span>{value.title}</span>
            </template>
            {value.sub.map((value, index) => (
              <el-menu-item class="submenuItem" index={'/admin/' + getPath(value.title)}>
                <i class={getIcon(value.title)}></i>
                <span slot={'title'}>{value.title}</span>
              </el-menu-item>
            ))}
          </el-submenu>;
        } else { // 没有子菜单
          item = <el-menu-item index={'/admin/' + getPath(value.title)}>
            <i class={getIcon(value.title)}></i>
            <span slot="title">{value.title}</span>
          </el-menu-item>;
        }
        return item;
      });
      return menuItems;
    },
    handleClick() {
    }
  },
  render() {
    return <el-aside class="aside" width={'unset'}>
      <p class="title">
        <span style={{ display: this.$store.state.userInterface.sider.isCollapse ? 'none' : 'inline' }}>admin BY zzy</span>
        <span style={{ display: this.$store.state.userInterface.sider.isCollapse ? 'inline' : 'none' }}>Z</span>
      </p>
      <el-menu class="sider-menu"
        background-color={'#6959cd'}
        text-color={'#ffffff'}
        active-text-color={'#42b983'}
        onOpen={this.handleClick}
        router={true}
        collapse={this.$store.state.userInterface.sider.isCollapse}
        collapse-transition={false}
      >{this.generateMenu()}</el-menu>
    </el-aside>;
  }
};
</script>

<style lang="less" scoped>
.aside {
  background-color: #473c8b;
  & .title {
    color: #42b983;
    text-align: center;
    font-size: 1.2em;
    padding: 15px;
    font-weight: 800;
  }
}
.sider-menu {
  & .submenu {
    background-color: #7171c6;
  }
  border: 0px;
  & .submenuItem {
    background-color: #7171c6!important;
    &:hover {
          background-color: #473c8b!important;
    }
  }
  & i {
    color: white;
  }
  // height: 100%;
  &:not(.el-menu--collapse) {
    min-width: 200px;
  }
  // min-width: 200px;
}
</style>
