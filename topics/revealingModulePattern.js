module.exports.handler = async () => {

  // turn this object literal into a module that only exposes the render method

  // let myModule = {
  //   data: [],
  //   render: () => {
  //     console.log('render')
  //   },
  //   add: () => {
  //     console.log('add')
  //   },
  //   remove: () => {
  //     console.log('remove')
  //   },
  // };

  let myModule = (function () {
    let _data = [];
    let _render = function () {
      console.log('_render')
    }
    let _add = function () {
      console.log('_add')
    }
    let _remove = function () {
      console.log('_remove')
    }
    return {
      render: _render
    }
  })();

    myModule.render();
    // myModule._add; //this will fail
};