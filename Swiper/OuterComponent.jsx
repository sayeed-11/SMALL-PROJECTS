import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {
    responsiveFontSize as fs,
    responsiveHeight as rh,
    responsiveWidth as rw
} from 'react-native-responsive-dimensions'

const OuterComponent = ({ item }) => {
    return (
        <View style={styles.infoContainer}>
            <Text
                style={{
                    color: '#FFF',
                    fontSize: fs(4),
                    fontWeight: 'bold'
                }}>
                {item.name}
            </Text>
            <Text style={{ color: '#FFF', fontSize: fs(2) }}>Profession : {item.profession}</Text>
            <Text style={{ color: '#FFF', fontSize: fs(2) }}>Nationality : {item.country}</Text>
            <Text style={{ color: '#FFF', fontSize: fs(2) }}>Religion : {item.religion}</Text>
            <Text style={{ color: '#FFF', fontSize: fs(2) }}>Age : {item.age}</Text>
        </View>
    )
}

export default OuterComponent

const styles = StyleSheet.create({
    infoContainer: {
        width: rw(100),
        height: rh(35),
        backgroundColor: 'orange',
        justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: 10,
        padding: rw(5),
        gap: rh(1)
    }
})