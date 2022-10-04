import { Person } from "./Person";

export class Teacher extends Person {
    constructor(
        id : string,
        name : string,
        email : string,
        dataNasc : string,
        classId : string,
        private specialty : string 
       ){
        super(
            id,
            name,
            email,
            dataNasc,
            classId
        )
        
        this.specialty = specialty

       } 

       public getSpecialty() {
            return this.specialty
       }
}