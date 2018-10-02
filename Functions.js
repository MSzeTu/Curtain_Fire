/****************************************************/
/*  Functions!        */
/****************************************************/
		function gamePadUpdate() //update the gamepad. 
			{
				var gamepads = navigator.getGamepads();    // get the info from a gamepad
				if (gamepads && gamepads.length > 0)    // we have some info!
				{
					var gamepad = gamepads[0];    // this is the first gamepad - use [1] for the second gamepad
					buttons = [];   // clear out the array
					for (var i = 0; i < gamepad.buttons.length; i++)    // loop through all the buttons
					{
						buttons[i] = gamepad.buttons[i].pressed;   // store if button was pressed
					}	
					axes = [];
					for (var i = 0; i < gamepad.axes.length; i++)   // loop through all axes
					{
						axes[i] = gamepad.axes[i];   // store the value of the axes
					}
				}
			}
	
		function buttonPress() 
		{
		if (buttons[1]) //button 1 speeds up player
		{
			dx=25;
			dy=25;
		}
		if (buttons[2]) //button 2 slows down player
		{
			dx = 3;
			dy = 3;
		}
		if (buttons[5]) //button 5 resets speed
		{
			dx=7;
			dy=7;
		}
		if (buttons[0]) //fire projectile
		{
			if(delay%10==0)
			{
				pew.play();
			if(ballcount<4)
				ballcount++;
			}
			delay++;
		}
		}
		
		function axesMove() //move player
		{
			if (axes.length>0)
			{
				scalex = axes[0]
				scalex = scalex.toFixed(1);
			}
			if (axes.length>1)
			{
				scaley = axes[1]
				scaley = scaley.toFixed(1);
			}
		}
		
	
		function onscreen() //move player if they go off screen
		{
 
			 if (pointer.x>canvas.width+10)
			 {
				 pointer.x = -5;
			 }
			 if (pointer.x <-10)
			 {
				 pointer.x = 805;
			 }  
			 if (pointer.y>canvas.height+10)
			 {
				 pointer.y = -5;
			 }
			 if (pointer.y<-10)
			 {
				 pointer.y = 605;
			 }
		}
		function color1() //set colors 
		{
			//projectile colors! 
			  red = red+dred;
			  blue = blue+dblue;
			  green = green+dgreen;
			  
			  if (blue > 255) //Red to Blue
			  {
				  blue = 255;
				  dblue = 0;
				  dred = -change;
			  }
			  
			  if (red <0) //blue to cyan
			  {
				  red = 0;
				  dred = 0;
				  dgreen = change;
			  }
			  
			  if (green > 255) //Cyan to Green
			  {
				  green = 255;
				  dgreen = 0;
				  dblue = -change;
			  }
			   
			   if (blue < 0) //Green to Yellow
			  {
				  blue = 0;
				  dblue = 0;
				  dred = change;
			  }
			  
			  if (red > 255) //Yellow to Orange
			  {
				  red = 255;
				  dred = 0;
				  dgreen = -change;
			  }
			  
			  if (green <0) //Orange to Red
			  {
				  green = 0;
				  dgreen = 0;
				  dblue = change;
			  }
		}
		function drawshot() //draw projectiles, and set their properties 
		{
			for (var i=0; i<ballcount; i++)
			{
			  //draw projectile
			  var b= {};
			  b = balls[i];
			  c.beginPath();
			  console.log(b);
			  c.fillStyle = myColor;
			  c.strokeStyle = "blue";
			  c.arc(b.x, b.y ,10, 0, pi*2);
			  c.fill();
			  c.stroke();
			  c.closePath();
			  b.x=b.x+b.dx;
			  b.y=b.y+b.dy;
			  //bounce projectiles
			 if (b.x > canvas.width-10)
			 {
				 b.dx = -b.dx;	 
			 }
			 if (b.y > canvas.height-10)
			 {
				 b.dy = -b.dy;  
			 }
			 if (b.x < 10)
			 {
				b.dx = -b.dx; 
			 }	 
			 if (b.y < 10)
			 {
				b.dy = -b.dy; 
			 }
			 dist = Math.sqrt((Math.pow(b.x-pointer.x,2)+(Math.pow(b.y-pointer.y,2))));//distance
			  //lose game
			 if (dist <=15)
			 {
				 dx=0;
				 dy=0;
				 b.dx=0;
				 b.dy=0;
			 } 
			  if (i==0)
			  {
			  //start score 
			  c.beginPath(); 
			  c.fillStyle = "ghostwhite" ; 
			  c.font = "bold 50pt Comic Sans MS" ;
			  count++;
			  if(count%30 == 0)
			  {
				  time++
			  }
			  c.fillText(time, 25, 50);
			  c.fill();
			  c.closePath(); 
			  }
			  }
			}
		
		