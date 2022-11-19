import React, { useRef, useState, useEffect } from "react";
import { AppState, StyleSheet, Text, SafeAreaView, View } from "react-native";
import {Home} from './src/Home';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
        }}>
        <Home />
      </View>
    </SafeAreaView>
  );
};


