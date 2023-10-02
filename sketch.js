function setup() {
  createCanvas(400, 400);
  background("pink");
}

function draw() {
  
stroke("white")
fill ("white")
  
 //console.log(mouseisPressed);
  
  if (mouseIsPressed) {
    rect (mouseX, mouseY, 20, 35);
  }
}
