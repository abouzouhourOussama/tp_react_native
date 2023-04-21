import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Comp1 from './components/Comp1'
import Exemple1State from './components/exemple1State'
import Exemple2State from './components/exemple2State'
import Exemple2StateStyle from './components/exemple2StateStyle'
import Exemple2StateChange from './components/exemple2StateChange'
import ExempleProps from './components/exempleProps'
import ExemlpeStyling from './components/exemplestyling'
import Input from './components/Input'
import Image from './components/imagesExemple'
import Touchable from './components/exempleTouchables'
import List from './components/listV'
import Flexbox from './components/exempleFlexbox'
import Button from './components/exempleButtons'
import Scroll from './components/exempleScrollView'
import SectionList from './components/exempleSectionList'
import Picker from './components/exemplePicker'
import Switch from './components/exempleSwitch'

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* <Exemple1State/> */}
      {/*<Comp1/> */}
      {/* <Exemple2State/> */}
      {/* <Exemple2StateStyle/> */}
      {/* <Exemple2StateChange/> */}
      {/* <ExempleProps/> */}
      {/* <ExemlpeStyling/> */}
      {/* <Input/> */}
      {/* <Image/> */}
      {/* <Touchable/> */}
      {/* <List/> */}
      {/* <Flexbox/> */}
      {/* <Button/> */}
      {/* <Scroll/> */}
      {/* <SectionList/> */}
      {/* <Picker/> */}
      {/* <Switch/> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
});
