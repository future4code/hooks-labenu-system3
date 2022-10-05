export class Person {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private dataNasc: string,
    private classId: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.dataNasc = dataNasc;
    this.classId = classId;
  }

  public getId() {
    return this.id;
  }

  public getName() {
    return this.name;
  }

  public getEmail() {
    return this.email;
  }

  public getDataNasc() {
    return this.dataNasc;
  }

  public getClass() {
    return this.classId;
  }
}
