import express from "express"
import mysql2 from "mysql2"
import cors from "cors"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import path from "path"; 
import { fileURLToPath } from 'url';
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

// Obtén el nombre del archivo actual y el directorio
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configura el middleware para servir archivos estáticos
app.use('/images', express.static(path.join(__dirname, 'images')));


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
    const query = "SELECT IdArbol, Nombre FROM plantas_cuc.nombres_comunes"
    db3.query(query,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
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
          console.log(err)
          res.json({success: false, message: 'Error, no se logro actualizar los datoss', err});
        }else{
          res.json({ success: true, message: 'Update'});
        }
    })
})

app.post("/updateArbolFlor", (req, res)=>{
  const query = "UPDATE plantas_cuc.flores SET `color`= ?,`tipo` = ?,`epoca_floracion` = ? WHERE (IdArbol = ? )";
  console.log('backend: ',req.body.IdArbol);
  const values = [
    req.body.colorflor,
    req.body.tipoflor,
    req.body.epoca,
    req.body.IdArbol,
  ];      
      db4.query(query,values,(err,data)=>{
        if (err) {
          console.log(err)
          res.json({success: false, message: 'Error, no se logro actualizar los datoss', err});
        }else{
          res.json({ success: true, message: 'Update'});
        }
    })
})


app.post("/updateArbolE", (req, res)=>{
  const query = "UPDATE plantas_cuc.especificaciones SET `familia`= ?,`altura` = ?,`diametro_Tronco` = ?, `copa`= ?,`corteza` = ? WHERE (IdArbol = ? )";
  console.log('backend: ',req.body.IdArbol);
  const values = [
    req.body.familia,
    req.body.altura,
    req.body.diametro,
    req.body.copa,
    req.body.corteza,
    req.body.IdArbol
  ];      
      db4.query(query,values,(err,data)=>{
        if (err) {
          console.log(err)
          res.json({success: false, message: 'Error, no se logro actualizar los datoss especificaciones', err});
        }else{
          res.json({ success: true, message: 'Update'});
        }
    })
})

app.post("/updateArbolFruto", (req, res)=>{
  const query = "UPDATE plantas_cuc.frutos SET `tipo`= ?, `forma`= ? ,`tamaño` = ?,`color` = ? WHERE (IdArbol = ? )";
  console.log('backend: ',req.body.IdArbol);
  const values = [
    req.body.tipofruto,
    req.body.forma,
    req.body.tamanio,
    req.body.colorfruto,
    req.body.IdArbol
  ];      
      db4.query(query,values,(err,data)=>{
        if (err) {
          console.log(err)
          res.json({success: false, message: 'Error, no se logro actualizar los datoss especificaciones', err});
        }else{
          res.json({ success: true, message: 'Update'});
        }
    })
})

app.post("/updateArbolHabitat", (req, res)=>{
  const query = "UPDATE plantas_cuc.habitat SET `distribucion`= ?, `clima`= ? ,`altitud` = ?,`suelo` = ? WHERE (IdArbol = ? )";
  console.log('backend: ',req.body.IdArbol);
  const values = [
    req.body.distribucion,
    req.body.clima,
    req.body.altitud,
    req.body.suelo,
    req.body.IdArbol
  ];      
      db4.query(query,values,(err,data)=>{
        if (err) {
          console.log(err)
          res.json({success: false, message: 'Error, no se logro actualizar los datoss especificaciones', err});
        }else{
          res.json({ success: true, message: 'Update'});
        }
    })
})

app.post("/updateArbolHojas", (req, res)=>{
  const query = "UPDATE plantas_cuc.hojas SET `tipo`= ?, `longitud`= ? ,`follaje` = ? WHERE (IdArbol = ? )";
  console.log('backend: ',req.body.IdArbol);
  const values = [
    req.body.tipohoja,
    req.body.longitud,
    req.body.follaje,
    req.body.IdArbol
  ];      
      db4.query(query,values,(err,data)=>{
        if (err) {
          console.log(err)
          res.json({success: false, message: 'Error, no se logro actualizar los datoss especificaciones', err});
        }else{
          res.json({ success: true, message: 'Update'});
        }
    })
})

