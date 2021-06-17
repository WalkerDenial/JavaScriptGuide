// 所有在双斜线之后的内容都属于注释

// 变量是表示值的一个符号名字
// 变量是通过 var 关键字声明的
var x; // 声明一个变量 x

// 值可以通过等号赋值给变量
x = 0; // 现在变量 x 的值为 0
x; // => 0：通过变量获取其值

// JavaScript 支持多种数据类型
x = 1; // 数字
x = 0.01; // 整数和实数共用一种数据类型
x = "hello"; // 由双引号内的文本构成的字符串
x = 'hello'; // 单引号内的文本同样构成字符串
x = true; // 布尔值
x = false; // 另一个布尔值
x = null; // null 是一个特殊的值，意思是「空」
x = undefined; // underfined 和 null 非常相似

// JavaScript 中的最重要的类型就是对象
// 对象是名/值对的集合，或字符串到值映射的集合
var book = { // 对象是由花括号括起来的
    topic: 'JavaScript', // 属性「topic」的值是「JavaScript」
    fat: true // 属性「fat」的值是 true
}; // 右花括号标记了对象的结束

// 通过「.」或「[]」来访问属性对象
book.topic // => JavaScript
book['fat'] // => true: 另一种获取属性的方式
book.author = 'Flanagan'; // 通过赋值创建一个新属性
book.contents = {}; // {} 是一个空对象，它没有属性

// JavaScript 同样支持数组（以数字为索引的列表）
var primes = [2, 3, 5, 7]; // 拥有 4 个值的数组，由 「[」和「]」划定边界
primes[0] // => 2: 数组中的第一个元素（索引为 0）
primes.length // => 4: 数组中的元素个数
primes[primes.length - 1] // => 7: 数组的最后一个元素
primes[4] = 9; // 通过赋值来添加新元素
primes[4] = 11; // 或通过赋值来改变已有的元素
var empty = []; // [] 是空数组，它具有 0 个元素
empty.length // => 0

// 数组和对象中都可以包含另一个数组或对象：
var points = [ // 具有两个元素的数组
    { x: 0, y: 0 }, // 每个元素都是一个对象
    { x: 1, y: 1 },
]

var data = { // 一个包含两个属性的对象
    trial1: [[1, 2], [3, 4]], // 每一个属性都是数组
    trial2: [[2, 3], [4, 5]], // 数组的元素也是数组
}

// 运算符作用于操作数，生成一个新的值
// 最常见的是算术运算符
3 + 2 // => 5: 加法
3 - 2 // => 1: 减法
3 * 2 // => 6: 乘法
3 / 2 // => 1.5: 除法
points[1].x = points[0].x // => 1: 更复杂的操作数也能照常工作
'3' + '2' // => '32': + 可以完成加法运算，也可以做字符串连接

// JavaScript 定义了一些算术运算符的简写形式
var count = 0; // 定义一个变量
count++; // 自增 1
count--; // 自减 1
count += 2; //  自增 2
count *= 3; // 自乘 3
count // => 6: 变量名本身也是一个表达式

// 相等关系运算符用来判断两值是否相等
// 不等、大于、小于运算符的运算结果是 true 或 false
var x = 2, y = 3; // 这里的 = 是赋值的意思，不是比较相等
x == y // => false: 相等 
x != y // => true: 不等
x < y // => true:  小于
x <= y // => true: 小于等于
x > y // => false:  大于
x >= y // => false: 大于等于
'two' == 'three' // => false: 两个字符串不相等
'two' > 'three' // => true: 'tw' 在字符表中的索引大于 'th'
false == (x > y) // => true: false 和 false 相等

    // 逻辑运算符是对布尔值的合并或求反
    (x == 2) && (y == 3) // => true: 两个比较都是 true，&& 表示「与」
        (x > 3) || (y < 3) // => false: 两个比较不都是 true，|| 表示「或」
!(x == y) // => true: ! 求反

// 函数是一段带有参数的 JavaScript 代码端，可以多次调用
function plus1(x) { // 定义了名为 plus1 的一个函数，带有参数 x
    return x + 1; // 返回一个比传入的参数大的值
} // 函数的代码块是由花括号包裹起来的部分

plus1(y) // => 4: y 为 3，调用函数的结果为 3 + 1

var square = function (x) { // 函数是一种值，可以赋值给变量
    return x * x; // 计算函数的值
}; // 分号标识了赋值语句的结束
square(plus1(y)) // => 16: 在一个表达式中调用两个函数

// 当函数赋值给对象的属性，我们称为「方法」，所以的 JavaScript 对象都含有方法
var a = []; // 创建一个数组
a.push(1, 2, 3); // push() 方法向数组中添加元素
a.reverse(); // 另一个方法：将数组元素的次序反转

// 我们也可以定义自己的方法，「this」关键字是对定义方法的对象的引用
points.dist = function () {
    var p1 = this[0];
    var p2 = this[1];
    var a = p2.x - p1.x;
    var b = p2.y - p1.y;
    return Math.sqrt(a * a + b * b);
};
points.dist(); // => 1.414: 求得两个点之间的距离

// 这些 JavaScript 语句使用该语法包含条件判断和循环
// 使用了类似 C、C++、Java 和其他语言的语法
function abs(x) { // 求绝对值的函数
    if (x > 0) return x;
    return -x;
}

function factorial(n) { // 计算阶乘的函数
    var product = 1;
    while (n > 1) {
        product *= n;
        n--;
    }
    return product;
}

factorial(4); // => 24

function factorial2(n) { // 实现循环的另一种写法
    var i, product = 1;
    for (i = 2; i <= n; i++) product *= i;
    return product;
}

factorial2(5); // => 120

// 定义一个构造函数以初始化一个新的 Point 对象
function Point(x, y) { // 按照惯例，构造函数均以大写字母开始
    this.x = x; // 关键字 this 指代初始化的实例
    this.y = y; // 将函数参数存储为对象的属性
} // 不需要 return

// 使用 new 关键字和构造函数来创建一个实例
var p = new Point(1, 1); // 平面几何中的点（1，1）

// 通过给构造函数的 prototype 对象赋值，来给 Point 对象定义方法
Point.prototype.r = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y); // this 指代调用这个方法的对象
};

// Point 的实例对象 p（以及所有的 Point 实例对象）继承了方法 r()
p.r(); // => 1.414...