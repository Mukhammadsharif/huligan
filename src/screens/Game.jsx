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
import Background from '../assets/game-back.png';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import SportImage from '../assets/sports.png';
import Circle from '../assets/circle.png';

const {height, width} = Dimensions.get('window');
export default function Game() {
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
              <TouchableOpacity style={styles.hamburger}></TouchableOpacity>

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

        <View style={styles.content}>
          <Text style={styles.time}>21 ноября в 21:00</Text>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Вечер Игр и Развлечений</Text>
          </View>

          <Text style={styles.title}>
            Присоединяйтесь к нам{' '}
            <Text style={{fontWeight: '900'}}>
              для увлекательного вечера с играми!
            </Text>
          </Text>
        </View>

        <Image source={SportImage} style={styles.sportImage} />

        <View style={styles.circleContainer}>
          <Image source={Circle} style={styles.circleImage} />

          <Text style={styles.circleText}>
            <Text style={{fontWeight: '700'}}>Не упустите шанс {'\n'}</Text>
            провести незабываемый вечер в веселой и дружеской атмосфере нашего
            ресторана!
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
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
    top: height / 8,
    left: 0,
    right: 0,
  },
  time: {
    textAlign: 'right',
    fontFamily: 'Montserrat-Regular',
    marginRight: 10,
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
  sportImage: {
    width: '80%',
    height: height / 2.2,
  },
  circleImage: {
    width: width / 1.8,
    height: height / 3,
    marginTop: -200,
    marginLeft: width / 5,
  },
  circleContainer: {
    position: 'relative',
  },
  circleText: {
    zIndex: 102,
    position: 'absolute',
    paddingHorizontal: width / 3.4,
    bottom: height / 16,
    textAlign: 'center',
    lineHeight: 14,
    fontWeight: '400',
    fontFamily: 'Montserrat-Bold',
  },
});
