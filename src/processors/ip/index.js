const regex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/;

function run(item) {
  return new Promise(function(resolve) {
    if (regex.test(item.data)) {
      resolve([
        {
          code: 'IP_ADDRESS_FOUND',
          message: 'Found an IP address!',
          item
        }
      ])
    } else {
      resolve([]);
    }
  });
}

module.exports = {
  run
}