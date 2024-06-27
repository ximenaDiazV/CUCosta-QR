import express from "express"
import mysql2 from "mysql2"
import cors from "cors"

const app = express()

const db = mysql2.createConnection({
    host: "localhost",
    user:"read",
    password:"CUCosta.2024#qr",
    database:"plantitas"
})
 
app.use(express.json())
app.use(cors())

app.post("/conect", (req,res)=>{
    const {username, password} = req.body;
    console.log(password)
    console.log(username)
    const db2 = mysql2.createConnection({
        host: "localhost",
        user:username,
        password:password,
        database:"plantitas"
    })

    db2.connect((err) => {
        if(err) {
            console.error('Error connecting mysql: '+err.stack);
            res.json({success: false, message: 'Error, no se logro acceder'});
            return res;
        } 
        console.log('Connected to mysql as ID ' + db2.threadId);
        res.json({success: true, username});
    })


})

app.get("/", (req,res)=>{
    res.json("hello this is the backend")
})

app.get("/plantas", (req,res)=>{
    const query = "SELECT * FROM plantitas"
    db.query(query,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
    {/* insertar plantitas
    const query = "INSERT INTO plantitas (`idplantitas`, `name`) VALUES ('4', 'sal')";
    db.query(query,(err,data)=>{
        if(err) return res.json(err)
        return res.json("Ingreso datos")
    })*/}
})

app.listen(8800, ()=>{
    console.log("Connected to backend")
}) 