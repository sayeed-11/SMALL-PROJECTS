import { StyleSheet, Text, View, FlatList, Image, StatusBar, Pressable, SafeAreaView } from 'react-native'
import React from 'react'
import {
  responsiveFontSize as fs,
  responsiveHeight as rh,
  responsiveWidth as rw
} from 'react-native-responsive-dimensions'
import Animated from 'react-native-reanimated'

const Cars = [
  { id: 1, name: 'Lamborghini Aventador', img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ8IR9lKnL0_RpnucuCIkfC-uzaTUL2JIixpaSfD91tRcj0Auh7' },
  { id: 2, name: 'Lamborghini Urus', img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQeXKX6agoS0ilAwSiOeEU2Ta_LXnPhxQn_f0i_WI8oBroshrKk' },
  { id: 3, name: 'Lamborghini Murciélago', img: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/masterpieces/murcielago-lp-670-superveloce/murcielago_lp_670_superveloce_hero_01.jpg' },
  { id: 4, name: 'Lamborghini Gallardo', img: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/masterpieces/gallardo-lp-550-2-2/Gallardo%20LP%20550-2-HEADER.jpg' },
  { id: 5, name: 'Lamborghini Miura', img: 'https://res.cloudinary.com/kidston/image/upload/c_fill//PB_20230525_022.jpg' },
  { id: 6, name: 'Lamborghini Centenario', img: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/few_off/Centenario/gallery/Lamborghini-Centenario-01.jpg' },
  { id: 7, name: 'Lamborghini Countach', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Lamborghini_Countach_-_Flickr_-_exfordy_%282%29.jpg/640px-Lamborghini_Countach_-_Flickr_-_exfordy_%282%29.jpg' },
  { id: 8, name: 'Lamborghini Diablo', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/1995_Lamborghini_Diablo_SE_30.jpg' },
  { id: 9, name: 'Lamborghini Veneno', img: 'https://www.carscoops.com/wp-content/uploads/2022/12/2015-Lamborghini-Veneno-Roadster-No2-main.jpg' },
]

const CarList = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      {/* <Text style={{padding:rh(2),fontSize:fs(3),fontWeight:'bold'}}>Lamborghini</Text> */}
      <View>
        <FlatList
          data={Cars}
          renderItem={({ item }) =>
            <Pressable key={item.id}
              style={{
                marginVertical: rh(1),
                shadowOffset: { width: 3, height: 3 },
                shadowColor: '#000',
                shadowOpacity: .5,
                shadowRadius: 5
              }}
              onPress={() => { navigation.navigate('CarDetails', { src: item.img, val: item.id, name: item.name }) }}>
              <Animated.Image
                sharedTransitionTag={item.id.toString()}
                style={{
                  width: rw(90),
                  height: rh(30),
                  borderRadius: 10,
                  marginHorizontal: 10
                }} source={{ uri: item.img }} />
            </Pressable>
          }
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          pagingEnable
        />
      </View>
    </SafeAreaView>
  )
}

export default CarList

const styles = StyleSheet.create({})