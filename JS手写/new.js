function myNew(fn, ...args) {
  if (Object.prototype.toString.call(fn) !== "[object Function]") {
    return "error in parmas";
  }
  const obj = {};
  obj.__proto__ = Object.create(fn.prototype);
  const ret = fn.call(obj, ...args);
  return ret instanceof Object ? ret : obj;
}
