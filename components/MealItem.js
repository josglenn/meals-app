import React from 'react'
import DefaultText from '../components/DefaultText'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'


const MealItem = props => {
  return(
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{...styles.mealRow,...styles.mealHeader}}>
            <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View > 
          <View style={{...styles.mealRow,...styles.mealDetail}}>
            <DefaultText>{props.duration}m</DefaultText>
            <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
  
}

const styles = StyleSheet.create({
  mealRow: {
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden'
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    
  },
  mealHeader: {
    height: "85%"
  },
  mealDetail: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    height: 15,
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  },

})

export default MealItem
