import processing.core.PApplet;
import java.util.concurrent.ThreadLocalRandom;


public class UI extends PApplet
{

    User u;
    Obstacle o1,o2,o3;
    float score = 0;
    String text ,text2;

    float y1,y2,y3,disto1,disto2,disto3;
    float y_decider;

    float x1 = 1300;
    float x2 = x1 + 600;
    float x3 = x2 +600;

    boolean[] keys = new boolean[1024];

    public void keyPressed()
    {
        keys[keyCode] = true;
    }
    
    public void keyReleased()
    {
        keys[keyCode] = false;
    }

    public boolean checkKey(int c)
    {
        return keys[c] || keys [Character.toUpperCase(c)];
    }

    public void settings() //make wider
    {
        size(1200, 900);
        //fullScreen(P3D); 
    }

    public void setup()
    {
        //create user
        u = new User(this, 50, 350, 50, 550, 225,450);
        //create obstacles

     
        
        y_decider= ThreadLocalRandom.current().nextInt(1, 3 + 1);
        if(y_decider == 1 )
        {
            y1 = 150;
            y2 = 450;
            y3 =750;
        }
        else if(y_decider  == 2)
        {
            y1 = 450;
            y2 = 750;
            y3 =150;
        }
        else if(y_decider == 3)
        {
            y1 = 750;
            y2= 150;
            y3 =450;
        }
        
        o1 = new Obstacle(this, y1,x1);
        o2 = new Obstacle(this, y2,x2);
        o3 = new Obstacle(this, y3,x3);
        

        
    }

    public void draw()
    {
        background(0);

        /*Using the functions "beginshape, endShape" and "vertex" to make a simple 3 lanes*/
        fill(0);
        stroke(255);


        //bottom lane
        beginShape();
            vertex(0, 899);
            vertex(0, 600);
            vertex(1199, 600);
            vertex(1199, 899);
        endShape();

        //middle lane
        beginShape();
            vertex(0, 600);
            vertex(0, 300);
            vertex(1199, 300);
            vertex(1199, 600);
        endShape();

        //top lane
        beginShape();
            vertex(0, 300);
            vertex(0, 0);
            vertex(1199, 0);
            vertex(1199, 300);
        endShape();

        stroke(255);
        fill(255);
        score++;
        text = "Score: " + score;
        textAlign(PApplet.CENTER, PApplet.BOTTOM);
        text(text, 100, 30);

        u.render();
        u.update();

        o1.render();
        o1.update();
        o2.render();
        o2.update();
        o3.render();
        o3.update();

        disto1 = dist(o1.x,o1.y,u.user_x3,u.user_y3);
        disto2 = dist(o2.x,o2.y,u.user_x3,u.user_y3);
        disto3 = dist(o3.x,o3.y,u.user_x3,u.user_y3);

        //text2 = "checking " + disto1;
        //fill(255);
        //text(text2, 200, 30);


        if(disto1 <10 || disto2 < 10 || disto3 <10)//check if obstacle hits user
        {
            score = 0;
        }
    }
}