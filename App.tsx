import React from 'react'
<<<<<<< HEAD
import { StatusBar } from 'react-native'
=======
import { StatusBar, LogBox } from 'react-native'
import { Home } from './src/screens/Home'
import { Background } from './src/components/Background'
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold
} from '@expo-google-fonts/rajdhani'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
<<<<<<< HEAD
/**
 * SUBSTITUI O LINK DIRETO COM A HOME PELAS ROTAS
 */
// import { Home } from './src/screens/Home'
import { Routes } from './src/routes'
import { Background } from './src/components/Background'
import { SignIn } from './src/screens/SignIn'

//load fonts globaly for the project
=======
import { AuthProvider } from './src/hooks/auth'
import { Routes } from './src/routes'

>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
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
<<<<<<< HEAD
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
=======
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
  )
}
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
