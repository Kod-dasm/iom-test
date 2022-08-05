import { ref } from "vue";
import { Node, Folder, File } from "@/classes";

export default {
  props: {
    node: Object,
  },

  setup() {
    
    const itemRef = ref({});
    const setItemRef = (el) => {
      if (el) {
        itemRef.value.el = el;
      }
    };

    const newNode = ref(new Node(null, "New node"));

    const optionNode = [
      {
        value: "Folder",
      },
      {
        value: "File",
      },
    ];

    let selectedNode = ref("");

    function addNode(parent, child, selectedClass) {
      selectedClass === 'Folder' ? parent.add(new Folder(parent, child.name)) : parent.add(new File(parent, child.name))
      parent.isAdded = false
    }

    return {
      optionNode,
      selectedNode,
      itemRef,
      setItemRef,
      newNode,
      addNode,

    };
  },
};
