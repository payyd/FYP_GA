function setting_menu() {


  //popsize 
  fill(255, 0, 255);
  text_title = "Population Size: " + popsize;
  textSize(50);
  text(text_title, 600, 150);

  //draw top triangle
  fill(173, 216, 230);
  triangle(760, 95, 785, 70, 810, 95);

  //draw bot triangle
  triangle(760, 145, 785, 170, 810, 145);

  //mutation
  fill(255, 0, 255);
  text_title = "Mutation Rate: " + mutation_show + "%";
  textSize(50);
  text(text_title, 600, 275);

  //draw top triangle
  fill(173, 216, 230);
  triangle(760, 220, 785, 195, 810, 220);

  //draw bot triangle
  triangle(760, 270, 785, 295, 810, 270);


  //lifespan 
  fill(255, 0, 255);
  text_title = "Lifespan: " + lifespan;
  textSize(50);
  text(text_title, 600, 400);

  //draw top triangle
  fill(173, 216, 230);
  triangle(685, 350, 710, 325, 735, 350);

  //draw bot triangle
  triangle(685, 400, 710, 425, 735, 400);


  //obstacle speed min
  fill(255, 0, 255);
  text_title = "Obstacle Minimum Speed: " + min_speed;
  textSize(50);
  text(text_title, 600, 525);

  //top triangle
  fill(173, 216, 230);
  triangle(870, 475, 895, 450, 920, 475);

  //draw bot triangle
  triangle(870, 525, 895, 550, 920, 525);

  //obstace speed max
  fill(255, 0, 255);
  text_title = "Obstacle Maximum Speed: " + max_speed;
  textSize(50);
  text(text_title, 600, 650);

  //top triangle
  fill(173, 216, 230);
  triangle(880, 600, 905, 575, 930, 600);

  //draw bot triangle
  triangle(880, 650, 905, 675, 930, 650);


  //mouse hover popsize top tri
  if (mouseX > 760 && mouseX < 810 && mouseY > 70 && mouseY < 95) {
    fill(0, 255, 0);
    triangle(760, 95, 785, 70, 810, 95);
  }

  //mouse hover popsize bot tri
  if (mouseX > 760 && mouseX < 810 && mouseY > 145 && mouseY < 170) {
    fill(0, 255, 0);
    triangle(760, 145, 785, 170, 810, 145);
  }

  //mouse hover mr top tri
  if (mouseX > 760 && mouseX < 810 && mouseY > 195 && mouseY < 220) {
    fill(0, 255, 0);
    triangle(760, 220, 785, 195, 810, 220);
  }

  //mouse hover mr bot tri
  if (mouseX > 760 && mouseX < 810 && mouseY > 270 && mouseY < 295) {
    fill(0, 255, 0);
    triangle(760, 270, 785, 295, 810, 270);
  }

  //mouse hover lifespan top tri
  if (mouseX > 685 && mouseX < 735 && mouseY > 325 && mouseY < 350) {
    fill(0, 255, 0);
    triangle(685, 350, 710, 325, 735, 350);

  }

  //mouse hover lifespan bot tri
  if (mouseX > 685 && mouseX < 735 && mouseY > 400 && mouseY < 425) {
    fill(0, 255, 0);
    triangle(685, 400, 710, 425, 735, 400);

  }

  //mouse hover min speed top tri
  if (mouseX > 870 && mouseX < 920 && mouseY > 450 && mouseY < 475) {
    fill(0, 255, 0);
    triangle(870, 475, 895, 450, 920, 475);

  }

  //mouse hover min speed bot tri
  if (mouseX > 870 && mouseX < 920 && mouseY > 525 && mouseY < 550) {
    fill(0, 255, 0);
    triangle(870, 525, 895, 550, 920, 525);

  }

  //mouse hover max top tri
  if (mouseX > 880 && mouseX < 930 && mouseY > 575 && mouseY < 600) {
    fill(0, 255, 0);
    triangle(880, 600, 905, 575, 930, 600);

  }

  //mouse hover max bot tri
  if (mouseX > 880 && mouseX < 930 && mouseY > 650 && mouseY < 675) {
    fill(0, 255, 0);
    triangle(880, 650, 905, 675, 930, 650);

  }


  //mosue clicked popsize up
  if (mouseX > 760 && mouseX < 810 && mouseY > 70 && mouseY < 95 && mouseIsPressed == true) {
    popsize++;
    mouseIsPressed = false;
  }

  //mosueclick popsize down
  if (mouseX > 760 && mouseX < 810 && mouseY > 145 && mouseY < 170 && mouseIsPressed == true) {
    popsize--;
    mouseIsPressed = false;
  }

  //mosue clicked Mutation up
  if (mouseX > 760 && mouseX < 810 && mouseY > 195 && mouseY < 220 && mouseIsPressed == true) {
    mutationRate += 0.01;
    mutation_show++;
    mouseIsPressed = false;
  }

  //mosue clicked Mutation down
  if (mouseX > 760 && mouseX < 810 && mouseY > 270 && mouseY < 295 && mouseIsPressed == true) {
    mutationRate -= 0.01;
    mutation_show--;
    mouseIsPressed = false;
  }

  //mosue clicked lifespan up
  if (mouseX > 685 && mouseX < 735 && mouseY > 325 && mouseY < 350 && mouseIsPressed == true) {
    lifespan += 50;
    mouseIsPressed = false;
  }

  //mosue clicked lifespan down
  if (mouseX > 685 && mouseX < 735 && mouseY > 400 && mouseY < 425 && mouseIsPressed == true) {

    mouseIsPressed = false;
  }

  //mosue clicked min up
  if (mouseX > 870 && mouseX < 920 && mouseY > 450 && mouseY < 475 && mouseIsPressed == true) {
    min_speed++;
    mouseIsPressed = false;
  }

  //mosue clicked min down
  if (mouseX > 870 && mouseX < 920 && mouseY > 525 && mouseY < 550 && mouseIsPressed == true) {
min_speed--;
    mouseIsPressed = false;
  }

  //mosue clicked max up
  if (mouseX > 880 && mouseX < 930 && mouseY > 575 && mouseY < 600 && mouseIsPressed == true) {
    max_speed++;
    mouseIsPressed = false;
  }

  //mosue clicked max down
  if (mouseX > 880 && mouseX < 930 && mouseY > 650 && mouseY < 675 && mouseIsPressed == true) {
    max_speed--;
    mouseIsPressed = false;
  }

  //button to go back to main menu


  fill(173, 216, 230);
  rect(250, 700, 700, 125);
  fill(255, 0, 0);
  textSize(26);
  text_mm = "Main Menu";
  textAlign(CENTER, BOTTOM);
  text(text_mm, 600, 780);

  if (mouseX > 250 && mouseX < 950 && mouseY > 700 && mouseY < 825) {
    fill(0, 255, 0);
    rect(250, 700, 700, 125);
    fill(255, 0, 0);
    textSize(26);
    textAlign(CENTER, BOTTOM);
    text(text_mm, 600, 780);
  }

  if (mouseX > 250 && mouseX < 950 && mouseY > 700 && mouseY < 825 && mouseIsPressed == true) {
    choice = 0;
    o1.x = 1300;
    o2.x = 1300 + 200;
    o3.x = 1300 + 400;
    mouseIsPressed = false;

  }

  //logic to keep popsize, mutationrate and lifespan at reasonable figures
  if (popsize < 1) {
    popsize = 1;
  } else if (popsize > 100) {
    popsize = 100;
  }

  if (mutationRate > 1) {
    mutationRate = 1;
    mutation_show = 100;
  } else if (mutationRate < 0) {
    mutationRate = 0;
    mutation_show = 0;
  }

  if (lifespan > 2000) {
    lifespan = 2000;
  } else if (lifespan < 200) {
    lifespan = 200;
  }

  
  //logic for maximum and minimum speed being reasonable figures and
  //max> min always
  if(min_speed < 1)
    {
      min_speed =1;
    }
  else if(min_speed > 99)
    {
      min_speed =99;
    }
  
  if(max_speed < 2)
    {
      max_speed =2;
    }
  else if(max_speed > 100)
    {
      max_speed =100;
    }
  
  
  if(min_speed > max_speed){
    max_speed++;
  }

}