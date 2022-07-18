import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import filter from './filters'
 // 全局过滤处理
filter.doFilters()
const app = createApp(App)
// console.log(app.config)
// app.config 的相关属性配置
/**   
 * app.config.warnHandler = (msg, vm, trace) {}  处理全局的警告  trace是组件的继承关系追踪
 * app.config.errorHandler = (msg, vm, info) {}  处理组件渲染方法和侦听器执行期间抛出的未捕获错误，可获取错误信息和应用实例
 * app.config.globalProperties  定义全局属性  替代2.X 的  Vue.prototype
 * 
*/
app.use(router)
app.mount('#app')