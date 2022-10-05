import { Request, Response } from "express"
import { ClassDatabase } from "../../database/ClassDatabase"

export const getClasses = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const classDatabase = new ClassDatabase()
        const result = await classDatabase.getAllClasses()
        res.status(200).send({ class: result })
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}