import Vue from 'vue';
import Vuex from 'vuex';
import userInfo from './userInfo/userInfo.js';
import test from './test/test.js';
import userInterface from './userInterface/userInterface.js';
import route from './route/route.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userInfo,
    test,
    userInterface,
    route
  }
});
