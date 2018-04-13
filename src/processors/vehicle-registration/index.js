const regex = /(^[A-Z]{2}[0-9]{2} [A-Z]{3}$)|(^[A-Z][0-9]{1,3} [A-Z]{3}$)|(^[A-Z]{3} [0-9]{1,3}[A-Z]$)|(^[0-9]{1,4} [A-Z]{1,2}$)|(^[0-9]{1,3} [A-Z]{1,3}$)|(^[A-Z]{1,2} [0-9]{1,4}$)|(^[A-Z]{1,3} [0-9]{1,3}$)/;

function run(item) {
  return new Promise(function(resolve) {
    if (regex.test(item.data)) {
      resolve([
        {
          code: 'VEHICLE_REGISTRATION_FOUND',
          message: 'Found an Vehicle Registration!',
          item,
        },
      ]);
    } else {
      resolve([]);
    }
  });
}

module.exports = {
  run,
};
