import { StatusBar } from 'expo-status-bar';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Constants from 'expo-constants';
import {DATA} from './Data';
import Row from './Row';

export default function App() {

  /*const renderItem = ({item}) => (
    <Text>{item.lastname}</Text>
  );*/

  /*<FlatList
      data={DATA}
      renderItem= {({item}) => (
        <Row item = {item} />
      )}
      ></FlatList>*/

  return (
    
      <View style={styles.container}>



      <FlatList
      data={DATA}
      renderItem= {({item}) => (
        <Text>{item.lastname}</Text>
      )}
      ></FlatList>


      
      
      
      </View>
   
  );
}r

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
