import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Arma from './src/components/RPG';

export default function App() {

  const armas = [
    {
      nome: 'Murasama',
      descricao: 'Katana de Jetstream Sam, possui dano físico e elétrico cortante.',
      imgUrl: "https://o.remove.bg/downloads/4bc90a2e-7ce6-4f47-be0f-c382563254fa/katanae-removebg-preview.png"
    },
    {
      nome: 'Grimório',
      descricao: 'Grimório de magias, permite lançar magias aprendidas e possui dano mágico.',
      imgUrl: "https://o.remove.bg/downloads/2540b435-d757-47dc-a882-8b1e88b21eef/grimorio-removebg-preview.png"
    },
    {
      nome: 'Manoplas Daédricas',
      descricao: 'Manoplas de Oblivion, faz seu soco doer mais e possui dano concussivo.',
      imgUrl: 'https://o.remove.bg/downloads/3bc5aae1-e753-47b6-9674-afd8e682a1ef/manopla-removebg-preview.png'
    }
  ]

  return (
    <View style={styles.container}>
      {armas.map(f => <Arma arma={f}/>)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7a0909',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
