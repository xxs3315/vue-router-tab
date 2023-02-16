// ! 引入 RouterTab 扩展路由
import { RouterTabRoutes } from '../../lib'
// ! 引入 RouterTab Part Iframe 扩展路由
import { RouterTabRoutesPartIframe } from '../../lib'
import route404 from '../router/404'

// 子路由扩展
export default route => {
  route.children.push(
    route404,
    ...RouterTabRoutes,
    ...RouterTabRoutesPartIframe
  )
}
