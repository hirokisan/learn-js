var a = "a";

x();
y();

// グローバルスコープの変数に対して値を格納することは可能
function x(){
  var b = 'b';
  console.log(a);
  a = 'b';
}

// 他のブロックで定義されたブロックスコープの変数を参照することはできない
function y(){
  console.log(a);
  console.log(b);
}
