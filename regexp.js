function isImage(image){
  var regex = new RegExp(/(image)\/.*(.jpg)/);

  if(regex.test(image)){
    return true;
  }else{
    return false;
  }
}

console.log(isImage('image/aaa.jpg'));
