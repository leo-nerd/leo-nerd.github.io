import  java.io.File;
int numFiles, img1Index, img2Index;
PImage img1, img2;
String path;
String[] filenames;

void setup() {
  path = sketchPath("data/");
  java.io.File folder = new java.io.File(path);
  filenames = folder.list();

  println(path);
  size(800, 600);
  background(255);
  //print(filenames);
  numFiles = filenames.length;

  //intial pair of images
  drawImg();
}

void draw() {
}

void keyPressed() {
  if (key == ENTER) {
    drawImg();
  }
}

void drawImg() {
  img1Index = floor(random(numFiles));
  img2Index = floor(random(numFiles));
  img1 = loadImage(path + filenames[img1Index]);
  img2 = loadImage(path + filenames[img2Index]);
  img1.resize(width/2, height);
  img2.resize(width/2, height);
  image(img1, 0, 0);
  image(img2, width/2, 0);
}
