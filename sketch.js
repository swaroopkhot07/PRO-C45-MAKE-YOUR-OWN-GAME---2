var player1, background1, backgroundImg; 
var checkPntBg1, checkPntBg2, checkPntBg3;
function preload(){
    backgroundImg = loadImage("Full Map.png");
}
function setup() {
    createCanvas(displayWidth/2, displayHeight - 150);
    player1 = createSprite(700,650, 25, 25);
    player1.shapeColor = "red";
    checkPntBg1 = createSprite(70, 407, 35, 35);
    checkPntBg1.shapeColor = "blue"
    checkPntBg2 = createSprite(610, 150, 35, 35);
    checkPntBg2.shapeColor = "blue"
    checkPntBg3 = createSprite(610, -400, 35, 35);
    checkPntBg3.shapeColor = "blue"
    
}
function draw() {
    background("green");
    image(backgroundImg, 0, -1000, displayWidth/2, displayHeight*2);
    push()
    text(mouseX+" , "+mouseY, mouseX, mouseY);
    pop();

    if(player1.isTouching(checkPntBg1)){
       player1.x = 155;
       player1.y =  260;
    }
    if(player1.isTouching(checkPntBg2)){
        player1.x = 320;
        player1.y = -120;
     }
     if(player1.isTouching(checkPntBg3)){
        player1.x = 320;
        player1.y = -120;
     }

    camera.position.y = player1.y

    if (keyDown("down")) {
        player1.y = player1.y + 5;
    }
    if (keyDown("up")) {
        player1.y = player1.y - 5;
    }
    if (keyDown("right")) {
        player1.x = player1.x + 5;
    }
    if (keyDown("left")) {
        player1.x = player1.x - 5;
    }




    drawSprites();


}

