var width;
var height;


var img = new Image();
var image;
var banner;
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
  image = new Konva.Image({
    x: 0,
    y: 0,
    image: imageObj,
    width: width,
    height: height,
    scaleX: 0.5,
    scaleY: 0.5,
    draggable: true,
    dragBoundFunc: function(pos){
      return {
        x: this.getAbsolutePosition().x,
        y: pos.y
      };
    }
  });
  layer1.add(image);

  layer1.draw();

  image.on('mouseover', function() {
      document.body.style.cursor = 'move';
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
  banner = new Konva.Image({
    x: 0,
    y: 0,
    scaleX: 0.5,
    scaleY: 0.5,
    image: bannerObj,
    width: width,
    height: width*0.15,
  });
  layer2.add(banner);

  layer2.draw();
};

var src = document.getElementById('banner').src;
bannerObj.src = src;

document.getElementById('output').addEventListener('click', function () {
  image.scaleX(1);
  image.scaleY(1);
  banner.scaleX(1);
  banner.scaleY(1);

  var dataURL = stage.toDataURL({mimeType:'image/jpeg',quality: 1.0, pixelRatio:1});
  document.getElementById('imgOutput').src = dataURL;
});

}
