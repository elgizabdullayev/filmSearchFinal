import React, {Component} from 'react';
import { ScrollView, StyleSheet, TextInput, View, Text, Image, TouchableOpacity, Button, Modal} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Film Search',
      temp: 'Batman',
      searchText: 'Batman',
      data: [],
     
    };
  }
  componentDidMount = async () => {
    try {
      const response = await fetch(`http://api.tvmaze.com/search/shows?q=${this.state.temp}`)
      const data = await response.json()
      this.setState({ data })
      console.log({ data })
    } catch (e){
     console.log("Error")

    }
    }
  tryToSearch = async ()=>{
    try {
      const response = await fetch(`http://api.tvmaze.com/search/shows?q=${this.state.searchText}`)
      const data = await response.json()
      this.setState({ data })
      console.log({ data })
    } catch (e){
     console.log("Error")

    }
   }
  mainImage = 'https://via.placeholder.com/200x250?text=Film+Search'
  
  render() {
    return (
      <View style={styles.container}>
       <Text style={styles.titleName}>
        {this.state.title}
       </Text>
       <TextInput style={styles.search}
        onChangeText={text => this.setState((prevState) => ({searchText : prevState.searchText = text}))}
        placeholder='movie name is...'>
       </TextInput>
       <TouchableOpacity onPress={this.tryToSearch} style={styles.touchableStyle}><Text style={styles.touchableText}>Search</Text></TouchableOpacity>
       <ScrollView style={styles.results}>
         {this.state.data.map((movies, index)=>{
           return (<View key={index}>
             <Image style={styles.image}
             source={{uri: movies?.show?.image?.medium ?? this.mainImage}}></Image>
            <Text style={styles.result}>
              {movies.show.name}
            </Text>
            
                    
           </View>)
         })
         }
       </ScrollView>
      </View>
      
    );
  }
}

export const styles = StyleSheet.create({
container:{
  flex: 1,
  backgroundColor: '#0f123f',
  justifyContent: 'flex-start',
},
titleName:{
  marginTop: 30,
  fontSize: 32,
  fontWeight: '700',
  textAlign: 'center',
  color: 'white'
},
search:{
marginTop: 20,
fontSize:20,
fontWeight: '300',
padding: 20,
width: '100%',
backgroundColor: 'white',
borderRadius: 50,
},
results:{
flex : 1,
},
touchableStyle:{
  alignSelf: 'center',
  width: 200,
  marginTop: 20,
  backgroundColor: "#fd93d5",
  padding: 15,
  borderRadius: 50,
},
touchableText:{
  color: "white",
  fontSize: 20,
  justifyContent: "center",
  textAlign: "center",
},
result:{
  fontSize: 25,
  color: 'white',
  alignSelf: 'center',
  backgroundColor:'#280e65',
  borderRadius: 20,
  padding: 5,
},
image:{
alignSelf: 'center',
marginTop: 30,
resizeMode: 'contain',
width:400,
height:420,
borderRadius: 10
},
})