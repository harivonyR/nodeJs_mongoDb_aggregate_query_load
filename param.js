const path = require('path')
const {matchDate} = require('./package/match')

const EJSON = require('mongodb-extjson');
const { start } = require('repl');

const date = new Date("2022-07-21")



const limit = 10
const limitText = `{"$limit":${limit}}`
const pipellineLimit =  EJSON.parse(limitText, { relaxed: false })
const pipellineDayMatch = {}

const pipellineText = `{"$match": {"day" : {"$gte" :"${date}"}}}`;
const pipepellinParsed = EJSON.parse(pipellineText, { relaxed: false })



let param = {
    db : "cbm",
    collection : "daily_purchase",
    path_output : path.join('/Users/hhv/Desktop/hhv', 'kkkkkkkk.csv')
}

//let d = ISODate("")

let pipelline = [
    // Stage 1
    pipellineLimit
    //pipepellinParsed
]



module.exports = {param,pipelline}
