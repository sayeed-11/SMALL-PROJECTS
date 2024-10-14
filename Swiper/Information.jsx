import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {
    responsiveFontSize as fs,
    responsiveHeight as rh,
    responsiveWidth as rw
} from 'react-native-responsive-dimensions'
import Animated from 'react-native-reanimated'

const Information = ({ navigation, route }) => {
    const { src, key } = route.params;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: rh(1), paddingVertical: rh(5) }}>
            <View style={{
                width: rw(90),
                height: rh(60),
                position: 'relative',
                borderWidth: 1,
                borderColor: '#FFF',
                overflow: 'hidden',
                borderRadius: 10,
                elevation: 10
            }}>
                <Animated.Image
                    sharedTransitionTag={key}
                    src={src}
                    style={{
                        position: "absolute",
                        width: '100%',
                        height: '100%',
                        borderRadius: 10,
                    }} />
            </View>
            <View style={{
                gap: rh(2),
                width: rw(90),
                height: rh(30),
                backgroundColor: 'orange',
                padding: rw(5),
                borderRadius:10
            }}>
                <Text style={{ fontSize: fs(4) }}>LOREM</Text>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nostrum quas commodi, aliquam sed quia ea ut error voluptate quos iste sunt quis deleniti, esse delectus sint? Quos, id aperiam!</Text>
            </View>

        </View>
    )
}

export default Information

const styles = StyleSheet.create({})