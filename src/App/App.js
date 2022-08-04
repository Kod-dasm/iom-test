import { TreeParentComponent } from "@/components";
import { Folder, File } from "../classes";

import { useDataTreeStore } from "@/stores/dataTree";

export default {
  name: "App",
  components: {
    TreeParentComponent,
  },

  setup() {
    const dataTree = useDataTreeStore();

    dataTree.arrayNodes = new Folder(null)
    dataTree.arrayNodes.add(new Folder(dataTree.arrayNodes));
    dataTree.arrayNodes.children[0].add(new Folder(dataTree.arrayNodes.children[0]));
    dataTree.arrayNodes.children[0].add(new Folder(dataTree.arrayNodes.children[0]));
    dataTree.arrayNodes.children[0].children[0].add(new File(dataTree.arrayNodes.children[0].children[0]));
    dataTree.arrayNodes.add(new Folder(dataTree.arrayNodes));
    dataTree.arrayNodes.add(new File(dataTree.arrayNodes));

    return {
      dataTree,
    };
  },
};
