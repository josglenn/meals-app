import React from 'react'

import {useSelector} from 'react-redux'
import MealList from '../components/MealList'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import { Text, View, StyleSheet } from 'react-native'
import DefaultText from '../components/DefaultText'

const FovoriteScreen = props => {

  const favMeals = useSelector(state => state.meals.favoriteMeals)

  if (favMeals.length !== 0 ){
  return (
      <MealList listData={favMeals} navigation={props.navigation}/>
  )}else {
    return (
      <View style={styles.empty}>
        <DefaultText style={styles.text}>No Favorite Meals. Start adding some Meals!!</DefaultText>
      </View>
    
    )
    
  }
}

FovoriteScreen.navigationOptions = navData => {

  return{
    headerTitle: 'Your Favorites',
    headerLeft: () => {
      return(
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="menu" iconName="ios-menu" onPress={() => {
            navData.navigation.toggleDrawer();
          }}/>
        </HeaderButtons>
      )
    }
  }
  

}

const styles = StyleSheet.create({
  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontWeight: 'bold'
  }
})


export default FovoriteScreen