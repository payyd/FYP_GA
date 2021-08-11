function play(){
  stroke(255);
  fill(255);
  score++;
  text1 = "Score: " + score;
  textAlign(CENTER, BOTTOM);
  text(text1, 100, 30);
  

  //player object functions
  player1.update();
  player1.render();
  
  //game starts, random y co-ords and speed for each obstacle
  if(score == 0)
    {
      score = 1;
      y_decider = random(10,890);  
      o1 = createVector(1300,y_decider);

      y_decider2 = random(10,890);  
      o2 = createVector(1300+200,y2_decider);

      y_decider3 = random(10,890);  
      o3 = createVector(1300+200+200,y3_decider);

      o1_speed = random(min_speed,max_speed);
      o2_speed = random(min_speed,max_speed);
      o3_speed = random(min_speed,max_speed);
      
    }
  

  //draw obsatcles
  
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
      o1.y = random(10,890);
      o1_speed = random(min_speed,max_speed);
    }
  
   if(o2.x < -100)
    {
      o2.x = 1500;
      o2.y = random(10,890);
      o2_speed = random(min_speed,max_speed);
    }
  
   if(o3.x < -100)
    {
      o3.x = 1500;
      o3.y = random(10,890);
      o3_speed = random(min_speed,max_speed);
    }
}
