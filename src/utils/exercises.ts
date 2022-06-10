//SUPERIOR
import MarteloBicepsSvg from '../assets/exercises/superior/treino1/biceps_level_1.svg'
import ElevacaoLateralHaltersSvg from '../assets/exercises/superior/treino1/elevacao_lateral_halters.svg'
import PeckDeckSvg from '../assets/exercises/superior/treino1/peck_deck.svg'
import PullUpDorsalSvg from '../assets/exercises/superior/treino1/pull_up_dorsal.svg'
// import BicepsLevel1Svg from '../assets/exercises/superior/treino2/biceps_level_1.svg'
import CaniveteCruzadoSvg from '../assets/exercises/superior/treino2/canivete_cruzado.svg'
import EscaladaLivreSvg from '../assets/exercises/superior/treino2/escalada_livre.svg'
import PulleyCostasDorsalSvg from '../assets/exercises/superior/treino2/pulley_costas_dorsal.svg'
import PulleyFrenteDorsalSvg from '../assets/exercises/superior/treino2/pulley_frente_dorsal.svg'
import RoscaAlternadaSvg from '../assets/exercises/superior/treino3/rosca_alternada.svg'
import RoscaScottSvg from '../assets/exercises/superior/treino3/rosca_scott.svg'
import RoscaScottExaustaoSvg from '../assets/exercises/superior/treino3/rosca_scott_exaustao.svg'
import SupinoBarraSvg from '../assets/exercises/superior/treino3/supino_barra.svg'
import TrapezioHaltersSvg from '../assets/exercises/superior/treino3/trapezio_halters.svg'
import TricepsGrepoRingsSvg from '../assets/exercises/superior/treino3/triceps_grepo_rings.svg'

//INFERIOR
import AgachamentoBulgaroDumbbellSvg from '../assets/exercises/inferior/treino3/agachamento_bulgado_dumbbell.svg'
import BicicletaErgometricaSvg from '../assets/exercises/inferior/treino3/bicicleta_ergometrica.svg'
import BicicletaErgometricaCargaAltaSvg from '../assets/exercises/inferior/treino3/bicicleta_ergometrica_carga_alta.svg'
import EsteiraSvg from '../assets/exercises/inferior/treino3/esteira.svg'
import EsteiraAdaptadaSvg from '../assets/exercises/inferior/treino3/esteira_adaptada.svg'
import Legpress45Svg from '../assets/exercises/inferior/treino3/legpress45.svg'

//ESPORTES
import Corrida100mRasosSvg from '../assets/exercises/esportes/corrida_100m_rasos.svg'
import Corrida500MetrosSvg from '../assets/exercises/esportes/corrida500metros.svg'
import FutsalSoulSocietySvg from '../assets/exercises/esportes/futsal_soulsociety.svg'
import GinasticaSvg from '../assets/exercises/esportes/ginastica.svg'
import GinasticaOlimpicaSvg from '../assets/exercises/esportes/ginastica_olimpica.svg'
import GolfeSvg from '../assets/exercises/esportes/golfe.svg'
import PularCordaSvg from '../assets/exercises/esportes/pular_corda.svg'

//ABDOMEN
import RollupAbdominalSvg from '../assets/exercises/abdomen/rollup_abdominal.svg'

//Avaliação Física
import MudancaDeDietaSvg from '../assets/exercises/avaliacaofisica/mudanca_de_dieta.svg'

//fisioterapia_assistida
import AcompanhamentoClinicoSvg from '../assets/exercises/fisioterapia_assistida/acompanhamento_clinico.svg'
import FisioterapiaTeleguiadaSvg from '../assets/exercises/fisioterapia_assistida/fisioterapia_teleguiada.svg'
import RemediosReceitadosSvg from '../assets/exercises/fisioterapia_assistida/remedios_receitados.svg'
//categorias de treinos
//é preciso instalar a uma lib para que o react consiga ligar com .svg
/**
 * "react-native-svg-transformer" trabalha em conjunto com
 *  a lib "react-native-svg"
 **/

