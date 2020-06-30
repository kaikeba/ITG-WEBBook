// @ts-nocheck
import { Plugin } from '/Users/gaoshaoyun/workspace/0/snow-mall-for-master/snow-mall/node_modules/@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['patchRoutes','rootContainer','render','onRouteChange','dva','getInitialState','request',],
});
plugin.register({
  apply: require('/Users/gaoshaoyun/workspace/0/snow-mall-for-master/snow-mall/src/.umi/plugin-dva/runtime.tsx'),
  path: '/Users/gaoshaoyun/workspace/0/snow-mall-for-master/snow-mall/src/.umi/plugin-dva/runtime.tsx',
});
plugin.register({
  apply: require('../plugin-initial-state/runtime'),
  path: '../plugin-initial-state/runtime',
});
plugin.register({
  apply: require('../plugin-model/runtime'),
  path: '../plugin-model/runtime',
});

export { plugin };
