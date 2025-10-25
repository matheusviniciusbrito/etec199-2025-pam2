import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function MapScreen() {
  const initialRegion = {
    latitude: -22.964, 
    longitude: -43.196,
    latitudeDelta: 0.06,
    longitudeDelta: 0.06,
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion} mapType="standard">
        {/* Praia de Copacabana */}
        <Marker
          coordinate={{ latitude: -22.975649, longitude: -43.182016 }}
          title="Praia de Copacabana"
          description="Rio de Janeiro"
        />

        {/* Pão de Açúcar */}
        <Marker
          coordinate={{ latitude: -22.9592758, longitude: -43.1956911 }}
          title="Pão de Açúcar"
          description="Rio de Janeiro"
        />

        {/* Cristo Redentor */}
        <Marker
          coordinate={{ latitude: -22.951916, longitude: -43.2104872 }}
          title="Cristo Redentor"
          description="Rio de Janeiro"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
