import { Node } from ".";

export default class Folder extends Node {
  number = 0;
  icon = "../assets/folder.png";
  childrens = [];

  add(node) {
    this.childrens.push(node);
  }

  getNewId() { return `${this.id}-${++this.number}` }
}
