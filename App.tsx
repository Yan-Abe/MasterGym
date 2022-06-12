import React from 'react'
import { StatusBar } from 'react-native'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold
} from '@expo-google-fonts/rajdhani'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
/**
 * SUBSTITUI O LINK DIRETO COM A HOME PELAS ROTAS
 */
// import { Home } from './src/screens/Home'
import { Routes } from './src/routes'
import { Background } from './src/components/Background'
import { SignIn } from './src/screens/SignIn'

//load fonts globaly for the project
export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Background>
      {/* <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      /> */}
      <Routes />
      {/* <AuthProvider>
      </AuthProvider> */}
    </Background>
  )
}

//---------------------
// export default function App() {
//   return (
//     <Background>
//       <Home />
//     </Background>
//   )
// }
//FRAGMENTS
;<></>
