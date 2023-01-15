
const db = require('../connection')
const table_name = 'visitors'
class Visitors {
    async getAll() {
        return await db.select("*").table(table_name)
    }
    async report(columns) {
        let query = "";
                
        if (columns.visitor_full_name) {
            query += ` AND visitor_full_name = '${columns.visitor_full_name}'`
        }
            
        if (columns.visitor_phone) {
            query += ` AND visitor_phone = '${columns.visitor_phone}'`
        }
            
        if (columns.visitor_code) {
            query += ` AND visitor_code = '${columns.visitor_code}'`
        }
            
        return await db.raw(`SELECT * FROM ${table_name} WHERE 1=1 ${query}`).then(data => {
            return data[0]
        })
    }
    async getById(id) {
        return await db.select("*").table(table_name).where('visitor_id', id)
    }
    async getByColumn(column, value) {
        return await db.select("*").table(table_name).where(column, value)
    }
    async createList(data) {
        const insert = await db(table_name).insert(data)
        return insert
    }
    async createOne(data) {
        const insert = await db(table_name).insert(data)
        const insertedData = await db.select("*").table(table_name).where('visitor_id', insert[0])
            .then(data => {
                return data
            })
        return insertedData[0]
    }
    async updateByID(data, id) {
        const update = await db(table_name)
            .where('visitor_id', id)
            .update(data).then(async () => {
                return await db.select("*").table(table_name).where('visitor_id', id)
            })

            return update[0] ? update[0] : null
            
    }
    async deleteByID(id) {
        const deletedData = await db(table_name).where('visitor_id', id).del().then(data => {
            return data
        });
        return deletedData
    }
    async updateByColumn(data, column, value) {
        const updatedData = await db(table_name).where(column, value).update(data)
        .then(async (_) => {
            return await db.select("*").table(table_name).where(column, value)
        })
        return updatedData
    }
    async deleteList(list) {
        const deletedData = await db(table_name).whereIn('visitor_id', list).del().then(data => {
            return data
        });
        return deletedData
    }
}
module.exports = new Visitors()
        