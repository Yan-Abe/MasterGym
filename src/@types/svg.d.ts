declare module '*.svg' {
  //a importação do REACT é imprescindível sempre que vc for usar algum elemento como componente
  //nesse caso, o SVG será usado como componente

  import React from 'react'
  import { SvgProps } from 'react-native-svg'
  //o component é um "Functional Component" (FC)
  const content: React.FC<SvgProps>
  export default content
}
