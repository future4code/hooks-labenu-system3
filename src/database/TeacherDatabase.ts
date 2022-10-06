import { Teacher } from "../models/Teacher";
import BaseDatabase from "./BaseDatabase";
import { TABLE_TEACHER } from "./tableNames";


export class TeacherDatabase extends BaseDatabase {
    public async createTeacher(teacher: Teacher) {
      await BaseDatabase.connection(TABLE_TEACHER).insert({
        id: teacher.getId(),
        name: teacher.getName(),
        email: teacher.getEmail(),
        data_nasc: teacher.getDataNasc(),
        class_id: teacher.getClass(),
      });
    }
  
    public async getAllTeacher() {
      const result = await BaseDatabase.connection(TABLE_TEACHER)
        .select()
      return result;
    }
  
    public async changeTeacherClass(classId: string, id: string) {
      await BaseDatabase.connection.raw(`
          UPDATE ${TABLE_TEACHER} 
          SET class_id = "${classId}" 
          WHERE id = "${id}"
      `);
    }
  }
  