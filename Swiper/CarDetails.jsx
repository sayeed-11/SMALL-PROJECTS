import { View, Text, Image, Pressable, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated'
import {
    responsiveFontSize as fs,
    responsiveHeight as rh,
    responsiveWidth as rw
} from 'react-native-responsive-dimensions'

const details = [
    { id: 1, details: 'The Lamborghini Aventador is a mid-engine sports car produced by the Italian automotive manufacturer Lamborghini. The Aventador’s namesake is a Spanish fighting bull that fought in Zaragoza, Aragón, in 1993. The Aventador is the successor to the Murciélago and was produced in Sant Agata Bolognese, Italy.' },
    { id: 2, details: 'The Lamborghini Urus is a luxury SUV manufactured by Italian automobile manufacturer Lamborghini. It was introduced in December 2017 as a 2018 model year production vehicle.' },
    { id: 3, details: 'The Lamborghini Murciélago is a sports car produced by Italian automotive manufacturer Lamborghini between 2001 and 2010. Successor to the Diablo and flagship V12 of the automaker lineup, the Murciélago was introduced as a coupé in 2001. The car was first available in North America for the 2002 model year.' },
    { id: 4, details: 'The Lamborghini Gallardo is a sports car built by the Italian automotive manufacturer Lamborghini from 2003 to 2013. It is Lamborghini second car released under parent company Audi, and the best-selling model at the time with 14,022 built throughout its production run.' },
    { id: 5, details: 'The Lamborghini Miura is a sports car produced by Italian automaker Lamborghini between 1966 and 1973. The car was the first supercar with a rear mid-engined two-seat layout, although the concept was first seen in a production road car with René Bonnet Matra Djet, introduced in 1964.' },
    { id: 6, details: 'The Lamborghini Centenario is a limited production sports car based on the Lamborghini Aventador which was unveiled at the 2016 Geneva Motor Show to commemorate the 100th birthday of the company founder, Ferruccio Lamborghini. ' },
    { id: 7, details: 'The Lamborghini Countach is a rear mid-engine, rear-wheel-drive sports car produced by the Italian automobile manufacturer Lamborghini from 1974 until 1990. It is one of the many exotic designs developed by Italian design house Bertone, which pioneered and popularized the sharply angled "Italian Wedge" shape.' },
    { id: 8, details: 'The Lamborghini Diablo is a high-performance mid-engine sports car built by Italian automobile manufacturer Lamborghini between 1990 and 2001. It is the first production Lamborghini capable of attaining a top speed in excess of 320 kilometres per hour.' },
    { id: 9, details: 'The Lamborghini Veneno is a limited production high performance sports car manufactured by Italian automobile manufacturer Lamborghini. Based on the Lamborghini Aventador, the Veneno was developed to celebrate Lamborghini 50th anniversary. It was introduced at the 2013 Geneva Motor Show.' }
]

const CarDetails = ({ navigation, route }) => {
    const { src, val, name } = route.params;
    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: rh(3)

        }}>
            <Animated.Image
                style={{
                    width: rw(95),
                    height: rh(40),
                    borderRadius: 10,
                }}
                sharedTransitionTag={val.toString()} source={{ uri: src }} />
            <View style={{
                width: rw(95),
                height: rh(50),
                gap: rh(4)
            }}>
                <Text style={{
                    fontSize: fs(4),
                    fontWeight: 'bold'
                }}>{name}</Text>
                <Text style={{
                    fontSize: fs(2)
                }}>
                    {
                        details.map((item) => {
                            if (item.id == val) {
                                return item.details;
                            }
                        })
                    }
                </Text>
                <TouchableOpacity style={{
                    backgroundColor: '#000',
                    padding: rw(4)
                }} onPress={() => { navigation.goBack() }}>
                    <Text style={{ color: '#FFF', textAlign: 'center', fontSize: fs(2) }}>Go Back</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default CarDetails