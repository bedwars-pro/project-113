function preload(){

}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,225,140,200,200);
    fill(0,128,0);
    stroke(0,128,0);
    rect(90,40,460,20);
    rect(90,420,460,20);
    rect(60,40,20,400);
    rect(560,40,20,400);

    fill(255,0,0);
    stroke(255,0,0);
    circle(70,50,80);
    circle(570,50,80);
    circle(70,430,80);
    circle(570,430,80);
}
function take_snapshot(){
    save('picture.png');
}