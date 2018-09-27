module.exports = {
  plugins: {
    // Rem 适配
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 75, // 根元素字体大小
      unitPrecision: 5, // 允许REM单位增长的十进制数
      propList: ['*'], // 可以从px更改为rem的属性
      selectorBlackList: [], // 要忽略的选择器并保留为px
      replace: true,
      mediaQuery: false,
      minPixelValue: 12
    }
  }
}
