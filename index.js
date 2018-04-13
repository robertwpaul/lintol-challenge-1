const fs = require('fs');

const csvAnalyser = require('./src/csv-analyser');
const { Report, generateReport } = require('./src/report');

const filepathArg = () => {
  const argc = process.argv.length;
  const defaultFilename = 'data/unsafe-data-1.csv';
  return argc < 3 ? defaultFilename : process.argv[2];
};

const readFile = path => fs.readFileSync(path);

const file = readFile(filepathArg());

csvAnalyser.analyse(file).then(function(result) {
  generateReport(result.itemCount, result.format, result.errors);

  var wstream = fs.createWriteStream('data/output.json');
  wstream.write(JSON.stringify(result,null,2));
  wstream.end(console.log('Output generated'));
});
