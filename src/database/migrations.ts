import group from "./group.json"
import students from "./students.json"
import specialty from "./specialty.json"
import teacher from "./teacher.json"
import hobby from "./hobby.json"	
import BaseDatabase from "./BaseDatabase";
import { TABLE_STUDENTS, TABLE_STUDENT_HOBBY, TABLE_HOBBY, TABLE_CLASS, 
    TABLE_TEACHER, TABLE_TEACHER_SPECIALTY, TABLE_SPECIALTY } from "./tableNames";

export class Migrations extends BaseDatabase {
  public async createTables() {
    await BaseDatabase.connection.raw(`

        CREATE TABLE IF NOT EXISTS ${TABLE_CLASS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            module VARCHAR(255) DEFAULT 0
        );

        CREATE TABLE IF NOT EXISTS ${TABLE_HOBBY}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${TABLE_STUDENTS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            data_nasc DATE NOT NULL,
            class_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (class_id) REFERENCES ${TABLE_CLASS}(id)
        );

        CREATE TABLE IF NOT EXISTS ${TABLE_TEACHER}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            data_nasc DATE NOT NULL,
            class_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (class_id) REFERENCES ${TABLE_CLASS}(id)
        );
        
        CREATE TABLE IF NOT EXISTS ${TABLE_STUDENT_HOBBY}(
            id VARCHAR(255) PRIMARY KEY,
            student_id VARCHAR(255) NOT NULL,
            hobby_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (student_id) REFERENCES ${TABLE_STUDENTS}(id),
            FOREIGN KEY (hobby_id) REFERENCES ${TABLE_HOBBY}(id)
        );

        CREATE TABLE IF NOT EXISTS ${TABLE_SPECIALTY}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL UNIQUE
        );
        
        CREATE TABLE IF NOT EXISTS ${TABLE_TEACHER_SPECIALTY}(
            id VARCHAR(255) PRIMARY KEY,
            teacher_id VARCHAR(255) NOT NULL,
            specialty_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (teacher_id) REFERENCES ${TABLE_TEACHER}(id),
            FOREIGN KEY (specialty_id) REFERENCES ${TABLE_SPECIALTY}(id)
        );   
`)

      .then(() => {
        console.log(`Tables created successfully!`);
        this.insertData();
      })
      .catch((error: any) => printError(error));
  }

  public async insertData() {
    try {
      
        await BaseDatabase.connection(TABLE_CLASS)
        .insert(group)
        .then(() => console.log(`${TABLE_CLASS} populated!`))
        .catch((error: any) => printError(error)); 
      
        await BaseDatabase.connection(TABLE_HOBBY)
          .insert(hobby)
          .then(() => console.log(`${TABLE_HOBBY} populated!`))
          .catch((error: any) => printError(error));

        await BaseDatabase.connection(TABLE_STUDENTS)
        .insert(students)
        .then(() => console.log(`${TABLE_STUDENTS} populated!`))
        .catch((error: any) => printError(error));

        await BaseDatabase.connection(TABLE_SPECIALTY)
        .insert(specialty)
        .then(() => console.log(`${TABLE_SPECIALTY} populated!`))
        .catch((error: any) => printError(error));
      
        await BaseDatabase.connection(TABLE_TEACHER)
        .insert(teacher)
        .then(() => console.log(`${TABLE_TEACHER} populated!`))
        .catch((error: any) => printError(error));
        
    } catch (error: any) {
      console.log(error.sqlMessage || error.message);
    } finally {
      console.log("Ending connection!");

      return BaseDatabase.connection.destroy();
    }
  }
}

const printError = (error: any) => {
  console.log(error.sqlMessage || error.message);
};

const setMigrations = new Migrations()

setMigrations.createTables();

