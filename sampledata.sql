-- MySQL dump 10.13  Distrib 8.2.0, for Win64 (x86_64)
--
-- Host: localhost    Database: sdsdb
-- ------------------------------------------------------
-- Server version	8.2.0

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
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `profile_img` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `company` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,'https://res.cloudinary.com/dupko07wd/image/upload/v1726319808/SDS_DOCS/user_1726319806866.jpg','Ridham','Chauhan','Pune','SDS Pvt Ltd','2024-09-14 09:42:52','2024-09-14 13:16:49'),(2,'https://res.cloudinary.com/dupko07wd/image/upload/v1726327644/SDS_DOCS/user_1726327623239.png','Action','Jaction','Thailand','RIVER EDGE ANALYTICS LTD','2024-09-14 09:43:38','2024-09-14 15:27:25'),(3,NULL,'Bob','Alice','Ahmedabad','Google','2024-09-14 09:50:46','2024-09-14 10:18:50'),(4,'https://res.cloudinary.com/dupko07wd/image/upload/v1726311150/SDS_DOCS/user_1726311148776.jpg','Ridham','Chauhan','Pune','Facebook','2024-09-14 09:50:47','2024-09-14 14:30:12'),(5,'https://res.cloudinary.com/dupko07wd/image/upload/v1726311706/SDS_DOCS/user_1726311703221.jpg','Arman','Malik','Banglore','SDS Pvt Ltd','2024-09-14 09:50:48','2024-09-14 15:10:05'),(6,'https://res.cloudinary.com/dupko07wd/image/upload/v1726311777/SDS_DOCS/user_1726311776179.jpg','Anupam','Mittle','Pune','SDS Pvt Ltd','2024-09-14 09:50:48','2024-09-14 15:07:46'),(7,NULL,'Vishal','Chauhan','Dholka','SDS Pvt Ltd','2024-09-14 09:50:49','2024-09-14 15:06:58'),(8,NULL,'Bhavin','Malik','Iscon','SDS Pvt Ltd','2024-09-14 09:50:50','2024-09-14 15:00:44'),(9,'https://res.cloudinary.com/dupko07wd/image/upload/v1726371549/SDS_DOCS/user_1726371546667.png','Ankit','Bose','Iscon','SDS Pvt Ltd','2024-09-14 09:50:51','2024-09-15 03:39:09'),(10,NULL,'Kirtan','Parekh','Mumbai','SDS Pvt Ltd','2024-09-14 09:50:51','2024-09-14 15:03:55'),(11,NULL,'Ridham','Chauhan','Dholka','ABC Pvt Ltd','2024-09-14 09:50:52','2024-09-15 03:34:42'),(12,'https://res.cloudinary.com/dupko07wd/image/upload/v1726327438/SDS_DOCS/user_1726327436862.png','Robert','Chauhan','Dholka','CDF Pvt Ltd','2024-09-14 09:50:53','2024-09-15 03:36:16'),(13,'https://res.cloudinary.com/dupko07wd/image/upload/v1726327336/SDS_DOCS/user_1726327315346.png','Veer','Zaara','Dholka','SDS Pvt Ltd','2024-09-14 09:50:54','2024-09-14 15:22:17'),(14,NULL,'First1','Last1','Ahmedabad','Tech Solutions','2024-09-15 03:57:40','2024-09-15 03:57:40'),(15,NULL,'First2','Last2','Surat','Creative Minds','2024-09-15 03:57:40','2024-09-15 03:57:40'),(16,NULL,'First3','Last3','Baroda','Innovate Labs','2024-09-15 03:57:40','2024-09-15 03:57:40'),(17,NULL,'First4','Last4','Rajkot','Future Tech','2024-09-15 03:57:41','2024-09-15 03:57:41'),(18,NULL,'First5','Last5','Dholka','SDS Pvt Ltd','2024-09-15 03:57:41','2024-09-15 03:57:41'),(19,NULL,'First6','Last6','Ahmedabad','Tech Solutions','2024-09-15 03:57:41','2024-09-15 03:57:41'),(20,NULL,'First7','Last7','Surat','Creative Minds','2024-09-15 03:57:41','2024-09-15 03:57:41'),(21,NULL,'First8','Last8','Baroda','Innovate Labs','2024-09-15 03:57:41','2024-09-15 03:57:41'),(22,NULL,'First9','Last9','Rajkot','Future Tech','2024-09-15 03:57:41','2024-09-15 03:57:41'),(23,NULL,'First10','Last10','Dholka','SDS Pvt Ltd','2024-09-15 03:57:41','2024-09-15 03:57:41'),(24,NULL,'First11','Last11','Ahmedabad','Tech Solutions','2024-09-15 03:57:41','2024-09-15 03:57:41'),(25,NULL,'First12','Last12','Surat','Creative Minds','2024-09-15 03:57:41','2024-09-15 03:57:41'),(26,NULL,'First13','Last13','Baroda','Innovate Labs','2024-09-15 03:57:41','2024-09-15 03:57:41'),(27,NULL,'First14','Last14','Rajkot','Future Tech','2024-09-15 03:57:41','2024-09-15 03:57:41'),(28,NULL,'First15','Last15','Dholka','SDS Pvt Ltd','2024-09-15 03:57:41','2024-09-15 03:57:41'),(29,NULL,'First16','Last16','Ahmedabad','Tech Solutions','2024-09-15 03:57:41','2024-09-15 03:57:41'),(30,NULL,'First17','Last17','Surat','Creative Minds','2024-09-15 03:57:41','2024-09-15 03:57:41'),(31,NULL,'First18','Last18','Baroda','Innovate Labs','2024-09-15 03:57:41','2024-09-15 03:57:41'),(32,NULL,'First19','Last19','Rajkot','Future Tech','2024-09-15 03:57:41','2024-09-15 03:57:41'),(33,NULL,'First20','Last20','Dholka','SDS Pvt Ltd','2024-09-15 03:57:41','2024-09-15 03:57:41'),(34,NULL,'First21','Last21','Ahmedabad','Tech Solutions','2024-09-15 03:57:41','2024-09-15 03:57:41'),(35,NULL,'First22','Last22','Surat','Creative Minds','2024-09-15 03:57:41','2024-09-15 03:57:41'),(36,NULL,'First23','Last23','Baroda','Innovate Labs','2024-09-15 03:57:41','2024-09-15 03:57:41'),(37,NULL,'First24','Last24','Rajkot','Future Tech','2024-09-15 03:57:41','2024-09-15 03:57:41'),(38,NULL,'First25','Last25','Dholka','SDS Pvt Ltd','2024-09-15 03:57:41','2024-09-15 03:57:41'),(39,NULL,'First26','Last26','Ahmedabad','Tech Solutions','2024-09-15 03:57:41','2024-09-15 03:57:41'),(40,NULL,'First27','Last27','Surat','Creative Minds','2024-09-15 03:57:41','2024-09-15 03:57:41'),(41,NULL,'First28','Last28','Baroda','Innovate Labs','2024-09-15 03:57:41','2024-09-15 03:57:41'),(42,NULL,'First29','Last29','Rajkot','Future Tech','2024-09-15 03:57:41','2024-09-15 03:57:41'),(43,NULL,'First30','Last30','Dholka','SDS Pvt Ltd','2024-09-15 03:57:41','2024-09-15 03:57:41'),(44,NULL,'First31','Last31','Ahmedabad','Tech Solutions','2024-09-15 03:57:41','2024-09-15 03:57:41'),(45,NULL,'First32','Last32','Surat','Creative Minds','2024-09-15 03:57:41','2024-09-15 03:57:41'),(46,NULL,'First33','Last33','Baroda','Innovate Labs','2024-09-15 03:57:41','2024-09-15 03:57:41'),(47,NULL,'First34','Last34','Rajkot','Future Tech','2024-09-15 03:57:41','2024-09-15 03:57:41'),(48,NULL,'First35','Last35','Dholka','SDS Pvt Ltd','2024-09-15 03:57:41','2024-09-15 03:57:41'),(49,NULL,'First36','Last36','Ahmedabad','Tech Solutions','2024-09-15 03:57:41','2024-09-15 03:57:41'),(50,NULL,'First37','Last37','Surat','Creative Minds','2024-09-15 03:57:41','2024-09-15 03:57:41'),(51,NULL,'First38','Last38','Baroda','Innovate Labs','2024-09-15 03:57:41','2024-09-15 03:57:41'),(52,NULL,'First39','Last39','Rajkot','Future Tech','2024-09-15 03:57:41','2024-09-15 03:57:41'),(53,NULL,'First40','Last40','Dholka','SDS Pvt Ltd','2024-09-15 03:57:41','2024-09-15 03:57:41'),(54,NULL,'First41','Last41','Ahmedabad','Tech Solutions','2024-09-15 03:57:41','2024-09-15 03:57:41'),(55,NULL,'First42','Last42','Surat','Creative Minds','2024-09-15 03:57:41','2024-09-15 03:57:41'),(56,NULL,'First43','Last43','Baroda','Innovate Labs','2024-09-15 03:57:41','2024-09-15 03:57:41'),(57,NULL,'First44','Last44','Rajkot','Future Tech','2024-09-15 03:57:41','2024-09-15 03:57:41'),(58,NULL,'First45','Last45','Dholka','SDS Pvt Ltd','2024-09-15 03:57:41','2024-09-15 03:57:41'),(59,NULL,'First46','Last46','Ahmedabad','Tech Solutions','2024-09-15 03:57:41','2024-09-15 03:57:41'),(60,NULL,'First47','Last47','Surat','Creative Minds','2024-09-15 03:57:41','2024-09-15 03:57:41'),(61,NULL,'First48','Last48','Baroda','Innovate Labs','2024-09-15 03:57:41','2024-09-15 03:57:41'),(62,NULL,'First49','Last49','Rajkot','Future Tech','2024-09-15 03:57:41','2024-09-15 03:57:41'),(63,NULL,'First50','Last50','Dholka','SDS Pvt Ltd','2024-09-15 03:57:41','2024-09-15 03:57:41');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-15  9:39:29
