let localUserInfo = () => JSON.parse(localStorage.getItem('userInfo'));
export default {
  namespaced: true,
  state: localUserInfo() || {
    role: ''
  },
  mutations: {
    updateUserInfo(state, newUserInfo) {
      state.role = newUserInfo.role;
    },
    clearUserInfo(state) {
      state.role = '';
    }
  },
  actions: {
    updateUserInfo(context, newUserInfo) {
      context.commit('updateUserInfo', newUserInfo);
      context.dispatch('route/addRoutes', newUserInfo.role, {
        root: true
      });
      localStorage.setItem('userInfo', JSON.stringify(newUserInfo));
    },
    clearUserInfo(context) {
      context.commit('clearUserInfo');
      localStorage.removeItem('userInfo');
    }
  }

};
