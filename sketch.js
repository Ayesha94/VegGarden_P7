function preload()
{
   tomatoImg=loadImage("tomato.png")
   carrotImg=loadImage("carrot.png")
   brinjalImg=loadImage("brinjal.png")
   onionImg=loadImage("onion.png")
   capsicumImg=loadImage("capsicum.png")
}
function setup()
{
    createCanvas(400, 400)
      
    for(var i=50; i<400; i+=70)
    {
        var tomato=createSprite(i, 50, 20, 20)
        tomato.addImage(tomatoImg);
        tomato.scale=0.08
        var onion=createSprite(i, 120, 20, 20)
        onion.addImage(onionImg)
        onion.scale=0.1
        var carrot=createSprite(i, 340, 20, 20)
        carrot.addImage(carrotImg)
        carrot.scale=0.09
        var brinjal=createSprite(i, 270, 20, 20)
       brinjal.addImage(brinjalImg)
       brinjal.scale=0.08
        var capsicum=createSprite(i, 200, 20, 20)
        capsicum.addImage(capsicumImg)
        capsicum.scale=0.2
    }
}
function draw()
{
    background(rgb(139, 69, 19));
    drawSprites();
}
