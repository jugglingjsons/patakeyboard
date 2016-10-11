    	var currentSetI = 0;
    	var nextSetI = 1;
		var previousSetI = 5;
		var set =["A","B","C","D","E","F"];
		var bgcolors=["#FFF","#EEE","#DDD","#CCC","#BBB","#AAA"];
        var letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
   		var generateHowl = function(target){
  			  return "sounds/" + set[currentSetI] + "/" + keySounds[target];
			}
var keySounds={m:"piston-3.mp3",n:"zig-zag.mp3",b:"wipe.mp3",v:"veil.mp3",c:"ufo.mp3",x:"timer.mp3",z:"suspension.mp3",l:"strike.mp3",k:"squiggle.mp3",j:"splits.mp3",h:"prism-3.mp3",g:"prism-2.mp3",f:"prism-1.mp3",d:"piston-2.mp3",a:"pinwheel.mp3",s:"piston-1.mp3",q:"bubbles.mp3", w:"clay.mp3",e:"confetti.mp3",r:"corona.mp3",t:"dotted-spiral.mp3",y:"flash-1.mp3",u:"flash-2.mp3",i:"flash-3.mp3",o:"glimmer.mp3",p:"moon.mp3" };
   var keysData = {
    q: {
		sound: new Howl({
  		src: "sounds/" + set[currentSetI] + "/"+ keySounds["q"] 
		}),
		color: '#ABB7B7'
	},
	w: {
		sound: new Howl({
  		src: generateHowl("w")
		}),
		color: '#6C7A89'
	},
	e: {
		sound: new Howl({
  		src: generateHowl("e")
		}),
		color: '#F9690E'
	},
	r: {
		sound: new Howl({
  		src: generateHowl("r")
		}),
		color: '#F5AB35'
	},
		t: {    
		sound: new Howl({
  		src: generateHowl("t")
		}),
		color: '#2ABB9B'
	},
	y: {
		sound: new Howl({
  		src: generateHowl("y")
		}),
		color: '#1E824C'
	},
	u: {
		sound: new Howl({
  		src: generateHowl("u")
		}),
		color: '#86E2D5'
	},
	i: {
		sound: new Howl({
  		src: generateHowl("i")
		}),
		color: '#1BA39C'
	},
	o: {
		sound: new Howl({
		src: generateHowl("o")
		}),
		color: '#1F3A93'
	},
	p: {
		sound: new Howl({
  		src: generateHowl("p")
		}),
		color: '#67809F'
	},
	a: {
		sound: new Howl({
  		src: generateHowl("a")
		}),
		color: '#6BB9F0'
	},
	s: {
		sound: new Howl({
  		src: generateHowl("s")
		}),
		color: '#22313F'
	},
		d: {
		sound: new Howl({
  		src: generateHowl("d")
		}),
		color: '#e74c3c'
	},
	f: {
		sound: new Howl({
  		src: generateHowl("f")
		}),
		color: '#446CB3'
	},
	g: {
		sound: new Howl({
  		src: generateHowl("g")
		}),
		color: '#9B59B6'
	},
	h: {
		sound: new Howl({
  		src: generateHowl("h")
		}),
		color: '#F62459'
	},
	j: {
		sound: new Howl({
  		src: generateHowl("j")
		}),
		color: '#CF000F'
	},
	k: {
		sound: new Howl({
  		src: generateHowl("k")
		}),
		color: '#DB0A5B'
	},
	l: {
		sound: new Howl({
  		src: generateHowl("l")
		}),
		color: '#663399'
	},
	z: {
		sound: new Howl({
  		src: generateHowl("z")
		}),
		color: '#D24D57'
	},
	x: {
		sound: new Howl({
  		src: generateHowl("x")
		}),
		color: '#2ECC71'
	},
	c: {
		sound: new Howl({
  		src: generateHowl("c")
		}),
		color: '#E74C3C'
	},
	v: {
		sound: new Howl({
  		src: generateHowl("v")
		}),
		color: '#E9D460'
	},
	b: {
		sound: new Howl({
  		src: generateHowl("b")
		}),
		color: '#2574A9'
	},
	n: {
		sound: new Howl({
		src: generateHowl("n")
		}),
		color: '#22313F'
	},
	m: {
		sound: new Howl({
  		src: generateHowl("m")
		}),
		color: '#26A65B'
	}
}

		var nextSet = function(){
			if(currentSetI==5){
				currentSetI=0;
				nextSetI=1;
				previousSetI=5
				setColor();
				generateAllHowls();
			}else{
				currentSetI++;
				nextSetI++;
				previousSetI--;
				setColor();
				generateAllHowls();
			}
		}

		var previousSet = function(){
			if(currentSetI==0){
				currentSetI=5;
				previousSetI=4;
				nextSetI=0;
				setColor();
				generateAllHowls();
			}else{
				currentSetI--;
				nextSetI++;
				previousSetI--;
				setColor();
				generateAllHowls();
			}
		}
		var generateAllHowls = function(letter){
		for(key in keysData){
			keysData[key]["sound"] = new Howl({src: generateHowl(key)})
		}
	}
        var setColor = function(){
			canv.style.background = bgcolors[currentSetI];
		}
    
		var canv = document.querySelector("canvas");
		var circles = [];
		function onKeyDown(event){
			if(letters.indexOf(event.key)>=0){
				var maxPoint = new Point(view.size.width, view.size.height);
				var randomPoint = Point.random();
				var point = maxPoint * randomPoint;
				var newCircle = new Path.Circle(point, 250);
				newCircle.fillColor = keysData[event.key].color;
				keysData[event.key].sound.play();
				circles.push(newCircle);
			}else if(event.key=="up"){
				nextSet();
			}else if(event.key=="down"){
				previousSet();
			}
		}

		function onFrame(event){
			for(var i = 0; i<circles.length; i++){
				circles[i].fillColor.hue+=1;
				circles[i].scale(0.93);
				if(circles[i].area < 1){
   				circles[i].remove();
			    circles.splice(i, 1);
			  }
			}
		}
		var kletters = document.querySelectorAll(".letter");
			for(var i=0;i<kletters.length;i++){
				kletters[i].addEventListener("click", fillTableCell);
		}

