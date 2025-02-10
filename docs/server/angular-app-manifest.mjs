
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/boutique-shop/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/boutique-shop"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6022, hash: 'd4a114b321a7042140b6315356bcca7b3397841306cadc3e00a6fc6095e190ca', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1037, hash: 'cd0875c423406034ee91c6c25c3acdba8e2478d9d5aa8394015946cd3afa4355', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 62721, hash: '2754dfb2fc2a9ac7de44fd11599804b04b808eacd6787b20dedf7a95133b91db', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OFB2WXN7.css': {size: 26715, hash: '+AE12uA9SsU', text: () => import('./assets-chunks/styles-OFB2WXN7_css.mjs').then(m => m.default)}
  },
};
