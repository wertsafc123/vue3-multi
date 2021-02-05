const fs = require('fs')

module.exports = function findNewEntries(dir, target, parents = []) {
  const files = fs.readdirSync(dir, {
    withFileTypes: true
  })
  let result = {}

  for (let file of files) {
    if (file.name === target) {
      result[parents.join('-')] = `${dir}/app.js`
      continue
    }

    if (file.isDirectory()) {
      result = {
        ...result,
        ...findNewEntries(`${dir}/${file.name}`, target, [...parents, file.name])
      }
    }
  }

  return result
}
