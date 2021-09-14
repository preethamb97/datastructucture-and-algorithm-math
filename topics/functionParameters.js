module.exports.handler = async () => {
  let f = function (a, b) {
    if (arguments.length === f.length) {
      console.log('we have a match')
    } else {
      console.log('no match')
    }
  };

  // determine if the function received the number of params it expected
  f(1);
  f(1,2)
  f(1,2,3);
};