const EJSON = require('mongodb-extjson');

function parse_to_bson (queryText,relaxed=false){
    try{
        let bson_val = EJSON.parse(queryText, { relaxed: false })  

        return bson_val
    }
    catch(e){
        throw new Error(e)
    }
}

module.exports={parse_to_bson}