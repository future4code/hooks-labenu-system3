import { Person } from "./Person";

export class Student extends Person {
    constructor(
        id : string,
        name : string,
        email : string,
        dataNasc : string,
        classId : string,
        private hobbies : string 
       ){
        super(
            id,
            name,
            email,
            dataNasc,
            classId
        )
        
        this.hobbies = hobbies

       } 

       public getHobbies() {
            return this.hobbies
       }
}