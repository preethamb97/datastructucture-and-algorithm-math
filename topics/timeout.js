module.exports.handler = async () => {
  console.log('a');
  let timmy = setTimeout(function () {
    console.log('b');
  }, 1);

  let timothy = setTimeout(function () {
    console.log('c');
  }, 10);

  let timer = setTimeout(function () {
    console.log('d');
  });

  console.log('e');

}