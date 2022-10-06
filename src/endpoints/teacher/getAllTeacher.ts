import { Request, Response } from "express";
import { TeacherDatabase } from "../../database/TeacherDatabase";

export const getAllTeacher = async (request: Request, response: Response) => {
  let errorCode = 400;
  try {
    const teacherDatabase = new TeacherDatabase();
    const result = await teacherDatabase.getAllTeacher();

    response.status(200).send({ message: result });
  } catch (error: any) {
    response.status(errorCode).send({
      message: error.message,
    });
  }
};
