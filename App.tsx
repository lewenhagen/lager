import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import dna from './assets/img/dna.png';
import Stock from './components/Stock.tsx';

export default function App() {
  return (
  <SafeAreaView style={styles.safe}>
    <View style={styles.container}>
      <Text style={styles.title}>DNA Lagret</Text>
      <Image source={dna} style={styles.logo} />
      <Stock />
      <StatusBar style="auto" />
    </View>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeede8',
    color: "#084C61",
    fontFamily: 'Arial',
  },
  safe: {
    backgroundColor: "#084C61",
    flex: 1
  },
  title: {
      fontSize: 54,
      textAlign: "center",
      color: "#084C61",
  },
  logo: {
    borderRadius: 100,
    width: 240,
    height: 240,
    alignSelf: "center"
  }
});
