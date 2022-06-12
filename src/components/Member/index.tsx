import React from 'react';

import {
  View,
  Text
} from 'react-native';
<<<<<<< HEAD
import { styles } from './styles';
import { Avatar } from '../Avatar';
import { theme } from '../../global/styles/theme';
import { SvgProps } from 'react-native-svg'
import { ListDivider } from '../../components/ListDivider';
=======

import { styles } from './styles';

import { Avatar } from '../Avatar';
import { theme } from '../../global/styles/theme';
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c

export type MemberProps = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
}

type Props = {
<<<<<<< HEAD
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
=======
  data: MemberProps;
}

export function Member({ data }: Props){
  const { on, primary } = theme.colors;
  const isOnline = data.status === 'online';

  return (
    <View style={styles.container}>
      <Avatar urlImage={data.avatar_url} />

      <View>
        <Text style={styles.title}>
          { data.username }
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
        </Text>

        <View style={styles.status}>
          <View 
            style={[
              styles.bulletStatus,
              {
<<<<<<< HEAD
                // backgroundColor: isOnline ? on : primary
                backgroundColor: levelColors? levelColors : '#fff'
=======
                backgroundColor: isOnline ? on : primary
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
              }
            ]}
          />

<<<<<<< HEAD
          {/* SUBSTITUIR POR UMA CLASSIFICAÇÃO DO NÍVEL DO EXERCÍCIO
           */}
          <Text style={styles.nameStatus}
          >
            {/* { isOnline ? 'Disponível' : 'Ocupado' } */}
            { levelText? levelText : 'Factível' }
          </Text>
        </View>
      </View>
      <View style={styles.mainBar}>
        <ListDivider isCentered={true} />
      </View>
=======
          <Text style={styles.nameStatus}>
            { isOnline ? 'Disponível' : 'Ocupado' }
          </Text>
        </View>
      </View>
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
    </View>
  );
}