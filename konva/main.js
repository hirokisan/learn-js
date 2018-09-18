var width;
var height;


var img = new Image();
img.src = document.getElementById('image').src;
img.onload = function(){
	width = img.width;
  height = img.height;

var stage = new Konva.Stage({
  container: 'container',   // id of container <div>
  width: width,
  height: height
});

var layer1 = new Konva.Layer();
var layer2 = new Konva.Layer();

stage.add(layer1);
stage.add(layer2);

// 背景画像
var imageObj = new Image();
imageObj.onload = function() {
  var image = new Konva.Image({
    x: 0,
    y: 0,
    image: imageObj,
    width: width,
    height: height,
    draggable: true,
    //dragBoundFunc: function(pos){
    //  return {
    //    x: this.getAbsolutePosition().x,
    //    y: pos.y
    //  };
    //}
  });
  layer1.add(image);

  layer1.draw();

  image.on('mouseover', function() {
      document.body.style.cursor = 'pointer';
  });
  image.on('mouseout', function() {
      document.body.style.cursor = 'default';
  });
};


var src = document.getElementById('image').src;
imageObj.src = src;

// バナー画像
var bannerObj = new Image();
bannerObj.onload = function() {
  var banner = new Konva.Image({
    name: 'banner',
    id: 'banner',
    x: 0,
    y: 0,
    image: bannerObj,
    width: width,
    height: width*0.15,
    draggable: false,
  });
  layer2.add(banner);

  layer2.draw();
};

var src = document.getElementById('banner').src;
bannerObj.src = src;

document.getElementById('output').addEventListener('click', function () {
  var dataURL = stage.toDataURL({mimeType:'image/jpeg',quality: 1.0, pixelRatio:1});
  document.getElementById('imgOutput').src = dataURL;
});

}

window.onload = function(){
//var canvas;
//canvas = document.querySelector('canvas');
//canvas.setAttribute('width', '640px');
//canvas.setAttribute('height', '480px');
//console.log(canvas);
};
