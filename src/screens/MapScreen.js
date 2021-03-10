import React from 'react';
import {Image, SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';
import {Appbar} from 'react-native-paper';
import images from '../api/images';
const MapScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Appbar.Header style={styles.bgHeader}>
        <Image source={images.logoss} />
        <View style={{position: 'relative'}}>
          <Image source={images.notification} />
          <Image style={styles.indication} source={images.notifIndicator} />
        </View>
      </Appbar.Header>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FA',
  },
  bgHeader: {
    backgroundColor: '#fff',
    elevation: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  indication: {
    position: 'absolute',
    right: 0,
  },
});
export default MapScreen;
