const fs = require('fs');

const p = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
};


(async function conceptsRun() {
  const files = fs.readdirSync(__dirname + '/topics', { withFileTypes: false });
  for (const [_, file] of files.entries()) {
    console.log(`\x1b[34m \n\n******************************topic ${file.split('.')[0]} start***********************************************\n\n \x1b[0m`)
    await require(__dirname + '/topics/' + file).handler();
    await p();
    console.log(`\x1b[34m \n\n******************************topic ${file.split('.')[0]} end***********************************************\n\n \x1b[0m`)
  }
})();
