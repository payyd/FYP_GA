function Pause_menu() {
  stop = false;
  stop_screen = false;

  this.update = function() {

    //while paused
    if (stop == true) {
      score--;

      o1.x = o1.x + o1_speed;
      o2.x = o2.x + o2_speed;
      o3.x = o3.x + o3_speed;


    }

    if (stop_screen == true) {

      //Draw Pause screen
      //restart
      fill(173, 216, 230);
      rect(250, 325, 700, 125);
      fill(255, 0, 0);
      textSize(26);
      text_rs = "Restart";
      textAlign(CENTER, BOTTOM);
      text(text_rs, 600, 410);

      fill(173, 216, 230);
      rect(250, 500, 700, 125);
      fill(255, 0, 0);
      textSize(26);
      text_pa = "Resume";
      textAlign(CENTER, BOTTOM);
      text(text_pa, 600, 585);

      fill(173, 216, 230);
      rect(250, 675, 700, 125);
      fill(255, 0, 0);
      textSize(26);
      text_mm = "Main Menu";
      textAlign(CENTER, BOTTOM);
      text(text_mm, 600, 760);

      fill(255, 0, 0);
      textSize(50);
      text_crash = "You Paused";
      textAlign(CENTER, BOTTOM);
      text(text_crash, 600, 176);
      textSize(26);

      //mouse hover
      if (mouseX > 250 && mouseX < 950 && mouseY > 325 && mouseY < 450) {
        fill(0, 255, 0);
        rect(250, 325, 700, 125);
        fill(255, 0, 0);
        textSize(26);
        textAlign(CENTER, BOTTOM);
        text(text_rs, 600, 410);
      }

      if (mouseX > 250 && mouseX < 950 && mouseY > 500 && mouseY < 625) {
        fill(0, 255, 0);
        rect(250, 500, 700, 125);
        fill(255, 0, 0);
        textSize(26);
        textAlign(CENTER, BOTTOM);
        text(text_pa, 600, 585);
      }

      if (mouseX > 250 && mouseX < 950 && mouseY > 675 && mouseY < 800) {
        fill(0, 255, 0);
        rect(250, 675, 700, 125);
        fill(255, 0, 0);
        textSize(26);
        textAlign(CENTER, BOTTOM);
        text(text_mm, 600, 760);
      }

      //mouse click
      //restart
      if (mouseX > 250 && mouseX < 950 && mouseY > 325 && mouseY < 450 && mouseIsPressed == true) {
        stop = false;
        stop_screen = false;
        o1.x = 1300;
        o2.x = 1300 + 200;
        o3.x = 1300 + 400;
        o1.y = random(10, 890);
        o2.y = random(10, 890);
        o3.y = random(10, 890);
        
        //if gameplay
        if (choice == 1) {

          player1 = new Player();
          play();
        } 
        //if GA running
        else if (choice == 3 || choice == 4) {
          y_decider = o1.y;
          y2_decider = o2.y;
          y3_decider = o3.y;
          population = new Population();
          generationNum = 1;
        }
        score = 1;

        mouseIsPressed = false;

      }

      if (mouseX > 250 && mouseX < 950 && mouseY > 500 && mouseY < 625 && mouseIsPressed == true) {
        stop = false;
        stop_screen = false;
      }

      //main menu
      if (mouseX > 250 && mouseX < 950 && mouseY > 675 && mouseY < 800 && mouseIsPressed == true) {
        choice = 0;
        o1.x = 1300;
        o2.x = 1300 + 200;
        o3.x = 1300 + 400;
        mouseIsPressed = false;

      }
    }
  }


  //draw pause button
  this.render = function() {

    fill(173, 216, 230);
    //pause button
    rect(1000, 0, 200, 30);
    fill(255, 0, 0);
    textSize(18);
    text_ps = "Pause";
    textAlign(CENTER, BOTTOM);
    text(text_ps, 1075, 25);

    //mouse hover
    if (mouseX > 1000 && mouseX < 1300 && mouseY > 0 && mouseY < 30) {
      fill(0, 255, 0);
      //pause button
      rect(1000, 0, 200, 30);
      fill(255, 0, 0);
      textSize(18);
      text_ps = "Pause";
      textAlign(CENTER, BOTTOM);
      text(text_ps, 1075, 25);
    }

    //mouse click pause game
    if (mouseX > 1000 && mouseX < 1300 && mouseY > 0 && mouseY < 30 && mouseIsPressed == true) {

      stop = true;
      stop_screen = true;

    }

  }
}