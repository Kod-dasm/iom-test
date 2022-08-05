import { Node, File } from ".";

export default class Folder extends Node {
  className = "Folder"
  isComplicatedAccordion = false
  isAdded = false;
  number = 0;
  icon = "folder.png";
  children = [];

  add(node) {
    this.children.push(node);
    this.sort()
  }

  sort() {
    this.children = [...this.getFolders(), ...this.getFile()]
  }

  getFolders() {
    return this.children.filter(child => child.className === "Folder")
  }

  getFile() {
    return this.children.filter(child => child.className === "File")
  }

  import(tree) {
    for (let node of tree.children) {
      if (node.children) {
        const folder = new Folder(this, node.name);
        folder.import(node);
        this.add(folder);
      } else {
        this.add(new File(this, node.name));
      }
    }
  }

  onAdded() {
    this.isAdded = !this.isAdded;
  }
}
