import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {
  return (
        <View style={styles.box}>
          <Text style={styles.text}>The App is Running</Text>
        </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
  box:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
