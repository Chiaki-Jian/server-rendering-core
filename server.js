const Vue = require('vue')

const VueServerRenderer = require('vue-server-renderer').createRenderer()

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
  const renderer = VueServerRenderer.createRenderer()
  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(
      `<!DOCTYPE html>
      <html lang="en">

      <head>
        <title>SSR</title>
      </head>

      <body>
        ${html}
      </body>

      </html>`
    )
  })
})

server.listen(8080, () => {
  console.log("server is running at port: 8080");
})

