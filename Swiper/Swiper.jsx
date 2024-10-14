import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import {
    responsiveFontSize as fs
    , responsiveHeight as rh
    , responsiveWidth as rw
} from 'react-native-responsive-dimensions'
import Animated, { FadeInUp } from 'react-native-reanimated'
import { TouchableOpacity,Pressable } from 'react-native'

const myData = [
    'https://i.pinimg.com/564x/c3/cc/d5/c3ccd586e13a21cf9011ed25e3a6fbbd.jpg',
    'https://i.pinimg.com/474x/72/a4/74/72a474a96959c54bb629762683d12869.jpg',
    'https://i.pinimg.com/474x/9d/7c/fb/9d7cfb4ce217e5705b6b54dc3eeed9e5.jpg',
    'https://i.pinimg.com/474x/df/9c/2b/df9c2b923548d26c71daf9ed602197b5.jpg',
    'https://i.pinimg.com/474x/fd/56/7e/fd567e8c16b50188a3a875a72844c64c.jpg',
    'https://i.pinimg.com/474x/e8/53/e3/e853e3ba564260eb78721b4124845e2a.jpg',
    'https://i.pinimg.com/474x/99/57/53/9957532f6d21ba381ccc67d0473c5be1.jpg',
    'https://i.pinimg.com/474x/7d/6c/d2/7d6cd2840a02aa8f8d48acb059f45c90.jpg',
    'https://i.pinimg.com/474x/99/9a/b1/999ab1198bd273690456208350805db4.jpg',
    'https://i.pinimg.com/474x/da/bb/1c/dabb1c3ff33abd01ac4aa811aa0d2ad2.jpg',
    'https://i.pinimg.com/474x/09/cf/8a/09cf8a7910db9ce764a978f0622bdcc8.jpg',
    'https://i.pinimg.com/474x/af/15/1c/af151ca67a9434fa5c501cdd537c413b.jpg'
]


const SwiperBox = ({navigation}) => {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            {/* <Image style={{position:'absolute',width:'100%',height:'100%'}} source={require('../assets/download.jpeg')}/> */}
            <View style={{
                width: rw(94),
                height: rh(54),
                borderWidth: 1,
                borderColor: '#FFF',
                elevation: 5,
                marginTop: rh(3),
                borderRadius: 10,
                overflow: 'hidden',

            }}>
                <Swiper
                    showsPagination={true}
                    horizontal={true}
                    autoplay
                    loop={true}
                    // showsPaginationBelow={false}
                    dotColor='#FFF'
                    activeDotColor='#7006b2'
                    // onIndexChanged={()=>{console.warn('page changed')}}
                    scrollEnabled={false}
                >
                    {
                        myData.map((item, index) => <View style={styles.imageContainer} key={index}>
                            <Image style={styles.myImage} source={{ uri: item }} />
                        </View>)

                    }
                </Swiper>

            </View>
            <View style={{
                width: rw(100),
                height: rh(43),
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <FlatList
                    data={myData}
                    horizontal={false}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) =>
                        <Animated.View
                            entering={FadeInUp.delay(200 * index).duration(200).springify()}
                            style={{
                                marginHorizontal: rw(2),
                                position: 'relative',
                                width: rw(45),
                                height: rh(35),
                                borderRadius: 10,
                                overflow: 'hidden',
                                borderWidth: 1,
                                borderColor: '#FFF',
                                elevation: 10,
                                marginTop: rh(1),
                                shadowOffset: { width: 5, height: 5 },
                                shadowColor: '#000',
                                shadowOpacity: 1,
                                shadowRadius: 10,
                            }}>
                            <Pressable style={{position:'absolute',width:'100%',height:'100%'}} onPress={()=>{navigation.navigate('Information',{src:item, key:`img${index}`})}}>
                                <Animated.Image
                                    key={index}
                                    style={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        borderRadius:5,
                                    }}
                                    sharedTransitionTag={'img' + index}
                                    source={{ uri: item }} />
                            </Pressable>
                        </Animated.View>}
                />
            </View>
        </View>
    )

}

export default SwiperBox




const styles = StyleSheet.create({
    swipercontainer: {
        // justifyContent:'center',
        // alignItems:'center',
        // width:200,
        // height:400
    },

    imageContainer: {
        flex: 1,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        // width:300,
        // height:500
    },
    myImage: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    }
})

