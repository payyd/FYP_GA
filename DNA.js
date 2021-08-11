

function DNA(genes){
  
  //if receveive genes create object from those genes
  if(genes){
    this.genes = genes;
  }
  else{ //create random genes
    this.genes = [];
    var y_mover;
    for(var i = 0; i<lifespan; i++)
      {
        y_mover = random(-3,3);
        this.genes[i] = createVector(0,y_mover);
        this.genes[i].setMag(0.2);
      }
  }
  
  //function to reproduce 2 parent genes
  this.crossover = function(partner){
    var newgenes = [];
    var mid = floor(random(this.genes.length))
    for(var i=0;i< this.genes.length; i++){
      if(i>mid)
        {
          newgenes[i] = this.genes[i];
        }else{
          newgenes[i] = partner.genes[i];
        }
    }
    return new DNA(newgenes);
  }
  
  //function to apply mutation after reproduction
  this.mutation = function(){
    for(var i=0;i< this.genes.length; i++){
      if(random(1) < mutationRate){
        y_mover = random(-3,3);
        this.genes[i] = createVector(0,y_mover);
        this.genes[i].setMag(0.3);
      }
    }
  }
}