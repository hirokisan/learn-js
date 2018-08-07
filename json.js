// notice: javascript already parsed json to object
const data = {
  "cdgHzcLQ-eM:APA91bG7DhCG4V" : {
    "name"   : "john",
    "age"    : "27",
    "friend" : {
      "0" : {
        "name" : "kaz"
      }
    }
  }
}

// array
const data2 = [
  {
    name   : "john",
    age    : "27",
    friend : {
      name : "kaz"
    }
  }
]

// notice: Your data is already an object. No need to parse it.
// var parsedData = JSON.parse(data);
var token = 'cdgHzcLQ-eM:APA91bG7DhCG4V';

console.log(data);
console.log(data[token].friend[0].name);
console.log(data2[0].name);


// ref: https://qiita.com/takeharu/items/d75f96f81ff83680013f
// ref: https://qiita.com/SotaSuzuki/items/c3b46c4e24c1ca9b4d37
