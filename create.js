const fs = require('fs')

let app = process.argv[2], title = process.argv[3]
let name = app.split('/').join('-')

const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <link rel="icon" href="/img/favicon.ico" type="image/x-icon">
  <!--<link rel="stylesheet" href="/css/${name}.css">-->
  <script src="/js/${name}.bundle.js" defer></script>
</head>
<body>
<app></app>
</body>
</html>
`
fs.writeFile(`page/${app}.html`, html, () => {})

const js = `import { createApp } from 'vue'
import App from './App.vue'
import './app.scss'

const app = createApp(App)
app.mount('#root')
`

fs.mkdirSync(`src/pages/${app}`, {
  recursive: true
})

fs.writeFile(`src/pages/${app}/app.js`, js, () => {})

const scss = ``
fs.writeFile(`src/pages/${app}/app.scss`, scss, () => {})

const vue = `<template>
<div class="container">
  {{test}}
</div>
</template>

<script>
export default {
  name: 'App',
  setup() {
    return {
      test: '测试11122'
    }
  }
}
</script>
`
fs.writeFile(`src/pages/${app}/App.vue`, vue, () => {})
