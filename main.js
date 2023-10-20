function setup() {
    canvas = createCanvas(550, 550);
    canvas.position(560,150);
    video = createCapture(VIDEO);
    video.size (550, 500);

   
    poseNet = ml5.posenet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('Posenet Is Initialised!');
}
function draw() {
    background('#969A79');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}

                                                                                                                                                                                