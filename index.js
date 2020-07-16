function startGame(){
	if(!isStart){
		isStart = true;
		level = 1;
		sequence = [];
		newElement();
	}
}
function newElement(){
	$("h1").text("New element:");
	$("h4").text("Level: " + level);
	setTimeout(function(){
		var pad = Math.floor(Math.random()*4);
		$("."+pads[pad]).fadeOut(100).fadeIn(100);
		sounds[pad].play();
		sequence.push(pad);
	}, 1000);
	clickNum = 0;
	
}
function checkRepeat(){
	if(isStart){
		$("h1").text("Repeat all");
		$("."+this.className).fadeOut(100).fadeIn(100);
		if(pads[sequence[clickNum]] === this.className){
			sounds[sequence[clickNum]].play();
			clickNum++;
			if(clickNum === level){
				level++;
				newElement();
			}
		} else {
			sounds[sounds.length-1].play();
			$("h1").text("You lose, press any key to restart");
			isStart = false;
		}
	}
}

var isStart = false;
var level = 1;
var sequence = [];
var pads = ["green", "red", "yellow", "blue"];
var clickNum = 0;
var sounds = [];
sounds.push(new Audio("sounds/green.mp3"));
sounds.push(new Audio("sounds/red.mp3"));
sounds.push(new Audio("sounds/yellow.mp3"));
sounds.push(new Audio("sounds/blue.mp3"));
sounds.push(new Audio("sounds/wrong.mp3"));

$("html").keydown(startGame);
$("html").click(startGame);
$("button").click(checkRepeat);