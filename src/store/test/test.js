export default {
  state: {
    test: 'test'
  },
  mutations: {
    test (state) {
      console.log('testMutation');
    }
  },
  actions: {
    test (context) {
      console.log('testAction');
    }
  }
};