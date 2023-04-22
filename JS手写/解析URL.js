const parseUrl = (url) => {
  const tmp = url.split("?")[1];
  const res = {};
  for (const str of tmp.split("&")) {
    let [name, value] = str.split("=");
    value = decodeURIComponent(value);
    if (res.hasOwnProperty(str)) {
      res[name] = [].concat(res[name], value);
    } else if (value === "undefined") {
      res[name] = true;
    } else {
      res[name] = value;
    }
  }
};
