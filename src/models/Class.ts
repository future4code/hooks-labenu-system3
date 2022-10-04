export class Class {
    constructor(
     private id : string,
     private name : string,
     private module : string
    ) {
         this.id = id
         this.name = name
         this.module = module
    }
 
    public getId() {
        return this.id
    }
     
    public getName() {
        return this.name
    }

    public getModule() {
        return this.module
    }
 }   