function throttle(fn, delay) {
    let last = 0
    return function(...args) {
        const now = new Date().getTime()
        if(now - last >= delay) {
            fn.call(this, ...args)
            last = now
        }
    }
}