const { MongoClient } = require('mongodb');
const ObjectsToCsv = require('objects-to-csv');
const {saveToCsv,csvToXls,freeBtachFile} = require('../file/file.js')

require('dotenv').config()

const {pipeline_1} = require('../pipelline/pipelline')
const csv_path = "../output/pipelline_2.csv";
const xls_path = "../output/pipelline_2.xls";

async function parseQuerry(){
    //console.dir(req.body)
    let pipe = pipeline_1
    let db = "test"
    let coll = "gtu"
    
    return {db,coll,pipe}
}

async function sendQuerry(database,collection,pipe){
    const uri = process.env.CBM_URI
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        const db = client.db(database);
        const coll = db.collection(collection);

        let pipe_1 = [{
            $limit : 2
        }]

        const AggregationCursor = coll.aggregate(pipe);
        
        // Make the appropriate DB calls
        //await listDatabases(client);
        let res= []
        for await (const doc of AggregationCursor) {
            res.push(doc)
            console.log("doc :"+doc);
        }
        
        (async () => {
    
            //console.log(xls_path)
            const csv = new ObjectsToCsv(res,{ delimiter:';'});
            //csv.setDelimiter = ";"
           
            // Save to file:
            //await csv.toDisk(csv_path,{ delimiter:';'});
            //await csvToXls(csv_path,xls_path)
            // Return the CSV file as string:
            console.log(await csv.toString());
          })();
        
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}



module.exports = {
    sendQuerry,
    parseQuerry
}