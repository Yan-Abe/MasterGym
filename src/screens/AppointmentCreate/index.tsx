import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';
import { ButtonIcon } from '../../components/ButtonIcon';

import {
  Text,
  View,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

// import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';

import { CategorySelect } from '../../components/CategorySelect';
import { ModalView } from '../../components/ModalView';
import { Background } from '../../components/Background';
import { SmallInput } from '../../components/SmallInput';
import { SmallStringInput } from '../../components/SmallInput/variant';
import { GuildIcon } from '../../components/GuildIcon';
import { TextArea } from '../../components/TextArea';
import { GuildProps } from '../../components/Guild';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { CheckBox } from '../../components/CheckBox';
import { Guilds } from '../Guilds';


export function AppointmentCreate(){
  const { secondary100, secondary40, heading, secondary80, secondary85 } = theme.colors;
  const [category, setCategory] = useState('')
  const [openGuildsModa, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [description, setDescription] = useState('');

  const navigation = useNavigation();

  function handleOpenGuilds(){
     setOpenGuildsModal(true);
  }

  function handleCloseGuilds(){ 
    setOpenGuildsModal(false);
  }

  function handleGuildSelect(guildSelect: GuildProps){
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  }

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId);
  } 

  /**
   * @TAKEALOOK
   * @SECION_ON_TRACING
   */
  // async function handleSave() {
      
        /**
         * @TAKEALOOK
         * @FIXING_BUGS
         */
    //   const newAppointment = {
      //     id: uuid.v4(),
      //     guild,
      //     category,
      //     date: `${day}/${month} às ${hour}:${minute}h`,
  //     description
  //   };

  //   const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
  //   const appointments = storage ? JSON.parse(storage) : [];

  //   await AsyncStorage.setItem(
  //     COLLECTION_APPOINTMENTS,
  //     JSON.stringify([...appointments, newAppointment])
  //   );

  //   navigation.navigate('Home');    
  // }
 

  return(
    <LinearGradient
    style={styles.container}
    // colors={['red', 'black']}
    colors={[secondary40, secondary80]}
    start={{ x: 0.8, y: 0.2 }}
    end={{ x: 0.1, y: 0.1 }}>

      <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height' }
          style={[styles.container]}>
        <ScrollView>  
        
          <Background>
            <LinearGradient
              style={styles.container}
              // colors={['red', 'black']}
              colors={[secondary40, secondary80]}
              start={{ x: 0.8, y: 0.2 }}
              end={{ x: 0.1, y: 0.1 }}
              >

              <Header
                title="Agendamento de Treinos"
                action={null}
                // color='#acf'
                />
              <Text style={[
                styles.label, 
                { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}
                >
                Categoria
              </Text>
                
              {
                /**
                 *@SLIDE_OPTIONS
                */
              }
              <CategorySelect
                hasCheckBox
                setCategory={setCategory}
                categorySelected={category}/>

              <View style={styles.form}>
                  {
                    /**
                     *@SERVER_OPTIONS_BUTTON
                    */
                  }
                  <RectButton onPress={handleOpenGuilds}>
                        <View style={styles.select}>
                        {
                          // guild.icon 
                          // ? <GuildIcon guildId={guild.id} iconId={guild.icon} /> 
                          // : <View style={styles.image} />
                          // <View style={styles.image} />
                          <GuildIcon/>?<GuildIcon/>:null
                        }

                        <View style={styles.selectBody}>
                          <Text style={styles.label}>
                            { 
                              guild.name 
                              ? guild.name 
                              : 'Selecione um servidor' 
                            }
                          </Text>
                        </View>

                        <Feather 
                          name="chevron-right"
                          color={theme.colors.heading}
                          size={18}
                          />
                        </View>
                  </RectButton>

                  {
                    /**
                     *@INPUT_FIELDS
                    */
                  }
                  <View style={styles.field}>
                    <View>
                      <Text style={[styles.label, { marginBottom: 12 } ]}>
                      Dia e mês
                      </Text>
                      
                      <View style={styles.column}>
                        <SmallInput 
                        maxLength={2} 
                        // onChangeText={setDay}
                        />
                        <Text style={styles.divider}>

                        </Text>
                        <SmallInput 
                        maxLength={2} 
                        // onChangeText={setMonth}
                        />
                      </View>
                    </View>
                    
                    <View>
                      <Text style={[styles.label, { marginBottom: 12 } ]}>
                        Horário
                      </Text>

                      <View style={styles.column}>
                        <SmallInput 
                          maxLength={2} 
                          // onChangeText={setHour}
                          />
                        <Text style={styles.divider}>
                          :
                        </Text>
                        <SmallInput 
                        maxLength={2} 
                        // onChangeText={setMinute}
                        />
                      </View>
                    </View>           
                  </View>
                  {
                    /**
                     *@CHECK_BOXES
                    */
                  }
                  {/* Tipo de treino */}
                  <View style={styles.field2}>
                    <Text style={[styles.label, { marginTop: 6 } ]}>
                      Tipo de treino 
                    </Text>
                    <CheckBox
                    avoidStyle={false}
                    title='1'/>
                    {/* onPress={setTrainingType} */}
                    
                    <CheckBox
                    avoidStyle={false}
                    title='2'/>
                    {/* onPress={setTrainingType} */}
                    
                    <CheckBox
                    avoidStyle={false}
                    title='3'/>
                    {/* onPress={setTrainingType} */}
                    
                    <CheckBox
                    avoidStyle={false}
                    title='4'/>
                    {/* onPress={setTrainingType} */}
                  </View>
                  {
                    /**
                     *@TEXT_AREA
                    */
                  }
                  <View style={[styles.field, { marginBottom: 12 }]}>
                    <Text style={styles.label}>
                      Descrição
                    </Text>

                    <Text style={styles.caracteresLimit}>
                      Max 100 caracteres
                    </Text>
                  </View>

                  <TextArea 
                    multiline
                    maxLength={100}
                    numberOfLines={5}
                    autoCorrect={false}
                    onChangeText={setDescription}
                    />

                  <View style={styles.footer}>
                    <Button 
                      title="Agendar" 
                      color={secondary85}
                      secondaryColor={secondary80}
                      // onPress={handleSave}
                      />
                  </View>
              </View>
                {
                  /**
                   *@SEND_MAIL
                  */
                }
                <View style={styles.footer}>
                  <ButtonIcon 
                    title="Enviar Treino por email" 
                    // keep data in db
                    onPress={handleOpenGuilds}
                    />
                  </View>
                    
            </LinearGradient>
          </Background>
        </ScrollView>  
        <ModalView visible={openGuildsModa} closeModal={handleCloseGuilds}>
         <Guilds handleGuildSelect={handleGuildSelect}/>
        </ModalView>
      </KeyboardAvoidingView>              
    </LinearGradient>
  );}
  