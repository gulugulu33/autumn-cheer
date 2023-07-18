// v1
function debounce(fn, delay) {
  let timer = null
  const _debounce = (...args) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.call(this, ...args)
    }, delay)
  }
  return _debounce
}

// v2
