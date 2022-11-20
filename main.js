function preload() {
	mario_gameover = loadSound("gameover.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet(pose, gotPoses);
}

function draw() {
	game()
}

function gotPoses(results) {
	if(results.length > 0) {
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log("noseX = " + noseX + ", noseY = " + noseY);
	}
}

function draw() {
	background('#D3D3D3');
	if(marioX < 300) {
		marioX = marioX - 1;
	}
	if(marioX > 300) {
		marioX = marioX + 1;
	}
	if(noseY < 150) {
		marioY = marioY - 1;
	}
	image(img, marioX, marioY, 70, 40);
}






