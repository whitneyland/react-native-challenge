import { faL } from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useState, useEffect } from "react";
import { AppState, StyleSheet, Text, SafeAreaView, View } from "react-native";

import {CatCallButton} from './CatCallButton';
import {PrevNextButtons} from './PrevNextButtons';
import {pallette} from './utils/colors';

// export type CatSoundNameType = 'meow' | 'sadMeow' | 'angryMeow' | 'kittenMeow';

const AppStateExample = () => {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const loadState = {firstLoad: true, firstLoadMessage: 'App First Load = true'}

  useEffect(() => {
    const subscription = AppState.addEventListener("change", nextAppState => {
    if (nextAppState === "active") {        
    }
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      console.log("AppStateChange: inactive/background => active");
    }   
    appState.current = nextAppState;
    setAppStateVisible(appState.current);

    // Fire first load event
    if (loadState.firstLoad === true) {
      logLoadState(loadState, 1)
      // Fire event
      // There's only one 'first load' even so set back to false.
      loadState.firstLoad = false
      loadState.firstLoadMessage = 'App First Load = FALSE'
    }
    else {
      logLoadState(loadState, 2)
    }
  });

  const logLoadState = (loadState, num) => {
    console.log("------------------------------- " + num)
    console.log("   AppState:   ", appState.current);      
    console.log("   First load? ", loadState.firstLoad);
    console.log("   Message:    ", loadState.firstLoadMessage);
  };
  
  return () => {
    subscription.remove();
  };
}, []);

  return (
    <View style={styles.container}>
      <Text>Current state is: {appStateVisible}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const Home = () => {
  const [soundName, setSoundName] = useState('meow');
  const [sound, setSound] = useState();

  console.log('soundName', soundName);

  useEffect(() => {
    console.log('changing sound when soundName changes');
  }, [soundName]);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 0.1,
          backgroundColor: pallette.blue,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 40,
            paddingVertical: 10,
            color: 'white',
          }}>
          <Text>Kitty Paw</Text>
          <AppStateExample>abc</AppStateExample>
        </Text>
      </View>
      <View
        style={{
          flex: 0.6,
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <CatCallButton sound={sound} />
      </View>
      <View style={{flex: 0.3, width: '100%'}}>
        <PrevNextButtons sound={soundName} setSoundName={setSoundName} />
      </View>
    </View>
  );
};


export default AppStateExample;

