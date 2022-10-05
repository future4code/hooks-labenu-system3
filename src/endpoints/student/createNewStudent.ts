import { Request, Response } from "express";
import { StudentDatabase } from "../../database/StudentDatabase";
import { Student } from "../../models/Student";
import { v4 as uuidv4 } from "uuid";

export const createNewStudent = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const name = req.body.name;
    const email = req.body.email;
    const dataNasc = req.body.dataNasc;
    const classId = req.body.classId;

    if (!name || !email || !dataNasc || !classId) {
      throw new Error("Body inválido.");
    }

    const student = new Student(uuidv4(), name, email, dataNasc, classId);

    const studentDatabase = new StudentDatabase();
    studentDatabase.createStudent(student);

    res.status(200).send({ message: "Estudante criado!" });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
