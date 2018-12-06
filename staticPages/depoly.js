const fs = require('fs')
const path = require('path')

const stat = fs.readdirSync(__dirname)
const pages = stat.filter(v => {
  return path.extname(v) === '.html'
}).map(v => {
  return v.slice(0, -5)
})

pages.forEach(p => {
  const targetdir = path.join(__dirname, `../dist/${p}`)
  fs.mkdirSync(targetdir)
  const s = fs.readFileSync(path.join(__dirname, `./${p}.html`))
  fs.writeFileSync(`${targetdir}/index.html`, s)
})
