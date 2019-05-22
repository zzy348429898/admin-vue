import router from '../../router/router.js';
import asyncRouteMap from '../../router/asyncRouteMap.js';

export default {
  namespaced: true,
  state: {
    asyncRouteMap
  },
  getters: {
    roleRoute(state) {
      return (role) => {
        return generateRoleRoute(state.asyncRouteMap, role);
      };
    }
  },
  mutations: {
    updateRoute(state) {

    }
  },
  actions: {
    addRoutes(context, role) {
      let roleRoute = context.getters.roleRoute;
      let newRoute = roleRoute(role);
      router.addRoutes(newRoute);
    }
  }
};

let generateRoleRoute = (routeMap, role) => {
  return routeMap.filter((value) => value.meta.roles.some((value) => value === role));
};
