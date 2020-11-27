

import processing.core.PApplet;


public class User
{
    UI ui;
    public float user_x1,user_x2,user_x3,user_y1,user_y2,user_y3;
    private int time_wait = 35;

    public User(UI ui, float user_x1, float user_y1, float user_x2 , float user_y2 ,float user_x3 , float user_y3)
    {
        this.ui = ui;
        this.user_x1 = user_x1;
        this.user_y1 = user_y1;
        this.user_x2 = user_x2;
        this.user_y2 = user_y2;
        this.user_x3 = user_x3;
        this.user_y3 = user_y3;

    }

    public void render()
    {
        ui.fill(255,0,0);
        ui.triangle(user_x1,user_y1,user_x2,user_y2,user_x3,user_y3);

    }


    public void update()
    {
        //if in top lane
        if(user_y1 == 50 && ui.checkKey('s'))
        {
            //mid lane co ordinates
            user_y1= 350;
            user_y2= 550;
            user_y3= 450;
            try {
                Thread.sleep(time_wait);                 //1000 milliseconds is one second.
            } catch(InterruptedException ex) {
                Thread.currentThread().interrupt();
            }
        }
        //if in top lane and going up
        else if(user_y1 == 50 && ui.checkKey('w'))
        {
            //bot lane co ordinates
            user_y1= 650;
            user_y2= 850;
            user_y3= 750;
            try {
                Thread.sleep(time_wait);                 //1000 milliseconds is one second.
            } catch(InterruptedException ex) {
                Thread.currentThread().interrupt();
            }
        }

        //if in mid lane
        else if(user_y1 == 350 && ui.checkKey('s'))
        {
            user_y1= 650;
            user_y2= 850;
            user_y3= 750;
            try {
                Thread.sleep(time_wait);                 //1000 milliseconds is one second.
            } catch(InterruptedException ex) {
                Thread.currentThread().interrupt();
            }
        }
        //if in top lane and going up
        else if(user_y1 == 350 && ui.checkKey('w'))
        {
            //top lane co ordinates
            user_y1= 50;
            user_y2= 250;
            user_y3= 150;
            try {
                Thread.sleep(time_wait);                 //1000 milliseconds is one second.
            } catch(InterruptedException ex) {
                Thread.currentThread().interrupt();
            }
        }

        //if in bot lane
        else if(user_y1 == 650 && ui.checkKey('s'))
        {
            //mid lane co ordinates
            user_y1= 50;
            user_y2= 250;
            user_y3= 150;
            try {
                Thread.sleep(time_wait);                 //1000 milliseconds is one second.
            } catch(InterruptedException ex) {
                Thread.currentThread().interrupt();
            }
        }
        //if in top lane and going up
        else if(user_y1 == 650 && ui.checkKey('w'))
        {
            //bot lane co ordinates
            user_y1= 350;
            user_y2= 550;
            user_y3= 450;
            try {
                Thread.sleep(time_wait);                 //1000 milliseconds is one second.
            } catch(InterruptedException ex) {
                Thread.currentThread().interrupt();
            }
        }
    }
}
