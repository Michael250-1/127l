song="";
function preload(){
song=loadSound("music.mp3");
}

leftwristX=0;
rightwristX=0;

leftwristY=0;
rightwristY=0;

leftscore=0;
rightscore=0;

function setup(){
canvas=createCanvas(600,500);
canvas.position(650,225);
video=createCapture(VIDEO);
video.hide();
}

function draw(){
image(video,0,0,600,500 );

}

