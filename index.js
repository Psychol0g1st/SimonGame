function startGame(){
	if(!isStart){
		$("body").unbind();
		isStart = true;
		level = 1;
		sequence = [];
		newElement();
	}
}
function newElement(){
	$("h1").text("New element:");
	$("h4").text("Level: " + level);
	var pad = Math.floor(Math.random()*4);
	setTimeout(function(){
		$("."+pads[pad]).fadeOut(fadeSpeed).fadeIn(fadeSpeed);
		sounds[pad].play();
		sequence.push(pad);
		$("h1").text("Repeat All");
	}, 1000);
	clickNum = 0;
	
}
function checkRepeat(){
	if(isStart){
		sounds[sequence[clickNum]].play();
		$("."+this.className).fadeOut(200).fadeIn(200);
		if(pads[sequence[clickNum]] === this.className){
			clickNum++;
			if(clickNum === level){
				level++;
				if(level%2 === 0){
					fadeSpeed -= 10;
				}
				newElement();
			}
		} else {
			sounds[sounds.length-1].play();
			$("h1").text("You lose, press any key to restart");
			isStart = false;
			setTimeout(function(){
				$("body").click(startGame);
			}, 1000);
			
		}
	}
}

var isStart = false;
var level = 1;
var sequence = [];
var pads = ["green", "red", "yellow", "blue"];
var clickNum = 0;
var sounds = [];
var fadeSpeed = 200;
sounds.push(new Audio("sounds/green.mp3"));
sounds.push(new Audio("sounds/red.mp3"));
sounds.push(new Audio("sounds/yellow.mp3"));
sounds.push(new Audio("sounds/blue.mp3"));
sounds.push(new Audio("sounds/wrong.mp3"));

$("html").keydown(startGame);
$("body").click(startGame);
$("button").click(checkRepeat);