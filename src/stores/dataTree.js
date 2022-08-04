import { defineStore } from "pinia";
import { Folder } from "../classes";

export const useDataTreeStore = defineStore({
  id: "dataTree",
  state: () => ({
    tree: {
      name: "",
      children: [
        {
          name: "Folder 1",
          children: [
            {
              name: "Folder 1-1",
              children: [
                {
                  name: "File 1-1-1",
                },
              ],
            },
            {
              name: "File 1-2",
            },
          ],
        },
        {
          name: "Folder 2",
          children: [
            {
              name: "Folder 2-1",
              children: [],
            },
            {
              name: "File 2-2",
            },
          ],
        },
        {
          name: "File 3",
        },
      ],
    },
    arrayNodes: new Folder(null, ""),
  }),
});
