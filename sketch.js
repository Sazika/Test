var student1


function setup() {
  createCanvas(400,400);
student1 = new Student("Sazika",8,12)
}

function draw() 
{
  background(30);
  student1.display()
}