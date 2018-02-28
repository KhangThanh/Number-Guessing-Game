import React from 'react';
import { StyleSheet, Text, View, Button,TextInput } from 'react-native';
import {StackNavigator} from 'react-navigation';
// This is the first page
export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          firstnumber:'',
          secondnumber:'',
          result:0,
          data:[],
          second_data:[]
        }
    } 
    buttonPlus = () => {
        const { firstnumber, secondnumber } = this.state;
        let text = {first:this.state.firstnumber,second:this.state.secondnumber,result : Number(this.state.firstnumber) + Number(this.state.secondnumber) };
        this.setState({
          result: Number(firstnumber) + Number(secondnumber),
          data: [...this.state.data,{key: text}], text: ''
        });
     
    }  
      buttonMinus = () => {
        const { firstnumber, secondnumber } = this.state;
        let second_text = {first:this.state.firstnumber,second:this.state.secondnumber,result : Number(this.state.firstnumber) - Number(this.state.secondnumber) };
    
        this.setState({
          result: Number(firstnumber) - Number(secondnumber),
          second_data: [...this.state.second_data,{key: second_text}], second_text: ''
    
        });
    }  
    render() {
        const { navigate } = this.props.navigation;
      return (
       <View style={styles.container}>
            <View style={{flex: 1,alignItems: 'center',justifyContent: 'flex-end'}}>
                <Text>Result: {this.state.result}</Text>
                <TextInput style={{width: 200, borderColor: 'gray',borderWidth: 1}}
            onChangeText={(firstnumber) => this.setState({firstnumber})} value={this.state.firstnumber} keyboardType='numeric'/>
                <TextInput style={{width: 200, borderColor: 'gray',borderWidth: 1}}
                onChangeText={(secondnumber) => this.setState({secondnumber})} value={this.state.secondnumber} keyboardType='numeric'/>
            </View>  
            <View style={{flex: 1,flexDirection: 'row', alignItems: 'flex-start',justifyContent: 'space-around'}}>
                <Button onPress={this.buttonPlus} title="+" style={styles.buttonstyle}/>  
                <Button onPress={this.buttonMinus} title="-" style={styles.buttonstyle}/>
                <Button onPress={() => navigate('Settings', {resultplus:this.state.data,resultminus:this.state.second_data})}  title="History"/>
            </View>   
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