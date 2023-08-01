function myInstanceof(left, right) {
    const prototype = right.prototype
    let proto = Object.getPrototypeOf(left)
    while(proto) {
        if(proto === prototype) return true
        proto = Object.getPrototypeOf(proto)
    }
    return false
}