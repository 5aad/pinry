import React from 'react'
import { SafeAreaView } from 'react-native'

const ProfileScreen = ({navigation}) => {
    return (
        <SafeAreaView>
                  <StatusBar barStyle="light-content" backgroundColor="#D988FF" />
      <LinearGradient
        colors={['#D988FF', '#8B5CFF']}
        style={styles.linearGradient}>
        <ImageBackground source={images.bgWel} style={styles.bgImg}>

        </ImageBackground>
        </LinearGradient>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    linearGradient: {
      flex: 1,
    },
    bgImg: {
      width: '100%',
      height: '100%',
    },
})
export default ProfileScreen
