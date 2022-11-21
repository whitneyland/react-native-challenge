import React, { useRef, useState, useEffect } from "react";
import { AppState, StyleSheet, Text, SafeAreaView, View } from "react-native";
import FullStory from '@fullstory/react-native';

const AppStateExample = () => {
    const appState = useRef(AppState.currentState);
    const [appStateVisible, setAppStateVisible] = useState(appState.current);
    const loadState = {firstLoad: true, firstLoadMessage: 'App First Load = true'}

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
        if (loadState.firstLoad === true) {      
            logLoadState(loadState, 1)            
            loadState.firstLoad = false
            loadState.firstLoadMessage = 'App First Load = FALSE'
        }
        else {
            logLoadState(loadState, 2)
        }
    });

    const logLoadState = (loadState, num) => {
        console.log("------------------------------- " + num)
        console.log("AppState:      ", appState.current);      
        console.log("First load?    ", loadState.firstLoad);
        console.log("Message:       ", loadState.firstLoadMessage);
        
        FullStory.getCurrentSessionURL().then(function(result) {  
            console.log("FS Session URL: " + result);
            FullStory.log(FullStory.LogLevel.Info, 'Session URL: ' + result);
            console.log("------------------------------- " + num)
        });  
    };
    
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
  
function subscribe(eventName, listener) {
    document.addEventListener(eventName, listener);
}

function unsubscribe(eventName, listener) {
    document.removeEventListener(eventName, listener);
}

function publish(eventName, data) {
const event = new CustomEvent(eventName, { detail: data });
    document.dispatchEvent(event);
}
  
export { publish, subscribe, unsubscribe };
export default AppStateExample;