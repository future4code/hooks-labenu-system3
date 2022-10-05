import BaseDatabase from "./BaseDatabase"
import { TABLE_CLASS } from "./tableNames"
import { Class } from "./../models/Class"

export class ClassDatabase extends BaseDatabase {
    public async getAllClasses() {
        const result = await BaseDatabase.connection(TABLE_CLASS).select()      
        return result
    }

    public async createClass(group: Class) {
        await BaseDatabase.connection(TABLE_CLASS).insert({
            id: group.getId(),
            name: group.getName(),
            module: group.getModule()
        })
    }

}

