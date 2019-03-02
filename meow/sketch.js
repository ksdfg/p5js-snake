var width, height;
var scale = 20;
var row, col;
var song;

// function preload() {
//   song = loadSound('assets/moanin.mp3');
// }

function setup() {
  // put setup code here

  scale = 20;
  width = height = scale * 30;
  createCanvas(width, height);

  // song.loop(0);

  row = height / scale;
  col = width / scale;

  snake = new Snake();
  food = new Food();

  food.pickLocation();

}

function draw() {
  // put drawing code here

  frameRate(4);

  background(31, 31, 31);

  fill(193, 165, 137);
  rect(0, 0, row, height*2);
  rect(width - (row/4), 0, row/2, height*2);
  rect(0, 0, width*2, col)
  rect(0, height - (row/4), width*2, col/2);

  food.build();
  snake.build();

  fill(0);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  text(snake.total, snake.x, snake.y);

  snake.update();
  if(snake.hasEaten()){
    snake.total++;
    food.pickLocation();
  }

}

function keyPressed () {

  switch (keyCode) {

    case UP_ARROW:
      snake.xSpeed = 0;
      snake.ySpeed = -1;
      break;

    case DOWN_ARROW:
      snake.xSpeed = 0;
      snake.ySpeed = 1;
      break;

    case LEFT_ARROW:
      snake.xSpeed = -1;
      snake.ySpeed = 0;
      break;

    case RIGHT_ARROW:
      snake.xSpeed = 1;
      snake.ySpeed = 0;
      break;

  }

}