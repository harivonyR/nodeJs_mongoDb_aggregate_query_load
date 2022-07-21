const {sendQuerry,parseQuerry} = require('./controller/form_controller')
const {pipeline_1} = require('./pipelline/pipelline')

async function test(){
    const {db,coll,pipe} = await parseQuerry()
    console.log(db,coll,pipe)

    await sendQuerry(db,coll,pipe)
    .then(()=>console.log('querry sent'))
}test()

