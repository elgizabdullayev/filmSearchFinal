import React, {Component} from 'react';
import { View } from 'react-native';
import SearchScreen from './screens/SearchScreen'

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <View>
      <SearchScreen/>
      </View>
    )
    
  }
}

