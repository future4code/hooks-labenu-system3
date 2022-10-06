import { Request, Response } from "express";
import { ClassDatabase } from "../../database/ClassDatabase";

export const changeModule = async (request: Request, response: Response) => {
    let errorCode = 400;
    try {
        
        const id = request.body.id
        const newModule = request.body.newModule

        if (Number(newModule) <= 7 && Number(newModule) > 0) {
            const classDatabase = new ClassDatabase();
            await classDatabase.changeModules(newModule , id);
        } else {
            throw new Error ("Por favor, informe um número de módulo de 1 a 7")
        }

       

        response.status(200).send({ message: "Módulo alterado com sucesso 😀!" });
    } catch (error: any) {
        response.status(errorCode).send({ message: error.message });
    }
}