const ObjectsToCsv = require('objects-to-csv');

let extractio_bd = {
    {
        "_id": {
            "day": "18/07/2022",
            "pur_xxx": "Plus",
            "pur_xxx": "Mixte"
        }
    },
    {
        "_id": {
            "day": "18/07/2022",
            "pur_xxx": "Plus",
            "pur_xxx": "Mixte"
        }
    },
    {
        "_id": {
            "day": "18/07/2022",
            "pur_xxx": "Plus",
            "pur_xxx": "Mixte"
        }
    },
    {
        "_id": {
            "day": "18/07/2022",
            "pur_xxx": "Plus",
            "pur_xxx": "Mixte"
        }
    }
}
async function test(){
    const extractio_bd_OBJ = new ObjectsToCsv(extractio_bd)

    await extractio_bd_OBJ.toDisk('test.csv');
    console.log(extractio_bd_OBJ)
}
test()

