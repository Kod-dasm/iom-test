export default class Node {
  constructor(id, name = this.constructor.name) {
    this.id = id;
    this.name = `${name} ${this.id}`;
  }

  remove(arrayNodes) {
    console.log("node = ", this)
    return this.findNodeToRemove(arrayNodes, this.id);
  }

  findNodeToRemove(nodes, id) {
    for (let node of nodes) {
      const idCurrentDepth = this.getIdCurrentDepth(node.id);
      if (String(node.id) === idCurrentDepth) {
        if (idCurrentDepth === String(id)) {
          return nodes.filter((item) => item.id !== id);
        }
        node.childrens = this.findNodeToRemove(node.childrens, id);
        return nodes;
      }
    }
  }

  getIdCurrentDepth(id) {
    const lengthId = String(this.id).split("-").length;
    return String(id).split("-").slice(0, lengthId).join("-");
  }
}
