import { nanoid } from "nanoid";

export default class Node {
  className = "Node"
  isEdit = false;

  constructor(parent, name = this.constructor.name) {
    this.parent = parent;
    this.id = nanoid();
    this.name = name;
    this.lastName = this.name;
  }

  getParent() {
    return this.parent;
  }

  handlerRemove(node) {
    node.getParent().children = [...node.getParent().findNodeById(node.id)];
  }

  findNodeById(id) {
    return this.children.filter((child) => child.id !== id);
  }

  handlerEdit(ref) {
    this.isEdit = true;
    ref["el"].focus();
  }

  onBlur() {
    this.checkEmptyName();
    this.isEdit = false;
  }

  onEnter(event) {
    this.checkEmptyName();
    event.target.blur();
    this.isEdit = false;
  }

  onEsc(event) {
    this.leaveName();
    event.target.blur();
    this.isEdit = false;
  }

  checkEmptyName() {
    this.name.length && this.checkingAllSpaces() ? this.changeName() : this.leaveName();
  }

  checkingAllSpaces() {
    return this.name.split(' ').filter(symbol => symbol !== '').length
  }

  leaveName() {
    this.name = this.lastName;
  }

  changeName() {
    this.lastName = this.name;
  }
}
