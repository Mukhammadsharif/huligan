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
import {BackButton} from '../components/Svgs';
import Logo from '../assets/headerlogo.png';
import {COLORS} from '../utils/colors';
import Background from '../assets/cinema-back.png';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import CinemaImage from '../assets/cinema.png';

const {height} = Dimensions.get('window');
export default function Cinema() {
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

        <View style={styles.content}>
          <Text style={styles.time}>25 ноября в 18:00</Text>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Вечер Кино с Ужином</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image source={CinemaImage} style={styles.cinema} />

            <Text style={styles.cinemaTitle}>
              Приглашаем вас на уникальный Вечер Кино с Ужином
            </Text>

            <Text style={styles.cinemaSubTitle}>
              Окунитесь в мир кино и гастрономии и проведите вечер в атмосфере
              волшебства и вкусных открытий!
            </Text>
          </View>
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
  cinema: {
    width: '100%',
    height: height / 3.6,
    alignSelf: 'center',
    marginTop: 40,
  },
  imageContainer: {
    position: 'relative',
  },
  cinemaTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontWeight: '900',
    fontSize: 14,
    position: 'absolute',
    top: height / 14,
    left: 10,
    right: 10,
    color: COLORS.buttonBackground,
  },
  cinemaSubTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    fontWeight: '500',
    fontSize: 14,
    position: 'absolute',
    top: height / 8,
    left: 20,
    right: 20,
    color: COLORS.black,
  },
});
