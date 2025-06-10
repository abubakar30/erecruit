-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: erecruit
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `applications`
--

DROP TABLE IF EXISTS `applications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `applications` (
  `id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) DEFAULT NULL,
  `address` text,
  `qualification` varchar(255) DEFAULT NULL,
  `result` varchar(255) DEFAULT NULL,
  `job_position` varchar(255) DEFAULT NULL,
  `years_experience` int DEFAULT NULL,
  `resume_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `applications`
--

LOCK TABLES `applications` WRITE;
/*!40000 ALTER TABLE `applications` DISABLE KEYS */;
INSERT INTO `applications` VALUES (1,'Elon Musk','Texas, United States','Bachelor Degree','4.00','Software Engineer',3,'uploads\\1749444681115.pdf'),(2,'Mark Zuckerberg','California, United States','Bachelor Degree','4.00','Software Engineer',3,'uploads\\1749452897892.pdf'),(3,'Mark Cuban','Guantonamo, Cuba','PhD','2.34','Researcher',NULL,'uploads\\1749455223329.pdf'),(4,'Terry Winter','New Jersey, United States','Diploma','3.00','Movie Director',NULL,'uploads\\1749455481431.pdf'),(5,'Radu Vlad','Romania','Undergraduate Degree','3.49','Ruler of Romania',NULL,'uploads\\1749456625947.pdf'),(6,'Mehmed Mustafa','Istanbul, Turkey','Master Degree','2.34','Ruler of Busra',NULL,'uploads\\1749456721711.pdf'),(7,'Karim Benzema','Madrid, Italy','High School','9A','Football Player',NULL,'uploads\\1749456854328.pdf'),(8,'Napoleon Bonaparte','Paris, France','Emperor Education Certificate','3.00','Emperor of France',6,'uploads\\1749457101635.pdf'),(9,'Gary Vaynerchuck','New York, United States','High School','F','Businessman. Owner of Vaynermedia',5,'uploads\\1749515798353.pdf'),(10,'Mark Twelve','Malibu, United States','Bachelor Degree','3.00','Iron Man',12,'uploads\\1749517674567.pdf'),(11,'Steve Rogers','Brooklyn, New York','United States Army','3.00','Captain America',90,'uploads\\1749518203250.pdf'),(12,'Wanda Maximoff','Woodbury, United States','High School','9A','Scarlett Witch',5,'uploads\\1749518441798.pdf');
/*!40000 ALTER TABLE `applications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'erecruit'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-10 10:38:02