var currentCell = [ 0, 0 ];
var soundTable = document.querySelectorAll(".sound-table .line");
	
function fillTableCell(){
	soundTable[currentCell[0]].children[currentCell[1]].textContent = set[currentSetI] + this.children[0].textContent;
	if(currentCell[1]==9){
		currentCell[0]++;
		currentCell[1]=0;
	}else{
	currentCell[1]++;
	}
}

var currSound = 0 ;

function loop(){
	var sound1 = new Howl({
  		src: ["sounds/" + soundTable[0].children[currSound].textContent[0] + "/"+ keySounds[soundTable[0].children[currSound].textContent[1]]]
		});
var sound2 = new Howl({
  		src: ["sounds/" + soundTable[1].children[currSound].textContent[0] + "/"+ keySounds[soundTable[1].children[currSound].textContent[1]]]
		});
var sound3 = new Howl({
  		src: ["sounds/" + soundTable[2].children[currSound].textContent[0] + "/"+ keySounds[soundTable[2].children[currSound].textContent[1]] ]
		});
var sound4 = new Howl({
  		src: ["sounds/" + soundTable[3].children[currSound].textContent[0] + "/"+ keySounds[soundTable[3].children[currSound].textContent[1]] ]
		});
	 "sounds/" + soundTable[1].children[currSound].textContent[0] + "/"+ keySounds[soundTable[1].children[currSound].textContent[1]] 
	sound1.play();
	sound2.play();
	sound3.play();
	sound4.play();
	if(currSound==9){
		currSound=0;
	}else{
		currSound++;
	}
};
  	var startB = document.querySelector("#start");
	
	var stopB = document.querySelector("#stop");
	startB.addEventListener("click", window.setInterval(loop, 1000));
	stopB.addEventListener("click", window.clearInterval(loop,100));