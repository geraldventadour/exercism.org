// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width=80, height=60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth,newHeight) {
  this.width = newWidth;
  this.height = newHeight;
}

export function Position(x=0,y=0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX,newY) {
  this.x = newX;
  this.y = newY;
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800,600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(size){
    const MINIMUN_ALLOWED_WIDTH = 1;
    const MINIMUM_ALLOWED_HEIGHT = 1;
    const maximun_allowed_width = this.screenSize.width - this.position.x;
    const maximun_allowed_height = this.screenSize.height - this.position.y;
    const newWidth = Math.max(MINIMUN_ALLOWED_WIDTH,Math.min(size.width,maximun_allowed_width));
    const newHeight = Math.max(MINIMUM_ALLOWED_HEIGHT,Math.min(size.height,maximun_allowed_height));
    this.size.resize(newWidth,newHeight);
    
  }
  

  move(position){
    const MIN_X = 0;
    const MIN_Y = 0;
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;
    const x = Math.max(MIN_X,Math.min(position.x,maxX));
    const y = Math.max(MIN_Y,Math.min(position.y,maxY));
    this.position.move(x,y)
    
    
  }
}

export function changeWindow(programWindow) {
  const WIDTH = 400;
  const HEIGHT = 300;
  const X = 100;
  const Y = 150;

  programWindow.resize(new Size(WIDTH,HEIGHT));
  programWindow.move(new Position(X,Y));
  return programWindow;
}

  