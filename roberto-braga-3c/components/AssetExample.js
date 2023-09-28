import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      </Text>
      <Image style={styles.logo} source={require('../shutterstock_553651330-1.jpg')} />
       <br>
        </br>
            <Image style={styles.logo} source={require('../pngtree-black-background-simple-texture-image_556938.jpg')} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#d3d3d3',

  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
        backgroundColor: '#d3d3d3',

  },
  logo: {
    height: 250,
    width: 250,
  }
});
