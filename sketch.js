//global variables


let img;
let text1,text2;
let text_b1,text_b2,text_b3,text_b4;
let score = 0;
let y_decider,y2_decider,y3_decider;
var o1,o2,o3;
var obstacle_vel;
var o1_speed, o2_speed, o3_speed;
var crashed_number=0;
var popsize =25;
let u;
let player1;
let player2;
let pauser;

var survivors = 0;
var hit_d = 50;

var population;
var lifespan = 450; //time before next reproduction
var generationNum = 1;
var choice = 0;
var mutationRate = 0.05;
var mutation_show =5;
var min_speed = 8;
var max_speed = 16;

function setup() {
  
  //background image
  img = loadImage("background.jpg");
  createCanvas(1200, 900);

  //paragraphs for displaying stats to screen
  maxFitP = createP();
  avgFitP = createP();
  survivorsP = createP();
  
  //giving obtstacles a random initial y value
  
  y_decider = random(10,890);  
  o1 = createVector(1300,y_decider);
  
  y2_decider = random(10,890);  
  o2 = createVector(1300+200,y2_decider);
  
  y3_decider = random(10,890);  
  o3 = createVector(1300+200+200,y3_decider);
  
  //speed of each obstacle
  o1_speed = random(min_speed,max_speed);
  o2_speed = random(min_speed,max_speed);
  o3_speed = random(min_speed,max_speed);
  
  //initialise objects
  population = new Population();
  player1 = new Player();
  player2 = new Player();
  pauser = new Pause_menu();
}


function draw() {
  
  //setup background
  background(0);
  image(img,0,0);
  
  //menu system choices 0-5, default 0
  //main menu
  if(choice == 0){
    population = new Population();
    score = 1;
    stop_screen = false;
    stop = false;
    o1_speed = random(min_speed,max_speed);
    o2_speed = random(min_speed,max_speed);
    o3_speed = random(min_speed,max_speed);
    main_menu();
    
  }
  
  //Play
  else if(choice ==1){
    play();
  }
  
  //how to play
  else if(choice ==2){
    htp();
  }
  
  //Run Genetic Alg
  else if(choice ==3){
    genAlg();   
  }
  
  //Genetic Algorithm With Fixed Obstacles
  else if(choice == 4){
    genAlg_Fixed();
  }
  
  //Settings
  else if(choice == 5){
    setting_menu();
  }

}
