import { ref } from "vue";
import { default as TreeChildrenComponent } from "@/components/lib/TreeChildrenComponent/TreeChildrenComponent.vue";
import { default as AddNodeComponent } from "@/components/lib/AddNodeComponent/AddNodeComponent.vue";

import { useDataTreeStore } from "@/stores/dataTree";

export default {
  props: {
    node: Object,
  },
  components: {
    TreeChildrenComponent,
    AddNodeComponent,
  },

  setup() {
    const dataTree = useDataTreeStore();

    const itemRef = ref({});
    const setItemRef = (el) => {
      if (el) {
        itemRef.value.el = el;
      }
    };
    return {
      dataTree,
      setItemRef,
      itemRef,
    };
  },
};
