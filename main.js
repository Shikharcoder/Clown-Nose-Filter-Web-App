function preload() {
    clownnose = loadImage('https://i.postimg.cc/6QvJh16L/580b57fbd9996e24bc43bed5-1.png');
}

function setup() {
    canvas = createCanvas(400, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 400, 350);
    image(clownnose, noseX, noseY, 22, 22);
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
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log(results);
        console.log("Nose X = " + noseX);
        console.log("Nose Y = " + noseY);
    }
}

function takeSnapshot() {
    save("download.png");
} 