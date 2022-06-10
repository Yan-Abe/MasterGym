import React, { useState, useEffect } from 'react';
import { Fontisto } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import * as Linking from 'expo-linking';

import {
  ImageBackground,
  Text,
  View,
  Alert,
  FlatList,
  Share,
  Platform
} from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { api } from '../../services/api';
import { LinearGradient } from 'expo-linear-gradient'
import { ScrollView } from 'react-native'
import { AppointmentProps } from '../../components/Appointment';
import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { ButtonIcon } from '../../components/ButtonIcon';
import BannerImg from '../../assets/bannerImg.png';
import { Member, MemberProps } from '../../components/Member';
import { Header } from '../../components/Header';
// import { Load } from '../../components/Load';
import { exercises } from '../../utils/exercises'


type Props = {
  // trainninglist: number
  //para os exercícios
  //para os exercícios
  //para os exercícios
  //para os exercícios
  //para os exercícios
  //para os exercícios
  //para os exercícios
  //para os exercícios
  //para os exercícios
}



type Params = {
  guildSelected: AppointmentProps
}

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];  
}

export function AppointmentDetails(){
  const { secondary50, secondary70, secondary80, secondary100  } = theme.colors
  const members = [
    { 
      id: '1',
      username: 'Zocca',
      avatar_url: 'https://avatars.githubusercontent.com/u/70301673?v=4',
      status: 'online'
    },
    { 
      id: '2',
      username: 'Thiago',
      avatar_url: 'https://avatars.githubusercontent.com/u/70613241?v=4',
      status: 'online'
    },
    { 
      id: '3',
      username: 'José Heringer',
      avatar_url: 'https://avatars.githubusercontent.com/u/46639621?s=100&v=4',
      status: 'online'
    },
    { 
      id: '4',
      username: 'Luís Henrique',
      avatar_url: 'https://avatars.githubusercontent.com/u/78935952?s=100&v=4',
      status: 'online'
    }
  ];

  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  const { guildSelected } = route.params as Params;
  
  var generateCard: boolean;

  async function fetchGuildWidget() {
    try {
      const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);
      setWidget(response.data);      
    } catch {
      Alert.alert('Verifique as configurações do servidor. Será que o Widget está habilitado?');      
    } finally {
      setLoading(false);
    }
  }

  // function handleShareInvitation() {
  //   const message = Platform.OS === 'ios' 
  //   ? `Junte-se a ${guildSelected.guild.name}`
  //   : widget.instant_invite;

  //   Share.share({
  //     message,
  //     url: widget.instant_invite
  //   });    
  // }

  function handleOpenGuild(){
    Linking.openURL(widget.instant_invite);
  }

  // useEffect(() => {
  //   fetchGuildWidget();
  // },[]);
  return (
    <Background>
      <Header 
          title="Detalhes"
          action={
            // guildSelected.guild.owner &&
            <BorderlessButton 
            // onPress={handleShareInvitation}
            >
              {/* // BOTÃO  DE SHARE (O com 3 bolinhas) */}
              <Fontisto 
                name="share"
                size={24}
                color={theme.colors.primary}
                />
            </BorderlessButton>
          }
      />

      <ImageBackground 
          source={BannerImg}
          style={styles.banner}
          >
          <View style={styles.bannerContent}>
                <Text style={styles.title}> 
                  { guildSelected.guild.name }
                </Text>

                <Text style={styles.subtitle}>
                  { guildSelected.description }
                </Text>
          </View>
      </ImageBackground>
      <ListHeader 
            title="Exercícios"
            // subtitle={`Total ${widget.members.length}`}
            subtitle="TESTES"
          />
      {/* <FlatList 
            data={members}
            // especificando a chave
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Member data={item} />
            )}
            // ItemSeparatorComponent={() => <ListDivider isCentered />}
            // style={styles.members}
      /> */}

      {/* PARA OS EXERCÍCIOS */}
      <ScrollView
      // horizontal
      style={styles.members}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {/* lista de categorias-> percorrer cada uma delas */}
      {exercises.map(exercises => (
        
        //IMPLEMENTAR A LÓGICA DO TIPO DE TREINO/LUTA OU DANÇA
        exercises.trainninglist.map(
                // trainninglist => (trainninglist === TrainningList?  <Member
                trainninglist => (trainninglist === 4?  
                  <View key={exercises.id}>
                      <Member
                        key={exercises.id}
                        title={exercises.title}
                        icon={exercises.icon}
                        difficulty={exercises.difficulty}
                        />
                    </View>
                  : null))
        // &&
        // generateCard &&  
        // <Member
        //   key={exercises.id}
        //   title={exercises.title}
        //   icon={exercises.icon}
        //   difficulty={exercises.difficulty}
        // checked={exercises.id === categorySelected}
        // onPress={() => setCategory(exercises.id)}
        // hasCheckBox={hasCheckBox}
        //   />

      ))}
    </ScrollView>
    <View style={styles.footer}>
          <ButtonIcon 
            title="Mandar Treino por Email" 
            onPress={handleOpenGuild}
          />
    </View>
      {/* <FlatList 
            data={widget.members}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Member data={item} />
            )}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            style={styles.members}
      /> */}
      {/* {
        loading ? <Load /> :
        <>
          <ListHeader 
            title="Jogadores"
            subtitle={`Total ${widget.members.length}`}
          />

          <FlatList 
            data={widget.members}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Member data={item} />
            )}
            style={styles.members}
          />
        </>
      }

      {
         guildSelected.guild.owner &&
        <View style={styles.footer}>
          <ButtonIcon 
            title="Entrar na partida" 
            onPress={handleOpenGuild}
          />
        </View>
      } */}
   </Background>
  );
}