const ObjectsToCsv = require('objects-to-csv');
const convertCsvToXlsx = require('@aternus/csv-to-xlsx');
const fs = require('fs')
const path = require('path');
/* Save data to csv */

async function saveToCsv(data,filename){
  const csv = new ObjectsToCsv(data);
  let destination = `./public/assets/${filename}.csv`
  //console.log(await csv);
  // Save to file:
  await csv.toDisk(destination);
  // Return the CSV file as string:
  //console.log(await csv.toString());
  console.log('[I] CSV saved ')
}

/* Convert the actual csv to xls*/
async function csvToXls(source, destination){
  //let source = path.join(__dirname, 'report.csv');
  //let destination = path.join(__dirname, 'converted_report.xlsx');
  //let source = path.join(`${filename}`)
  //let destination = path.join(`${filename}`)
  
  try {
    convertCsvToXlsx(source, destination);
    } catch (e) {
    console.error(e.toString());
  } 
}

async function freeBtachFile(filename){
  // Free xls 
  try{
    fs.unlinkSync(`${filename}`);
    console.log('Batch file cleaned')
  }catch(e){
    console.log('unlinck failed '+e)
}
}

module.exports = {saveToCsv,csvToXls,freeBtachFile};