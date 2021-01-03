import React, {Component} from 'react';
import { ScrollView, StyleSheet, TextInput, View, Text, Image, TouchableOpacity, Button, Modal} from 'react-native';
import {mainStyles} from '../styles/mainStyles';
import { connect } from 'react-redux';
import { search } from '../redux/actions'

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Film Search',
      temp: 'Batman',
      show: false,
      activeItem: []
    };
  }
  searchText='batman'
  mainImage = 'https://via.placeholder.com/200x250?text=Film+Search'
  
  render() {
      console.log(this.props.info)
    return (
      <View style={mainStyles.container}>
       <Text style={mainStyles.titleName}>
        {this.state.title}
       </Text>
       <TextInput style={mainStyles.search}
        onChangeText={text => this.searchText}
        placeholder='movie name is...'>
       </TextInput>
       <TouchableOpacity onPress={this.props.searching(this.searchText)} style={mainStyles.touchableStyle}><Text style={mainStyles.touchableText}>Search</Text></TouchableOpacity>
       <ScrollView style={mainStyles.results}>
         {this.props.info.map((movies, index)=>{
           return (<View key={index}>
             <Image style={mainStyles.image}
             source={{uri: movies?.show?.image?.medium ?? this.mainImage}}></Image>
            <Text style={mainStyles.result}>
              {movies.show.name}
            </Text>
            {/*<Button title="More info..." onPress={()=>this.setState((prevState) => ({show : prevState.show = true, activeItem: prevState.activeItem = movies.show}))}></Button>*/}
                    
           </View>)
         })
         }
       </ScrollView>
       
{/* <Modal visible={this.state.show} >
            <ScrollView style={mainStyles.results}>
              <View >
                <Image style={mainStyles.image}
             source={{uri: this.state.activeItem?.image?.medium ?? this.mainImage}}></Image>
             <Text style={mainStyles.result}>
              Name: {this.state.activeItem?.name ?? 'unavialable info'}{"\n"}
              Type: {this.state.activeItem?.type ?? 'unavialable info'}{"\n"}
              Language: {this.state.activeItem?.language ?? 'unavialable info'}{"\n"}
              Premiered: {this.state.activeItem?.premiered ?? 'unavialable info'}{"\n"}
              Summary: {this.state.activeItem?.summary?.replace(/(<([^>]+)>)/gi, "") ?? 'unavialable info'}
            </Text>
                <Button title="Back" onPress={()=>this.setState((prevState) => ({show : prevState.show = false}))}></Button>
              </View>
              </ScrollView>
            </Modal> */}
      </View>
      
    );
  }
}
const mapDispatchToProps = dispatch => {
    return{
        searching: (searchText) => dispatch(search(searchText))
    }
}

const mapStateToProps = state => {
    return {
        info: state.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);