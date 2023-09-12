import React from "react";
import MapView, { Marker, Callout, Circle } from "react-native-maps";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  const coordinateLat = 37.78825;
  const coordinateLon = -122.4324;
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: coordinateLat, longitude: coordinateLon }}
        >
          <Callout>
            <Text>
              {coordinateLat},{coordinateLon}
            </Text>
          </Callout>
        </Marker>
        <Circle
          center={{
            latitude: coordinateLat,
            longitude: coordinateLon,
          }}
          radius={5000}
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
    width: "100%",
    height: "100%",
  },
});
