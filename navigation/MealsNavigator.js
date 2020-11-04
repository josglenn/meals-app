import React from 'react'
import Colors from '../constants/colors'
import { Platform } from 'react-native'

import { createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { createDrawerNavigator } from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'


import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoriteScreen from '../screens/FavoriteScreen'
import FiltersScreen from '../screens/FiltersScreen'

import {Ionicons} from '@expo/vector-icons'

const defaultStackNav = {
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTintColor: 'white'
  }

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen:CategoryMealsScreen, 
  },
  MealDetail: MealDetailScreen,
}, {
  // initialRouteName: 'MealDetail',
  defaultNavigationOptions: defaultStackNav
})

const FavNavigator =  createStackNavigator({
  Favorites: FavoriteScreen,
  MealDetail: MealDetailScreen,
},{
  defaultNavigationOptions: defaultStackNav
})

const BottomTabConfig = {
  Meals: {screen:MealsNavigator, navigationOptions:{
    
    tabBarIcon: (tabInfo) => {
      return <Ionicons name='ios-restaurant' size={30} color={tabInfo.tintColor}/>
    }
  }},
  Favorites: {
    screen: FavNavigator, 
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-heart" size= {30} color={tabInfo.tintColor} />
      },
      tabBarColor: Colors.accent,
    } 
  }
}

const MealsBotTabNavigator = Platform.OS === 'android' ? 
  createMaterialBottomTabNavigator(BottomTabConfig,{
    activeTintColor: Colors.accent,
    shifting: true
  }) :
  createBottomTabNavigator(BottomTabConfig,{
  tabBarOptions: {
    activeTintColor: Colors.accent,
  },
})

  const FiltersNavigator = createStackNavigator(
    {
    Filters: FiltersScreen
    },
    {
    defaultNavigationOptions: defaultStackNav
    }
  )

const MainNavigator = createDrawerNavigator({
  MealsFav: {screen:MealsBotTabNavigator, navigationOptions:{
    drawerLabel: "Meals"
  }
  },
  Filter: {screen:FiltersNavigator, navigationOptions: {
    drawerLabel: 'Filter Meal'
  }}
},{
  contentOptions:{
    activeTintColor: Colors.accent
  }
})

export default createAppContainer(MainNavigator)