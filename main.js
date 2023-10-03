function preload() 
{

}

function setup() 
{
    
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();

}

function draw() 
{
  image(video, 50, 50, 640, 480);
  circle(30, 30, 20);
  circle(50, 30, 20);
  circle(70, 30, 20);
  circle(90, 30, 20);
  circle(110, 30, 20);

  circle(30, 30, 20);
  circle(30, 50, 20);
  circle(30, 70, 20);
  circle(30, 90, 20);
  circle(30, 110, 20);

  rect(125, 30, 480,20);
  rect(30, 125, 20,420);
}



function take_snapshot()
{    
  save('student_name.png');
}


