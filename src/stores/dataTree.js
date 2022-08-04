import { defineStore } from "pinia";

export const useDataTreeStore = defineStore({
  id: "dataTree",
  state: () => ({
    arrayNodes: {
      // "name": "",
      // "children": [
      //   {
      //     "name": "Folder 1",
      //     "id": "1",
      //     "children": [
      //       {
              
      //       }
      //     ]
      //   },
      //   {
      //     "name": "Folder 2",
      //     "id": "2",
      //     "children": [
      //       {
              
      //       }
      //     ]
      //   },
      //   {
      //     "name": "File 3",
      //     "id": "3",
      //   },
        
      // ]
    },
    numberNode: 0,
  }),
});
