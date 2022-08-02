// import HelloWorld from './components/HelloWorld.vue'
import { Folder, File } from '../classes'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }

  setup() {

    let arrayNodes = []
    arrayNodes.push(new Folder(arrayNodes.length))
    arrayNodes.push(new File(arrayNodes.length))

    return {
      arrayNodes
    }

  }

}