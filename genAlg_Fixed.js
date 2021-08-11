
function genAlg_Fixed(){
  
  pauser.update();
  pauser.render();
  stroke(255);
  fill(255);
  score++;
  text1 = "Score: " + score;
  textAlign(CENTER, BOTTOM);
  text(text1, 100, 30);
  
  text2 ="Generation Number: " + generationNum;
  textAlign(CENTER, BOTTOM);
  text(text2, 600,30);
  
    //once lifespan is reached
  if(score % lifespan == 0)
    {
      generationNum++;
      population.evaluate();
      population.selection();
      score = 0;
      survivors = 0;  
      o1 = createVector(1300,y_decider);  
      o2 = createVector(1300+200,y2_decider);  
      o3 = createVector(1300+200+200,y3_decider);
      
    }
  
  fill(150,75,0);
  ellipse(o1.x,o1.y,50,50);
  ellipse(o2.x,o2.y,50,50);
  ellipse(o3.x,o3.y,50,50);
  
  o1.x = o1.x -  o1_speed;
  o2.x = o2.x -  o2_speed;
  o3.x = o3.x -  o3_speed;

  //respawn obstacles
  if(o1.x < -100)
    {
      o1.x = 1500;
    }
  
   if(o2.x < -100)
    {
      o2.x = 1500;
    }
  
   if(o3.x < -100)
    {
      o3.x = 1500;
    }
  
  population.run();
  
}