import React from 'react'
import { Image, View } from 'react-native'

import { styles } from './styles'
import DiscordSvg from '../../assets/discord.svg'

const { CDN_IMAGE } = process.env

type Props = {
  guildId: string
  iconId: string | null
}

export function GuildIcon({ guildId, iconId }: Props) {
  const uri =
    'https://cdn.icon-icons.com/icons2/2631/PNG/512/gmail_new_logo_icon_159149.png'
  // const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`

  return (
    <View style={styles.container}>
      {iconId ? (
        <Image source={{ uri }} style={styles.image} resizeMode="cover" />
      ) : (
        <DiscordSvg width={40} height={40} />
      )}
    </View>
  )
}
