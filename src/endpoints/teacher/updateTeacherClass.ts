import { Request, Response } from "express";
import { TeacherDatabase } from "../../database/TeacherDatabase";

export const updateTeacherClass = async (request: Request, response: Response) => {
let errorCode = 400;
try {
    const classId = request.body.classId;
    const id = request.body.id;

    
    if (!classId || !id) {
        throw new Error("Preencha os campos!");
      }

      const teacherDatabase = new TeacherDatabase();
      await teacherDatabase.changeTeacherClass(classId, id);
    
      response.status(200).send({
        message: "Professor trocou de turma com sucesso 😀!"
      })
} catch (error: any) {
    response.status(errorCode).send ({
        message: error.message
    })
}
}

