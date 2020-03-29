  var min = 0;
  var max = 100;
  var counterComputer = 0;
  var counterGuess = 0;
  var comPoint = 160;
  var guessPoint = 160;
  var randomNumber = Math.floor(Math.random() * 101);
  randomNumber = parseInt(randomNumber);

  function enforceMinMax(el){
	  if(el.value != ""){
	    if(parseInt(el.value) < parseInt(el.min)){
	      el.value = el.min;
	    }
	    if(parseInt(el.value) > parseInt(el.max)){
	      el.value = el.max;
	    }
	  }
	}
  
  function checkFunction(id,num){
	  if(id === "yes_btn"){
		  counterGuess = counterComputer;
		  $("header").remove();
		  if(counterGuess > 1){
		  $("#container").html('<p>Now it is your turn.You have '+ counterGuess + ' chances. </p>');
		  } else {
		  $("#container").html('<p>Now it is your turn.You have '+ counterGuess + ' chance. </p>');
		  }
		  $("body").append('<header>Points:' + guessPoint + ' </header>');
		  $("p").append('<br>I imagine the number between 0 - 100.');
		  $("p").append('<br>Try to guess it.');
		  $("p").append('<br>Enter number: <input type="number" id="userGuess" min="0" max="100" onkeyup="enforceMinMax(this)"></input>');
		  $("#container").append(' <button id="guessBtn">SUBMIT</button');
	  } else if(id === "no_btn") {
		  counterComputer++;
		  comPoint-=10;
		  $("#container").html('<p> Are your number less than ' + num +  ' ? </p>');
		  $("body").append('<header>Points: <span id="incremCount">-10</span> </header>');
		  $("#incremCount").animate(
			      {
			    	fontSize:"5vw",
			      },1000,function()
                    {
                        $(this).remove();
                        $("header").html('Points:' + comPoint);
                    });
		  $("#container").append(' <button id="less">YES</button ');
		  $("#container").append(' <button id="hight">NO</button ');
	  } else if(id === "hight"){
		  counterComputer++;
		  comPoint-=10;
		  $("#container").html('<p> Are your number  ' + num +  ' ? </p>');
		  $("body").append('<header>Points: <span id="incremCount">-10</span> </header>');
		   $("#incremCount").animate(
				      {
				    	fontSize:"5vw",
				      },1000,function()
	                    {
	                        $(this).remove();
	                        $("header").html('Points:' +  comPoint);
	                    });
		  $("#container").append(' <button id="yes_btn" class="btn">YES</button');
	 	  $("#container").append('<button id="no_btn" class="btn">NO</button');
	  } else if(id === "less"){
		  counterComputer++;
		  comPoint -=10;
		  $("#container").html('<p> Are your number  ' + num +  ' ? </p>');
		  $("body").append('<header>Points: <span id="incremCount">-10</span> </header>');
		   $("#incremCount").animate(
				      {
				    	fontSize:"5vw",
				      },1000,function()
	                    {
	                        $(this).remove();
	                        $("header").html('Points:' +  comPoint);
	                    });
		  $("#container").append(' <button id="yes_btn" class="btn">YES</button');
	 	  $("#container").append('<button id="no_btn" class="btn">NO</button');
	  } 
  }
  function checkNumber(id,num){
	  num = parseInt(num);
	  if(id === "guessBtn"){
		   if(num === randomNumber){
			   $("header").remove();
			  counterComputer--;
			  $("#container").html('<p>Score</p>');
			  $("p").append('<br>Computer VS Guest');
			  $("p").append('<br>Points:'+ comPoint + " - " + guessPoint + '<br>');
			  		if(guessPoint === comPoint){
			  			$("p").append('NO WINNER!!!');
			  		} else if(guessPoint > comPoint){
			  			$("p").append('YOU WIN!!!');
			  		} else {
			  			$("p").append('I WIN!!!');
			  		}
			  $("p").append('<br>Play again!');
			  $("#container").append(' <button id="playAgain" class="btn">YES</button');
  		 	  $("#container").append('<button id="notPlay" class="btn">NO</button');
		   }
		  else {
			  counterGuess--;
			  		if(counterGuess === 0){
			  			guessPoint = 0;
			  			$("header").remove();
			  			$("#container").html('<p>Score</p>');
			  			$("p").append('<br>Computer VS Guest');
			  			$("p").append('<br>Points:' + comPoint + " - " + guessPoint + '<br>');
			  			$("p").append('The number was:' + randomNumber);
			  			$("p").append('<br>I WIN!!!');
			  			$("p").append('<br>Play again!');
			  			 $("#container").append(' <button id="playAgain" class="btn">YES</button');
			  		 	  $("#container").append('<button id="notPlay" class="btn">NO</button');
			  			
			  		}
			  		else if (counterGuess > 1){
			  			guessPoint -=10;
			  			$("body").append('<header>Points: <span id="incremCount">-10</span> </header>');
			 		   $("#incremCount").animate(
			 				      {
			 				    	fontSize:"5vw",
			 				      },1000,function()
			 	                    {
			 	                        $(this).remove();
			 	                        $("header").html('Points:' +  guessPoint);
			 	                    });
			  			
			  			
		  				$("#container").html('<p>Sorry,try again.You have ' + counterGuess + ' chances.</p>');
		  				if(num > randomNumber){
		  					$("p").append('<br>Your number is great than imagine number.');
		  				} else {
		  					$("p").append('<br>Your number is less than imagine number.');
		  				}
		  				
		  				$("p").append('<br>Enter number: <input type="number" id="userGuess" min="0" max="100" onkeyup="enforceMinMax(this)"></input>');
		  		    	$("#container").append(' <button id="guessBtn">SUBMIT</button'); 
		  			} else {
		  				guessPoint -=10;
		  				$("body").append('<header>Points: <span id="incremCount">-10</span> </header>');
		  				$("#incremCount").animate(
			 				      {
			 				    	fontSize:"5vw",
			 				      },1000,function()
			 	                    {
			 	                        $(this).remove();
			 	                        $("header").html('Points:' +  guessPoint);
			 	                    });
		  				
		  				
		  				$("#container").html('<p>Sorry,try again.You have ' + counterGuess + ' chance.</p>'); 
		  				if(num > randomNumber){
		  					$("p").append('<br>Your number is great than imagine number.');
		  				} else {
		  					$("p").append('<br>Your number is less than imagine number.');
		  				}
		  				
		  				$("p").append('<br>Enter number: <input type="number" id="userGuess" min="0" max="100" onkeyup="enforceMinMax(this)"></input>');
		  			    $("#container").append(' <button id="guessBtn">SUBMIT</button'); 
		  			}
		  }
	  }
  }
  
  $(document).ready(function () { 
	  $(document).delegate('.btn', 'click', function() {
		  checkFunction(this.id,parseInt((min+max)/2));
		  
	  });
	  $(document).delegate('#go', 'click', function() {
		  counterComputer++;
		  $("#container").html('<p> Are your number  ' + parseInt((min+max)/2) +  ' ? </p>');
		  $("body").append('<header>Points:' + comPoint + ' </header>');
		  $("#container").append(' <button id="yes_btn" class="btn">YES</button');
	 	  $("#container").append('<button id="no_btn" class="btn">NO</button');
	  });
	  
	  $(document).delegate('#hight', 'click', function() {
		  min = (min + max)/2;
		  min = parseInt(min);
		  if((min + 1) === max){
			  min = max;
		  }
		  if(min !== max){
				  checkFunction(this.id,parseInt((min+max)/2));
		  } else {
			  $("#container").html("You lied to me.Play again but play FAIR!");
		  }
	  });
	  $(document).delegate('#less', 'click', function() {
		  max = (min+max)/2;
		  max = parseInt(max);
		  if((max - 1 ) === min){
			  max = min;
		  }
		  if(min !== max){
		  checkFunction(this.id,parseInt((min+max)/2)); 
		  } else {
			  $("#container").html("You lied to me.Play again but play FAIR!");
		  }
	  });
	  
	  $(document).delegate('#guessBtn', 'click', function() {
		  checkNumber(this.id,$("#userGuess").val());
	  });
	  
	  $(document).delegate('#playAgain', 'click', function() {
		  location.reload();
	  });
	  $(document).delegate('#notPlay', 'click', function() {
		  $("#container").html("Thanks for playing!");
	  });
	  
	  
  });