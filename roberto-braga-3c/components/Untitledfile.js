import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
     Os problemas existem e nada é fácil, mas com força e determinação tudo se realiza. Não desista!
      </Text>
      <Button
        title="Entre"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
    <Separator />
    
   
    <View>
    
      <View style={styles.fixToText}>
      
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 0,
    backgroundColor: '#d3d3d3',

  },
  title: {
    textAlign: 'center',
    marginVertical: 20,

  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 15,
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;