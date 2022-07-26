const path = require('path')

let param = {
    db : "test",
    collection : "rf_da_archive",
    path_output : path.join('/Users/hhv/Desktop/hhv/2 - Suivi/suivi_akama_v3', 'test__22.csv')
}

let pipelline = [
    {// stage 1
        $limit : 2
    },
]

var scriptName = path.join('/D', 'test.csv');
console.log("script_name :: "+scriptName)

module.exports = {param,pipelline}
