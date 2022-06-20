song1="";
song2="";

rightWristX=0;
rightWristY=0;

leftWristX=0;
leftWristY=0;

function preload(){
    song1=loadSound("song1.mp3");
    song2=loadSound("song2.mp3");

}

function modelLoaded(){
console.log("PoseNet is Initialized");
}
function gotPoses(results)
{
if(results.length>0)
{
    console.log(results);
    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;

    lefttWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
}

}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
image(video,0,0,600,500);
}

function song_name(){
song1.play();
song1.setVolume(0.2);
song1.rate(1);
}