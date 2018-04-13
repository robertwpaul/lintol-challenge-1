const regex = /(?:[A-Fa-f0-9]{2}[:-]){5}(?:[A-Fa-f0-9]{2})/;

function run(item) {
  return new Promise(function(resolve) {
    if (regex.test(item.data)) {
      resolve([
        {
          code: 'MAC_ADDRESS_FOUND',
          message: 'Found an MAC address!',
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
