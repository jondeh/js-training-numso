require('fs')
  .readdirSync(__dirname)
  .forEach(file => {
    if (['index.js', 'lib.js'].includes(file)) return
    if (!file.endsWith('.js')) return
    require(`./${file}`)
  })
console.log('Success!!')
