
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
    'index.csr.html': {size: 7011, hash: '59b63b89612964e940a3b889b9063c637dc41f23a81366e39bfb412a10d54096', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1037, hash: '36dfe595e999649df0a49b9c7de3932899a7f721dd2f4c1d47666119351c2cbb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 63764, hash: '6db92e83c6c31806a21ab009cdca123ace69b7644cae060e8fbea26d30a22369', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-N6JD3JLM.css': {size: 29628, hash: 'XM0Fd2ML0HM', text: () => import('./assets-chunks/styles-N6JD3JLM_css.mjs').then(m => m.default)}
  },
};
