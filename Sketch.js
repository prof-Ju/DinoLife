var player
var bot
var botImg
var playerImg
var playerImgesquerda
var playerImgidle
var ground, bgImg
function preload() {
    playerImg= loadAnimation("estego/player1.png","estego/player2.png","estego/player3.png","estego/player4.png","estego/player5.png","estego/player6.png","estego/player7.png","estego/player8.png")
    playerImgesquerda= loadAnimation("estego/player-esquerda1.png","estego/player-esquerda2.png","estego/player-esquerda3.png","estego/player-esquerda4.png","estego/player-esquerda5.png","estego/player-esquerda6.png","estego/player-esquerda7.png","estego/player-esquerda8.png")
    playerImgidle= loadAnimation("estego/player3.png")
    bgImg = loadImage("plx-5.png")
}
function setup(){

    createCanvas(800,600)
     player = createSprite(200,500,30,30)
     player.scale = 1.5;
     player.addAnimation("parado",playerImgidle)
     player.addAnimation("direita",playerImg)
     player.addAnimation("esquerda",playerImgesquerda)

     ground = createSprite(0,600,1800)
    
}
function draw(){
    
    background("lightblue");

    imageMode(CENTER)
    image(bgImg,0,250,displayWidth,displayHeight)

    if(keyDown("space") && player.y > 450 ){
        player.velocityY =-10;
    }

    if(keyDown("d")){
        player.x += 2;
        player.changeAnimation("direita",playerImg);
    }
    
    else if(keyDown("a")){
        player.x -= 2;
        player.changeAnimation("esquerda",playerImgesquerda);
    }
    else{
        player.changeAnimation("parado",playerImgidle);
    }

    player.velocityY +=0.8;

    player.collide(ground);

    camera.position.x = player.x
    //camera.position.y = player.y
    drawSprites();
}