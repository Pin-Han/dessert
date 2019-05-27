const path = require('path');

function resolve(dir) {
  return path.join(__dirname, './', dir);
}

module.exports = {
  publicPath:'/dessert/',
  devServer: {
    disableHostCheck: true,
  },
  chainWebpack: (config) => {
    config.module.rules.delete('eslint');
    // svg loader
    const svgRule = config.module.rule('svg'); // 找到svg-loader
    svgRule.uses.clear(); // 清除已有的loader, 如果不這樣做會添加在此loader之後
    svgRule.exclude.add(/node_modules/); // 正則匹配排除node_modules目錄
    svgRule // 添加svg新的loader處理
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      });

    // 修改images loader 添加svg處理
    const imagesRule = config.module.rule('images');
    imagesRule.exclude.add(resolve('src/icons'));
    config.module.rule('images').test(/\.(png|jpe?g|gif|svg)(\?.*)?$/);
  },
};
