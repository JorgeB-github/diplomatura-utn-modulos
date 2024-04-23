-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: integrador
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.20.04.1

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
-- Table structure for table `novedades`
--

DROP TABLE IF EXISTS `novedades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) DEFAULT NULL,
  `subtitulo` text,
  `cuerpo` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `novedades`
--

LOCK TABLES `novedades` WRITE;
/*!40000 ALTER TABLE `novedades` DISABLE KEYS */;
INSERT INTO `novedades` VALUES (1,'Generación de energía','Energía térmica','La generación de energía térmica implica la quema de combustibles fósiles, como carbón, petróleo o gas natural, para producir calor. Este calor se utiliza para calentar agua y producir vapor, que luego impulsa turbinas conectadas a generadores eléctricos. Es una de las formas más comunes de generación de electricidad en todo el mundo, aunque plantea preocupaciones ambientales debido a las emisiones de gases de efecto invernadero y la contaminación.'),(2,'Generación de energía','Energía hidroeléctrica','Esta forma de generación de energía utiliza la energía cinética del agua en movimiento, como la de los ríos o presas, para hacer girar turbinas conectadas a generadores eléctricos. Es una fuente de energía renovable y limpia, pero la construcción de grandes represas puede tener impactos ambientales significativos, como la alteración de ecosistemas fluviales y la reubicación de comunidades.'),(3,'Generación de energía','Energía eólica','La energía eólica utiliza la energía cinética del viento para hacer girar las hélices de aerogeneradores, que están conectados a generadores eléctricos para producir electricidad. Es una fuente de energía renovable y limpia, pero la ubicación de los parques eólicos puede ser un desafío y algunos críticos plantean preocupaciones sobre el impacto visual y auditivo, así como posibles efectos en la vida silvestre.'),(4,'Generación de energía','Energía solar','La energía solar convierte la luz del sol en electricidad a través de paneles solares fotovoltaicos o sistemas de concentración solar térmica. Es una fuente de energía renovable y limpia, con una amplia disponibilidad en muchas regiones del mundo. Sin embargo, la generación de energía solar puede ser intermitente debido a la variabilidad del clima y la necesidad de almacenamiento de energía.'),(5,'Generación de energía','Energía nuclear','La energía nuclear utiliza la fisión nuclear para generar calor, que se utiliza para producir vapor y generar electricidad de manera similar a la energía térmica convencional. Es una fuente de energía densa y potente, pero plantea preocupaciones sobre la seguridad, la gestión de residuos nucleares y la proliferación de armas nucleares.'),(6,'Generación de energía','Energía nuclear','La energía nuclear utiliza la fisión nuclear para generar calor, que se utiliza para producir vapor y generar electricidad de manera similar a la energía térmica convencional. Es una fuente de energía densa y potente, pero plantea preocupaciones sobre la seguridad, la gestión de residuos nucleares y la proliferación de armas nucleares.');
/*!40000 ALTER TABLE `novedades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) DEFAULT NULL,
  `password` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Flavia','81dc9bdb52d04dc20036dbd8313ed055'),(2,'Jorge','81dc9bdb52d04dc20036dbd8313ed055');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'integrador'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-22 21:17:56
