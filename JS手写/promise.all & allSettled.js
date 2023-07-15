function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const res = [];
    let len = 0;

    function fulfill(val, idx) {
      if (len === promises.length) {
        resolve(res);
      }
      res[idx] = val;
      len++;
    }

    promises.forEach((promise, idx) => {
      Promise.resolve(promise)
        .then((res) => fulfill(res, idx))
        .catch((err) => reject(err));
    });
  });
}

// 7.15 lc
var promiseAll = async function(functions) {
  return new Promise((resolve, reject) => {
      let len = functions.length
      const res = []
      function fulfill(idx, val) {
          res[idx] = val
          len--
          if(!len) resolve(res)
      }
      functions.forEach((promise, idx) => {
          Promise.resolve(promise()).then((val) => fulfill(idx, val)).catch(e => reject(e))
      })
  })
};
