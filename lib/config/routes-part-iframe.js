import PartIframe, { partIframeMeta } from '../page/PartIframe.vue'

// 注入的路由
export default [
  {
    // iframe 路由
    path: 'part-iframe/:path/:title?/:icon?',
    component: PartIframe,
    props: true,
    meta: partIframeMeta
  }
]

export { PartIframe }
