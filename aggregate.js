const { MongoClient } = require('mongodb');
const ObjectsToCsv = require('objects-to-csv');
const {saveToCsv,csvToXls,freeBtachFile} = require('./file/file.js')
const { response } = require('express');

const {pipeline_1} = require('./pipelline/pipelline')

const csv_path = "./output/pipelline_2.csv";
const xls_path = "./output/pipelline_2.xls";

async function main() {
    const uri = "mongodb://localhost:27017"
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        const db = client.db("CBM");
        const coll = db.collection("akama");

        await db.listCollections().toArray()
            .then((cols)=>{console.log("cols"+cols)})
            .catch(error=>{console.log("error::"+error)})

        const AggregationCursor = coll.aggregate(pipeline_1);
        
        // Make the appropriate DB calls
        //await listDatabases(client);
        let res= []
        for await (const doc of AggregationCursor) {
            res.push(doc)
            console.log(doc);
        }
        
        (async () => {
    
            //console.log(xls_path)
            const csv = new ObjectsToCsv(res,{ delimiter:';'});
            //csv.setDelimiter = ";"
           
            // Save to file:
            await csv.toDisk(csv_path,{ delimiter:';'});
            await csvToXls(csv_path,xls_path)
            // Return the CSV file as string:
            console.log(await csv.toString());
          })();
        
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

module.exports= {main}



/*
    async function listDatabases(client) {
        databasesList = await client.db().admin().listDatabases();

        console.log("Databases:");
        databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    };
*/