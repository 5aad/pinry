import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TextInput,
} from 'react-native';
import {Appbar} from 'react-native-paper';
import images from '../api/images';
import {FlatGrid} from 'react-native-super-grid';
const SearchScreen = () => {
  const [items, setItems] = useState([
    {img: images.cover1},
    {img: images.cover2},
    {img: images.cover3},
    {img: images.cover1},
    {img: images.cover1},
    {img: images.cover1},
    {img: images.cover1},
    {img: images.cover1},
    {img: images.cover1},
    {img: images.cover1},
    {img: images.cover1},
    {img: images.cover1},
    {img: images.cover1},
    {img: images.cover1},
    {img: images.cover1},
    {img: images.cover1},
    {img: images.cover1},
    {img: images.cover1},
    {img: images.cover1},
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Appbar.Header style={styles.bgHeader}>
        <View style={styles.inputContainer}>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <Image source={images.search} />
            <TextInput
              placeholder="Search Location"
              placeholderTextColor="#4C5980"
              selectionColor="#4C5980"
              style={styles.inputTxt}
            />
          </View>
        </View>
      </Appbar.Header>
      <FlatGrid
        itemDimension={100}
        data={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        spacing={10}
        renderItem={({item}) => (
          <View style={[styles.itemContainer]}>
            <Image style={{width:120, height:120}} source={item.img} />
          </View>
        )}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FA',
  },
  gridView: {
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
  
  },
  bgHeader: {
    backgroundColor: '#fff',
    elevation: 0,
    flexDirection: 'column',
    paddingHorizontal: 20,
    height: 90,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    backgroundColor: '#F5F6FA',
    height: 62,
    paddingHorizontal: 20,
    width: '100%',
    marginVertical: 15,
  },
  inputTxt: {
    fontSize: 16,
    fontWeight: '500',
    width: '85%',
    marginLeft: 10,
    color: '#4C5980',
  },
});
export default SearchScreen;
