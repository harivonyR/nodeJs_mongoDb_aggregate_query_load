const path = require('path')
const { matchDatePipelline } = require('./match')
const { parse_to_bson } = require('./bson_parser')

async function prepare(pipelline_raw_text){
    let pipelline_prepared = []
    pipelline_raw_text = pipelline_raw_text.split('#')

    console.log("split length :"+pipelline_raw_text.length)

    pipelline_raw_text.forEach(element => {
        pipelline_prepared.push(parse_to_bson(element))
    });
    
    return pipelline_prepared
}

async function buildQuery(date_begin, date_end, database, collection, pipelline, file_path, file_name){
        const pippelineDate = matchDatePipelline(date_begin, date_end)
        const pipelline_prepared = await prepare(pipelline)
        

        const pipe = [pippelineDate, ...pipelline_prepared]
        
        /*
        let param = {
            db: database,
            collection: collection,
            path_output: path.join(file_path, file_name)
        }*/

        return new Promise(resolve=>resolve(pipe))
}

module.exports = { buildQuery }