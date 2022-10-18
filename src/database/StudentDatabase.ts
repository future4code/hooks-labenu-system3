import { Student } from "../models/Student";
import BaseDatabase from "./BaseDatabase";
import { TABLE_STUDENTS } from "./tableNames";

export class StudentDatabase extends BaseDatabase {
  public async createStudent(student: Student) {
    await BaseDatabase.connection(TABLE_STUDENTS).insert({
      id: student.getId(),
      name: student.getName(),
      email: student.getEmail(),
      data_nasc: student.getDataNasc(),
      class_id: student.getClass(),
    });
  }

  public async getStudentByName(name: string) {
    const result = await BaseDatabase.connection(TABLE_STUDENTS)
      .select()
      .where({ name });
    return result;
  }

  public async changeStudentClass(classId: string, id: string) {
    await BaseDatabase.connection.raw(`
        UPDATE ${TABLE_STUDENTS} 
        SET class_id = "${classId}" 
        WHERE id = "${id}"
    `);
  }
}
