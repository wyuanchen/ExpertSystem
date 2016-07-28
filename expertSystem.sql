-- MySQL dump 10.13  Distrib 5.5.49, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: expert_system_db
-- ------------------------------------------------------
-- Server version	5.5.49-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `avoidance_unit`
--

DROP TABLE IF EXISTS `avoidance_unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `avoidance_unit` (
  `unit_name` varchar(45) NOT NULL,
  `is_work_place` varchar(6) DEFAULT NULL,
  `user_name` varchar(50) NOT NULL,
  PRIMARY KEY (`unit_name`,`user_name`),
  KEY `fk_avoidance_unit_expert1_idx` (`user_name`),
  CONSTRAINT `fk_avoidance_unit_expert1` FOREIGN KEY (`user_name`) REFERENCES `expert` (`user_name`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avoidance_unit`
--

LOCK TABLES `avoidance_unit` WRITE;
/*!40000 ALTER TABLE `avoidance_unit` DISABLE KEYS */;
/*!40000 ALTER TABLE `avoidance_unit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evaluation_experience`
--

DROP TABLE IF EXISTS `evaluation_experience`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `evaluation_experience` (
  `experience_id` int(11) NOT NULL AUTO_INCREMENT,
  `experience_time` date DEFAULT NULL,
  `mission_name` varchar(45) DEFAULT NULL,
  `mission_description` text,
  `mission_type` varchar(45) DEFAULT NULL,
  `user_name` varchar(50) NOT NULL,
  PRIMARY KEY (`experience_id`,`user_name`),
  KEY `fk_evaluation_experience_expert1_idx` (`user_name`),
  CONSTRAINT `fk_evaluation_experience_expert1` FOREIGN KEY (`user_name`) REFERENCES `expert` (`user_name`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evaluation_experience`
--

LOCK TABLES `evaluation_experience` WRITE;
/*!40000 ALTER TABLE `evaluation_experience` DISABLE KEYS */;
INSERT INTO `evaluation_experience` VALUES (16,'1992-11-21','任务一','任务描述一','评估','yuan');
/*!40000 ALTER TABLE `evaluation_experience` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evalution_field`
--

DROP TABLE IF EXISTS `evalution_field`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `evalution_field` (
  `idevalution_field_name` varchar(45) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  PRIMARY KEY (`idevalution_field_name`,`user_name`),
  KEY `fk_evalution_field_expert1_idx` (`user_name`),
  CONSTRAINT `fk_evalution_field_expert1` FOREIGN KEY (`user_name`) REFERENCES `expert` (`user_name`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evalution_field`
--

LOCK TABLES `evalution_field` WRITE;
/*!40000 ALTER TABLE `evalution_field` DISABLE KEYS */;
INSERT INTO `evalution_field` VALUES ('1教育','yuan'),('5高校','yuan');
/*!40000 ALTER TABLE `evalution_field` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `expert`
--

DROP TABLE IF EXISTS `expert`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `expert` (
  `user_name` varchar(50) NOT NULL,
  `expert_certificate_id` varchar(45) DEFAULT NULL,
  `certificate_valid_time` date DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `sex` varchar(45) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `party` varchar(45) DEFAULT NULL,
  `max_education` varchar(45) DEFAULT NULL,
  `certificate_type` varchar(45) DEFAULT NULL,
  `certificate_id` varchar(45) DEFAULT NULL,
  `academic_degree` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `postcode` int(11) DEFAULT NULL,
  `university` varchar(45) DEFAULT NULL,
  `telephone` varchar(15) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `homephone` varchar(45) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `post` varchar(45) DEFAULT NULL,
  `is_retire` varchar(5) DEFAULT NULL,
  `workplace` varchar(45) DEFAULT NULL,
  `employment_duration` varchar(45) DEFAULT NULL,
  `is_part_time` varchar(5) DEFAULT NULL,
  `picture_path` varchar(200) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `diploma_id` varchar(45) DEFAULT NULL,
  `business_skill` text,
  `achievement` text,
  `others` text,
  `organization` varchar(100) DEFAULT NULL,
  `expert_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`user_name`),
  UNIQUE KEY `expert_expert_id_uindex` (`expert_id`),
  KEY `fk_expert_user_idx` (`user_name`),
  CONSTRAINT `fk_expert_user` FOREIGN KEY (`user_name`) REFERENCES `user` (`user_name`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `expert`
--

LOCK TABLES `expert` WRITE;
/*!40000 ALTER TABLE `expert` DISABLE KEYS */;
INSERT INTO `expert` VALUES ('yuan','22222','2014-11-20','陈文源','男','1111-11-21','共产','博士','居民身份证','44528119950106689X','博士','地址8',510000,'华南理工大学','18826077178','821491850@qq.com','2242445','职称1','职务1','是','工作单位1','5年以上','否','http://localhost:63342/ExpertSystem/src/main/webapp/img/fb6930c0-f6a5-4da5-beaa-6af59ec96e86','可用','123123123','我的业务专长','我的工作业绩sfsdfdsfk','我的其他说明','复仇者联盟',1);
/*!40000 ALTER TABLE `expert` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qualification`
--

DROP TABLE IF EXISTS `qualification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `qualification` (
  `qualification_name` varchar(45) NOT NULL,
  `qualification_id` varchar(45) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  PRIMARY KEY (`qualification_name`,`qualification_id`,`user_name`),
  KEY `fk_qualification_expert1_idx` (`user_name`),
  CONSTRAINT `fk_qualification_expert1` FOREIGN KEY (`user_name`) REFERENCES `expert` (`user_name`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qualification`
--

LOCK TABLES `qualification` WRITE;
/*!40000 ALTER TABLE `qualification` DISABLE KEYS */;
INSERT INTO `qualification` VALUES ('证书1','1111','yuan'),('证书2','2222','yuan');
/*!40000 ALTER TABLE `qualification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reason`
--

DROP TABLE IF EXISTS `reason`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reason` (
  `fail_reason` text,
  `reason_type` varchar(45) DEFAULT NULL,
  `expert_id` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`expert_id`),
  CONSTRAINT `reason_expert_expert_id_fk` FOREIGN KEY (`expert_id`) REFERENCES `expert` (`expert_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reason`
--

LOCK TABLES `reason` WRITE;
/*!40000 ALTER TABLE `reason` DISABLE KEYS */;
/*!40000 ALTER TABLE `reason` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `user_name` varchar(50) NOT NULL,
  `password` varchar(45) DEFAULT NULL,
  `user_type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`user_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('admin','e10adc3949ba59abbe56e057f20f883e','管理员'),('yuan','e10adc3949ba59abbe56e057f20f883e','专家');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `work_experience`
--

DROP TABLE IF EXISTS `work_experience`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `work_experience` (
  `work_experience_id` int(11) NOT NULL AUTO_INCREMENT,
  `start_time` date DEFAULT NULL,
  `end_time` date DEFAULT NULL,
  `workplace` varchar(45) DEFAULT NULL,
  `post` varchar(45) DEFAULT NULL,
  `reference` varchar(45) DEFAULT NULL,
  `user_name` varchar(50) NOT NULL,
  PRIMARY KEY (`work_experience_id`,`user_name`),
  KEY `fk_work_experience_expert1_idx` (`user_name`),
  CONSTRAINT `fk_work_experience_expert1` FOREIGN KEY (`user_name`) REFERENCES `expert` (`user_name`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `work_experience`
--

LOCK TABLES `work_experience` WRITE;
/*!40000 ALTER TABLE `work_experience` DISABLE KEYS */;
/*!40000 ALTER TABLE `work_experience` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-07-28 20:48:48
