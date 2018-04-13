const ip = require('./ip');
const phoneNumber = require('./phone-number');
const nationalInsuranceNumber = require('./national-insurance');
const email = require('./email');
const macAddress = require('./mac-address');
const vehicleRegistration = require('./vehicle-registration');

module.exports = {
  textProcessors: [ip, phoneNumber, nationalInsuranceNumber, email, macAddress, vehicleRegistration],
};
