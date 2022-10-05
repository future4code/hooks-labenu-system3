import { Request, Response } from "express";
import { StudentDatabase } from "../../database/StudentDatabase";

export const getStudentByName = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const name = req.params.name;

    if (name === ":name") {
      throw new Error("Insira o nome do estudante!");
    }

    const studentDatabase = new StudentDatabase();
    const result = await studentDatabase.getStudentByName(name);

    res.status(200).send({ message: result });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
