-- MySQL dump 10.13  Distrib 8.0.37, for Win64 (x86_64)
--
-- Host: localhost    Database: plantas_cuc
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `especificaciones`
--

DROP TABLE IF EXISTS `especificaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `especificaciones` (
  `IdArbol` int NOT NULL AUTO_INCREMENT,
  `familia` varchar(150) DEFAULT NULL,
  `altura` varchar(150) DEFAULT NULL,
  `diametro_Tronco` varchar(150) DEFAULT NULL,
  `copa` varchar(150) DEFAULT NULL,
  `corteza` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`IdArbol`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `especificaciones`
--

LOCK TABLES `especificaciones` WRITE;
/*!40000 ALTER TABLE `especificaciones` DISABLE KEYS */;
INSERT INTO `especificaciones` VALUES (1,'Fabaceae leguminosae.','Puede alcanzar entre 25 y 50 metros.','Hasta 3 metros en especímenes muy viejos.','Ancha y extendida creando una sombra considerable, las ramas son gruesas y robustas.','Suave, grisasea o marrón claro con fisuras un poco profundas.'),(2,'Salicaceae.','Puede alcanzar hasta 20 metros.','Hasta un metro.','Amplia y colgante con ramas largas y delgadas que caes hacia el suelo.','Es de color marrón grisaseo, se vuelve rugosa y fisurada con la edad.'),(3,'Bignoniaceae.','Puede alcanzar hasta los 30 metros.','Hasta un metro.','Ancha y redondeada con ramas extendidas.','Grisasea, se vuelve aspera y fisurada con la edad.'),(4,'Malvaceae.','Puede alcanzar hasta los 70 metros.','Hasta 3 metros o mas.','Ancha y extendida con ramas que forman una gran sombrilla.','Lisa y grisasea en árboles jovenes, con espinas cónicas, se vuelve más robusta con la edad.'),(5,'Rosaceae.','Puede alcanzar entre 4 a 10 metros.','Hasta 30 centímetros.','Redondeada y extendida.','Grisasea y rugosa en árboles maduros.'),(6,'Fabaceae.','Puede alcanzar entre 5 a 18 metros.','Hasta un metro.','Ancha y extendida con ramas que pueden tener espinas.','Grisasea a marrón, lisa en árboles jovenes, se vuelve rugosa con la edad.'),(7,'Fabaceae.','Puede alcanzar entre 5 a 12 metros.','Hasta 60 centímetros.','Ancha y extendida con forma de sombrilla.','Grisasea y lisa, se vuelve más rugosa con la edad.'),(8,'Moraceae','Puede alcanzar entre 2 a 30 metros dependiendo si es cultivada en exterior o interior.','Hasta un metro en condiciones óptimas.','Densa y extendida con ramas colgantes.','Gris clara y lisa.');
/*!40000 ALTER TABLE `especificaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flores`
--

DROP TABLE IF EXISTS `flores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flores` (
  `IdArbol` int NOT NULL AUTO_INCREMENT,
  `color` varchar(85) DEFAULT NULL,
  `tipo` varchar(150) DEFAULT NULL,
  `epoca_floracion` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`IdArbol`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flores`
--

