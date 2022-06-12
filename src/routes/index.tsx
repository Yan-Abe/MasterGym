<<<<<<< HEAD
/**-----> GUARDA O CONTEXTO DE NAVEGAÇÃO EM SI
 * esse arquivo index serve para centralizar, pois podemos ter várias rotas, como:
 * -> ROTAS PARA ENTRADA,
 * -> ROTAS PARA USUÁRIO ADMN
 * ROTAS PARA DEFINIR O ACESSO DE CADA USER
 */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthRoutes } from './auth.routes'

//o NavigationContainer guarda o histórico de navegação recente também
//esse componente do core da biblioteca principal do react permite gerenciar as nossas rotas com maestria
//é possível retroceder à rota anterior sem ter que armazenar a rota
export function Routes() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  )
}
=======
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks/auth';

import { SignIn } from '../screens/SignIn';
import { AppRoutes } from './app.routes';

export function Routes(){
  const { user } = useAuth();

  return(
    <NavigationContainer>
     { user.id ? <AppRoutes /> : <SignIn /> }
    </NavigationContainer>
  )
}
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
