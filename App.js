import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, AsyncStorage} from 'react-native';
export default class App extends React.Component { 
  constructor(props){
    super(props);
    this.state = {
      randomNum: Math.floor(Math.random()*100) + 1, 
      inputText: '', 
      correctGuessAmount: 0,
      result: 'Guess a number between 1-100',
      value: 999
    }    
  }
  compareGuess = () => {
    this.setState({correctGuessAmount: this.state.correctGuessAmount + 1});   
    if(Number(this.state.inputText) < this.state.randomNum) {
      this.setState({result: 'Your value is too low'});
    } else if(Number(this.state.inputText) > this.state.randomNum) {
      this.setState({result: 'Your value is too high'});
    } else {
      const newRandomNum = Math.floor(Math.random()*100) + 1;
      this.setState({
        result: 'Your value is correct!',
        randomNum: newRandomNum
      },
      );
      Alert.alert('You guessed the number in ' + this.state.correctGuessAmount + ' guesses');      
      this.compareGuessAmount(); 
      this.setState({correctGuessAmount: 0});     
    }
  }
  compareGuessAmount = () => {    
    if (this.state.correctGuessAmount < this.state.value) {
     this.setState({value: this.state.correctGuessAmount});
    } else {
      this.setState({value: this.state.value});
    }
    this.setHighest(); 
    this.getHighest();
  }   
  setHighest= async() => {
    try {
      await AsyncStorage.setItem('highscore', JSON.stringify(this.state.value));   
    }
    catch (error){
      Alert.alert('Error saving data');
    }  
  }
  getHighest = async() => {
    try {
      let value = await AsyncStorage.getItem('highScore'); 
      this.setState({value: this.state.value});
    }
    catch (error) {
      Alert.alert('Some getting data');
    }
  }
  render() {    
    return (
      <View style={styles.container}>
        <Text>{this.state.result}</Text>
        <TextInput style={{borderColor:'gray', borderWidth: 1, height: 30, width: 50, marginTop: 10, marginBottom: 10}} keyboardType="numeric" onChangeText={(inputText) => this.setState({inputText})} value={this.state.inputText} />
        <Button onPress={this.compareGuess} title="MAKE GUESS"/>
        <Text>Highscore: {this.state.value} guesses</Text>
        <Text>{this.state.randomNum}</Text>       
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