LOCK TABLES `flores` WRITE;
/*!40000 ALTER TABLE `flores` DISABLE KEYS */;
INSERT INTO `flores` VALUES (1,'','',''),(2,'Amarillemntas.','Amentos.','Primavera.'),(3,'Rosado o violeta.','Inflorescencias en forma de racimos terminales.','Finales de invierno a principios de primavera.'),(4,'Blancas o rosadas.','Grandes, solitarias o en pequeños racimos.','Finales de la estación seca, antes de que broten las hojas nuevas.'),(5,'Blancas a rosadas.','Solitarias o en pequeños racimonos.','Finales de invierno a principios de primavera.'),(6,'Blancas a verdosas.','Pequeñas y agrupadas en florescencias esféricas.','Primavera y verano.'),(7,'Rojo anaranjado.','Grandes, agrupadas en racimos terminales.','Primavera y verano.'),(8,'No visibles, diminutas y encerradas en un receptáculo llamado sicono.','Inflorescencias en forma de sicono.','No tiene una época de floración específica visible.');
/*!40000 ALTER TABLE `flores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `frutos`
--

DROP TABLE IF EXISTS `frutos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `frutos` (
  `IdArbol` int NOT NULL AUTO_INCREMENT,
  `tipo` varchar(150) DEFAULT NULL,
  `forma` varchar(150) DEFAULT NULL,
  `tamaño` varchar(150) DEFAULT NULL,
  `color` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`IdArbol`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `frutos`
--

LOCK TABLES `frutos` WRITE;
/*!40000 ALTER TABLE `frutos` DISABLE KEYS */;
INSERT INTO `frutos` VALUES (1,'Legumbre.','Forma de oreja de elefante.','De 5 a 10 centímetros de diámetro.','Marrón oscuro a negro cuando está maduro.'),(2,'Cápsulas.','Forma oblonga.','Pequeño al rededor de 0.5 centímetros.','Marrón.'),(3,'Cápsulas.','Alargada y delgada.','De 15 a 30 centímetros de largo.','Marrón oscuro cuando maduran.'),(4,'Cápsulas.','Oblongas, alargadas.','De 15 a 20 centímetros de largo.','Marrón cuando maduran.'),(5,'Drupas.','Ovalada.','De 3 a 6  centímetros de largo.','Verde cuando están inmaduras, volviendose marrón al madurar.'),(6,'Vainas.','Retorcidad y alargadas.','De 10 a 15 centímetros de largo.','Verde a rosado cuando están inmaduras, volviendose marrón al madurar.'),(7,'Vainas.','Alargadas y planas.','De 30 a 60 centímetros de largo.','Marrón oscuro cuando maduran.'),(8,'Sicono.','Redonda.','De 1 a 2 centímetros de diámetro.','Verde cuando están inmaduras, volviendose negro al madurar.');
/*!40000 ALTER TABLE `frutos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `habitat`
--

DROP TABLE IF EXISTS `habitat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `habitat` (
  `IdArbol` int NOT NULL AUTO_INCREMENT,
  `distribucion` varchar(150) DEFAULT NULL,
  `clima` varchar(150) DEFAULT NULL,
  `altitud` varchar(150) DEFAULT NULL,
  `suelo` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`IdArbol`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `habitat`
--

LOCK TABLES `habitat` WRITE;
/*!40000 ALTER TABLE `habitat` DISABLE KEYS */;
INSERT INTO `habitat` VALUES (1,'América central, desde México hasta Costa Rica.','Climas tropicales y subtropicales.','De 0 hasta 1200 metros sobre el nivel del mar.','Tolera una variedad de suelos aunque prefiere suelos bien drenados.'),(2,'Originario del centro y sur de China.','Prefiere climas templados y húmedos.','De 0 hasta 1000 metros sobre el nivel del mar.','Prefiere suelos húmedos, bien drenados y ricos en materia orgánica.'),(3,'Zonas tropicales en todo el mundo.','Prefiere climas tropicales y subtropicales.','De 0 hasta 1200 metros sobre el nivel del mar.','Prefiere suelos bien drenados ricos en nutrientes y con buenan humedad.'),(4,'De México a Sur América.','Prefieren climas tropicales.','De 0 hasta 1500 metros sobre el nivel del mar.','Prefieren suelos profundos, bien drenados y ricos en nutrientes.'),(5,'Europa mediterranea y América, especialmente en Chile.','Prefieren climas mediterraneos con inviernos suaves y veranos calurosos.','De 0 hasta 1000 metros sobre el nivel del mar.','Prefieren suelos bien drenados, ligeros y arenosos.'),(6,'Cerca del Oceano Pacífico y a trevés de toda América central.','Prefieren climas cálidos y secos.','De 0 hasta 1800 metros sobre el nivel del mar.','Prefieren suelos pobres, bien drenados, arenosos o arcillosos.'),(7,'Es endémico de Madagascar.','Prefiere climas húmedos y cálidos.','De 0 hasta 1200 metros sobre el nivel del mar.','Prefieren suelos bien drenados, arenosos o arcillosos ricos en materia orgánica.'),(8,'Se encuentra en América del sur.','Prefieren climas húmedos y cálidos.','De 0 hasta 1500 metros sobre el nivel del mar.','Prefieren suelos bien drenados ricos en materia orgánica.');
/*!40000 ALTER TABLE `habitat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hojas`
--

DROP TABLE IF EXISTS `hojas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hojas` (
  `IdArbol` int NOT NULL AUTO_INCREMENT,
  `tipo` varchar(150) DEFAULT NULL,
  `longitud` varchar(85) DEFAULT NULL,
  `follaje` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`IdArbol`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hojas`
--

LOCK TABLES `hojas` WRITE;
/*!40000 ALTER TABLE `hojas` DISABLE KEYS */;
INSERT INTO `hojas` VALUES (1,'Bipinnadas, compuestas.','Entre 15 y 40 centímetros.','Caducifolio, se cae en estación seca.'),(2,'Lanceoladas.','Entre 5 a 16 centímetros.','Caducifolio, verde claro en verano y amarillo en otoño.'),(3,'Compuestas, palmeadas.','Entre 8 a 18 centímetros.','Caducifolio, verde oscuro.'),(4,'Compuestas, palmeadas.','Entre 7 a 20 centímetros.','Caducifolio, verde brillante.'),(5,'Lanceoladas.','Entre 7 a 12 centímetros.','Caducifolio, verde brillante.'),(6,'Bipinnadas.','Entre 2 a 5 centímetros por foliolo.','Perenne, verde oscuro.'),(7,'Bipinnadas.','Entre 30 a 50 centímetros.','Caducifolio, verde brillante.'),(8,'Simples, elípticas.','Entre 5 a 13 centímetros.','Perenne, verde brillante.');
/*!40000 ALTER TABLE `hojas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nombres_comunes`
--

DROP TABLE IF EXISTS `nombres_comunes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nombres_comunes` (
  `IdArbol` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(55) DEFAULT NULL,
  `Nombre_Cientifico` varchar(85) DEFAULT NULL,
  `Nombre_Comun` varchar(85) DEFAULT NULL,
  PRIMARY KEY (`IdArbol`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nombres_comunes`
--

LOCK TABLES `nombres_comunes` WRITE;
/*!40000 ALTER TABLE `nombres_comunes` DISABLE KEYS */;
INSERT INTO `nombres_comunes` VALUES (1,'Parota.','Enterolobium cyclocarpum.','Guanacaste, Oreja de elefante.'),(2,'Sauce llorón.','Salix babylonica.','Sauce llorón.'),(3,'Primavera.','Tabebuia rosea','Primavera, Roble rosa.'),(4,'Ceiba.','Ceiba pentandra.','Ceiba, Kapok.'),(5,'Almendro.','Prunus dulcis.','Almendro.'),(6,'Guamúchil.','Pithecellobium dulce.','Guamúchil, Huamúchil, Guamúchile'),(7,'Tabachín.','Delonix regia.','Tabachín, Flamboyan, Árbol de fuego.'),(8,'Ficus.','Ficus benjamina.','Ficus, Ficus benjamina, Higuera llorona.');
/*!40000 ALTER TABLE `nombres_comunes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usos`
--

DROP TABLE IF EXISTS `usos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usos` (
  `IdArbol` int NOT NULL AUTO_INCREMENT,
  `madera` varchar(250) DEFAULT NULL,
  `forraje` varchar(250) DEFAULT NULL,
  `medicinal` varchar(250) DEFAULT NULL,
  `Ornamental` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`IdArbol`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usos`
--

LOCK TABLES `usos` WRITE;
/*!40000 ALTER TABLE `usos` DISABLE KEYS */;
INSERT INTO `usos` VALUES (1,'Utilizada en la construcción, carpintería y ebanistería debido a su durabilidad y resistencia.','Las hojas y los frutos son utilizados como alimento para ganado.','Diversas partes del árbol se usan en la medicina tradicional para tratar enfermedades y dolencias.','Debido a su tamaño y la sombra que proporciona es utilizado en parques y grandes jardínes.'),(2,'Utilizada ocasionalmente para postes y artesanías, no es de alta calidad.','No es comunmente utilizada.','Se ha usado tradicionalmente para tratar fiebre y dolor debido a la salicina de la corteza.','Muy apreciada en jardinería y paisajismos por su forma elegante.'),(3,'Utilizada en carpintería y construcción por su dureza y durabilidad.','No es comunmente utilizada.','En medicina tradicional se han usado extractos de la corteza para tratar diversas dolencias.','Muy valorado en jardinería y paisajismo por sus espectaculares flores y sombra.'),(4,'Ligera, utilizada en la construcción de canoas y en carpintería.','Las hojas jóvenes pueden ser utilizadas como forraje.','Utilizada en la medicina tradicional para tratar diversas dolencias, incluyendo problemas respiratorios y digestivos.','Plantado en parques y jardínes por su gran tamaño y sombra.'),(5,'Usado en la fabricación de pequeños objetos y herramientas.','Las hojas y cáscaras pueden usarse como alimento para ganado.','Las almendras tienen propiedades nutritivas, se usan en los cosméticos y en la medicina tradicional','Apreciado por su floración temprana y vistosa utilizada en jardínes y parques.'),(6,'Utilizado en la fabricación de muebles, postes y carbón.','Las hojas y vainas pueden ser utilizadas como alimento para ganado.','Utilizado en medicina tradicional para tratar afecciones digestivas y respiratorias.','Plantado en jardínes y parques por su sombra y frutos comestibles.'),(7,'Utilizada en carpintería ligera y para hacer utencilios.','No es comunmente utilizado.','Utilizado en la medicina tradicional para tratar inflamaciones y otras dolencias.','Muy valorado en jardinería y paisajismo por sus vistosas flores y amplia sombra.'),(8,'Utilizada ocasionalmente para carpintería ligera y utencilios.','No es comunmente utilizado.','Utilizado en medicina tradicional para tratar diversas afecciones.','Muy valorado en jardinería y paisajismo por su adaptabilidad y estética.');
/*!40000 ALTER TABLE `usos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-01 13:29:48
