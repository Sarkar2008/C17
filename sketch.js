var box1, box2, box3;
function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(100, 100, 20, 30, 1, 2);
  box2 = new Box(200, 200, 30, 40, 2, 3);
  box3 = new Box(300, 300, 40, 50, 3, 1);
}

function draw() 
{
  background(220);
  box1.show();
  box1.move();
  box2.show();
  box2.move();
  box3.show();
  box3.move();
}

