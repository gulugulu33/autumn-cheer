const parseUrl = (url) => {
  const tmp = url.split("?")[1];
  const res = {};
  for (const str of tmp.split("&")) {
    let [name, value] = str.split("=");
    value = decodeURIComponent(value);
    if (res.hasOwnProperty(name)) {
      res[name] = [].concat(res[name], value);
    } else if (value === "undefined") {
      res[name] = true;
    } else {
      res[name] = value;
    }
  }
  return res
};

// 7.15  先分 ？ 然后分 & 最后用 = 来分键值对
function parseUrl2(url) {
  const res = {}
  const tmp = url.split('?')[1]
  for(const str of tmp.split('&')) {
    let [key, value] = str.split('=')
    value = decodeURIComponent(value)
    if(res.hasOwnProperty(key)) {
      res[key] = [].concat(res[key], value)
    } else if(value === 'undefined') {
      res[key] = true
    } else {
      res[key] = value
    }
  }
  return res
}