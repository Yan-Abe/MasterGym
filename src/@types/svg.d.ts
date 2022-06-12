declare module '*.svg' {
<<<<<<< HEAD
  //a importação do REACT é imprescindível sempre que vc for usar algum elemento como componente
  //nesse caso, o SVG será usado como componente

  import React from 'react'
  import { SvgProps } from 'react-native-svg'
  //o component é um "Functional Component" (FC)
=======
  import React from 'react'
  import { SvgProps } from 'react-native-svg'
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
  const content: React.FC<SvgProps>
  export default content
}
