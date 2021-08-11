function Population() {
  
  //arrays to store the user's in
  this.users = [];
  this.matingpool = [];

  //initial population of user
  for (var i = 0; i < popsize; i++) {
    this.users[i] = new User();
  }

  
  //evaluating each 
  this.evaluate = function() {

    var maxFit = 0;
    var avgFit = 0;
    for (var i = 0; i < popsize; i++) {
      this.users[i].calcFitness();

      if (this.users[i].fitness > maxFit) {
        maxFit = this.users[i].fitness;
      } //end if

    } //end for

    for (var i = 0; i < popsize; i++) {
      this.users[i].fitness /= maxFit;
      avgFit += this.users[i].fitness;
    } //all values of fitness will be between 0-1



    this.matingpool = []; //clear after each reproduce

    for (var i = 0; i < popsize; i++) {
      var n = this.users[i].fitness * 100;
      for (j = 0; j < n; j++) {
        this.matingpool.push(this.users[i]);
      } //end for j
    } //end for i

    avgFit = avgFit / popsize;

    maxFitP.html("Maxfitness of this generation is: " + maxFit);
    avgFitP.html("Average Fitness: " + avgFit);
    survivorsP.html("Number of surviving bots = " + survivors + "/ " + popsize);
  }

  this.selection = function() {
    var newUsers = [];
    for (var i = 0; i < this.users.length; i++) {
      var partnerA = random(this.matingpool).dna;
      var partnerB = random(this.matingpool).dna;
      var child = partnerA.crossover(partnerB);
      child.mutation();
      newUsers[i] = new User(child);
    }
    this.users = newUsers;
  }



  this.run = function() {
    for (var i = 0; i < popsize; i++) {
      this.users[i].render();
      if (stop == false) {
        this.users[i].update();
      }
    }
  }
}