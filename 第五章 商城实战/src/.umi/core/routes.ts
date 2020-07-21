// @ts-nocheck
import { ApplyPluginsType } from '/Users/gaoshaoyun/workspace/0/snow-mall/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": require('@/layouts/BasicLayout').default,
    "routes": [
      {
        "path": "/",
        "component": require('@/pages/home/index').default,
        "exact": true
      },
      {
        "path": "/login",
        "component": require('@/pages/login/index').default,
        "exact": true
      },
      {
        "path": "/search",
        "component": require('@/pages/search/index').default,
        "exact": true
      },
      {
        "path": "/product/:id",
        "component": require('@/pages/product/[id]').default,
        "exact": true
      },
      {
        "path": "/",
        "component": require('@/layouts/SecurityLayout').default,
        "routes": [
          {
            "path": "/cart",
            "component": require('@/pages/cart/index').default,
            "exact": true
          },
          {
            "path": "/olist",
            "component": require('@/pages/olist/index').default,
            "exact": true
          },
          {
            "path": "/user",
            "component": require('@/pages/user/index').default,
            "exact": true
          },
          {
            "path": "/confirmBill",
            "component": require('@/pages/confirmBill').default,
            "exact": true
          }
        ]
      }
    ]
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
