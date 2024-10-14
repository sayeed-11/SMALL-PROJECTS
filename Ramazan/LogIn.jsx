import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { responsiveFontSize as fs, responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions';
import { useState } from 'react';


const LogIn = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const checkId = () => {
    // if(username === 'Username' && password === 'Password'){
    //   navigation.navigate('SwiperBox')
    // }
    // navigation.navigate('Info')
    navigation.navigate('SwiperBox')
    setPassword('');
    setUsername('');
  }

  return (
    <View style={styles.container}>
      <Image style={styles.backImage} source={require('../assets/download.jpeg')} />
      <Animated.View style={{
        position: 'absolute',
        top: 0,
        left: rw(50)
      }} entering={FadeInUp.delay(100).duration(300).springify().damping(3)}>
        <Image source={require('../assets/whiteLamp.png')} style={styles.leftLamp} />
      </Animated.View>
      <Animated.View style={{
        position: 'absolute',
        top: 0,
        right: -rw(10)
      }} entering={FadeInUp.delay(200).duration(300).springify().damping(3)}>
        <Image source={require('../assets/whiteLamp.png')} style={styles.rightLamp} />
      </Animated.View>
      <View style={{ marginTop: rh(10) }}>
        <Animated.View entering={FadeInUp.delay(300).duration(300)}>
          <Text style={styles.title}>LOG IN</Text>
        </Animated.View>
        <Animated.View entering={FadeInUp.delay(600).duration(300)}>
          <TextInput
            placeholder='usename'
            style={styles.input}
            value={username}
            onChangeText={Text => setUsername(Text)}
          />
        </Animated.View>
        <Animated.View entering={FadeInUp.delay(900).duration(300)}>
          <TextInput
            placeholder='password'
            passwordRules={true} secureTextEntry={true}
            style={styles.input}
            value={password}
            onChangeText={Text => setPassword(Text)}
          />
        </Animated.View>
        <Animated.View entering={FadeInUp.delay(900).duration(300)}>
          <TouchableOpacity>
            <Text style={{
              color: '#7006b2',
              fontWeight: 'bold'
            }}>Forgot Password?</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View entering={FadeInUp.delay(1200).duration(200)}>
          <TouchableOpacity
            style={styles.button}
            onPress={checkId}
          >
            <Text style={{
              fontSize: fs(2),
              color: '#FFF',
              fontWeight: 'bold'
            }}>LOG IN</Text>
          </TouchableOpacity>
        </Animated.View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: rh(1),
            gap: rw(3),
            justifyContent: 'center',
            marginTop: rh(3),
            alignItems: 'center'
          }}>
          <Text
            style={{
              color: '#FFF'
            }}
          >Don't have any account?</Text>
          <TouchableOpacity
            onPress={() => { navigation.navigate('SignUp') }}>
            <Text
              style={{
                color: '#7006b2',
                fontWeight: 'bold',
                fontSize: fs(2)
              }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default LogIn

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'silver'
  },
  backImage: {
    position: 'absolute',
    width: '100%',
    height: '100%'

  },
  leftLamp: {
    position: 'absolute',
    top: -rh(7),
    right: rw(5),
    width: rw(35),
    height: rh(35),
    // backgroundColor:'red'
  },
  rightLamp: {
    position: 'absolute',
    top: -rh(6),
    right: rw(15),
    width: rw(28),
    height: rh(28),
  },
  input: {
    width: rw(90),
    height: rh(6),
    backgroundColor: '#FFF',
    marginVertical: rh(1),
    paddingHorizontal: rw(3),
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    borderRadius: 5
  },
  title: {
    color: "#fff",
    fontSize: fs(5),
    fontWeight: 'bold',
    marginTop: rh(15),
    shadowOffset: {
      width: .1,
      height: .1
    },
    shadowColor: "#fff",
    shadowOpacity: 1,
    shadowRadius: 1,
    textAlign: 'center',
    letterSpacing: 1,
    marginBottom: rh(10)
  },
  button: {
    width: rw(90),
    height: rh(6),
    backgroundColor: '#7006b2',
    borderRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    marginTop: rh(5),
    borderRadius: 5

  }
})