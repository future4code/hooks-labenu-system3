import { Request, Response } from "express";
import { Teacher } from "../../models/Teacher";
import { v4 as uuidv4 } from "uuid";
import { TeacherDatabase } from "../../database/TeacherDatabase";


const EhUmEmailValido = (email: string): boolean => {
    const regExEmail = /\S+@\S+\.\S+/;
    return regExEmail.test(email);
  };
  
export const createTeacher = async (request: Request, response: Response) => {
  let errorCode = 400;
  try {
    const name = request.body.name;
    const email = request.body.email;
    const dataNasc = request.body.dataNasc;
    const classId = request.body.classId;

    if (!name || !email || !dataNasc || !classId) {
        throw new Error("Body inválido.");
      }

    if (!EhUmEmailValido(email)) {
        throw new Error("Você deve passar um email valido");
      }

    const teacher = new Teacher(uuidv4(), name, email, dataNasc, classId);

    const teacherDatabase = new TeacherDatabase();
    teacherDatabase.createTeacher(teacher);

    response.status(200).send({ message: `Professor ${name} criado com sucesso 😀 !!` });
  } catch (error: any) {
    response.status(errorCode).send({
      message: error.message,
    });
  }
};
