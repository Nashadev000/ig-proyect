import { KeyboardAvoidingView, TouchableWithoutFeedback, Switch } from 'react-native'
import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput, Keyboard } from 'react-native'
import { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import Constants from 'expo-constants'
//data
import { userDate } from '../../data/user-profile';

const EditProfileScreen = () => {

  const GenderOptions = ['Masculino', 'Femenino', 'Personalizado', 'Prefiero no decirlo']
  const [gender, setGender] = useState('Masculino');
  const [receiveUpdates, setReceiveUpdates] = useState(false);


  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', gap: 20, marginBottom: 10 }}>
          <Image style={styles.image} source={{ uri: userDate.photo }} />
          <Image style={styles.image} source={{ uri: userDate.avatar }} />
        </View>
        <View >
          <TouchableOpacity>
            <Text style={styles.buttonText}>Editar perfil o avatar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1, padding: 10 }}>
        {/* KeyboardAvoidingView -> Ajusta la posición cuando el teclado aparece o desaparece. */}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          {/* Keyboard.dismiss -> Cierra el teclado cuando se toca fuera de un elemento de entrada. */}
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View >
              <Text style={styles.titleInput}>Nombre</Text>
              <TextInput style={styles.textInput} />
              <Text style={styles.titleInput}>Nombre de usuario</Text>
              <TextInput style={styles.textInput} />
              <Text style={styles.titleInput}>Pronombres</Text>
              <TextInput style={styles.textInput} />
              <Text style={styles.titleInput}>Presentación</Text>
              <TextInput style={styles.textInput} />
              <Text style={styles.titleInput}>Enlaces</Text>
              <TextInput style={styles.textInput} />
              <Text style={styles.titleInput}>Género</Text>
              <Picker
                selectedValue={gender}
                onValueChange={(itemValue) => setGender(itemValue)}
              >
                {GenderOptions.map((option) => (
                  <Picker.Item key={option} label={option} value={option} />
                ))}
              </Picker>
              <Text style={styles.titleInput}>Mostrar insignia de Threads</Text>
              <Switch
                value={receiveUpdates}
                onValueChange={(value) => setReceiveUpdates(value)}
              />
              <TouchableOpacity style={styles.footerText}>
                <Text style={styles.buttonText}>Cambiar a cuenta profesional</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.footerText}>
                <Text style={styles.buttonText}>Configuración de información personal</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.footerText}>
                <Text style={styles.buttonText}>Regístrate en Meta Verified</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>

        </KeyboardAvoidingView>
      </View>
    </View>
  )
}

export default EditProfileScreen

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 10
  },
  container: {
    paddingTop: Constants.statusBarHeight,
    alignItems: 'center'
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  buttonText: {
    color: '#1F74BF',
    fontWeight: '800',
  },
  titleInput: {
    marginTop: 10
  },
  textInput: {
    borderColor: '#000000',
    borderBottomWidth: 1,
  },
  footerText: {
    paddingBottom: 20,
  }
})