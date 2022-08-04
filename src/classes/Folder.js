import { Node } from ".";

export default class Folder extends Node {
  number = 0;
  icon = "folder.png";
  children = [];

  add(node) {
    this.children.push(node);
  }

  getNewId() {
    return `${this.id}-${++this.number}`;
  }
}
