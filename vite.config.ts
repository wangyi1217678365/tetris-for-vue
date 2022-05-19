import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pxtovw from 'postcss-px-to-viewport'
const loder_pxtovw = pxtovw({
  viewportWidth: 375,      // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
  viewportHeight: 667,    // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
  unitPrecision: 3,        // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
  viewportUnit: 'vw',      // 指定需要转换成的视窗单位，建议使用vw
  selectorBlackList: ['.ignore', '.hairlines'],  // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
  minPixelValue: 1,       // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
  mediaQuery: false       // 允许在媒体查询中转换`px`
})
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import {
  themePreprocessorPlugin,
  themePreprocessorHmrPlugin,
} from "@zougt/vite-plugin-theme-preprocessor";
import AutoImport from 'unplugin-auto-import/vite'


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    port: 3300,
    watch: {
      // themePreprocessorHmrPlugin 热更新时必需的，希望监听setCustomTheme.js
      ignored: ["!**/node_modules/**/setCustomTheme.js"],
    },
  },
  css: {
    postcss: {
      plugins: [
        loder_pxtovw
      ]
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import '@/style/variable.less';`
      },
    }
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve('./src')
      }
    ]
  },
  plugins: [
    vue(),
    Components({
      dts: true,
      resolvers: [
        VantResolver({ importStyle: "less" })
      ]
    }),
    themePreprocessorPlugin({
      less: {
        // 启用任意主题色模式
        arbitraryMode: true,
        // 默认的主题色，用于对其他颜色值形成对比值，通常与 src/theme/theme-vars.less 中的一个主题色相同，也可以不相同，就看是不是你想要的效果
        defaultPrimaryColor: "#512da7",
        // 只需提供一组变量文件，变量文件内容不应该夹带样式代码，设定上只需存在变量
        multipleScopeVars: [
          {
            // 必需
            scopeName: "theme-default",
            // path 和 varsContent 必选一个
            path: resolve("src/style/theme-vars.less"),
          },
        ],
        // css中不是由主题色变量生成的颜色，也让它抽取到主题css内，可以提高权重
        includeStyleWithColors: [
          {
            // color也可以是array，如 ["#ffffff","#000"]
            // color: '#ffffff',
            // 排除属性，如 不提取背景色的#ffffff
            // excludeCssProps:["background","background-color"]
            // 排除选择器，如 不提取以下选择器的 #ffffff
            // excludeSelectors: [
            //   ".ant-btn-link:hover, .ant-btn-link:focus, .ant-btn-link:active",
            // ],
          },
        ],
      },
    }),
    themePreprocessorHmrPlugin(), // 主题热更新，不得已分开插件，因为需要vite插件顺序enforce
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        'vue',
        'vue-router',
        {
          '@vueuse/core': [
            'useMouse', 
            ['useFetch', 'useMyFetch']
          ],
          'axios': [
            ['default', 'axios'], 
          ],
          '[package-name]': [
            '[import-names]',
            ['[from]', '[alias]'],
          ],
        },
      ],
      eslintrc: {
        enabled: false, 
        filepath: './.eslintrc-auto-import.json', 
        globalsPropValue: true, 
      },
      dts: './auto-imports.d.ts',
    })
  ]
})
