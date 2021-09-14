


module.exports.handler = async () => {
  let num = 0;
  
  async function increment() {
    num += await 2; // Promise.resolve(2)
    console.log(num);
  }

  increment();
  num +=1;
  console.log(num);

}