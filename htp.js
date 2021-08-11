function htp(){
  //how to play instructions
  
  //say Instructions
      //Title
    fill(255,0,255);
    text_title = "Instructions"
    textSize(75);
    text(text_title,600,150);
  
  //insturctions
    fill(0,255,0);
    text_title = "You play as this red spaceship which is flying through space\n attempting to avoid asteroids which fly towards you.\n the further you progress the higher your score!"
    textSize(26);
    text(text_title,650,350);

    text_title = "Move your spaceship by pressing 'w' to move up and 's' to move down.\n Try it now!"
    textSize(26);
    text(text_title,650,450);
  
    text_title = "Avoid these asteroids, or you will crash and your score will stop increasing!"
    textSize(26);
    text(text_title,650,500);
  
  //draw example asteroid
  fill(150,75,0);
  ellipse(650,600,50,50);
  
  //button to go back to main menu
  
  
  fill(173,216,230);
  rect(250,675,700,125);
  fill(255,0,0);
  textSize(26);
  text_mm = "Main Menu";
  textAlign(CENTER, BOTTOM);
  text(text_mm, 600, 760);
  
  if(mouseX > 250 && mouseX < 950 && mouseY >675 && mouseY < 800){
    fill(0,255,0);
    rect(250,675,700,125);
    fill(255,0,0);
    textSize(26);
    textAlign(CENTER, BOTTOM);
    text(text_mm, 600, 760);
  }
  
  if(mouseX > 250 && mouseX < 950 && mouseY >675 && mouseY < 800 && mouseIsPressed== true){
    choice = 0;
    o1.x = 1300;
    o2.x= 1300+200;
    o3.x = 1300+400;
    mouseIsPressed = false;

  } 
  
  //player object for testing
  player2.control();
  player2.render();
}