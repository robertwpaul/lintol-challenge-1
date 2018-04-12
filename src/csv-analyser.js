const parse = require('csv-parse/lib/sync');
const { textProcessors } = require('./processors');

const { flatArray } = require('./util');

const parseCsvFile = file => {
  const data = parse(file);
  const rows = data.slice(1);

  return rows.map((row, rowIndex) => (
    row.map((cell, columnIndex) => ({
      data: cell,
      itemType: 'Cell',
      location: {
        column: columnIndex,
        row: rowIndex
      }
    }))
  ));
};

const analyse = file => {
  const rows = parseCsvFile(file);
  const jobs = [];

  rows.forEach(row => {
    row.forEach(cell => {
      textProcessors.forEach(processor => {
        jobs.push(processor.run(cell));
      });
    });
  });

  return Promise.all(jobs).then(function(data) {
    return {
      errors: flatArray(data),
      itemCount: rows.length,
      format: 'csv'
    };
  });
};

module.exports = {
  analyse
}
