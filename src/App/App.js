import { TreeParentComponent } from "@/components";

import { useDataTreeStore } from "@/stores/dataTree";

export default {
  name: "App",
  components: {
    TreeParentComponent,
  },

  setup() {
    const dataTree = useDataTreeStore();

    dataTree.arrayNodes.import(dataTree.tree);

    return {
      dataTree,
    };
  },
};
