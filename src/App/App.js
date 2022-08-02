import { TreeParentComponent } from '@/components'
import { Folder, File } from "../classes";

export default {
  name: "App",
  components: {
    TreeParentComponent
  },

  setup() {
    let arrayNodes = [];
    let numberNode = 0;
    arrayNodes.push(new Folder(++numberNode));
    arrayNodes[0].add(new Folder(arrayNodes[0].getNewId()));
    arrayNodes[0].childrens[0].add(new File(arrayNodes[0].childrens[0].getNewId()));
    arrayNodes[0].add(new File(arrayNodes[0].getNewId()));
    
    arrayNodes.push(new Folder(++numberNode));
    arrayNodes[1].add(new Folder(arrayNodes[1].getNewId()));
    arrayNodes[1].add(new File(arrayNodes[1].getNewId()));
    arrayNodes.push(new File(++numberNode));
      return {
        arrayNodes,
      };
  },
};
