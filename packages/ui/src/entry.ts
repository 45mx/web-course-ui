// import type { Plugin } from 'vue'
// import { version } from '../package.json'
// import plugins from './plugins'
// import 'virtual:uno.css'

// // 导出组件
// export * from './button'
// export * from './link'

import type { App } from 'vue' // 导入 App 类型
// // 导出插件
// export default {
//   install(app: { use: (arg0: Plugin) => void }) {
//     plugins.forEach(c => app.use(c))
//   },
//   version,
// }
import { version } from '../package.json'
import plugins from './plugins'
import 'virtual:uno.css'

export * from './avatar'
// 导出组件
export * from './button'
export * from './link'
// 导出插件
export default {
  install(app: App) {
    plugins.forEach(c => app.use(c))
  },
  version,
}
