

import processing.core.PApplet;
import java.util.concurrent.ThreadLocalRandom;


public class UI extends PApplet
{

    User u;
    Obstacle o;
    float score = 0;
    String text ;

    Obstacle[] obstacles = new Obstacle[1];

    float y;
    float y_decider;

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

        for(int i =0; i< obstacles.length; i++)
        {  
            if(score % 100 == 0)
            {
                y_decider= ThreadLocalRandom.current().nextInt(1, 3 + 1);
                if(y_decider == 1 )
                {
                    y = 150;
                }
                else if(y_decider  == 2)
                {
                    y = 450;
                }
                else if(y_decider == 3)
                {
                    y = 750;
                }
            }
            obstacles[i]= new Obstacle(this, y);
        }
        

        
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


        for(int i =0; i< obstacles.length; i++)
        {
            obstacles[i].update();
            obstacles[i].render();
        }
    }
}
