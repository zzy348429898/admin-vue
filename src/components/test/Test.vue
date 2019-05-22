<script>
import { Header, Aside, Container, Main, Footer } from 'element-ui';
import Vue from 'vue';
import Text1 from './Test1.vue';
Vue.use(Header);
Vue.use(Aside);
Vue.use(Container);
Vue.use(Main);
Vue.use(Footer);
export default {
  name: 'test',
  components: {
    'test1': Text1
  },
  render: function (h) {
    return <el-container>
      <el-aside>aside</el-aside>
      <el-container>
        <el-header>header</el-header>
        <el-main>main</el-main>
        <el-footer>footer</el-footer>
      </el-container>
      <test1 a='1'
        b='b'
        // nativeOnClick={() => console.log('nativeonclick')}
        // onClick={() => console.log('onclick')}        
      ></test1>
    </el-container>;
  }
};
</script>