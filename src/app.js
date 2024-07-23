const express = require("express")
const user = require("./routes/user")
const cors = require("cors")

const app = express()
app.use(cors({ credentials: true, origin: "http://127.0.0.1:5500", optionsSuccessStatus: 200}))

app.use(function (req,res,next){
    res.setHeader("Access-Control-Allow-Origin", ["http://127.0.0.1:5500"])
    
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    next()
})

app.use(express.json())

const PORT = 3302

app.use("/users",user)

app.listen(PORT,() => {
    console.log(`escutando a porta ${PORT}`)
})