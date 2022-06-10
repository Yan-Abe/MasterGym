//categorias de treinos
//é preciso instalar a uma lib para que o react consiga ligar com .svg
/**
 * "react-native-svg-transformer" trabalha em conjunto com
 *  a lib "react-native-svg"
 **/

/**
 * VOCÊ CONSEGUE EDITAR IMAGENS DO TIPO SVG
 */
import FitDanceSvg from '../assets/dances/fit_dance.svg'
import PoleDanceSvg from '../assets/dances/pole_dance.svg'
import Zumba from '../assets/dances/Zumba.svg'

export const dances = [
  {
    id: '1',
    title: 'Fit Dance',
    icon: FitDanceSvg,
    difficulty: 4
  },
  {
    id: '2',
    title: 'Pole Dance',
    icon: PoleDanceSvg,
    difficulty: 1
  },
  {
    id: '3',
    title: 'Zumba',
    icon: Zumba,
    difficulty: 2
  }
]
