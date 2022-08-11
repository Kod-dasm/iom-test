import { defineStore } from "pinia";
import { Folder } from "../classes";

export const useDataTreeStore = defineStore({
  id: "dataTree",
  state: () => ({
    root: new Folder(null, ""),
  }),
});
