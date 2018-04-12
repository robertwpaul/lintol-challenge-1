const fs = require('fs');

const csvAnalyser = require('./src/csv-analyser');
const Report = require('./src/report');

const filepathArg = () => {
  const argc = process.argv.length;
  const defaultFilename = 'data/unsafe-data-1.csv';
  return argc < 3 ? defaultFilename : process.argv[2];
};

const readFile = path => fs.readFileSync(path);

const file = readFile(filepathArg());

const generateReport = (itemCount, format, errors) => {
  const report = new Report(1, format, itemCount);
  errors.forEach(error => {
    report.addError(error.code, error.message, error.item.itemType, error.item.location);
  });
  report.print();
};

csvAnalyser.analyse(file).then(function(result) {
  generateReport(result.itemCount, result.format, result.errors);
});
