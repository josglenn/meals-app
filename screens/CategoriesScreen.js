import React from 'react'
import {StyleSheet, FlatList} from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/dummy-data'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from "../components/HeaderButton";

const CategoriesScreen = props => {

  const renderItemData = (itemData) => {
    return (
      <CategoryGridTile 
        title={itemData.item.title} 
        onSelect={() => {
        props.navigation.navigate('CategoryMeals', {categoryId: itemData.item.id})
        }}
        color={itemData.item.color}
      />
    )
  }

  return (
    <FlatList data={CATEGORIES} renderItem={renderItemData} numColumns={2}  />
  );
}

CategoriesScreen.navigationOptions = navData => {

  return{
    headerTitle: 'Categories',
    headerLeft: () => {return (<HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item title="menu" iconName="ios-menu" onPress={() =>{
      navData.navigation.toggleDrawer();
    }}/>
  </HeaderButtons>)
  }}
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  
})

export default CategoriesScreen