import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// import styleImport, { VantResolve } from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    // 定义文件别名
    alias:{
      // '@': path.resolve(__dirname, './src')
    }

  },
  css:{
    preprocessorOptions:{

    }
  },
  server:{
    // host:,//指定服务器主机名
    // port:,//指定服务器端口。注意：如果端口已经被使用，Vite 会自动尝试下一个可用的端口，所以这可能不是服务器最终监听的实际端口。
    // strictPort:false,//设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口。
    // https:false,
    // open:true,// 在服务器启动时自动在浏览器中打开应用程序。当此值为字符串时，会被用作 URL 的路径名。open: '/docs/index.html'
    // cors:true,//为开发服务器配置 CORS。
    // force:false,//设置为 true 强制使依赖预构建。
    // proxy:{
      // 字符串简写写法
      // '/foo': 'http://localhost:3000',
      // 选项写法
      // '/api': {
      //   target: 'http://localhost:7001/',
      //   changeOrigin: true,
      //   secure: false,
      //   rewrite: (path) => path.replace(/^\/api/, '')
      // },
      // 正则表达式写法
      // '^/fallback/.*': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/fallback/, '')
      // }
    // }
  },
  build:{
    outDir:'dist-build',//指定构建输出路径 默认dist（相对于 项目根目录).
    assetsDir:'static', // 指定生成静态资源的存放路径  默认assets（相对于 build.outDir）。
    assetsInlineLimit:4096,//小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项。
    cssCodeSplit:true,//启用/禁用 CSS 代码拆分。当启用时，在异步 chunk 中导入的 CSS 将内联到异步 chunk 本身，并在块加载时插入。如果禁用，整个项目中的所有 CSS 将被提取到一个 CSS 文件中。
    sourcemap:false,//构建后是否生成 source map 文件
    // rollupOptions:
    // commonjsOptions:
    // terserOptions:
    // cleanCssOptions
    watch:null,//设置为 {} 则会启用 rollup 的监听器。在涉及只用在构建时的插件时和集成开发流程中很常用
    brotliSize:true,//启用/禁用 brotli 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。
    write:true,
    emptyOutDir:true,//默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。若 outDir 在根目录之外则会抛出一个警告避免意外删除掉重要的文件。可以设置该选项来关闭这个警告。该功能也可以通过命令行参数 --emptyOutDir 来使用。
    manifest:true,//当设置为 true，构建后将会生成 manifest.json 文件，映射没有被 hash 的资源文件名和它们的 hash 版本。可以为一些服务器框架渲染时提供正确的资源引入链接。
    minify:'terser',//类型： boolean | 'terser' | 'esbuild' 设置为 false 可以禁用最小化混淆，或是用来指定使用哪种混淆器。默认为 Terser，虽然 Terser 相对较慢，但大多数情况下构建后的文件体积更小。ESbuild 最小化混淆更快但构建后的文件相对更大。
    chunkSizeWarningLimit:500,//chunk 大小警告的限制（以 kbs 为单位）。    
  },

  plugins: [
    vue(),
    // styleImport({
    //   // resolves: []
    // })
  ]
})
