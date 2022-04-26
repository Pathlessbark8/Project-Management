CREATE TABLE `dbms_project`.`student` (
  `sid` VARCHAR(15) NOT NULL,
  `courses` VARCHAR(60) NOT NULL,
  `fname` VARCHAR(15) NOT NULL,
  `lname` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`sid`));

INSERT INTO `project_management`.`student` (`sid`, `courses`, `fname`, `lname`) VALUES ('2019B3A70718H', 'CSF222', 'Shashwat', 'Anand');
INSERT INTO `project_management`.`student` (`sid`, `courses`, `fname`, `lname`) VALUES ('2019B3A70706H', 'CSF313', 'Parth', 'Kulkarni');
INSERT INTO `project_management`.`student` (`sid`, `courses`, `fname`, `lname`) VALUES ('2019B4A70880H', 'CSF121', 'Hiten', 'Vidhani');
INSERT INTO `project_management`.`student` (`sid`, `courses`, `fname`, `lname`) VALUES ('2019B4A70900H', 'CSF213', 'Dhruv', 'Saxena');

-- Changes in Database 

ALTER TABLE student RENAME COLUMN courses TO branch;
ALTER TABLE student ADD cgpa FLOAT(4,2);
ALTER TABLE student ADD pass VARCHAR(30);

--creating student table
CREATE TABLE `dbms_project`.`project` (
  `proj_id` VARCHAR(15) NOT NULL,
  `title` VARCHAR(90) NULL,
  `type` INT NULL,
  `description` VARCHAR(150) NULL,
  `pre_requisite` VARCHAR(40) NULL,
  PRIMARY KEY (`proj_id`));
INSERT INTO `dbms_project`.`project` (`proj_id`, `title`, `type`, `description`, `pre_requisite`) VALUES ('1', 'multimodal machine learning', '1', 'apply ML', 'should know c++');
INSERT INTO `dbms_project`.`project` (`proj_id`, `title`, `type`, `description`, `pre_requisite`) VALUES ('2', 'remote sensing applications', '1', 'apply qgis', 'c++');

ALTER TABLE dbms_project.project  
MODIFY type varchar(3) ;  


CREATE TABLE `dbms_project`.`professor` (
  `prof_id` VARCHAR(10) NOT NULL,
  `email` VARCHAR(45) NULL,
  `f_name` VARCHAR(45) NULL,
  `l_name` VARCHAR(45) NULL,
  `password` VARCHAR(33) NULL,
  PRIMARY KEY (`prof_id`));
INSERT INTO `dbms_project`.`professor` (`prof_id`, `email`, `f_name`, `l_name`, `password`) VALUES ('1', 'prof@hyderabad.com', 'prof', 'essor', '1234');
INSERT INTO `dbms_project`.`professor` (`prof_id`, `email`, `f_name`, `l_name`, `password`) VALUES ('2', 'teach@hyderabad.com', 'teach', 'er', '123');

ALTER TABLE `dbms_project`.`project` 
ADD COLUMN `prof_id` VARCHAR(15) NOT NULL AFTER `pre_requisite`,
ADD INDEX `prof_id_idx` (`prof_id` ASC) VISIBLE;
;

UPDATE `dbms_project`.`project` SET `prof_id` = '2' WHERE (`proj_id` = '1');
UPDATE `dbms_project`.`project` SET `prof_id` = '1' WHERE (`proj_id` = '2');

ALTER TABLE `dbms_project`.`project` 
ADD CONSTRAINT `prof_id`
  FOREIGN KEY (`prof_id`)
  REFERENCES `dbms_project`.`professor` (`prof_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;


UPDATE `dbms_project`.`project` SET `type` = 'LOP' WHERE (`proj_id` = '1');
UPDATE `dbms_project`.`project` SET `type` = 'LOP' WHERE (`proj_id` = '2');


--creating view to join project and prof table
USE `dbms_project`;
CREATE  OR REPLACE VIEW offers AS 
    SELECT 
        project.proj_id,
        project.title,
        project.type,
        project.description,
        project.pre_requisite,
        professor.prof_id,
        professor.f_name,
        professor.l_name
    FROM
        professor,project
	WHERE
		project.prof_id=professor.prof_id;