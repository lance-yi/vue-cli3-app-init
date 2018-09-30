# vue-cli3-init

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## 主要功能

- 使用vue-rooter路由
- 使用vuex状态管理
- 使用Vant UI组件 
- 使用postcss-pxtorem插件，对样式px进行转换为rem
- 使用淘宝amfe-flexible适配布局
- 使用pwa主题配置
- 使用sass预编译插件
- 使用babel es6转换插件
- 使用eslint语法检测
- 封装axios库，针对不同服务器，请求方式进行了简单的封装，直接在 `main.js` 全局注册到 `vue.prototype` 下,组件直接通过 `this` 访问