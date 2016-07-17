SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';


-- -----------------------------------------------------
-- Table `expert_system_db`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `expert_system_db`.`user` ;

CREATE TABLE IF NOT EXISTS `expert_system_db`.`user` (
  `user_name` VARCHAR(50) NOT NULL,
  `password` VARCHAR(45) NULL,
  `user_type` VARCHAR(45) NULL,
  PRIMARY KEY (`user_name`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `expert_system_db`.`expert`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `expert_system_db`.`expert` ;

CREATE TABLE IF NOT EXISTS `expert_system_db`.`expert` (
  `user_name` VARCHAR(50) NOT NULL,
  `expert_certificate_id` VARCHAR(45) NULL,
  `certificate_valid_time` DATE NULL,
  `name` VARCHAR(45) NULL,
  `sex` VARCHAR(45) NULL,
  `birthday` DATE NULL,
  `party` VARCHAR(45) NULL,
  `max_education` VARCHAR(45) NULL,
  `certificate_type` VARCHAR(45) NULL,
  `certificate_id` VARCHAR(45) NULL,
  `academic_degree` VARCHAR(45) NULL,
  `address` VARCHAR(45) NULL,
  `postcode` INT NULL,
  `university` VARCHAR(45) NULL,
  `telephone` INT NULL,
  `email` VARCHAR(45) NULL,
  `homephone` VARCHAR(45) NULL,
  `title` VARCHAR(45) NULL,
  `post` VARCHAR(45) NULL,
  `is_retire` VARCHAR(5) NULL,
  `workplace` VARCHAR(45) NULL,
  `employment_duration` VARCHAR(45) NULL,
  `is_part_time` VARCHAR(5) NULL,
  `picture_path` VARCHAR(60) NULL,
  `status` VARCHAR(45) NULL,
  `diploma_id` VARCHAR(45) NULL,
  `business_skill` TEXT NULL,
  `achievement` TEXT NULL,
  `others` TEXT NULL,
  PRIMARY KEY (`user_name`),
  INDEX `fk_expert_user_idx` (`user_name` ASC),
  CONSTRAINT `fk_expert_user`
    FOREIGN KEY (`user_name`)
    REFERENCES `expert_system_db`.`user` (`user_name`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `expert_system_db`.`administrator`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `expert_system_db`.`administrator` ;

CREATE TABLE IF NOT EXISTS `expert_system_db`.`administrator` (
  `user_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`user_name`),
  INDEX `fk_table1_user1_idx` (`user_name` ASC),
  CONSTRAINT `fk_table1_user1`
    FOREIGN KEY (`user_name`)
    REFERENCES `expert_system_db`.`user` (`user_name`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `expert_system_db`.`qualification`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `expert_system_db`.`qualification` ;

CREATE TABLE IF NOT EXISTS `expert_system_db`.`qualification` (
  `qualification_name` VARCHAR(45) NOT NULL,
  `qualification_id` VARCHAR(45) NOT NULL,
  `user_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`qualification_name`, `qualification_id`, `user_name`),
  INDEX `fk_qualification_expert1_idx` (`user_name` ASC),
  CONSTRAINT `fk_qualification_expert1`
    FOREIGN KEY (`user_name`)
    REFERENCES `expert_system_db`.`expert` (`user_name`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `expert_system_db`.`evalution_field`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `expert_system_db`.`evalution_field` ;

CREATE TABLE IF NOT EXISTS `expert_system_db`.`evalution_field` (
  `idevalution_field_name` VARCHAR(45) NOT NULL,
  `user_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`idevalution_field_name`, `user_name`),
  INDEX `fk_evalution_field_expert1_idx` (`user_name` ASC),
  CONSTRAINT `fk_evalution_field_expert1`
    FOREIGN KEY (`user_name`)
    REFERENCES `expert_system_db`.`expert` (`user_name`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `expert_system_db`.`evaluation_experience`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `expert_system_db`.`evaluation_experience` ;

CREATE TABLE IF NOT EXISTS `expert_system_db`.`evaluation_experience` (
  `experience_id` INT NOT NULL AUTO_INCREMENT,
  `experience_time` DATE NULL,
  `mission_name` VARCHAR(45) NULL,
  `mission_description` TEXT NULL,
  `mission_type` VARCHAR(45) NULL,
  `user_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`experience_id`, `user_name`),
  INDEX `fk_evaluation_experience_expert1_idx` (`user_name` ASC),
  CONSTRAINT `fk_evaluation_experience_expert1`
    FOREIGN KEY (`user_name`)
    REFERENCES `expert_system_db`.`expert` (`user_name`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `expert_system_db`.`work_experience`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `expert_system_db`.`work_experience` ;

CREATE TABLE IF NOT EXISTS `expert_system_db`.`work_experience` (
  `work_experience_id` INT NOT NULL AUTO_INCREMENT,
  `start_time` DATE NULL,
  `end_time` DATE NULL,
  `workplace` VARCHAR(45) NULL,
  `post` VARCHAR(45) NULL,
  `reference` VARCHAR(45) NULL,
  `user_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`work_experience_id`, `user_name`),
  INDEX `fk_work_experience_expert1_idx` (`user_name` ASC),
  CONSTRAINT `fk_work_experience_expert1`
    FOREIGN KEY (`user_name`)
    REFERENCES `expert_system_db`.`expert` (`user_name`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `expert_system_db`.`avoidance_unit`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `expert_system_db`.`avoidance_unit` ;

CREATE TABLE IF NOT EXISTS `expert_system_db`.`avoidance_unit` (
  `unit_name` VARCHAR(45) NOT NULL,
  `is_work_place` TINYINT(1) NULL,
  `user_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`unit_name`, `user_name`),
  INDEX `fk_avoidance_unit_expert1_idx` (`user_name` ASC),
  CONSTRAINT `fk_avoidance_unit_expert1`
    FOREIGN KEY (`user_name`)
    REFERENCES `expert_system_db`.`expert` (`user_name`)
    ON DELETE  CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `expert_system_db`.`reason`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `expert_system_db`.`reason` ;

CREATE TABLE IF NOT EXISTS `expert_system_db`.`reason` (
  `fail_reason` TEXT NULL,
  `user_name` VARCHAR(50) NOT NULL,
  `reason_type` VARCHAR(45) NULL,
  PRIMARY KEY (`user_name`),
  CONSTRAINT `fk_reason_expert1`
    FOREIGN KEY (`user_name`)
    REFERENCES `expert_system_db`.`expert` (`user_name`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
