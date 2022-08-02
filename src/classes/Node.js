export default class Node {
  constructor(number, name = this.constructor.name) {
    this.id = number + 1;
    this.name = `${name} ${this.id}`;
  }

  remove() {

  }
}
