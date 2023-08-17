const express = require('express')
const app = express()
const port = 3080

app.get("/", (req, res) => {
    res.send("This text has been updated!!!!")
})

app.listen(port, () => console.log(`API listening on port ${port}`))