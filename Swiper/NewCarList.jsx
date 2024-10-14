import React from 'react';
import { Text, Dimensions, StyleSheet, View, Image } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const colors = ['tomato', 'thistle', 'skyblue', 'teal'];

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


const NewCarList = () => {
  return (
    <View style={styles.container}>
      <SwiperFlatList
        //   autoplay
        //   autoplayDelay={2}
        //   autoplayLoop
        index={2}
        showPagination
        data={Cars}
        renderItem={({ item }) => (
          <View style={[styles.child, { backgroundColor: 'orange' }]}>
            <Text style={styles.text}>{item.name}</Text>
            <Image style={{
              // padding:100,
              width: width * 1,
              height: 300
            }} source={{ uri: item.img }} />
          </View>
        )}
      />
    </View>
  )
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'red',
    height:300
  },
  child: {
    justifyContent: 'center',
    alignItems: 'center',
    height:300
  },
  text: { fontSize: width * 0.05, textAlign: 'center' },
});

export default NewCarList
