
const { aggregate } = require('../package/aggregate')
const { buildQuery } = require('../package/query_builder')
const path = require('path')

async function aggregationController(req, res) {
    let {
        date_begin,
        date_end,
        database,
        collection,
        pipelline,
        file_path,
        file_name
    } = await req.body

    let param = {
        db: database,
        collection: collection,
        path_output: path.join(file_path, file_name)
    }

    const pipe = await buildQuery(
        date_begin,
        date_end,
        database,
        collection,
        pipelline,
        file_path,
        file_name)
        .then(async (pipe) => {
            console.log('[ok] query build')
            await aggregate(param, pipe)
                .then(() => {
                    console.log('[ok] agg done !')
                    res.send('[ok] agg done !')
                })
                .catch((e) => {
                    res.send("error : " + e)
                })
        })
        .catch((e) => { 
            console.log('[NOK] query build') 
            res.send('[NOK] error on query build !'+e)
        })



    //console.log(database)
    //res.send('date :'+date_begin)
}

module.exports = { aggregationController }