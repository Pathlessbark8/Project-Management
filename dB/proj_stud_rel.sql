CREATE TABLE `dbms_project`.`proj_stud_reln` (
  `sid` VARCHAR(15) NOT NULL,
  `prof_id` VARCHAR(10) NULL,
  `proj_id` VARCHAR(15) NULL);

  ALTER TABLE `dbms_project`.`proj_stud_reln` 
ADD INDEX `proj_id_idx` (`proj_id` ASC) VISIBLE,
ADD INDEX `sid_idx` (`sid` ASC) VISIBLE;
;
ALTER TABLE `dbms_project`.`proj_stud_reln` 
ADD CONSTRAINT `proj_id`
  FOREIGN KEY (`proj_id`)
  REFERENCES `dbms_project`.`project` (`proj_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `sid`
  FOREIGN KEY (`sid`)
  REFERENCES `dbms_project`.`student` (`sid`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
