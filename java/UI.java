

import processing.core.PApplet;


public class UI extends PApplet{

    boolean[] keys = new boolean[1024];

    public void keyPressed()
    {
        keys[keyCode] = true;
    }
    
    public void keyReleased()
    {
        keys[keyCode] = true;
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

    }
}
