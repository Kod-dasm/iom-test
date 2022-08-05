import { default as TreeChildrenComponent } from "@/components/lib/TreeChildrenComponent/TreeChildrenComponent.vue";
import { default as AddNodeComponent } from "@/components/lib/AddNodeComponent/AddNodeComponent.vue";

export default {
  props: {
    root: Object,
  },
  components: {
    TreeChildrenComponent,
    AddNodeComponent,
  },
};
