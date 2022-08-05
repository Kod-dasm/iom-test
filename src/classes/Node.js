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
    this.checkValidName();
    this.isEdit = false;
  }

  onEnter(event) {
    this.checkValidName();
    event.target.blur();
    this.isEdit = false;
  }

  onEsc(event) {
    this.leaveName();
    event.target.blur();
    this.isEdit = false;
  }

  checkValidName() {
    this.name.length > 0 ? this.changeName() : this.leaveName();
  }

  leaveName() {
    this.name = this.lastName;
  }

  changeName() {
    this.lastName = this.name;
  }
}
