import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import {
    responsiveFontSize as fs,
    responsiveHeight as rh,
    responsiveWidth as rw
} from 'react-native-responsive-dimensions'

import { useState } from 'react'
import OuterComponent from './OuterComponent'


const Lisa = [
    'https://i.pinimg.com/564x/33/c4/4b/33c44bf16c175f5b23a05a6fa77140ea.jpg',
    // 'https://i.pinimg.com/474x/0a/4b/88/0a4b888f07c13527faa41f886a726bae.jpg',
    // 'https://i.pinimg.com/474x/d3/7e/c6/d37ec6b690dc04ac5393819c27d94d57.jpg',
    // 'https://i.pinimg.com/474x/55/91/45/559145d0eed88b0a95f62a1a324c05aa.jpg',
    // 'https://i.pinimg.com/474x/85/40/3d/85403ddcff9d12bd111a27c22dee8d5c.jpg',
    // 'https://i.pinimg.com/474x/4a/d6/f1/4ad6f1eb28ac1947d1ecd43ee7913265.jpg',
    // 'https://i.pinimg.com/474x/5e/8c/8e/5e8c8e1d5c5d521764df5a81a4578478.jpg',
    // 'https://i.pinimg.com/474x/10/01/2f/10012fb7751dbcdd60ab6fe92d84294a.jpg',
    // 'https://i.pinimg.com/474x/a4/20/bd/a420bdd4fb5ba8a23c69c0b81d0a010c.jpg',
    // 'https://i.pinimg.com/474x/8a/48/1a/8a481a6838c00937834d56c7c7842352.jpg',
    'https://i.pinimg.com/474x/d7/81/f7/d781f77626bda7cb6153be0857550661.jpg',
    'https://i.pinimg.com/474x/60/0a/54/600a5428ff1fca2b15ebd234bdf0d8a6.jpg',
    'https://i.pinimg.com/474x/e6/85/f4/e685f4d0aaa695c150945a5b4945cbff.jpg',
    'https://i.pinimg.com/474x/a5/1a/d8/a51ad8d657f68b0eaccb154492063ddd.jpg',
    'https://i.pinimg.com/564x/e2/a4/78/e2a478bdfdff30dbfe0e17400d455440.jpg'


]
const nameList = [
    { name: 'Lalisa Manobal', profession: 'Rapper & Singer', country: 'Thailand', religion: 'Buddhism', age: 26 },
    { name: 'JENNIE KIM', profession: 'Rapper & Singer', country: 'New Zealand', religion: 'Buddhism', age: 27 },
    { name: 'Kim Ji-soo', profession: 'Visual and lead vocalist', country: 'Korea', religion: 'Buddhism', age: 28 },
    { name: 'Roseanne Park ', profession: 'Singer', country: 'Korea', religion: 'Buddhism', age: 26 },
    { name: 'Nancy Jewel McDonie', profession: 'Singer', country: 'Korea', religion: 'Buddhism', age: 23 },
    { name: 'Gauthami', profession: 'K-pop Singer', country: 'India', religion: 'Hinduism', age: 20 },
]


const Info = () => {
    const [item, setItem] = useState(nameList[0]);
    const [ind, setInd] = useState(0);
    return (
        <View style={styles.mainContainer}>
            <StatusBar barStyle={'light-content'} />
            <View style={styles.imageContainer}>
                <Swiper
                    horizontal={true}
                    showsPagination={true}
                    // autoplay
                    onIndexChanged={(index) => { setItem(nameList[index]) }}
                    // index={ind}
                >
                    {
                        Lisa.map((item, index) =>
                            <View style={styles.imageBox} key={index}>
                                <Image source={{ uri: item }} style={styles.image} />
                            </View>
                        )
                    }
                </Swiper>
                {/* <TouchableOpacity onPress={()=>{setInd((ind + 1) % 6)}}>
                    <Text style={{color:'#FFF'}}>Next</Text>
                </TouchableOpacity> */}
            </View>
            <OuterComponent item={item} />
            {/* <View style={styles.infoContainer}>
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

            </View> */}
        </View>
    )
}

export default Info

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        gap: rh(1),
        paddingTop: rh(4)
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden'
    },
    imageBox: {
        width: '100%',
        height: '100%',
        position: 'relative'
    },
    image: {
        position: "absolute",
        width: '100%',
        height: '100%'
    },
    // infoContainer: {
    //     width: rw(100),
    //     height: rh(35),
    //     backgroundColor: 'orange',
    //     justifyContent: 'center',
    //     // alignItems: 'center',
    //     borderRadius: 10,
    //     padding: rw(5),
    //     gap: rh(1)
    // }
})


// const InfoBox = ({item}) => {
//     return(
//         <View style={styles.infoContainer}>
//                 <Text
//                     style={{
//                         color: '#FFF',
//                         fontSize: fs(4),
//                         fontWeight: 'bold'
//                     }}>
//                     {item.name}
//                 </Text>
//                 <Text style={{ color: '#FFF', fontSize: fs(2) }}>Profession : {item.profession}</Text>
//                 <Text style={{ color: '#FFF', fontSize: fs(2) }}>Nationality : {item.country}</Text>
//                 <Text style={{ color: '#FFF', fontSize: fs(2) }}>Religion : {item.religion}</Text>
//                 <Text style={{ color: '#FFF', fontSize: fs(2) }}>Age : {item.age}</Text>

//             </View>
//     );
// }