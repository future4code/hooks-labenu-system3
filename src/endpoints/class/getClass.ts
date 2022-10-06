import { Request, Response } from "express";
import { ClassDatabase } from "../../database/ClassDatabase";

export const getClasses = async (request: Request, response: Response) => {
  let errorCode = 400;
  try {
    const classDatabase = new ClassDatabase();
    const result = await classDatabase.getAllClasses();

    response.status(200).send({ class: result });
  } catch (error: any) {
    response.status(errorCode).send({ message: error.message });
  }
};
