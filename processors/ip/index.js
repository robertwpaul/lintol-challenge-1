const regex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/;

function test(value) {
  return value.match(regex);
}

module.exports = {
  test
}