import { default as TreeChildrenComponent } from "@/components/lib/TreeChildrenComponent/TreeChildrenComponent.vue";

import { useDataTreeStore } from "@/stores/dataTree";

export default {
  props: {
    node: Object,
  },
  components: {
    TreeChildrenComponent,
  },

  setup() {
    const dataTree = useDataTreeStore();

    return {
      dataTree,
    };
  },
};
