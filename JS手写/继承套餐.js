// 原型链继承
function Misser(name = '玛尼') {
    this.name = name
    this.kind = true
    this.message = "i am fine"
}

misser.prototype.find = function() {
    console.log('go with the wind');
}

function Dandan() {}
Dandan.prototype = new Misser()

// 借用构造函数继承
function Ziqiao(name, ver = 2022) {
    this.ver = ver
    Misser.call(this, name)
}

Ziqiao.prototype = new Misser()

// 寄生组合式继承  1.借用构造函数  2.Object.create() 3.修改constructor
function MyOffer(name) {
    Ziqiao.call(this, name)
}

MyOffer.prototype = Object.create(Ziqiao.prototype)
MyOffer.constructor = MyOffer
// or
Object.defineProperty(MyOffer, 'constructor', {
    value: MyOffer,
    enumerable: false,
    configurable: true,
    writable: true
})