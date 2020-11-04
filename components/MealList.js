import React from "react";

import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";
import {useSelector} from 'react-redux'
const MealList = props => {

  const favoriteMeals = useSelector(state => state.meals.favoriteMeals)

  const mealRenderItem = itemData => {
    const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id)
    return(
      <MealItem 
      title={itemData.item.title} 
      onSelectMeal={() =>{}}
      image={itemData.item.imageUrl}
      duration={itemData.item.duration}
      affordability={itemData.item.affordability}
      complexity={itemData.item.complexity}
      onSelectMeal={() => { 
        props.navigation.navigate('MealDetail',{
          mealId: itemData.item.id,
          mealTitle:itemData.item.title, 
          isFavorite: isFavorite
        }) 
      }}
      />
    )
  }

  return(
    <View style={styles.container}>
      <FlatList 
      data={props.listData} 
      keyExtractor={(item, index) => item.id} 
      renderItem={mealRenderItem}
      style={{width: '100%'}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
  }
})

export default MealList