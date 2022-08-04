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

    dataTree.arrayNodes.push(new Folder(++dataTree.numberNode));
    dataTree.arrayNodes[0].add(new Folder(dataTree.arrayNodes[0].getNewId()));
    dataTree.arrayNodes[0].children[0].add(
      new File(dataTree.arrayNodes[0].children[0].getNewId())
    );
    dataTree.arrayNodes[0].add(new File(dataTree.arrayNodes[0].getNewId()));

    dataTree.arrayNodes.push(new Folder(++dataTree.numberNode));
    dataTree.arrayNodes[1].add(new Folder(dataTree.arrayNodes[1].getNewId()));
    dataTree.arrayNodes[1].add(new File(dataTree.arrayNodes[1].getNewId()));
    dataTree.arrayNodes.push(new File(++dataTree.numberNode));

    return {
      dataTree,
    };
  },
};
