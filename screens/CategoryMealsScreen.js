import React from 'react'
import MealList from '../components/MealList'
import {useSelector} from 'react-redux'
import { CATEGORIES} from '../data/dummy-data';
import { Text, View } from 'react-native';

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam('categoryId')

  const availableMeals = useSelector(state => state.meals.filteredMeals)

  const displayMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId ) >= 0
    )

    if (displayMeals.length === 0){
      return(<View style={{flex:1, justifyContent: 'center', alignItems: "center"}}>
        <Text style={{fontWeight:'bold'}}>
          No meals Found, Check your filters.
        </Text>
      </View>)
    }
  return (
    <MealList listData={displayMeals} navigation={props.navigation}/>
  );
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id ===catId)

  return{
    headerTitle: selectedCategory.title,
  }
}



export default CategoryMealsScreen