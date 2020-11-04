import React, { useEffect, useCallback } from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {View, Text, StyleSheet, ScrollView, Image, FlatList} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText'
import { toggleFavorite } from '../store/actions/meals'

const ListItem = props => {
  return (
  <View style={styles.listItems}>
    <DefaultText >{props.children}</DefaultText>
  </View>
  )
}

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const availableMeals = useSelector(state => state.meals.meals)

  const currentMealFavorite = useSelector(state => 
    state.meals.favoriteMeals.some(meal => meal.id === meal.id)
    )

  const selectedMeal = availableMeals.find(meal => meal.id === mealId);


  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  },[dispatch,mealId]);

  useEffect(() => {
    // props.navigation.setParams({mealTitle: selectedMeal.title})
    props.navigation.setParams({togglefav: toggleFavoriteHandler})
  },[toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({isFavorite: currentMealFavorite})
  }, [currentMealFavorite])


  return (
    <ScrollView>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
      <View style={styles.detail}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title} >Ingredients</Text>
      {selectedMeal.ingredients.map(ing => (<ListItem key={ing}> {ing} </ListItem>))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(step => (<ListItem key={step}>{step}</ListItem>))}
    </ScrollView>
  );
}



MealDetailScreen.navigationOptions = (navigationData) => {
  // const mealId = navigationData.navigation.getParam('mealId')
  const MealTitle = navigationData.navigation.getParam('mealTitle')
  const toggleFavorite = navigationData.navigation.getParam('togglefav')
  const isFavorite = navigationData.navigation.getParam('isFavorite')
  // const selectedMeal = availableMeals.find(meal => meal.id === mealId)

  return{
    headerTitle: MealTitle,
    headerRight:() => {return(<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title='favorite' 
      iconName={isFavorite ? 'ios-heart' : 'ios-heart-empty'} 
      onPress={toggleFavorite}
      />
    </HeaderButtons>)}
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: '100%',
    height: 200
  },
  detail: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center'
  },
  listItems : {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  }
})

export default MealDetailScreen