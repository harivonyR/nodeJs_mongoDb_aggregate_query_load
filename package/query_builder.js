const path = require('path')
const { matchDatePipelline } = require('./match')
const { parse_to_bson } = require('./bson_parser')

async function buildQuery(date_begin, date_end, database, collection, pipelline, file_path, file_name) {
    
        const pippelineDate = matchDatePipelline(date_begin, date_end)
        const pipellineProject = parse_to_bson(pipelline)

        const pipe = [pippelineDate, pipellineProject]
        /*
        let param = {
            db: database,
            collection: collection,
            path_output: path.join(file_path, file_name)
        }*/

        return new Promise(resolve=>resolve(pipe))
}

module.exports = { buildQuery }