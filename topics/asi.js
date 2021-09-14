module.exports.handler = async () => {
  // ASI, object literals, square bracket syntax, hoisting
  //ASI means automatic semicoln injection
  // what happens when you run this code? why?
  //how would you fix it?

  // let a = {
  //   a: 123
  // }


  // [a].forEach(function (x) {
  //   console.log(x);
  // })



  //fix 
  let a = {
    a: 123
  };


  [a].forEach(function (x) {
    console.log(x);
  })
};