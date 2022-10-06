import { Request, Response } from "express";
import { StudentDatabase } from "../../database/StudentDatabase";

export const updateStudentClass = async (request: Request, response: Response) => {
  let errorCode = 400;
  try {
    const classId = request.body.classId;
    const id = request.body.id;

    if (!classId || !id) {
      throw new Error("Preencha os campos!");
    }

    const studentDatabase = new StudentDatabase();
    await studentDatabase.changeStudentClass(classId, id);

    response.status(200).send({ message: "O usuário trocou de turma com sucesso 😀!" });
  } catch (error: any) {
    response.status(errorCode).send({ message: error.message });
  }
};
