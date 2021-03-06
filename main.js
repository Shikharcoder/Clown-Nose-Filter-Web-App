function preload() {
    clownnose = loadImage('https://i.postimg.cc/6QvJh16L/580b57fbd9996e24bc43bed5-1.png');
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 400, 400);
    image(clownnose, noseX, noseY, 30, 30);
    /*fill("red");
    stroke("red");
    circle(noseX, noseY, 20);*/
}
noseX= 0;
noseY= 0;


function modelLoaded() {
    console.log("PoseNet is Initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        noseX=results[0].pose.nose.x -10;
        noseY=results[0].pose.nose.y -10;
        console.log(results);
        console.log("Nose X = " + noseX);
        console.log("Nose Y = " + noseY);
    }
}

function takeSnapshot() {
    save("download.png");
} 