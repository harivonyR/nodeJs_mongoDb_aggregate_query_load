const { MongoClient } = require('mongodb');
const ObjectsToCsv = require('objects-to-csv');
const {param,pipelline} = require('./param')

require('dotenv').config();

const database = param.db
const collection = param.collection
const path_output = param.path_output
//const pipelline = pipelline

async function main() {
    const uri = process.env.DB_URI
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        const db = client.db(database);
        const coll = db.collection(collection);

        const AggregationCursor = coll.aggregate(pipelline,{cursor: {batchSize: 50},allowDiskUse:true});
        
        // Make the appropriate DB calls
        

        async function  fetch_data (){
            let res = []
            for await (const doc of AggregationCursor) {
                res.push(doc)
                console.log(doc);
            }
            return res
        }
        let data = await fetch_data()
        .then((data)=>{
            (async () => {
                //console.log(xls_path)
                
                const csv = new ObjectsToCsv(data);
               
                // Save to file:
                await csv.toDisk(path_output);
                await client.close();
            })();
        })

    } catch (e) {
        console.error(e);
    } finally {
        
    }
}

main()



/*
    async function listDatabases(client) {
        databasesList = await client.db().admin().listDatabases();

        console.log("Databases:");
        databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    };
*/