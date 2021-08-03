// 词法作用域 && 动态作用域 ==> 变量的查找
// lexical scoping && dynamic scoping => variable lookup

// lexical scoping
// 在写完JavaScript代码之后，将由代码变量和块级模块固定住
// 这样，在进行词法解析时，作用域将不会进行改变

// demo
const outsideFun = function(a) {
  const b = a * a;
  const insideFun = function(c) {
    console.log(`a = ${a}; b = ${b}; c = ${c}`);
  };
  insideFun(b * b);
};

outsideFun(2);
// a = 2; b = 4; c = 16


var a = 111;
var outsideFirstFun = function() {
  console.log(`a = ${a}`);
};
var outsideSecondFun = function() {
  var a = 222;
  outsideFirstFun();
};
outsideSecondFun();
// 111


var str = 'abc';
function getStrValue() {
  var str = 'def';
  function getStr() {
    return str;
  };
  return getStr;
};
getStrValue()();
