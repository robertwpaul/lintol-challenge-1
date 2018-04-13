const regex = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;

function run(item) {
  return new Promise(function(resolve) {
    if (regex.test(item.data)) {
      resolve([
        {
          code: 'EMAIL_ADDRESS_FOUND',
          message: 'Found an Email address!',
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
