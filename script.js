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
    background: ` + this.bg + `;
    height: ` + this.height + `px;
    width: ` + this.width + `px;
    text-align: center;
    font - size: ` + this.fontSize + `px;
  `;
  div.innerHTML = '<p>Привет мир JavaScript!';
};

const blockDiv = new DomElement();

blockDiv.selector = '#block';
blockDiv.height = 100;
blockDiv.width = 300;
blockDiv.bg = '#000000';
blockDiv.fontSize = 12;

blockDiv.newElem();