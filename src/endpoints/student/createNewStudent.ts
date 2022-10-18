import { Request, Response } from "express";
import { StudentDatabase } from "../../database/StudentDatabase";
import { Student } from "../../models/Student";
import { v4 as uuidv4 } from "uuid";

const EhUmEmailValido = (email: string): boolean => {
  const regExEmail = /\S+@\S+\.\S+/;
  return regExEmail.test(email);
};

export const createNewStudent = async (request: Request, response: Response) => {
  let errorCode = 400;
  try {
    const name = request.body.name;
    const email = request.body.email;
    const dataNasc = request.body.dataNasc;
    const classId = request.body.classId;

    const vefDate = `${dataNasc.slice(6)}/${dataNasc.slice(3,5)}/${dataNasc.slice(0,2)}`

    if (!name || !email || !dataNasc || !classId) {
      throw new Error("Body inválido.");
    }
    
    if (!EhUmEmailValido(email)) {
      throw new Error("Você deve passar um email valido");
    }

    const student = new Student(uuidv4(), name, email, vefDate, classId);

    const studentDatabase = new StudentDatabase();
    studentDatabase.createStudent(student);

    response.status(200).send({ message: `Estudante ${name} criado com sucesso 😀 !!` });
  } catch (error: any) {
    response.status(errorCode).send({ message: error.message });
  }
};
