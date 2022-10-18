import BaseDatabase from "./BaseDatabase"
import { TABLE_CLASS } from "./tableNames"
import { Class } from "./../models/Class"

export class ClassDatabase extends BaseDatabase {
    public async getAllClasses() {
        const result = await BaseDatabase.connection(TABLE_CLASS).select().whereNot('module', '0')
        return result
    }

    public async createClass(group: Class) {
        await BaseDatabase.connection(TABLE_CLASS).insert({
            id: group.getId(),
            name: group.getName(),
            module: group.getModule()
        })
    }
    public async changeModules(module: string, id: string) {
        await BaseDatabase.connection.raw(`
            UPDATE ${TABLE_CLASS} 
            SET module = "${module}" 
            WHERE id = "${id}"
        `);
    }

}

