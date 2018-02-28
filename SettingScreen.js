import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {StackNavigator} from 'react-navigation';
// This is the second page
export default class SettingScreen extends React.Component {

    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                
                <Text>History</Text>
                    <View style={{flex: 1,flexDirection: 'column', alignItems: 'flex-start',justifyContent: 'space-around'}}>
                        <FlatList 
                            style={{flex: 1,flexDirection: 'row'}}
                            data={params.resultplus}
                            renderItem={({item}) =>
                            <Text>{item.key.first} + {item.key.second} = {item.key.result}</Text>
                        }
                                    
                        />   
                        <FlatList 
                            style={{flex: 1,flexDirection: 'row'}}
                            data={params.resultminus}        
                            renderItem={({item}) =>
                                    <Text>{item.key.first} - {item.key.second} = {item.key.result}</Text>
                            }
                                    
                        /> 
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