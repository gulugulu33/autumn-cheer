function flat(arr, depth = 1) {
    let res = []
    for(let val of arr) {
        if(Array.isArray(val) && depth) {
            res = res.concat(flat(val, depth - 1))
        } else {
            res.push(val)
        }
    }
    return res
}