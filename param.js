const path = require('path')
const { pipeline } = require('stream')

const EJSON = require('mongodb-extjson');

const date = Date("2022-07-21")

const pipellineText = '{"$match": {"day" : {"$gte" :"'+date+'"}}}';
const pipepellinParsed = EJSON.parse(pipellineText, { relaxed: false })

let param = {
    db : "cbm",
    collection : "daily_purchase",
    path_output : path.join('/Users/hhv/Desktop/hhv', 'kkkkkkkk.csv')
}

//let d = ISODate("")

let pipelline = [
    // Stage 1
    pipepellinParsed
]



module.exports = {param,pipelline}
