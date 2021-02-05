# vue3-multi
```
webpack5+gulp4+vue3+antd 多页面项目
感觉在打包上可以优化。。

```
# 运行
```
npm install
npm run serve
```
# 打包

```
npm run build

```
# 新建子页面

```
node create test/test1

```
# 单独打包某个页面
```
npx webpack --mode=production --config webpack.config.prod.js --page=test-test
npx gulp build
```
