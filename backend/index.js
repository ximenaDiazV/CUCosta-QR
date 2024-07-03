import express from "express"
import mysql2 from "mysql2"
import cors from "cors"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();

const app = express()

const users = [
    // Estos son ejemplos de usuarios con sus credenciales de conexión
    { id: 1, username: 'root', password: 'contrasena', dbHost: 'localhost', dbUser: 'root', dbPassword: 'contrasena', dbName: 'plantas_cuc' },
    { id: 2, username: 'usuario1', password: 'password', dbHost: 'localhost', dbUser: 'usuario1', dbPassword: 'password', dbName: 'plantas_cuc'}
  ];

const db3 = mysql2.createConnection({
    host: "localhost",
    user:"read",
    password:"CUCosta.2024#qr",
    database:"plantas_cuc"
})
 
app.use(express.json())
app.use(cors())

app.post("/login", (req,res)=>{
    const {username, password} = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    console.log(user);
    if (user) {
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ success: true, username,token });
    } else {
        res.json({success: false, message: 'Error, no se logro acceder'});
    }
})

// Middleware para autenticar y conectar a la base de datos
const authenticate = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ error: 'No token provided' });
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return res.status(500).json({ error: 'Failed to authenticate token' });
  
      const user = users.find(u => u.id === decoded.id);
      if (!user) return res.status(404).json({ error: 'No user found' });
  
      req.user = user;
      next();
    });
  };
  
  const connectDb = (req, res, next) => {
    const { dbHost, dbUser, dbPassword, dbName } = req.user;
  
    req.db = mysql2.createConnection({
      host: dbHost,
      user: dbUser,
      password: dbPassword,
      database: dbName
    });
  
    req.db.connect((err) => {
      if (err) return res.status(500).json({ error: 'Failed to connect to database' });
      next();
    });
  };

app.get('/query', authenticate, connectDb, (req, res) => {
    const query = 'SELECT * FROM plantitas'; // Reemplaza esta consulta con la que necesites
    req.db.query(query, (err, results) => {
      if (err) return res.status(500).json({ error: 'Database query failed' });
      res.json({ results });
    });
 });

app.post("/logout", connectDb, (req,res)=>{
  console.log("Parte del backLogout");
    connectDb.end(err => {
      if (err) {
        console.error('Error closing the database connection:', err);
        return res.json({error: 'No se pudo cerrar sesion'});
      }});
      console.log("Se cerro sesion, sin problema ujuy");
      return res.json({message: 'Adios hasta la vista'});
})

app.get("/", (req,res)=>{
    res.json("hello this is the backend")
})

app.get("/plantas", (req,res)=>{
    const query = "SELECT * FROM plantas_cuc.nombres_comunes"
    db3.query(query,(err,data)=>{
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