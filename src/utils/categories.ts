//categorias de treinos
//é preciso instalar a uma lib para que o react consiga ligar com .svg
/**
 * "react-native-svg-transformer" trabalha em conjunto com
 *  a lib "react-native-svg"
 **/

/**
 * VOCÊ CONSEGUE EDITAR IMAGENS DO TIPO SVG
 */
import Superior_bicepsSvg from '../assets/trainingCategoriesList/superior_biceps.svg'
import Inferior_pernaSvg from '../assets/trainingCategoriesList/inferior_perna.svg'
import AbdomenSvg from '../assets/trainingCategoriesList/abdomen.svg'
import SportsSvg from '../assets/trainingCategoriesList/sports.svg'
import FisioSvg from '../assets/trainingCategoriesList/fisio.svg'
import Avaliacao_fisicaSvg from '../assets/trainingCategoriesList/avaliacao_fisica.svg'
import DancingSvg from '../assets/trainingCategoriesList/dancing.svg'

export const categories = [
  {
    id: '1',
    title: 'Treino Superior',
    icon: Superior_bicepsSvg
  },
  { id: '2', title: 'Treino Inferior', icon: Inferior_pernaSvg },
  { id: '3', title: 'Treino de Abdômen', icon: AbdomenSvg },
  { id: '4', title: 'Esportes', icon: SportsSvg },
  { id: '5', title: 'Fisioterapia Assistida', icon: FisioSvg },
  { id: '6', title: 'Avaliação Física', icon: Avaliacao_fisicaSvg },
  { id: '7', title: 'Danças', icon: DancingSvg }
]
