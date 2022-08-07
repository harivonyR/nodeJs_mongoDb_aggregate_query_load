const path = require('path')

const EJSON = require('mongodb-extjson');
const pipellineText = '{ "$match": {"pur_name":"bundle" } }';
const pipepellinParsed = EJSON.parse(pipellineText, { relaxed: true })

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

date = Date("2022-07-21")
//console.log(date.toISOString())

module.exports = {param,pipelline}
