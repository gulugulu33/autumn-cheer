function b() {
  console.log(a, c); // function a
}
function a() {
  var a = 1; // local a
  console.log(a);
  let c = 3;
  b(); // function a
}

let c = 2;

a();

// console.log(a);

// 函数声明提升在变量前面 但是如果有赋值就会覆盖
