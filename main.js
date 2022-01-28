function setup()
{
    video = createCapture(VIDEO);
    video.size (550, 500);
    canvas = createCanvas(550, 425);
    canvas.position(560,100);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw()
{
    background("#e8a323");
}

function modelLoaded()
{
    console.log("Posenet Model Is Successfully Loaded!");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}