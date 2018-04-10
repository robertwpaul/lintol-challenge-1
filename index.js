const csv = require('fast-csv');
const fs = require('fs');

// const nameProcessor = require('./processors/name');
const ipProcessor = require('./processors/ip');
const Report = require('./report');

const fileContent = fs.readFileSync('data/unsafe-data-1.csv').toString();

const report = new Report(1, 'csv');

let row = 0;

csv.fromString(fileContent)
  .on('data', function(data) {
    const currentRow = row++;
    data.forEach(function(v, column) {
      if (ipProcessor.test(v)) {
        const message = `Row ${currentRow} has an IP address in column ${column}`;
        report.addError('ip-address-found', message, 'Cell', { row: currentRow, column });
      }

      // if (nameProcessor.test(v)) {
      //   const message = `Row ${currentRow} has a name in column ${column}`;
      //   report.addError('name-found', message, 'Cell', { row: currentRow, column });
      // }
    });
  })
  .on('end', function() {
    report.setItemCount(row);
    report.print();
  });