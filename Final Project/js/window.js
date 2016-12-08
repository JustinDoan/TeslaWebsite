var im = document.getElementById("img");

var images = ["images/modelx.jpg","images/7651.jpg","images/ui_category_battery.jpg"];
var index=0;

function changeImage()
{
  im.setAttribute("src", images[index]);
  index++;
  if(index >= images.length)
  {
    index=0;
  }
}

setInterval(changeImage, 1000);