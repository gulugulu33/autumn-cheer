function isEqual(obj1, obj2) {
    if(typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return obj1 === obj2
    }
    if(obj1 === obj2) return true
    let key1 = Object.keys(obj1)
    let key2 = Object.keys(obj2)
    if(key1.length !== key2.length) return false
    for(let key in obj1) {
        if(!isEqual(obj1[key], obj2[key])) {
            return false
        }
    }
    return true
}

const obj1 = {
    a: 100,
    b: {
      x: 100,
      y: {
        a: 1
      }
    }
  }
  const obj2 = {
    a: 100,
    b: {
      x: 100,
      y: {}
    }
  }
  console.log(isEqual(obj1, obj2))