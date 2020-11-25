

import processing.core.PApplet;


public class User
{
    UI ui;
    private float x1,x2,x3,y1,y2,y3;
    private int time_wait = 50;

    public User(UI ui, float x1, float y1, float x2 , float y2 ,float x3 , float y3)
    {
        this.ui = ui;
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;

    }

    public void render()
    {
        ui.fill(255,0,0);
        ui.triangle(x1,y1,x2,y2,x3,y3);

    }

    public void lane_down()
    {
        y1 = y1 + 300;
        y2 = y2 + 300;
        y3 = y3 + 300;
    }

    public void lane_up()
    {
        y1 = y1 - 300;
        y2 = y2 - 300;
        y3 = y3 - 300;
    }

    public void update()
    {
        //if in top lane
        if(y1 == 50 && ui.checkKey('s'))
        {
            //mid lane co ordinates
            y1= 350;
            y2= 550;
            y3= 450;
            try {
                Thread.sleep(time_wait);                 //1000 milliseconds is one second.
            } catch(InterruptedException ex) {
                Thread.currentThread().interrupt();
            }
        }
        //if in top lane and going up
        else if(y1 == 50 && ui.checkKey('w'))
        {
            //bot lane co ordinates
            y1= 650;
            y2= 850;
            y3= 750;
            try {
                Thread.sleep(time_wait);                 //1000 milliseconds is one second.
            } catch(InterruptedException ex) {
                Thread.currentThread().interrupt();
            }
        }

        //if in mid lane
        else if(y1 == 350 && ui.checkKey('s'))
        {
            y1= 650;
            y2= 850;
            y3= 750;
            try {
                Thread.sleep(time_wait);                 //1000 milliseconds is one second.
            } catch(InterruptedException ex) {
                Thread.currentThread().interrupt();
            }
        }
        //if in top lane and going up
        else if(y1 == 350 && ui.checkKey('w'))
        {
            //top lane co ordinates
            y1= 50;
            y2= 250;
            y3= 150;
            try {
                Thread.sleep(time_wait);                 //1000 milliseconds is one second.
            } catch(InterruptedException ex) {
                Thread.currentThread().interrupt();
            }
        }

        //if in bot lane
        else if(y1 == 650 && ui.checkKey('s'))
        {
            //mid lane co ordinates
            y1= 50;
            y2= 250;
            y3= 150;
            try {
                Thread.sleep(time_wait);                 //1000 milliseconds is one second.
            } catch(InterruptedException ex) {
                Thread.currentThread().interrupt();
            }
        }
        //if in top lane and going up
        else if(y1 == 650 && ui.checkKey('w'))
        {
            //bot lane co ordinates
            y1= 350;
            y2= 550;
            y3= 450;
            try {
                Thread.sleep(time_wait);                 //1000 milliseconds is one second.
            } catch(InterruptedException ex) {
                Thread.currentThread().interrupt();
            }
        }
    }
}
