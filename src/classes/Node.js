export default class Node {
  isEdit = false;

  constructor(id, name = this.constructor.name) {
    this.id = id;
    this.name = `${name} ${this.id}`;
    this.lastName = this.name
  }

  remove(nodes, id) {
    for (let node of nodes) {
      const idCurrentDepth = node.getIdCurrentDepth(id);
      if (String(node.id) === idCurrentDepth) {
        if (idCurrentDepth === String(id)) {
          return nodes.filter((item) => item.id !== id);
        }
        node.childrens = this.remove(node.childrens, id);
        return nodes;
      }
    }
  }

  getIdCurrentDepth(id) {
    const lengthId = String(this.id).split("-").length;
    return String(id).split("-").slice(0, lengthId).join("-");
  }

  handlerEdit(ref) {
    this.isEdit = true;
    ref["el"].focus();
  }

  onBlur() {
    this.checkValidName()
    this.isEdit = false;
  }

  onEnter(event) {
    this.checkValidName()
    event.target.blur();
    this.isEdit = false;
  }

  onEsc(event) {
    this.leaveName()
    event.target.blur();
    this.isEdit = false;
  }

  checkValidName() {
    this.name.length > 0 ? this.changeName() : this.leaveName()
  }

  leaveName() {
    this.name = this.lastName
  }

  changeName() {
    this.lastName = this.name
  }
}
