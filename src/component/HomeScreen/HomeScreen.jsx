import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Button, Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import { getAllProducts } from '../../redux/slices/products'
import Guitarras from '../Guitarras/Guitarras'
import { useDispatch, useSelector } from 'react-redux'

export default function HomeScreen() {
  const { list: guitarras } = useSelector(state => state.products)
  const dispatch = useDispatch();



  console.log(guitarras)
  useEffect(() => {
    dispatch(getAllProducts())

  }, []);


  const navitagation = useNavigation();
  return (
    <ScrollView>
      <View>
        <Text>HomeScreen</Text>
        <Button
          title="home"
          type="outline"
          onPress={() => navitagation.navigate('Setting')}
        >
        </Button>
        <FlatList
          data={guitarras}
          key={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <Guitarras
                item={item}
              />
            )
          }}
        />
      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({})