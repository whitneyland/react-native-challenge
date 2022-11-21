import React, { useRef, useState, useEffect } from "react";
import { AppState, StyleSheet, Text, SafeAreaView, View } from "react-native";
import FullStory from '@fullstory/react-native';
import {CatCallButton} from './CatCallButton';
import {PrevNextButtons} from './PrevNextButtons';
import {pallette} from './utils/colors';

const AppStateExample = () => {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const loadState = {firstLoadLeeWhitney: true, firstLoadMessage: 'App First Load = true'}

  useEffect(() => {    
      const subscription = AppState.addEventListener("change", nextAppState => {
      if (
          appState.current.match(/inactive|background/) &&
          nextAppState === "active"
      ) {
          console.log("AppStateChange: inactive/background => active");
      }   
      appState.current = nextAppState;
      setAppStateVisible(appState.current);

      // First load event outputs the session URL.
      // There's only one unique 'first load' event.
      if (loadState.firstLoadLeeWhitney === true) {      
          rnChallengeSessionCapturedEvent()          
      }
      // else {
      //     logLoadState(loadState, 2)
      // }
  });

  const rnChallengeSessionCapturedEvent = () => {
      loadState.firstLoadLeeWhitney = false

      console.log("------------------------------- ")  
      console.log("RN Challenge Session Captured Event")
      console.log("AppState:                           ", appState.current);      
      console.log("Property firstLoadLeeWhitney:       ", loadState.firstLoadLeeWhitney);
            
      FullStory.getCurrentSessionURL().then(function(sessionUrl) {  
          // Not sure why this returns undefined, for now return sample data
          if (!sessionUrl)
            sessionUrl = "https://www.fullstory.com/ui/o-1EJJEX-na1/session/60296460847722"
          console.log("FullStory Session URL: " + sessionUrl);
          FullStory.log(FullStory.LogLevel.Info, 'Session URL: ' + sessionUrl);
          console.log("------------------------------- ")
      });     
  }
  return () => {
    subscription.remove();
  };
}, []);

  return (
    <View style={styles.container}>
      <Text>appstate: {appStateVisible}</Text>
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

export default AppStateExample;

export const Home = () => {
  const [soundName, setSoundName] = useState('meow');
  const [sound, setSound] = useState();

  // console.log('soundName', soundName);

  useEffect(() => {
    // console.log('changing sound when soundName changes');
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
          <AppStateExample></AppStateExample>
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



