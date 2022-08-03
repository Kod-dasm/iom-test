import { ref } from "vue";
import { default as TreeChildrenComponent } from "@/components/lib/TreeChildrenComponent/TreeChildrenComponent.vue";

import { useDataTreeStore } from "@/stores/dataTree";

export default {
  props: {
    node: Object,
    index: Number,
  },
  components: {
    TreeChildrenComponent,
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
