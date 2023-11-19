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
import Background from '../assets/regbi-back.png';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const {height} = Dimensions.get('window');
export default function Regbi() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Background} style={styles.background}>
        <LinearGradient
          colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0)']}
          style={{flex: 1}}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}>
          <View style={styles.header}>
            <View style={styles.row}>
              <TouchableOpacity style={styles.hamburger} />

              <TouchableOpacity onPress={() => navigation.navigate('Events')}>
                <View style={styles.transform}>
                  <BackButton />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.logoContainer}>
              <Image source={Logo} style={styles.logo} />
            </View>

            <TouchableOpacity />
          </View>
        </LinearGradient>
      </ImageBackground>

      <View style={styles.content}>
        <Text style={styles.time}>29 ноября в 18:00</Text>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Регби-вечер</Text>
        </View>

        <Text style={styles.context}>
          Насладитесь захватывающими трансляциями важнейших регбийных матчей в
          атмосфере настоящего спортивного духа
        </Text>
      </View>
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
    marginLeft: -70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '85%',
    height: '90%',
  },
  content: {
    paddingHorizontal: 40,
    position: 'absolute',
    top: height / 6,
    left: 0,
    right: 0,
  },
  time: {
    textAlign: 'right',
    fontFamily: 'Montserrat-Regular',
    marginRight: 10,
    color: COLORS.white,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderRadius: 24,
    backgroundColor: COLORS.mainBackground,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    fontWeight: '900',
    color: COLORS.eventButtonText,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    marginTop: 20,
    fontWeight: '400',
  },
  context: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    color: COLORS.white,
    marginTop: 15,
  },
});
