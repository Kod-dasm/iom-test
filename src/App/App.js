import { TreeParentComponent } from "@/components";

import { useDataTreeStore } from "@/stores/dataTree";

export default {
  name: "App",
  components: {
    TreeParentComponent,
  },

  setup() {
    const dataTree = useDataTreeStore();

    dataTree.root.import(dataTree.tree);

    return {
      dataTree,
    };
  },
};
