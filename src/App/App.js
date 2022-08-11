import { TreeParentComponent } from "@/components";
import { TREE } from "@/consts"

import { useDataTreeStore } from "@/stores/dataTree";

export default {
  name: "App",
  components: {
    TreeParentComponent,
  },

  setup() {
    const dataTree = useDataTreeStore();

    dataTree.root.import(TREE);

    return {
      dataTree,
    };
  },
};
