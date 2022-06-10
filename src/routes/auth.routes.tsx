////////////OBS-> O NAVIGATION É RESPONSÁVEL PELA INTERFACE FEIA
/**
 * @DEFINIÇÃO_DE_PÁGINAS - @DE_INTERFACES_DE_NAVEGAÇÃO
 * @SEQUÊNCIA_DE_ACESSO_ÀS_ROTAS
 */

//Etapas da instalação -> instalação do core de navegação,
// -> instalação das dependências
//-> e agora, o estilo de navegação

import React from 'react'
//react stack - para usar estilo de navegação
//para navegação em pilha
//ABAIXO -> IMPORTANDO DE DENTRO DO CORE DE NAVEGAÇÃO
import { createStackNavigator } from '@react-navigation/stack'
import { Background } from '../components/Background'

import { Home } from '../screens/Home'
import { AppointmentDetails } from '../screens/AppointmentDetails'
import { Header } from '../components/Header'
// import { AppointmentCreate } from '../screens/AppointmentCreate';
import { SignIn } from '../screens/SignIn'

/**
 * esse arquivo é dedicado às rodas à que o user tem acesso quando está autenticado
 */
//ABAIXO: Fazendo um destructuring JS
const { Navigator, Screen } = createStackNavigator()

//aqui ficam as screens disponíveis para navegação
//isso é composto por nome e o componente que será acessado no clique do botão
//por padrão, a primeira screen aberta será, também, a primeira a ser aberta

/**
 * @SOBRE AS CUSTOMIZAÇÕES DO NAVIGATOR
 * -> É PRECISO PERSONALIZAR AS CUSTOMIZAÇÕES DO NAVIGATOR, POIS ELE TRÁS ALGUNS ELEMENTOS POR PADRÃO QUE PODEM SOBREPOR AS CUSTOMIZAÇÕES FEITAS MANUALMENTE
 */
export function AuthRoutes() {
  return (
    <Navigator
      // NavigationOptions=
      screenOptions={{
        cardStyle: { backgroundColor: 'transparent' }
        // cardStyle: { backgroundColor: ''#B01A11'' }
      }}
      // headerMode="none"
    >
      {/*
      THE LINE OF CODE BELOW HELPS AVOID THE SCREEN HEADER FROM APPEARING
      //"headerMode" is deprecated
      options={({})=>({
        headerShown:false
      })} */}
      <Screen
        name="SignIn"
        component={SignIn}
        options={({}) => ({
          headerShown: false
          // backgroundColor: '#B01A11'
        })}
      />
      <Screen
        name="Home"
        component={Home}
        options={({}) => ({
          headerShown: false
          // backgroundColor: '#f4511e'
          // activeBackgroundColor: 'transparent'
          // activeBackgroundColor: false
        })}
      />
      <Screen 
        name="AppointmentDetails"
        component={AppointmentDetails}
        options={({}) => ({
          headerShown: false
          // backgroundColor: '#B01A11'
        })}
      />
      {/* <Screen 
        name="AppointmentCreate"
        component={AppointmentCreate}
      />  */}
    </Navigator>
  )
}
