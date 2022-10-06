import { Request, Response } from "express";
import { ClassDatabase } from "../../database/ClassDatabase";
import { v4 as uuidv4 } from "uuid";
import { Class } from "../../models/Class";

export const createClasses = async (request: Request, response: Response) => {
  let errorCode = 400;
  try {
    const name = request.body.name;
    const module = request.body.module;

    if (!name) {
      throw new Error("Por favor, informe o nome.");
    }

    const group = new Class(uuidv4(), name, module ? module : "0");

    const classDatabase = new ClassDatabase();

    classDatabase.createClass(group);
    response.status(200).send({ message: `Turma ${name} criada com sucesso.` });
  } catch (error: any) {
    response.status(errorCode).send({ message: error.messagge });
  }
};
