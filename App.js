import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Alert, StatusBar, Image } from 'react-native';

//
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {jobs: [], description: ''};
  }
  
  

  getJobs = () => {
    const url = 'http://www.recipepuppy.com/api/?i=' + this.state.description ;
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => { 
        this.setState({jobs: responseJson});
      })
      .catch((error) => { 
        Alert.alert(error); 
      });    
  }

  listSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "80%",
          backgroundColor: "#CED0CE",
          marginLeft: "10%"
        }}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <FlatList 
          style={{marginLeft : "5%"}}
          data={this.state.jobs.results} 
          keyExtractor={(item ,index) => index} 
          renderItem={({item}) => 
            <View>
              <Text style={{fontSize: 18}}>{item.title}</Text>
              <Image
                style={{width: 50, height: 50}}
                source={{uri: item.thumbnail}}
            />
            </View>
          } 
          ItemSeparatorComponent={this.listSeparator} /> 
        <TextInput style={{fontSize: 18, width: 200}} placeholder='description' onChangeText={(description) => this.setState({description})} />
        <Button title="Find" onPress={this.getJobs} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});