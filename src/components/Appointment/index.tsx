import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { View, Text } from 'react-native'

import { theme } from '../../global/styles/theme'
import { styles } from './styles'
import PlayerSvg from '../../assets/appointments/player.svg'
import CalendarSvg from '../../assets/appointments/calendar.svg'

import { GuildProps } from '../Guild'
import { GuildIcon } from '../GuildIcon'
import { categories } from '../../utils/categories'
//export para caso queira usar esse objt em algum outro lugar
//os appointments guardam a estrutura dos cards
export type AppointmentProps = {
  id: string
  guild: GuildProps
  category: string
  date: string
  description: string,
  series: string
}

type Props = RectButtonProps & {
  data: AppointmentProps
}

export function Appointment({ data, ...rest }: Props) {
  //pega cada categoria em que o id é igual ao '
  const [category] = categories.filter(item => item.id === data.category)
  const { owner } = data.guild
  const { primary, 
          on, 
          secondary50, 
          secondary70, 
          secondary80, 
          secondary100 } = theme.colors

    return (
    <RectButton {...rest}>
      {/* <LinearGradient
          style={styles.container}
          colors={[secondary80, secondary100]}
          start={{ x: 0.3, y: 0 }}
          end={{ x: 1, y: 0 }}>
      */}
      <View style={styles.container}> 
          {/* ÍNCONE POR ELEMENTO DA LISTA */}
          <LinearGradient
            style={styles.guildIconContainer}
            colors={[secondary50, secondary70]} //[É PRECISO PASSAR AO MENOS 2 CORES PARA O GRADIENT]
            >
            <GuildIcon guildId={data.guild.id} iconId={data.guild.icon} />
          </LinearGradient>

          {/* CONTEÚDO TEXTUAL DE CADA ELEMENTO/CARD */}
          <View style={styles.content}>
            <View style={styles.header}>
              {/* Nome da guild = nome do card */}
              <Text style={styles.title}>
                {data.guild.name}
              </Text>

              {/* Tipo de agendamento{treino, avaliação física, etc(isso tá na home)} */}
              <Text style={styles.category}>
                {category.title}
              </Text>
            </View>

            <View style={styles.footer}>
              {/* view com íncone de calendário e data alinhados horizontalmente (flexDirection: row)*/}
              <View style={styles.dateInfo}>
                <CalendarSvg />
                <Text style={styles.date}>{data.date}</Text>
              </View>

              {/* View com o íncone da pessoinha(player) e info de Personal ou Aluno */}
              <View style={styles.playersInfo}>
                {/* a cor do plahyersvg é definida pelo boolean owner */}
                <PlayerSvg fill={owner ? primary : on} />
                

                <Text style={[styles.player, { color: owner ? primary : on }]}>
                  {owner ? 'Personal Trainer' : 'Aluno'}
                </Text>
              </View>

            </View>
            <View style={styles.onWork}>
                <Text style={styles.label}>{'Séries: '}</Text>
                {/* <Text style={[styles.series, { color: owner ? primary : on }]}>{'8x'}</Text> */}
                <Text 
                style={[styles.series, { color: owner ? primary : on }]}>{
                        data.series
                      }
                </Text>
              </View>
          </View>
        </View>
      {/* // </LinearGradient> */}
    </RectButton>
  )
}
