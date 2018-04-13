const regex = /((?=[^bg|gb|nk|kn|tn|nt|zz])((?=[^dfiquv])[a-z])(?=[^dfioquv])[a-z])\s?[0-9]{2}\s?[0-9]{2}\s?[0-9]{2}\s?[a-d|f|m|p]{1}/i;

function run(item) {
  return new Promise(function(resolve) {
    if (regex.test(item.data)) {
      resolve([
        {
          code: 'NI_NUMBER_FOUND',
          message: 'Found a National Insurance Number!',
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
