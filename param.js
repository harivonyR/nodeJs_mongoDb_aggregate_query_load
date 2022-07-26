let param = {
    db : "test",
    collection : "rf_da_archive",
    path_output : "./output/data.csv"
}

let pipelline = [
    {// stage 1
        $limit : 2
    },
]

module.exports = {param,pipelline}
