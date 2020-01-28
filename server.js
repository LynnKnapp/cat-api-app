const express = require('express');
const app = express();
const axios = require('axios')
const path = require('path')
const cors = require('cors')
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.static(path.join(__dirname, '.',  "build", )));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, ".", "build", "index.html"))

})

app.listen(port, () => console.log(`app listening on port ${port}`)) 