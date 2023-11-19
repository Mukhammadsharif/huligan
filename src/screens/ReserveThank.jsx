import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../utils/colors';
import {useNavigation} from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';
import Button from '../components/Button';
import {BackButton, HeaderCart} from '../components/Svgs';
import Logo from '../assets/headerlogo.png';
import OrderLogo from '../assets/thank.png';

const {width} = Dimensions.get('window');
export default function ReserveThank() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
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

        <TouchableOpacity>
          <View style={styles.transform}>
            <HeaderCart />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.emptyContainer}>
        <Image source={OrderLogo} style={styles.smile} />
      </View>

      <Text style={styles.subtitle}>Ваш резерв успешно размещен</Text>

      <Button
        text={'На главную'}
        onPress={() => navigation.navigate('Products')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: '20%',
    paddingTop: '40%',
  },
  title: {
    textAlign: 'center',
    color: COLORS.mainBackground,
    fontWeight: '700',
    fontSize: 40,
    fontFamily: 'Montserrat-Bold',
  },
  subtitle: {
    textAlign: 'center',
    color: COLORS.black,
    fontWeight: '700',
    fontSize: 25,
    fontFamily: 'Montserrat-Bold',
    marginTop: 50,
  },
  qrContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
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
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  smile: {
    width: 150,
    height: 150,
    marginTop: 100,
  },
});
