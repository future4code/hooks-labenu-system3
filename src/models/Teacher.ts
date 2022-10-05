import { Person } from "./Person";

export class Teacher extends Person {
  constructor(
    id: string,
    name: string,
    email: string,
    dataNasc: string,
    classId: string
  ) {
    super(id, name, email, dataNasc, classId);
  }
}
