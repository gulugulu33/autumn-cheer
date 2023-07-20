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


// custom hook ver.
function useDebouncedFunction(callback, delay) {
  const timerRef = useRef(null);
  function debouncedFunction(...args) {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }
  return debouncedFunction;
}

// 使用示例
function App() {
  // 防抖间隔为 500 毫秒
  const debouncedFunction = useDebouncedFunction((value) => {
    console.log('Debounced Value:', value);
    // 这里可以写其他逻辑
  }, 500);
  function handleChange(event) {
    const inputValue = event.target.value;
    // 调用处理过的函数，会在 500 毫秒内只执行一次
    debouncedFunction(inputValue);
  }
  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
}

export default App;
