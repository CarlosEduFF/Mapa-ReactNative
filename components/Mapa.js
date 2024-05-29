import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { StyleSheet } from './styles'; // Corrigi o nome da importação
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function Mapa() {
  const [location, setLocation] = useState(null);
  const mapRef = useRef(null);

  async function requestLocationPermissions() {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (granted) {
      const currentPosition = await Location.getCurrentPositionAsync();
      setLocation(currentPosition);
    }
  }

  useEffect(() => {
    requestLocationPermissions();
  }, []);

  return (
    <View style={StyleSheetes.container}> 
      {location && (
        <MapView
          ref={mapRef}
          style={{ flex: 1 }}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          />
        </MapView>
      )}
    </View>
  );
  
}
