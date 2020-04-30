var size = document.querySelectorAll(".drum").length;


for(var i = 0 ; i < size ; i++ ){
	

	document.querySelectorAll(".drum")[i].addEventListener("click" ,function (){
		var buttonHTML=this.innerHTML;
		makeSound(buttonHTML);
		bottonAnimate(buttonHTML);	
	})

	document.addEventListener("keypress",function(event){
		makeSound(event.key);
		bottonAnimate(event.key);	
	})




}


function makeSound(key){
	
		switch (key) {
			case "w":
				var sound=new Audio("sounds/tom-1.mp3");
				sound.play();
				break;

			case "a":
				var sound=new Audio("sounds/tom-2.mp3");
				sound.play();
				break;

			case "s":
				var sound=new Audio("sounds/tom-3.mp3");
				sound.play();
				break;

			case "d":
				var sound=new Audio("sounds/tom-4.mp3");
				sound.play();
				break;

			case "j":
				var sound=new Audio("sounds/snare.mp3");
				sound.play();
				break;

			case "k":
				var sound=new Audio("sounds/Bass.wav");
				sound.play();
				break;


			case "l":
				var sound=new Audio("sounds/crash.mp3");
				sound.play();
				break;

			default:
			
			
		}	
}

function bottonAnimate(buttonPressed){
	var activeKey= document.querySelector("."+buttonPressed).classList.toggle("pressed");
	setTimeout(function (){var activeKey= document.querySelector("."+buttonPressed).classList.remove("pressed");}, 150);
}
