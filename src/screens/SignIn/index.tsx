import React from 'react';
import { 
  View, 
  Text,
  Image,
  StatusBar
 } from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon'; 
import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles'

export function SignIn(){
  return (
    <View style ={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Image 
        source={IllustrationImg} 
        style={styles.image}
        resizeMode="stretch"
         />

         <View style={styles.content}>
            <Text style={styles.title}>
            Conecte-se{`\n`}
            e organize seus{`\n`}
            treinos
            </Text>

            <Text style={styles.subtitle}>
            Entre com sua conta para {`\n`}
            ter acesso aos treinos!
            </Text>

          <ButtonIcon 
            title="Entrar com o Gmail"
            activeOpacity={0.7}
            />

         </View>
    </View>
  );
}
