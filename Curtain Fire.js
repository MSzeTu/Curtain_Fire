/* ------__---------------Matthew Sze-Tu
--------(_.\--------------Period 2------
----------\.\^^_----------Gravity-------
-----------\.____\_--------20 Points-----
------------l--l.-->------May 11th 2016*/
      
	var canvas;
	var c;
	var midx;
	var midy;
	var pi = Math.PI;
	var dx = 5; //number of pixels to move
	var dy = 5;
	var scalex = 0; //keep track if controller moves
	var scaley = 0; 
	var pointer = {x:400, y:300} //circle indicated where they are 
	var time=0; 
	var buttons = []; //game controller buttons 
	var axes = []; //game controller axes
	var count =0;
	var answer;
	var shot = false;
	var myColor = "rgb(255,0,0)";
	var red = 255; 
	var green = 0;
	var blue = 0;
	var change = 3; 
	var dred = 0;
	var dgreen = 0;
	var dblue = change;
	var dist; //distance between projectile and player
	var ball = {x:15, y:580, dx:7, dy:-7, select:true};
	var ball2 = {x:15, y:15, dx:7, dy:7, select:false};
	var ball3 = {x:785, y:15, dx:-7, dy:7, select:false};
	var ball4 = {x:785, y:580, dx:-7, dy:-7, select:false};
	var balls = [ball, ball2, ball3, ball4];
	var ballcount =1;
	var delay =0;
    function initialize() {
        canvas = document.getElementById( "canvas" );
        if ( canvas && canvas.getContext ) {
            c = canvas.getContext( "2d" );

			//sounds 
			 pew = document.getElementById("pew");
			 Night = document.getElementById("Night");
			// Center of screen
			window.addEventListener("gamepadconnected", function (e) //check gamepad
            {
				console.log(e.gamepad.index);
			});	

			window.addEventListener("gamepaddisconnected", function (e) //check gamepad
			{
				console.log(e.gamepad.index);
			});
			midx = canvas.width/2;
			midy = canvas.height/2;
			            			
			//drawScreen();   // call the function to draw once
			window.setInterval("drawScreen()",1000/30);  // call repeatedly
			
        } // end if
    } // initialize()
	  
	  	  
	function drawScreen() {
		myColor = "rgb("+red+","+green+", "+blue+")";
	 
	  // Background
	  
	  c.beginPath();
	  c.fillStyle = "gray";
	  c.fillRect(0,0, canvas.width, canvas.height);
	  c.closePath();
	  c.beginPath(); //draw player
	  c.arc(pointer.x, pointer.y, 5, 0, 2*pi);
      c.fillStyle = "red";
	  c.fill();
	  Night.play();
	  c.closePath(); 
	 
	   
	  gamePadUpdate();
	  axesMove();
	  buttonPress();
	  onscreen();
	  color1();
	  drawshot();
	  
	  //make things move
	  pointer.x = pointer.x+scalex*dx;
	  pointer.y = pointer.y+scaley*dy;
	  


	 
	  
		 
	 
	  
	 
	} // end drawScreen
		
		
		