app.post("/updateArbolU", (req, res)=>{
  const query = "UPDATE plantas_cuc.usos SET `madera`= ?, `forraje`= ? ,`medicinal` = ?,`Ornamental` = ? WHERE (IdArbol = ? )";
  console.log('backend: ',req.body.IdArbol);
  const values = [
    req.body.madera,
    req.body.forraje,
    req.body.medicinal,
    req.body.orna,
    req.body.IdArbol
  ];      
      db4.query(query,values,(err,data)=>{
        if (err) {
          console.log(err)
          res.json({success: false, message: 'Error, no se logro actualizar los datoss especificaciones', err});
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

app.get("/eliminar/:id", (req,res)=>{
  const id = req.params.id;
  console.log(id+ ' desde index eliminar')
  const querynombres = "DELETE FROM `plantas_cuc`.`nombres_comunes` WHERE (`plantas_cuc`.`nombres_comunes`.IdArbol = ?)";
  const queryespecif = "DELETE FROM `plantas_cuc`.`especificaciones` WHERE (`plantas_cuc`.`especificaciones`.IdArbol = ?)";
  const queryflores = "DELETE FROM `plantas_cuc`.`flores` WHERE (`plantas_cuc`.`flores`.IdArbol = ?)";
  const queryfrutos = "DELETE FROM `plantas_cuc`.`frutos` WHERE (`plantas_cuc`.`frutos`.IdArbol = ?)";
  const queryhabitat = "DELETE FROM `plantas_cuc`.`habitat` WHERE (`plantas_cuc`.`habitat`.IdArbol = ?)";
  const queryhojas = "DELETE FROM `plantas_cuc`.`hojas` WHERE (`plantas_cuc`.`hojas`.IdArbol = ?)";
  const queryusos = "DELETE FROM `plantas_cuc`.`usos` WHERE (`plantas_cuc`.`usos`.IdArbol = ?)";

  db4.query(querynombres,[id],(err,data)=>{
    if (err) {
      res.json({success: false, message: 'Error, no se logro eliminar los datos en nombres_comunes', err});
    }
  })
  db4.query(queryespecif,[id],(err,data)=>{
    if (err) {
      res.json({success: false, message: 'Error, no se logro eliminar los datos en especificaciones', err});
    }
  })
  db4.query(queryflores,[id],(err,data)=>{
    if (err) {
      res.json({success: false, message: 'Error, no se logro eliminar los datos en flores', err});
    }
  })
  db4.query(queryfrutos,[id],(err,data)=>{
    if (err) {
      res.json({success: false, message: 'Error, no se logro eliminar los datos en frutos', err});
    }
  })   
  db4.query(queryhabitat,[id],(err,data)=>{
    if (err) {
      res.json({success: false, message: 'Error, no se logro eliminar los datos en habitat', err});
    }
  })
  db4.query(queryhojas,[id],(err,data)=>{
    if (err) {
      res.json({success: false, message: 'Error, no se logro eliminar los datos en hojas', err});
    }
  })
  db4.query(queryusos,[id],(err,data)=>{
    if (err) {
      res.json({success: false, message: 'Error, no se logro eliminar los datos en usos', err});
    }
  })
  res.json({ success: true, message: 'Datos eliminados'});
    
})

app.get("/nombres/:IdArbol", (req,res)=>{
  const id = req.params.IdArbol;
  const queryNombres = "SELECT plantas_cuc.nombres_comunes.IdArbol, plantas_cuc.nombres_comunes.Nombre, plantas_cuc.nombres_comunes.Nombre_Cientifico, plantas_cuc.nombres_comunes.Nombre_Comun, plantas_cuc.especificaciones.familia, plantas_cuc.especificaciones.altura, plantas_cuc.especificaciones.diametro_Tronco, plantas_cuc.especificaciones.copa, plantas_cuc.especificaciones.corteza, plantas_cuc.flores.color as colorflor, plantas_cuc.flores.tipo as tipoflor, plantas_cuc.flores.epoca_floracion, plantas_cuc.frutos.tipo as tipofruto, plantas_cuc.frutos.forma, plantas_cuc.frutos.tamaño as tamanio, plantas_cuc.frutos.color as colorfruto, plantas_cuc.habitat.distribucion, plantas_cuc.habitat.clima, plantas_cuc.habitat.altitud, plantas_cuc.habitat.suelo, plantas_cuc.hojas.tipo as tipohoja, plantas_cuc.hojas.longitud, plantas_cuc.hojas.follaje, plantas_cuc.usos.madera, plantas_cuc.usos.forraje, plantas_cuc.usos.medicinal, plantas_cuc.usos.Ornamental FROM plantas_cuc.nombres_comunes LEFT JOIN plantas_cuc.especificaciones ON plantas_cuc.nombres_comunes.IdArbol = plantas_cuc.especificaciones.IdArbol LEFT JOIN plantas_cuc.flores ON plantas_cuc.nombres_comunes.IdArbol = plantas_cuc.flores.IdArbol  LEFT JOIN plantas_cuc.frutos ON plantas_cuc.nombres_comunes.IdArbol = plantas_cuc.frutos.IdArbol LEFT JOIN plantas_cuc.habitat ON plantas_cuc.nombres_comunes.IdArbol = plantas_cuc.habitat.IdArbol  LEFT JOIN plantas_cuc.hojas ON plantas_cuc.nombres_comunes.IdArbol = plantas_cuc.hojas.IdArbol LEFT JOIN plantas_cuc.usos ON plantas_cuc.nombres_comunes.IdArbol = plantas_cuc.usos.IdArbol WHERE (plantas_cuc.nombres_comunes.IdArbol = ?)";
  //const queryEspeficaciones = "SELECT * FROM plantas_cuc.especificaciones";
  //const queryFlores = "SELECT * FROM plantas_cuc.flores";
  //const queryFrutos = "SELECT * FROM plantas_cuc.frutos";
  //const queryHabitat = "SELECT * FROM plantas_cuc.habitat";
  //const queryHojas = "SELECT * FROM plantas_cuc.hojas";
  //const queryUsos = "SELECT * FROM plantas_cuc.usos";
  db3.query(queryNombres,[id],(err,data)=>{
      if(err) return res.json(err)
      return res.json({nombre:data[0].Nombre,nombrecie:data[0].Nombre_Cientifico,nombrecom: data[0].Nombre_Comun, familia:data[0].familia, altura: data[0].altura, diametro: data[0].diametro_Tronco, copa: data[0].copa, corteza: data[0].corteza, colorflor: data[0].colorflor, tipoflor: data[0].tipoflor, epoca: data[0].epoca_floracion, tipofruto: data[0].tipofruto, forma: data[0].forma, tamanio: data[0].tamanio, colorfruto: data[0].colorfruto, distribucion: data[0].distribucion, clima:data[0].clima, altitud: data[0].altitud , suelo:data[0].suelo , tipohoja:data[0].tipohoja , longitud:data[0].longitud, follaje:data[0].follaje, madera:data[0].madera, forraje: data[0].forraje, medicinal:data[0].medicinal, ornamental:data[0].Ornamental})
    })
})


app.listen(8800, ()=>{
    console.log("Connected to backend")
}) 