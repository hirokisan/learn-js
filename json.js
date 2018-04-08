// notice: javascript already parsed json to object
const data = {
  "0" : {
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

console.log(data);
console.log(data[0].friend[0].name);
console.log(data2[0].name);


