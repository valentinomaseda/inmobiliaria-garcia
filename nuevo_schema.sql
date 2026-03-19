CREATE DATABASE  IF NOT EXISTS `inmobiliaria_juliana` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `inmobiliaria_juliana`;
-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: inmobiliaria_juliana
-- ------------------------------------------------------
-- Server version	8.0.43

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `administrador`
--

DROP TABLE IF EXISTS `administrador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administrador` (
  `idAdministrador` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`idAdministrador`),
  UNIQUE KEY `uk_email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrador`
--

LOCK TABLES `administrador` WRITE;
/*!40000 ALTER TABLE `administrador` DISABLE KEYS */;
INSERT INTO `administrador` VALUES (1,'Juliana','juliana@gmail.com','$2a$10$ba7vCEGnxZ/ZuTcTe/k.iu26ZlVdGtqc/hriEU120QlcoL0wOFjtq','2026-03-11 05:23:18','2026-03-11 05:23:18');
/*!40000 ALTER TABLE `administrador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `caracteristica`
--

DROP TABLE IF EXISTS `caracteristica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `caracteristica` (
  `idCaracteristica` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idCaracteristica`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `caracteristica`
--

LOCK TABLES `caracteristica` WRITE;
/*!40000 ALTER TABLE `caracteristica` DISABLE KEYS */;
INSERT INTO `caracteristica` VALUES (1,'Piscina','dsd'),(2,'Garage','');
/*!40000 ALTER TABLE `caracteristica` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagen`
--

DROP TABLE IF EXISTS `imagen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagen` (
  `idImagen` int unsigned NOT NULL AUTO_INCREMENT,
  `idPropiedad` int unsigned NOT NULL,
  `url` varchar(255) NOT NULL,
  `orden` tinyint unsigned DEFAULT '0',
  `es_principal` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`idImagen`),
  KEY `idx_propiedad` (`idPropiedad`),
  CONSTRAINT `fk_imagen_propiedad` FOREIGN KEY (`idPropiedad`) REFERENCES `propiedad` (`idPropiedad`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagen`
--

LOCK TABLES `imagen` WRITE;
/*!40000 ALTER TABLE `imagen` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `propiedad`
--

DROP TABLE IF EXISTS `propiedad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `propiedad` (
  `idPropiedad` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `valor` decimal(12,2) NOT NULL,
  `moneda` enum('USD','ARS','EUR') DEFAULT 'USD',
  `descripcion` text,
  `cantAmbientes` int DEFAULT NULL,
  `metCuad` decimal(10,2) DEFAULT NULL,
  `operacion` enum('venta','alquiler','alquiler_temporal') NOT NULL,
  `tipo` enum('casa','departamento','terreno','local','oficina','galpon','quinta') NOT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `numero` varchar(20) DEFAULT NULL,
  `piso` varchar(20) DEFAULT NULL,
  `depto` varchar(20) DEFAULT NULL,
  `barrio` varchar(100) DEFAULT NULL,
  `ciudad` varchar(100) DEFAULT NULL,
  `provincia` varchar(100) DEFAULT NULL,
  `codigo_postal` varchar(20) DEFAULT NULL,
  `latitud` decimal(10,8) DEFAULT NULL,
  `longitud` decimal(11,8) DEFAULT NULL,
  `estado` enum('disponible','reservada','vendida','alquilada','inactiva') DEFAULT 'disponible',
  `destacada` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`idPropiedad`),
  KEY `idx_operacion` (`operacion`),
  KEY `idx_tipo` (`tipo`),
  KEY `idx_valor` (`valor`),
  KEY `idx_estado` (`estado`),
  KEY `idx_destacada` (`destacada`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `propiedad`
--

LOCK TABLES `propiedad` WRITE;
/*!40000 ALTER TABLE `propiedad` DISABLE KEYS */;
INSERT INTO `propiedad` VALUES (5,'Departamento luminoso en torre',85000.00,'USD','Departamento de 2 dormitorios en torre con amenities. Vista panorámica, muy luminoso y en excelente estado.',3,65.00,'venta','departamento','Bv. Illia','567','8','B','Nueva Córdoba','Córdoba','Córdoba',NULL,NULL,NULL,'disponible',1,'2026-03-12 17:13:35','2026-03-12 17:13:35'),(6,'Casa quinta con arboleda',180000.00,'USD','Quinta con casa principal de 4 ambientes, galpón, piscina y 2000m2 de terreno con árboles frutales.',4,150.00,'venta','quinta','Camino Real','890',NULL,NULL,'Zona Rural','Unquillo','Córdoba',NULL,NULL,NULL,'disponible',1,'2026-03-12 17:13:35','2026-03-12 17:13:35'),(7,'Departamento en alquiler - Centro',150000.00,'ARS','Monoambiente en pleno centro, ideal para estudiantes o profesionales. Cocina equipada, baño completo.',1,35.00,'alquiler','departamento','27 de Abril','234','3','A','Centro','Córdoba','Córdoba',NULL,NULL,NULL,'disponible',0,'2026-03-12 17:13:35','2026-03-12 17:13:35'),(8,'Local comercial sobre avenida',120000.00,'USD','Local comercial a la calle con vidriera, baño y depósito. Zona de alto tránsito vehicular.',2,80.00,'venta','local','Av. Colón','3456',NULL,NULL,'Alberdi','Córdoba','Córdoba',NULL,NULL,NULL,'disponible',0,'2026-03-12 17:13:35','2026-03-12 17:13:35'),(9,'Casa con jardín - 3 dormitorios',95000.00,'USD','Casa de 3 dormitorios con living-comedor, cocina, baño completo y amplio patio con parrilla.',5,120.00,'venta','casa','Belgrano','678',NULL,NULL,'General Paz','Córdoba','Córdoba',NULL,NULL,NULL,'disponible',0,'2026-03-12 17:13:35','2026-03-12 17:13:35'),(10,'Terreno en country',45000.00,'USD','Lote de 600m2 en country con todos los servicios. Vista a las sierras.',0,600.00,'venta','terreno',NULL,NULL,NULL,NULL,'Country Los Álamos','La Calera','Córdoba',NULL,NULL,NULL,'disponible',0,'2026-03-12 17:13:35','2026-03-12 17:13:35'),(11,'Oficina en edificio corporativo',200000.00,'ARS','Oficina de 50m2 en edificio corporativo con seguridad 24hs. Incluye cochera.',2,50.00,'alquiler','oficina','Cañada','890','5',NULL,'Centro','Córdoba','Córdoba',NULL,NULL,NULL,'disponible',0,'2026-03-12 17:13:35','2026-03-12 17:13:35'),(12,'Dúplex con cochera',135000.00,'USD','Dúplex moderno de 3 dormitorios en planta alta, living-comedor y cochera cubierta.',4,110.00,'venta','casa','Fray Luis Beltrán','1122',NULL,NULL,'Cerro de las Rosas','Córdoba','Córdoba',NULL,NULL,NULL,'disponible',0,'2026-03-12 17:13:35','2026-03-12 17:13:35'),(13,'Casa temporal en Carlos Paz',8000.00,'USD','Casa para alquiler turístico con 3 dormitorios, piscina y parrilla. A 5 cuadras del lago.',5,140.00,'alquiler_temporal','casa','San Lorenzo','456',NULL,NULL,'Costa Azul','Villa Carlos Paz','Córdoba',NULL,NULL,NULL,'disponible',0,'2026-03-12 17:13:35','2026-03-12 17:13:35'),(14,'Penthouse con vista al río',320000.00,'USD','Espectacular penthouse de lujo con terraza privada de 80m2, vista panorámica al río. 3 dormitorios en suite, cocina diseñada, amenities premium.',5,220.00,'venta','departamento','Costanera','2500','15','PH','Cerro de las Rosas','Arrecifes','Buenos Aires','2740',NULL,NULL,'disponible',1,'2026-03-12 17:25:45','2026-03-12 17:39:03'),(15,'Casa campestre con caballerizas',275000.00,'USD','Propiedad rural con casa principal de 200m2, galpón, caballerizas para 6 caballos, palenque y 5 hectáreas de terreno.',6,200.00,'venta','quinta','Ruta E-55','Km 12',NULL,NULL,'Zona Rural','Malagueño','Córdoba',NULL,NULL,NULL,'disponible',0,'2026-03-12 17:25:45','2026-03-12 17:25:45'),(16,'Departamento amoblado - Alquiler',180000.00,'ARS','Departamento 2 dormitorios totalmente amoblado y equipado. Incluye cochera, expensas bajas. Disponible inmediato.',3,55.00,'alquiler','departamento','Duarte Quirós','1500','6','D','Nueva Córdoba','Córdoba','Córdoba',NULL,NULL,NULL,'disponible',0,'2026-03-12 17:25:45','2026-03-12 17:25:45'),(17,'Galpón industrial con oficinas',280000.00,'USD','Galpón de 600m2 con oficinas administrativas, baños, vestuarios. Portón alto, patio de maniobras. Ideal logística.',3,600.00,'venta','galpon','Circunvalación','5800',NULL,NULL,'Ferreyra','Córdoba','Córdoba',NULL,NULL,NULL,'disponible',0,'2026-03-12 17:25:45','2026-03-12 17:25:45'),(18,'Casa de montaña - Valle de Punilla',12000.00,'USD','Casa amplia de 4 dormitorios con hogar a leña, galería cerrada y jardín. Ideal para vacaciones en familia. Excelente ubicación.',6,160.00,'alquiler_temporal','casa','Los Algarrobos','345',NULL,NULL,'Villa del Lago','Villa del Dique','Córdoba',NULL,NULL,NULL,'disponible',0,'2026-03-12 17:25:45','2026-03-12 17:25:45');
/*!40000 ALTER TABLE `propiedad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `propiedad_caracteristica`
--

DROP TABLE IF EXISTS `propiedad_caracteristica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `propiedad_caracteristica` (
  `idPropiedad` int unsigned NOT NULL,
  `idCaracteristica` int unsigned NOT NULL,
  PRIMARY KEY (`idPropiedad`,`idCaracteristica`),
  KEY `fk_propiedad_caracteristica_caracteristica_idx` (`idCaracteristica`),
  CONSTRAINT `fk_propiedad_caracteristica_caracteristica` FOREIGN KEY (`idCaracteristica`) REFERENCES `caracteristica` (`idCaracteristica`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_propiedad_caracteristica_propiedad` FOREIGN KEY (`idPropiedad`) REFERENCES `propiedad` (`idPropiedad`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `propiedad_caracteristica`
--

LOCK TABLES `propiedad_caracteristica` WRITE;
/*!40000 ALTER TABLE `propiedad_caracteristica` DISABLE KEYS */;
INSERT INTO `propiedad_caracteristica` VALUES (14,1),(14,2);
/*!40000 ALTER TABLE `propiedad_caracteristica` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-03-18 15:13:48
