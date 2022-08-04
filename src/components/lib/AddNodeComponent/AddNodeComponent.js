import { ref } from "vue";

export default {
  // props: {
  //   node: Object,
  // },

  setup() {

    const arrayNode = [
      {
        value: "Folder",
        icon: "folder.png"
      },
      {
        value: "File",
        icon: "file.png"
      },
    ];

    let selectedNode = ref('')

    return {
      arrayNode,
      selectedNode,
    }
  },
};
