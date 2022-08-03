import { defineStore } from "pinia";

export const useDataTreeStore = defineStore({
  id: "dataTree",
  state: () => ({
    arrayNodes: [],
    numberNode: 0,
  }),
});
