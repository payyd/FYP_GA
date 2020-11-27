import processing.core.PApplet;
import java.util.concurrent.ThreadLocalRandom;

public class Obstacle extends PApplet
{  
    UI ui;
    public float x,y,radius;
    
    private float speed = random(8,16);

    
    private float r = random(0,255);
    private float g = random(0,255);
    private float b = random(0,255);
    private int y_decider;

    float render_timer = 0;

    public Obstacle(UI ui, float y, float x)
    {
        this.ui = ui;
        this.y = y;
        this.x = x;
        radius = 50;
    }

    public void render()
    {
        ui.fill(r,g,b);
        ui.circle(x,y,radius);
    }

    public void update()
    {
        render_timer++;

        x =x - speed;
        if(x<-100)
        {
            x=1300;
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
            r = random(0,255);
            g = random(0,255);
            b = random(0,255);
            speed = random(8,16);
        }

        
    }
}