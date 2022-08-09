const path = require('path')
const {matchDatePipelline} = require('./package/match')
const {parse_to_bson} = require('./package/bson_parser')

const limit = 10
const pipellineLimit =  parse_to_bson(`{"$limit":${limit}}`)
const pippelineDate = matchDatePipelline("2022-07-21","2022-07-21")
const pipellineProject = parse_to_bson('{"$project": {"_id":0,"day":{ "$dateToString" : { "format" : "%d/%m/%Y" , "date" : "$day"}},"party_id" : 1}}')

let param = {
    db : "cbm",
    collection : "daily_purchase",
    path_output : path.join('/Users/hhv/Desktop/hhv', 'kkkkkkkk.csv')
}

//let d = ISODate("")

let pipelline = [
    // Stage 1
    pippelineDate,
    pipellineLimit,
    pipellineProject
]

//const date = new Date("2022-07-21") // type supported by aggregate node.js/mongodb

module.exports = {param,pipelline}
