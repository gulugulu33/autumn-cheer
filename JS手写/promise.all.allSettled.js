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
