import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BackButton, HeaderCart} from '../components/Svgs';
import Logo from '../assets/headerlogo.png';
import {COLORS} from '../utils/colors';
import Background from '../assets/events-back.png';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const {height} = Dimensions.get('window');
export default function Events() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Background} style={styles.background}>
        <LinearGradient
          colors={['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0)']}
          style={{flex: 1}}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}>
          <View style={styles.header}>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={styles.hamburger}>
                <View style={styles.hamburgerItem} />
                <View style={styles.hamburgerItem} />
                <View style={styles.hamburgerItem} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={styles.transform}>
                  <BackButton />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.logoContainer}>
              <Image source={Logo} style={styles.logo} />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <View style={styles.transform}>
                <HeaderCart />
              </View>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Game')}
            style={styles.button}>
            <Text style={styles.buttonText}>Вечер Игр и Развлечений</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Cinema')}
            style={styles.button}>
            <Text style={styles.buttonText}>Вечер Кино с Ужином</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Regbi')}
            style={styles.button}>
            <Text style={styles.buttonText}>Регби-вечер</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Cricket')}
            style={styles.button}>
            <Text style={styles.buttonText}>Крикетный день</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  background: {
    flex: 1,
    height: height,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  hamburger: {
    width: 50,
    height: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hamburgerItem: {
    height: 3,
    width: '100%',
    backgroundColor: COLORS.black,
  },
  transform: {
    transform: 'scale(0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 30,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    backgroundColor: COLORS.mainBackground,
    width: 150,
    height: 60,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 18,
    marginLeft: -50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '85%',
    height: '90%',
  },
  buttonContainer: {
    paddingHorizontal: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderRadius: 24,
    backgroundColor: COLORS.mainBackground,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    fontWeight: '900',
    color: COLORS.eventButtonText,
  },
});
