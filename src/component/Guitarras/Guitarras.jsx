import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Guitarras({ item }) {

    const { name, image } = item
    return (

            <View>
                <Text>{name}</Text>
                <Image
                    style={{
                        width: 50,
                        height: 50,
                    }}
                    source={{ uri: image }}
                />
            </View>

    )
}