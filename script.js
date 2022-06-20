'use strict';

const DomElement = function () {
  this.selector = '';
  this.height = 0;
  this.width = 0;
  this.bg = '';
  this.fontSize = 0;
};

DomElement.prototype.newElem = function () {
  const div = document.createElement('div');
  if (this.selector[0] === '.') {
    div.className = this.selector.slice(1);
    document.body.prepend(div);
  } else if (this.selector[0] === '#') {
    div.id = this.selector.slice(1);
    document.body.prepend(div);
  }
  div.style.cssText = `color: white;
    background: ${this.bg};
    height: ${this.height}px;
    width: ${this.width}px;
    text-align: center;
    font-size: ${this.fontSize}px;
    position: ${this.position};
    cursor: pointer;
  `;
  div.innerHTML = '<span>Нажми на меня и двигай стрелками</span>';
};

const blockDiv = new DomElement();

blockDiv.selector = '.block';
blockDiv.height = 100;
blockDiv.width = 100;
blockDiv.bg = '#000000';
blockDiv.fontSize = 18;
blockDiv.position = 'absolute';
blockDiv.newElem();


const elem = document.querySelector('div');
elem.tabIndex = 0;
document.body.style.overflow = "hidden";

elem.addEventListener("keydown", function (event) {
  if (event.code != "ArrowRight" && event.code != "ArrowLeft" &&
    event.code != "ArrowUp" && event.code != "ArrowDown") {
    return;
  }

  let rectElem = elem.getBoundingClientRect();

  console.log(rectElem);

  let x = rectElem.x,
    y = rectElem.y;

  if (event.code == "ArrowRight") {
    x += 10;
  }
  if (event.code == "ArrowLeft") {
    x -= 10;
  }
  if (event.code == "ArrowUp") {
    y -= 10;
  }
  if (event.code == "ArrowDown") {
    y += 10;
  }

  elem.style.position = "absolute";
  elem.style.left = x + "px";
  elem.style.top = y + "px";
});