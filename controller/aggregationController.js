
async function aggregationController(req,res){
    let {
        date_begin,
        date_end,
        database,
        collection,
        pipelline,
        file_path,
        file_name
    } = await req.body
    
    //console.log(database)
    res.send('agg is ok, data :'+database)
}

module.exports = {aggregationController}