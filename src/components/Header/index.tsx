import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Text, View } from 'react-native';
<<<<<<< HEAD
import { Background } from '../../components/Background'
=======

>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
import { theme } from '../../global/styles/theme';
import { styles } from './style';

type Props = {
  title: string;
<<<<<<< HEAD
  //ReactNode: Nó de um componente-> permite que eu passe de forma dinâmica o que eu quero inserir
  action?: ReactNode;
  color?: string;
}

export function Header({ title, action, color}: Props ){
  const { secondary100, secondary40, heading, secondary80 } = theme.colors;
=======
  action?: ReactNode;
}

export function Header({ title, action}: Props ){
  const { secondary100, secondary40, heading } = theme.colors;
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }

  return (
<<<<<<< HEAD
    // <View
    //   style={styles.container}>

    //   <Background>
    <LinearGradient
    style={styles.container}
    // colors={['red', 'black']}
    colors={[secondary40, color? color:secondary80]}
    start={{ x: 0.8, y: 0 }}
    end={{ x: 0, y: 0.1 }}
    >

        {/* <LinearGradient 
          style={styles.container}
          colors={[secondary100, secondary40]}
        > */}
          {/* botão de voltar 
          indicado para botões que não têm texto*/}
          <BorderlessButton 
            onPress={handleGoBack}
            >
            {/* íncone na lib "@expo/vector-icons"*/}
            <Feather 
              name="arrow-left"
              size={24}
              color={heading}
              />
          </BorderlessButton>

          <Text style={styles.title}>
            { title }
          </Text>

          {
            // se existe uma ação, renderiza uma view
            action 
            ? 
            <View>
              { action }
            </View>
            :
            <View style={{ width: 24 }}/>
          }
        {/* </LinearGradient> */}
      {/* </Background>
    </View> */}
=======
    <LinearGradient 
      style={styles.container}
      colors={[secondary100, secondary40]}
    >
      <BorderlessButton onPress={handleGoBack}>
        <Feather 
          name="arrow-left"
          size={24}
          color={heading}
        />
      </BorderlessButton>

      <Text style={styles.title}>
        { title }
      </Text>

      {
        action 
        ? 
        <View>
          { action }
        </View>
        :
        <View style={{ width: 24 }}/>
      }
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
    </LinearGradient>
  );
}