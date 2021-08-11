function main_menu(){
  
    //Title
    fill(255,0,255);
    text_title = "ASTROEVOLUTION"
    textSize(75);
    text(text_title,600,150);
    
    fill(173,216,230);
    //play button
    rect(250,250,700,75);
    fill(255,0,0);
    textSize(26);
    text_b1 = "Play Game";
    textAlign(CENTER, BOTTOM);
    text(text_b1, 600, 300);
    
    //how to play button
    fill(173,216,230);
    rect(250,375,700,75);
    fill(255,0,0);
    textSize(26);
    text_b2 = "How to Play";
    textAlign(CENTER, BOTTOM);
    text(text_b2, 600, 425);
  
      //setting button
    fill(173,216,230);
    rect(250,500,700,75);
    fill(255,0,0);
    textSize(26);
    text_b4 = "Settings";
    textAlign(CENTER, BOTTOM);
    text(text_b4, 600, 550);
    
    //Run Genetic Agl Button
    fill(173,216,230);
    rect(250,625,700,75);
    fill(255,0,0);
    textSize(26);
    text_b3 = "Run Genetic Algorithm";
    textAlign(CENTER, BOTTOM);
    text(text_b3, 600, 675);
    
    
    //Run Genetic Alg With Fixed Obstacles Button
    fill(173,216,230);
    rect(250,750,700,75);
    fill(255,0,0);
    textSize(26);
    text_b4 = "Run Genetic Algorithm \nWith Fixed Obstacles";
    textAlign(CENTER, BOTTOM);
    text(text_b4, 600, 815);
  

  
  
    //checking mouse location for each button and changing colour
    //of button
    if(mouseX > 250 && mouseX < 950 && mouseY >250 && mouseY < 325){
      fill(0,255,0);
      rect(250,250,700,75);
      fill(255,0,0);
      textSize(26);
      text_b1 = "Play Game";
      textAlign(CENTER, BOTTOM);
      text(text_b1, 600, 300);
    }
    
    if(mouseX > 250 && mouseX < 950 && mouseY > 375 && mouseY < 450){
      fill(0,255,0);
      rect(250,375,700,75);
      fill(255,0,0);
      textSize(26);
      text_b2 = "How to Play";
      textAlign(CENTER, BOTTOM);
      text(text_b2, 600, 425);
  
    }
    
    if(mouseX > 250 && mouseX < 950 && mouseY >500 && mouseY < 575){
      fill(0,255,0);
      rect(250,500,700,75);
      fill(255,0,0);
      textSize(26);
      text_b4 = "Settings";
      textAlign(CENTER, BOTTOM);
      text(text_b4, 600, 550);
    }
  
      if(mouseX > 250 && mouseX < 950 && mouseY >625 && mouseY < 700){
      fill(0,255,0);
      rect(250,625,700,75);
      fill(255,0,0);
      textSize(26);
      text_b3 = "Run Genetic Algorithm";
      textAlign(CENTER, BOTTOM);
      text(text_b3, 600, 675);
    }
    
    if(mouseX > 250 && mouseX < 950 && mouseY >750 && mouseY < 825){
      fill(0,255,0);
      rect(250,750,700,75);
      fill(255,0,0);
      textSize(26);
      text_b4 = "Run Genetic Algorithm \nWith Fixed Obstacles";
      textAlign(CENTER, BOTTOM);
      text(text_b4, 600, 815);
    }
    
    //check if button selected
    if(mouseX > 250 && mouseX < 950 && mouseY >250 && mouseY< 325 && mouseIsPressed == true){
        choice = 1;
        player1.x1 = 50;
        player1.x2 = 50;
        player1.x3 = 150;
        player1.y1 = 350;
        player1.y2 = 450;
        player1.y3 = 400;
    }
    
    if(mouseX > 250 && mouseX < 950 && mouseY > 375 && mouseY < 450 && mouseIsPressed == true){
      choice = 2;
    }
  
      
    if(mouseX > 250 && mouseX < 950 && mouseY >500 && mouseY < 575 && mouseIsPressed == true){
      choice = 5;
    }
    
    if(mouseX > 250 && mouseX < 950 && mouseY >625 && mouseY < 700 && mouseIsPressed == true){
      choice = 3;
      generationNum =1;
    }
    
    if(mouseX > 250 && mouseX < 950 && mouseY >750 && mouseY < 825 && mouseIsPressed == true){
      choice = 4;
      generationNum =1;
    }    
}