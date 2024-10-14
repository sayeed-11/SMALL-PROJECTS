import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Animated, { FadeInDown, FadeInLeft, FadeInUp } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { responsiveFontSize as fs, responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions';


const SignUp = () => {
    const navigation = useNavigation();
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
      <View style={{marginTop:rh(10)}}>
        <Animated.View entering={FadeInUp.delay(300).duration(300).springify()}>
          <Text style={styles.title}>SIGN UP</Text>
        </Animated.View>
        <Animated.View entering={FadeInLeft.delay(400).duration(300).springify()}>
          <TextInput placeholder='email id' style={styles.input} />
        </Animated.View>
        <Animated.View entering={FadeInLeft.delay(500).duration(300).springify()}>
          <TextInput placeholder='password' passwordRules={true} secureTextEntry={true} style={styles.input} />
        </Animated.View>
        <Animated.View entering={FadeInLeft.delay(600).duration(300).springify()}>
          <TextInput placeholder='confirm password' passwordRules={true} secureTextEntry={true} style={styles.input} />
        </Animated.View>
        <Animated.View entering={FadeInLeft.delay(700).duration(200).springify()}>
          <TouchableOpacity style={styles.button}>
            <Text style={{
              fontSize: fs(2),
              color: '#FFF',
              fontWeight: 'bold'
            }}>SIGN UP</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(800).springify().duration(300)} style={{flexDirection:'row',marginTop:rh(1),gap:rw(3),justifyContent:'center',marginTop:rh(3),alignItems:'center'}}>
          <Text style={{color:'#FFF',fontSize:fs(2)}}>Already have an account?</Text>
          <TouchableOpacity onPress={()=>{navigation.navigate('LogIn')}}>
            <Text  style={{color:'#7006b2',fontSize:fs(2),fontWeight:'bold'}}>
              Log in
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  )
}

export default SignUp

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
    borderRadius:5
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
    textAlign:'center',
    letterSpacing:1,
    marginBottom:rh(10)
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
    borderRadius:5
  }
})