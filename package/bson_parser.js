const EJSON = require('mongodb-extjson');

function parse_to_bson (queryText,relaxed=false){
    let bson_val = EJSON.parse(queryText, { relaxed: false })  

    return bson_val
}

module.exports={parse_to_bson}