function deepCopy(obj) {
    if(obj instanceof Date) return new Date(obj)
    if(obj instanceof Error) return new Error(obj.message)
    if(obj instanceof RegExp) return new RegExp(obj)
    if(obj instanceof Function) return function(...args) {
        return obj.call(this, ...args)
    }
    if(!obj || typeof obj !== 'object') return obj
    const res = Array.isArray(obj) ? [] : {}
    for(const key in obj) {
        if(obj.hasOwnProperty(key)) {
            if(typeof obj[key] === 'object') {
                res[key] = deepCopy(obj[key])
            } else {
                res[key] = obj[key]
            }
        }
    }
    return res
}

const obj1 = {
    a:1,
    b:'w12',
    c: {
        a:1,
        c:false
    }
}
console.log(deepCopy(obj1).a === obj1.a);