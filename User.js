function User(dna) {

  this.pos = createVector(50, 350);
  this.pos2 = createVector(50, 450);
  this.pos3 = createVector(150, 400);
  this.vel = createVector();
  this.crash = false;

  if (dna) {
    this.dna = dna;
  } else {
    this.dna = new DNA();
  }

  this.count = 0;
  this.fitness = 0;
  this.gamescore = 0;

  //receive force and change velocity
  this.applyForce = function(force) {
    this.vel.add(force);
  }

  //function to calculate fitness
  //score divided by max score
  this.calcFitness = function() {
    this.fitness = this.gamescore / lifespan;
  }

  this.update = function() {
    this.applyForce(this.dna.genes[this.count]);
    this.count++;

    //if the user hasnt crashed
    if (!this.crashed) {
      this.gamescore++;
      this.pos.add(this.vel);
      this.pos2.add(this.vel);
      this.pos3.add(this.vel);
      if (this.gamescore == lifespan - 1) {
        this.fitness *= 100;
        survivors++;
      }
    }


    //check its in the border of the game
    if (this.pos.y < 0) {
      //this.crashed = true;
      this.pos.y=0;
      this.pos2.y=100;
      this.pos3.y=50;
    }
    if (this.pos2.y > 900) {
      //this.crashed = true;
      this.pos2.y=900;
      this.pos.y= 800;
      this.pos3.y = 850;
    }
    //check if hits obsatcle
    //d for each point on triangle
    //and d for each obstacle
    // so defined as dx_y where x is the point on the triangle
    //y is the obstacle

    //obstacle 1
    var d1_1 = dist(this.pos.x, this.pos.y, o1.x, o1.y);
    var d2_1 = dist(this.pos2.x, this.pos2.y, o1.x, o1.y);
    var d3_1 = dist(this.pos3.x, this.pos3.y, o1.x, o1.y);

    //obstacle 2
    var d1_2 = dist(this.pos.x, this.pos.y, o2.x, o2.y);
    var d2_2 = dist(this.pos2.x, this.pos2.y, o2.x, o2.y);
    var d3_2 = dist(this.pos3.x, this.pos3.y, o2.x, o2.y);

    //obstacle 3
    var d1_3 = dist(this.pos.x, this.pos.y, o3.x, o3.y);
    var d2_3 = dist(this.pos2.x, this.pos2.y, o3.x, o3.y);
    var d3_3 = dist(this.pos3.x, this.pos3.y, o3.x, o3.y);

    if (d1_1 < hit_d || d2_1 < hit_d || d3_1 < hit_d ||
      d1_2 < hit_d || d2_2 < hit_d || d3_2 < hit_d ||
      d1_3 < hit_d || d2_3 < hit_d || d3_3 < hit_d) {
      this.crashed = true;
    }

    //if the user crashes
    if (this.crashed) {
      this.pos.x = -500;
      this.pos2.x = -500;
      this.pos3.x = -500;
      this.pos.y = 25;
      this.pos2.y = 875;
      this.fitness /= 100;
    }

  }

  this.render = function() {
    noStroke();
    fill(255, 0, 0, 150);
    triangle(this.pos.x, this.pos.y, this.pos2.x, this.pos2.y, this.pos3.x, this.pos3.y);
  }
}