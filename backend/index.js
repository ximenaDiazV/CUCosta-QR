import express from "express"
import mysql2 from "mysql2"
import cors from "cors"

const app = express()

const db = mysql2.createConnection({
    host: "localhost",
    user:"root",
    password:"contrasena",
    database:"plantitas"
})

app.use(express.json())
app.use(cors())


app.get("/", (req,res)=>{
    res.json("hello this is the backend")
})

app.get("/plantas", (req,res)=>{
    const query = "SELECT * FROM plantitas"
    db.query(query,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8800, ()=>{
    console.log("Connected to backend")
}) 