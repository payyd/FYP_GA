import processing.core.PApplet;
import java.util.concurrent.ThreadLocalRandom;

public class Obstacle
{  
    UI ui;
    private float x,y,radius;
    private int y_decider;

    float render_timer = 0;

    public Obstacle(UI ui, float y)
    {
        this.ui = ui;
        this.y = y;
        x = 1300;
        radius = 50;
    }

    public void render()
    {
        ui.fill(0,255,0);
        ui.circle(x,y,radius);



    }

    public void update()
    {
        render_timer++;
        if(render_timer % 100 == 0)
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
        x--;
    }
}