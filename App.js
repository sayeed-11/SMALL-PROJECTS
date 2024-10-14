import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogIn from './Ramazan/LogIn';
import SignUp from './Ramazan/SignUp';
import SwiperBox from './Swiper/Swiper';
import Info from './Swiper/Info';
import Information from './Swiper/Information';
import CarList from './Swiper/CarList';
import CarDetails from './Swiper/CarDetails';
import NewCarList from './Swiper/NewCarList';
import Swiper1 from './MyProject/Swiper1';
import CoverScroll from './MyProject/Swiper2';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogIn" component={LogIn} options={{headerShown:false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />
        {/* <Stack.Screen name="SwiperBox" component={SwiperBox} options={{headerShown:false}} /> */}
        {/* <Stack.Screen name="Info" component={Info} options={{headerShown:false}} /> */}
        {/* <Stack.Screen name="Information" component={Information} options={{headerShown:false}} /> */}
        {/* <Stack.Screen name="CoverScroll" component={CoverScroll} options={{headerShown:false}} /> */}
        {/* <Stack.Screen name="Swiper1" component={Swiper1} options={{headerShown:false}} /> */}
        {/* <Stack.Screen name="NewCarList" component={NewCarList} options={{headerShown:false}} /> */}
        {/* <Stack.Screen name="CarList" component={CarList} options={{headerShown:false}} />
        <Stack.Screen name="CarDetails" component={CarDetails} options={{headerShown:false}} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// import * as React from 'react';
// import { View, Button, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Animated from 'react-native-reanimated';

// const Stack = createNativeStackNavigator();


// function HomeScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Pressable onPress={() => navigation.navigate('Details', { src: 'https://i.pinimg.com/564x/45/52/4e/45524e54ffdc166dbfad3b83e681d13b.jpg', key: 0 })}>
//         <Animated.Image key={0}
//           source={{ uri: 'https://i.pinimg.com/564x/45/52/4e/45524e54ffdc166dbfad3b83e681d13b.jpg' }}
//           style={{ width: 100, height: 200 }}
//           sharedTransitionTag={'img' + '0'}
//         />
//       </Pressable>
//       <Pressable key={1} onPress={() => navigation.navigate('Details', { src: 'https://i.pinimg.com/474x/8d/6d/92/8d6d924c583d22ebaa2edc67590051d6.jpg', key: 1 })}>
//         <Animated.Image
//           source={{ uri: 'https://i.pinimg.com/474x/8d/6d/92/8d6d924c583d22ebaa2edc67590051d6.jpg' }}
//           style={{ width: 100, height: 200 }}
//           sharedTransitionTag={'img' + '1'}
//         />
//       </Pressable>
//       <Pressable key={2} onPress={() => navigation.navigate('Details', { src: 'https://i.pinimg.com/474x/07/c3/ac/07c3acc9052a12191787e868636f792c.jpg', key: 2 })}>
//         <Animated.Image
//           source={{ uri: 'https://i.pinimg.com/474x/07/c3/ac/07c3acc9052a12191787e868636f792c.jpg' }}
//           style={{ width: 100, height: 200 }}
//           sharedTransitionTag={'img' + '2'}
//         />
//       </Pressable>
//     </View>
//   );
// }

// function DetailsScreen({ navigation, route }) {
//   const { src, key } = route.params;
//   // const { key } = route.params;
//   console.log(src, key)
//   return (
//     <View style={styles.content}>
//       <Animated.Image
//         source={{ uri: src }}
//         style={{ width: 300, height: 600 }}
//         sharedTransitionTag={'img' + key}
//       />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'row'
//   },
//   content: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });
