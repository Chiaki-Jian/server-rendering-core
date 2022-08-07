const Vue = require('vue')

const fs = require('fs')
const path = require('path')

const VueServerRenderer = require('vue-server-renderer')

const server = require('express')()

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template:
      `<div>
        <h2>Hello My Vue SSR</h2>
        <p>current URL is {{ url }}</p>
      </div>`
  })

  const template = fs.readFileSync(path.resolve(__dirname, 'index.template.html'), 'utf-8')
  console.log(template);
  const renderer = VueServerRenderer.createRenderer(
    { template }
  )

  renderer.renderToString(app, (err, html) => {
    // console.log(html);
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(html)
  })
})

server.listen(8080, () => {
  console.log("server is running at port: 8080");
})

