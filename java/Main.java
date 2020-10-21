public class Main
{	

	public void startGame()
	{
		String[] a = {"MAIN"};
        processing.core.PApplet.runSketch( a, new Setup());
		
	}

	public static void main(String[] args)
	{
		Main main = new Main();
		main.startGame();			
	}
}