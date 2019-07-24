const { createServer } = require('http')

const server = createServer((req, res) => {
  res.end(new Date().toISOString())
})

server.listen(0, () => {
  console.log(`Listening on http://localhost:${server.address().port}…`)
})
