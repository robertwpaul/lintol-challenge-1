const fs = require('fs');

function Report(version, format, itemCount) {
  this.version = version;
  this.format = format;
  this.errors = [];
  this.itemCount = itemCount;
}

Report.prototype.setItemCount = function(itemCount) {
  this.itemCount = itemCount;
};

Report.prototype.addError = function(code, message, type, location) {
  this.errors.push({
    code,
    message,
    item: {
      itemType: type,
      location,
    },
  });
};

Report.prototype.toString = function() {
  return JSON.stringify(
    {
      version: this.version,
      'item-count': this.itemCount,
      format: this.format,
      errors: this.errors,
    },
    null,
    2
  );
};

Report.prototype.print = function() {
  console.log(this.toString());
};

const generateReport = (itemCount, format, errors) => {
  const report = new Report(1, format, itemCount);
  errors.forEach(error => {
    report.addError(
      error.code,
      error.message,
      error.item.itemType,
      error.item.location
    );
  });
  report.print();
};

module.exports = {
  Report,
  generateReport,
};
