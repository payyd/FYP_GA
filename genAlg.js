function genAlg(){
  
  //allow pausing option
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
      //do genetic algorithm
      population.evaluate();
      population.selection();
      //reset score and survivors
      score = 0;
      survivors = 0;
      o1.x = 1500;
      o1.y = random(10,890);
      o1_speed = random(min_speed,max_speed);
      
      o2.x = 1500;
      o2.y = random(10,890);
      o2_speed = random(min_speed,max_speed);
      
      o3.x = 1500;
      o3.y = random(10,890);
      o3_speed = random(min_speed,max_speed);
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
      //uncomment for random y co-ordinates
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
  
    

  //run genetic algorithm
  population.run();
  
}
