const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")

const app = express()

app.listen(8081)

app.use([
  bodyParser.json(),
  (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  }
])

app.get("/todos", (req, res) => {
  res.sendFile(path.resolve(__dirname, "todo.json"))
})

app.post("/todos", (req, res) => {
  const body = req.body
  if (!Array.isArray(body)) {
    res.status(400).json({code: 400, message: "Bad Parameter"})
    return
  }
  const result = body.every(b => {
    return b.hasOwnProperty("name") && b.hasOwnProperty("done")
  })

  if (result) {
    if (Math.random() >= 0.5) {
      res.status(200).json(body)
    } else {
      res.status(400).json({code: 400, message: "Random Error"})
    }
  }else {
    res.status(400).json({code: 400, message: "Bad Parameter"})
  }
})