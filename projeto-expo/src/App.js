import React from "react";
import Nav from './components/nav/nav';
import Card from './components/card/Card';
import { View } from "react-native";

export default function App() {
  return (
    <View>
      <Nav />
      <Card />
    </View>
  );
}

