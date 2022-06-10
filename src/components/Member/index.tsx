import React from 'react';

import {
  View,
  Text
} from 'react-native';
import { styles } from './styles';
import { Avatar } from '../Avatar';
import { theme } from '../../global/styles/theme';
import { SvgProps } from 'react-native-svg'

export type MemberProps = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
}

type Props = {
  // data: MemberProps,
  title: string
  icon: React.FC<SvgProps>,
  difficulty: number
}

export function Member({ 
  // data,
  title,
  icon: Icon,
  difficulty 
}: Props){
  const { on, primary } = theme.colors; 
  
  var levelColors = ''
  var levelText = ''
  
  if (difficulty === 1) {
    levelColors = 'green';
    levelText = 'Fácil'
  } else if (difficulty === 2){
    levelColors = 'orange';
    levelText = 'Intermediário'
  } else if (difficulty === 3){
    levelColors = 'red';
    levelText = 'Difícil'
  }
  
  // [
  //   { '1': 'green', '2': 'orange', '3': 'red'}
  // ]

  // const isOnline = data.status === 'online';
  
  return (
    <View style={styles.container}>
      {/* <Avatar urlImage={data.avatar_url} /> */}
      <Icon 
      style={styles.icon}
      width={48} height={48} 
      />
      <View>
        <Text style={styles.title}>
          {/* { data.username } */}
          { title }
        </Text>

        <View style={styles.status}>
          <View 
            style={[
              styles.bulletStatus,
              {
                // backgroundColor: isOnline ? on : primary
                backgroundColor: levelColors? levelColors : '#fff'
              }
            ]}
          />

          {/* SUBSTITUIR POR UMA CLASSIFICAÇÃO DO NÍVEL DO EXERCÍCIO
           */}
          <Text style={styles.nameStatus}
          >
            {/* { isOnline ? 'Disponível' : 'Ocupado' } */}
            { levelText? levelText : 'Factível' }
          </Text>
        </View>
      </View>
    </View>
  );
}