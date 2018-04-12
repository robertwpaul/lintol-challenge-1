const ip = require('./ip');
const nationalInsuranceNumber = require('./national-insurance');

module.exports = {
  textProcessors: [
    ip,
    nationalInsuranceNumber
  ]
};
