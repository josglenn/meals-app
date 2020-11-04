import React from 'react'

import { StyleSheet, TouchableOpacity, View, Text,TouchableNativeFeedback } from 'react-native'

const CategoryGridTile = props =>{
  return(
    <View style={styles.gridItem}>
      <TouchableNativeFeedback style={styles.touch} onPress={props.onSelect}>
        <View style={{...styles.container,...{backgroundColor:props.color}}}>
          <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset:{width:0,height: 2},
    shadowRadius: 10,
    elevation: 10,
    padding: 13,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
    
  },
  title: {
    fontSize: 22,
    textAlign: 'right',
    fontWeight: 'bold'
  },
  touch: {
    flex: 1,
    overflow: 'hidden',
  }
})

export default CategoryGridTile