function Player() {
  //player triangle co-ords
  this.x1 = 50;
  this.x2 = 50;
  this.x3 = 150;
  this.y1 = 350;
  this.y2 = 450;
  this.y3 = 400;
  crash_player = false;
  let text_crash, text_pa, text_mm;


  this.update = function() {
    
    //while game isnt paused do
    if (stop == false) {
      if (isKeyPressed == true) //when key is pressed
      {
        if (key == 'w') //when w is pressed go up
        {
          this.y1 -= 5;
          this.y2 -= 5;
          this.y3 -= 5;
        }

        if (key == 's') //when s is pressed go down
        {
          this.y1 += 5;
          this.y2 += 5;
          this.y3 += 5;
        }
      }
    }
    //check its in the border of the game
    if (this.y1 < 0) {
      this.y1= 0;
      this.y2 =100;
      this.y3 = 50;
    }
    else if (this.y2 > 900) {
      this.y1= 800;
      this.y2 =900;
      this.y3 = 850;
    }

    //check if hits obsatcle
    //d for each point on triangle
    //and d for each obstacle
    // so defined as dx_y where x is the point on the triangle
    //y is the obstacle

    //obstacle 1
    var d1_1 = dist(this.x1, this.y1, o1.x, o1.y);
    var d2_1 = dist(this.x2, this.y2, o1.x, o1.y);
    var d3_1 = dist(this.x3, this.y3, o1.x, o1.y);

    //obstacle 2
    var d1_2 = dist(this.x1, this.y1, o2.x, o2.y);
    var d2_2 = dist(this.x2, this.y2, o2.x, o2.y);
    var d3_2 = dist(this.x3, this.y3, o2.x, o2.y);
    //obstacle 3
    var d1_3 = dist(this.x1, this.y1, o3.x, o3.y);
    var d2_3 = dist(this.x2, this.y2, o3.x, o3.y);
    var d3_3 = dist(this.x3, this.y3, o3.x, o3.y);

    if (d1_1 < 50 || d2_1 < 50 || d3_1 < 50 ||
      d1_2 < 50 || d2_2 < 50 || d3_2 < 50 ||
      d1_3 < 50 || d2_3 < 50 || d3_3 < 50) {
      crash_player = true;
    }

    //if the user crashes
    if (crash_player == true) {
      pauser.update();
      stop = true;
      this.x1 = -500;
      this.x2 = -500;
      this.x3 = -500;
      this.y1 = 25;
      this.y2 = 875;
      var final_score = score + 1;
      
      o1.x = -2000;
      o2.x= -2000;
      o3.x= -2000;

      //Draw Play again screen
      fill(173, 216, 230);
      rect(250, 468, 700, 180);
      fill(255, 0, 0);
      textSize(26);
      text_pa = "Play Again";
      textAlign(CENTER, BOTTOM);
      text(text_pa, 600, 576);

      fill(173, 216, 230);
      rect(250, 684, 700, 180);
      fill(255, 0, 0);
      textSize(26);
      text_mm = "Main Menu";
      textAlign(CENTER, BOTTOM);
      text(text_mm, 600, 796);

      fill(255, 0, 0);
      textSize(50);
      text_crash = "You Crashed!\nFinal Score: " + final_score;
      textAlign(CENTER, BOTTOM);
      text(text_crash, 600, 176);
      textSize(26);

      //mouse hover
      if (mouseX > 250 && mouseX < 950 && mouseY > 468 && mouseY < 648) {
        fill(0, 255, 0);
        rect(250, 468, 700, 180);
        fill(255, 0, 0);
        textSize(26);
        textAlign(CENTER, BOTTOM);
        text(text_pa, 600, 576);
      }

      if (mouseX > 250 && mouseX < 950 && mouseY > 684 && mouseY < 864) {
        fill(0, 255, 0);
        rect(250, 684, 700, 180);
        fill(255, 0, 0);
        textSize(26);
        textAlign(CENTER, BOTTOM);
        text(text_mm, 600, 796);
      }

      //mouse click play again
      if (mouseX > 250 && mouseX < 950 && mouseY > 468 && mouseY < 648 && mouseIsPressed == true) {
        stop = false;
        stop_screen = false;
        choice = 1;
        score = 1;
        o1.x = 1300;
        o2.x = 1300 + 200;
        o3.x = 1300 + 400;
        o1.y = random(10, 890);
        o2.y = random(10, 890);
        o3.y = random(10, 890);
        player1 = new Player();


        mouseIsPressed = false;

      }

      if (mouseX > 250 && mouseX < 950 && mouseY > 684 && mouseY < 864 && mouseIsPressed == true) {
        choice = 0;
        crash_player = false;
        o1.x = 1300;
        o2.x = 1300 + 200;
        o3.x = 1300 + 400;
        mouseIsPressed = false;

      }

    } //end if crash

    //this else removes pause button appearing once the user has crashed
    else {

      pauser.update();
      pauser.render();

    }

  }

  this.render = function() {
    noStroke();
    fill(255, 0, 0, 150);
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
    //rect(this.pos.x,this.pos.y,50,50);
  }

  //function for  user in how to play section
  //not used elsewhere
  this.control = function() {
    if (isKeyPressed == true) //when s is pressed go down
    {
      if (key == 'w') //when w is pressed go up
      {
        this.y1 -= 5;
        this.y2 -= 5;
        this.y3 -= 5;
      }

      if (key == 's') //when s is pressed go down
      {
        this.y1 += 5;
        this.y2 += 5;
        this.y3 += 5;
      }
    }
    //check its in the border of the game
    if (this.y1 < 0) {
      this.y1 = 0;
      this.y2 = 200;
      this.y3 = 100;
    }
    if (this.y2 > 900) {
      this.y1 = 700;
      this.y2 = 900;
      this.y3 = 800;
    }

  }

}