/**
 * VOCÊ CONSEGUE EDITAR IMAGENS DO TIPO SVG
 */
import AgachamentoBulgaroSvg from '../assets/exercises/agachamento_bulgaro.svg'
import AgachamentoLivreHomeSvg from '../assets/exercises/agachamento_livre_home.svg'
import AgachamentoLivreSvg from '../assets/exercises/agachamento_livre.svg'
import Legpress45grausSvg from '../assets/exercises/legpress45graus.svg'

export const exercises = [
  {
    id: '1',
    title: 'Agachamento Bulgaro',
    icon: AgachamentoBulgaroSvg,
    difficulty: 4,
    trainninglist: [1, 4]
  },
  {
    id: '2',
    title: 'Agachamento Livre - Home',
    icon: AgachamentoLivreHomeSvg,
    difficulty: 1,
    trainninglist: [1, 4]
  },
  {
    id: '3',
    title: 'Agachamento Livre',
    icon: AgachamentoLivreSvg,
    difficulty: 2,
    trainninglist: [1, 4]
  },
  {
    id: '4',
    title: 'LegPress 45 Graus',
    icon: Legpress45grausSvg,
    difficulty: 3,
    trainninglist: [1, 4]
  },
  {
    id: '5',
    title: 'Martelo Halters',
    icon: MarteloBicepsSvg,
    difficulty: 1,
    trainninglist: [1, 4]
  },
  {
    id: '6',
    title: 'Elevacao Lateral - Halters',
    icon: ElevacaoLateralHaltersSvg,
    difficulty: 1,
    trainninglist: [1, 2, 4]
  },
  {
    id: '7',
    title: 'Peck Deck',
    icon: PeckDeckSvg,
    difficulty: 2,
    trainninglist: [1, 4]
  },
  {
    id: '8',
    title: 'Pull-Up Dorsal',
    icon: PullUpDorsalSvg,
    difficulty: 3,
    trainninglist: [1, 4]
  },
  {
    id: '9',
    title: 'Biceps Level 1',
    icon: MarteloBicepsSvg,
    difficulty: 1,
    trainninglist: [2, 4]
  },
  {
    id: '10',
    title: 'Canivete Cruzado',
    icon: CaniveteCruzadoSvg,
    difficulty: 2,
    trainninglist: [2, 4]
  },
  {
    id: '11',
    title: 'Escalada Livre',
    icon: EscaladaLivreSvg,
    difficulty: 2,
    trainninglist: [2, 4]
  },
  {
    id: '12',
    title: 'Peck Deck',
    icon: PeckDeckSvg,
    difficulty: 2,
    trainninglist: [2, 3, 4]
  },
  {
    id: '13',
    title: 'Pull-Up Dorsal',
    icon: PullUpDorsalSvg,
    difficulty: 2,
    trainninglist: [2, 3, 4]
  },
  {
    id: '14',
    title: 'Pulley Costas Dorsal',
    icon: PulleyCostasDorsalSvg,
    difficulty: 3,
    trainninglist: [2, 3, 4]
  },
  {
    id: '15',
    title: 'Pulley Frente Dorsal',
    icon: PulleyFrenteDorsalSvg,
    difficulty: 3,
    trainninglist: [2, 3, 4]
  },
  {
    id: '16',
    title: 'Rosca Alternada',
    icon: RoscaAlternadaSvg,
    difficulty: 3,
    trainninglist: [3, 4]
  },
  {
    id: '16',
    title: 'Rosca Scott',
    icon: RoscaScottSvg,
    difficulty: 3,
    trainninglist: [3, 4]
  },
  {
    id: '17',
    title: 'Rosca Scott - Exaustão',
    icon: RoscaScottExaustaoSvg,
    difficulty: 3,
    trainninglist: [3, 4]
  },
  {
    id: '18',
    title: 'Supino Barra',
    icon: SupinoBarraSvg,
    difficulty: 3,
    trainninglist: [3, 4]
  },
  {
    id: '19',
    title: 'Trapezio Halters',
    icon: TrapezioHaltersSvg,
    difficulty: 3,
    trainninglist: [3, 4]
  },
  {
    id: '20',
    title: 'Triceps Grepo Rings',
    icon: TricepsGrepoRingsSvg,
    difficulty: 3,
    trainninglist: [3, 4]
  },

  //INFERIOR
  {
    id: '21',
    title: 'Agachamento Bulgaro Dumbbell',
    icon: AgachamentoBulgaroDumbbellSvg,
    difficulty: 2,
    trainninglist: [3]
  },
  {
    id: '22',
    title: 'Bicicleta Ergometrica',
    icon: BicicletaErgometricaSvg,
    difficulty: 3,
    trainninglist: [1, 3]
  },
  {
    id: '23',
    title: 'Bicicleta Ergometrica - \nCarga AltaSvg',
    icon: BicicletaErgometricaCargaAltaSvg,
    difficulty: 3,
    trainninglist: [1, 3]
  },
  {
    id: '24',
    title: 'Esteira',
    icon: EsteiraSvg,
    difficulty: 1,
    trainninglist: [2, 4]
  },
  {
    id: '25',
    title: 'Esteira Adaptada',
    icon: EsteiraAdaptadaSvg,
    difficulty: 1,
    trainninglist: [1, 2, 3]
  },
  {
    id: '26',
    title: 'LegPress 45',
    icon: Legpress45Svg,
    difficulty: 3,
    trainninglist: [2, 3]
  },

  //ESPORTES
  {
    id: '27',
    title: 'Corrida 100m Rasos',
    icon: Corrida100mRasosSvg,
    difficulty: 3,
    trainninglist: [2, 3]
  },
  {
    id: '28',
    title: 'Corrida 500 Metros',
    icon: Corrida500MetrosSvg,
    difficulty: 3,
    trainninglist: [2, 3]
  },
  {
    id: '29',
    title: 'Futsal SoulSociety',
    icon: FutsalSoulSocietySvg,
    difficulty: 3,
    trainninglist: [2, 3]
  },
  {
    id: '30',
    title: 'Ginástica',
    icon: GinasticaSvg,
    difficulty: 3,
    trainninglist: [2, 3]
  },
  {
    id: '31',
    title: 'Ginástica Olímpica',
    icon: GinasticaOlimpicaSvg,
    difficulty: 3,
    trainninglist: [2, 3]
  },
  {
    id: '32',
    title: 'Golfe',
    icon: GolfeSvg,
    difficulty: 3,
    trainninglist: [2, 3]
  },
  {
    id: '33',
    title: 'Pular Corda',
    icon: PularCordaSvg,
    difficulty: 3,
    trainninglist: [2, 3]
  },
  {
    id: '34',
    title: 'Roll-Up Abdominal',
    icon: RollupAbdominalSvg,
    difficulty: 3,
    trainninglist: [2, 3]
  },
  {
    id: '35',
    title: 'Mudança De Dieta',
    icon: MudancaDeDietaSvg,
    difficulty: 3,
    trainninglist: [2, 3]
  },
  {
    id: '36',
    title: 'Acompanhamento Clínico',
    icon: AcompanhamentoClinicoSvg,
    difficulty: 3,
    trainninglist: [2, 3]
  },
  {
    id: '37',
    title: 'Fisioterapia Teleguiada',
    icon: FisioterapiaTeleguiadaSvg,
    difficulty: 3,
    trainninglist: [2, 3]
  },
  {
    id: '38',
    title: 'Remédios Receitados',
    icon: RemediosReceitadosSvg,
    difficulty: 3,
    trainninglist: [2, 3]
  }
]
