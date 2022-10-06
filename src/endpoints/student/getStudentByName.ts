import { Request, Response } from "express";
import { StudentDatabase } from "../../database/StudentDatabase";

export const getStudentByName = async (request: Request, response: Response) => {
  let errorCode = 400;
  try {
    const name = request.params.name;

    if (name === ":name") {
      throw new Error("Insira o nome do estudante!");
    }

    const studentDatabase = new StudentDatabase();
    const result = await studentDatabase.getStudentByName(name);

    response.status(200).send({ message: result });
  } catch (error: any) {
    response.status(errorCode).send({ message: error.message });
  }
};
