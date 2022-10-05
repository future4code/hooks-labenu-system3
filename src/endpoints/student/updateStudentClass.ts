import { Request, Response } from "express";
import { StudentDatabase } from "../../database/StudentDatabase";

export const updateStudentClass = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const classId = req.body.classId;
    const id = req.body.id;

    if (!classId || !id) {
      throw new Error("Preencha os campos!");
    }

    const studentDatabase = new StudentDatabase();
    await studentDatabase.changeStudentClass(classId, id);

    res.status(200).send({ message: "O usuário trocou de turma com sucesso!" });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
