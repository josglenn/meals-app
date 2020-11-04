import React, { useCallback, useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'

import {View, Text, StyleSheet, Switch} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/colors";
import {setFilters} from '../store/actions/meals'

const FilterSwitch = props => {
  return(
  <View style={styles.filterContainer}>
          <Text>{props.label}</Text>
          <Switch 
          value={props.value} 
          thumbColor={Colors.primaryColor}
          trackColor={{true: Colors.primaryColor}}
          onValueChange={props.onValueChange}
          />
    </View>
  )
}

const FiltersScreen = props => {
  const { navigation } = props;

  const [isGlutenFree, setisGlutenFree] = useState(false)
  const [isLactoseFree, setisLactoseFree] = useState(false)
  const [isVegan, setisVegan] = useState(false)
  const [isVegetarian, setisVegetarian] = useState(false)

  const dispatch = useDispatch()

  const saveFilters = useCallback(() => {
    const appliedFilters =  {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    }
    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree,isLactoseFree, isVegan, isVegetarian, dispatch ]);

  
    useEffect(() => {
      navigation.setParams({save: saveFilters});
    }, [saveFilters])

      
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Filters</Text>
      <FilterSwitch 
      label='Gluten-Free' 
      value={isGlutenFree} 
      onValueChange={(newValue) => {setisGlutenFree(newValue)}}
      />
      <FilterSwitch 
      label='Lactose-Free' 
      value={isLactoseFree} 
      onValueChange={(newValue) => {setisLactoseFree(newValue)}}
      />
      <FilterSwitch 
      label='Vegan-Free' 
      value={isVegan} 
      onValueChange={(newValue) => {setisVegan(newValue)}}
      />
      <FilterSwitch 
      label='Vegitarian' 
      value={isVegetarian} 
      onValueChange={(newValue) => {setisVegetarian(newValue)}}
      />
    </View>
  );
}

FiltersScreen.navigationOptions = navData => {

    
  

  return{
    headerTitle: 'Filter Meal',
    
    headerLeft:() => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="menu" iconName="ios-menu" onPress={()=>{
            navData.navigation.toggleDrawer();
          }}/>
        </HeaderButtons>
        )
    },
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="menu" iconName="md-checkmark" onPress={navData.navigation.getParam('save')}/>
        </HeaderButtons>
        )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "center",
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  },
  filterContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    marginVertical: 10
  }
})

export default FiltersScreen