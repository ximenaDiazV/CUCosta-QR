import express from "express"
import mysql2 from "mysql2"
import cors from "cors"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { faMillSign } from "@fortawesome/free-solid-svg-icons"
import { ViewKanban } from "@mui/icons-material"
import { or } from "sequelize"

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

const db4 = mysql2.createConnection({
  host: "localhost",
  user:"usuario1",
  password:"password",
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

app.post("/updateArbol", (req, res)=>{
  const query = "UPDATE plantas_cuc.nombres_comunes SET `Nombre`= ?,`Nombre_Cientifico` = ?,`Nombre_Comun` = ? WHERE (IdArbol = ? )";
  console.log('backend: ',req.body.IdArbol);
  const values = [
    req.body.nombre,
    req.body.nombreCientifico,
    req.body.nombreComun,
    req.body.IdArbol,
  ];      
      db4.query(query,values,(err,data)=>{
        if (err) {
          res.json({success: false, message: 'Error, no se logro actualizar los datoss', err});
        }else{
          res.json({ success: true, message: 'Update'});
        }
    })
})

app.post("/addarbol", (req, res)=>{
  console.log("desde addarbol"); 
  //tabla nombres
  const nombre = req.body.arbol.nombre;
  const nombrecie = req.body.arbol.nombrecie;
  const nombrecom = req.body.arbol.nombrecom; 
  //tabla especificaciones
  const familia = req.body.arbol.familia;
  const altura = req.body.arbol.altura;
  const diametro = req.body.arbol.diametro;
  const copa = req.body.arbol.copa;
  const corteza = req.body.arbol.corteza;
  //tabla flores
  const color_flor = req.body.arbol.color_flor;
  const tipo_flor = req.body.arbol.tipo_flor;
  const epoca = req.body.arbol.epoca;
  //tabla frutos
  const tipo_fruta = req.body.arbol.tipo_fruta;
  const forma = req.body.arbol.forma;
  const tamanio = req.body.arbol.tamanio;
  const color_fruta = req.body.arbol.color_fruta;
  //tabla habitat
  const distribucion = req.body.arbol.distribucion;
  const clima = req.body.arbol.clima;
  const altitud = req.body.arbol.altitud;
  const suelo = req.body.arbol.suelo;
  //tabla hoja
  const tipo_hoja = req.body.arbol.tipo_hoja;
  const longitud = req.body.arbol.longitud;
  const follaje = req.body.arbol.follaje;
  //tabla usos
  const madera = req.body.arbol.madera;
  const forraje = req.body.arbol.forraje;
  const medicinal = req.body.arbol.medicinal;
  const ornamental = req.body.arbol.ornamental;

   
  const querynombres = "INSERT INTO plantas_cuc.nombres_comunes (`Nombre`, `Nombre_Cientifico`, `Nombre_Comun`) VALUES (?)";
  const valuesnombres = [nombre, nombrecie, nombrecom];
  const queryespecificaciones = "INSERT INTO plantas_cuc.especificaciones (`IdArbol`, `familia`, `altura`, `diametro_Tronco`, `copa`, `corteza`) VALUES (?)";
  const queryflores = "INSERT INTO plantas_cuc.flores (`IdArbol`, `color`, `tipo`, `epoca_floracion`) VALUES (?)";
  const queryfrutos = "INSERT INTO plantas_cuc.frutos (`IdArbol`, `tipo`, `forma`, `tamaño`, `color`) VALUES (?)";
  const queryhabitat = "INSERT INTO plantas_cuc.habitat (`IdArbol`, `distribucion`, `clima`, `altitud`, `suelo`) VALUES (?)";
  const queryhojas = "INSERT INTO plantas_cuc.hojas (`IdArbol`, `tipo`, `longitud`, `follaje`) VALUES (?)";
  const queryusos = "INSERT INTO plantas_cuc.usos (`IdArbol`, `madera`, `forraje`, `medicinal`, `Ornamental`) VALUES (?)";
  //const valuesespecificaciones = [familia, altura, diametro, copa, corteza];
  //console.log(valuesespecificaciones)
  db4.query(querynombres,[valuesnombres],(err,data)=>{
    if (err) {
      res.json({success: false, message: 'Error, no se logro ingresar los datos', err});
      console.log(err)
    }
  db4.query('SELECT MAX(IdArbol) AS id FROM plantas_cuc.nombres_comunes', (err,resultid)=>{
    if (err) {
      res.json({success: false, message: 'Error, no se logro ingresar los datos', err});
      console.log(err)
    }else{
      console.log(resultid)
    }
    const valuesespecificaciones = [resultid[0].id,familia, altura, diametro, copa, corteza];
    //console.log(valuesespecificaciones);
    db4.query(queryespecificaciones,[valuesespecificaciones],(err,data)=>{
      if (err) {
        res.json({success: false, message: 'Error, no se logro ingresar los datos', err});
        console.log(err)
      }else{
        console.log("succes especificaciones");
      }
    })
    
    const valuesflores = [resultid[0].id,color_flor, tipo_flor, epoca];
    //console.log(valuesespecificaciones);
    db4.query(queryflores,[valuesflores],(err,data)=>{
      if (err) {
        res.json({success: false, message: 'Error, no se logro ingresar los datos', err});
        console.log(err)
      }else{
        console.log("succes flores");
      }})

    const valuesfrutos = [resultid[0].id,tipo_fruta, forma, tamanio, color_fruta];
    //console.log(valuesespecificaciones);
    db4.query(queryfrutos,[valuesfrutos],(err,data)=>{
      if (err) {
        res.json({success: false, message: 'Error, no se logro ingresar los datos', err});
        console.log(err)
      }else{
        console.log("succes frutos");
      }
    })
    const valueshabitat = [resultid[0].id,distribucion, clima, altitud, suelo];
    db4.query(queryhabitat,[valueshabitat],(err,data)=>{
      if (err) {
        res.json({success: false, message: 'Error, no se logro ingresar los datos', err});
        console.log(err)
      }else{
        console.log("succes habitat");
      }
    })

    const valueshojas = [resultid[0].id,tipo_hoja, longitud, follaje];
    db4.query(queryhojas,[valueshojas],(err,data)=>{
      if (err) {
        res.json({success: false, message: 'Error, no se logro ingresar los datos', err});
        console.log(err)
      }else{
        console.log("succes hojas");
      }
    })
    
    const valuesusos = [resultid[0].id,madera, forraje, medicinal, ornamental];
    db4.query(queryusos,[valuesusos],(err,data)=>{
      if (err) {
        res.json({success: false, message: 'Error, no se logro ingresar los datos', err});
        console.log(err)
      }else{
        console.log("succes usos");
      }
    })
  })
  
  res.json({ success: true, message: 'Dato ingresado correctamente'});
    
  })
})


app.listen(8800, ()=>{
    console.log("Connected to backend")
}) 