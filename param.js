const path = require('path')
const { pipeline } = require('stream')


let param = {
    db : "cbm",
    collection : "daily_purchase",
    path_output : path.join('/Users/hhv/Desktop/hhv', 'kkkkkkkk.csv')
}

//let d = ISODate("")
let pipelline = [{"$limit" : 1000}]

//pipeline = [`{$limit : 2}`]
// date = new Date("2022-07-21")
//console.log(date.toISOString())

module.exports = {param,pipelline}
