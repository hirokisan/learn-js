// declare class with params
// クラスの基本的な定義
ClassName = function (arg1, arg2) {
  // public変数
  this.arg1 = arg1;
  this.arg2 = arg2;

  //private変数
  var _name = 'private';

  // public定数
  this.CONST_NAME = 5;

  // private定数
  this._CONST_NAME = 5;

  // public method
  this.func_name1 = function(){
    console.log(_name);
    console.log(_secret);
  };

  // private method
  var _secret = function(){
    return "this is private method";
  };
}

// クラス拡張
// publicメソッド
ClassName.prototype = {
  getArgs1: function() {
    this.func_name1();
    console.log(this.arg1);
  }
}
