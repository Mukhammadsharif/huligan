import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {BackButton, HeaderCart} from '../components/Svgs';
import Logo from '../assets/headerlogo.png';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../utils/colors';
import {GlobalContext} from '../contexts/GlobalContext';
import AsyncStorage from '@react-native-community/async-storage';
import CartCard from '../components/CartCard';
import Smile from '../assets/smile.png';
import Button from '../components/Button';

export default function Cart() {
  const navigation = useNavigation();
  const {refresh} = useContext(GlobalContext);
  const [cartItems, setCartItems] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const getCartList = async () => {
      const cartList = await AsyncStorage.getItem('cartList');
      if (cartList?.length) {
        setCartItems(JSON.parse(cartList));
      }
    };

    getCartList();
  }, [refresh]);

  useEffect(() => {
    if (cartItems?.length) {
      let sum = 0;
      cartItems.forEach(product => {
        sum = sum + parseInt(product.price, 10) * product.count;
      });

      setPrice(sum);
    }
  }, [cartItems, refresh]);

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
          <View style={styles.transform}></View>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        {!cartItems?.length ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.title}>{'Корзина пустая'.toUpperCase()}</Text>

            <Image source={Smile} style={styles.smile} />
          </View>
        ) : (
          cartItems?.map((item, index) => <CartCard key={index} item={item} />)
        )}
      </ScrollView>

      <Button
        text={cartItems?.length ? 'Итого ' + price + ' $' : 'НА главную'}
        onPress={() => {
          if (cartItems?.length) {
            navigation.navigate('OrderThank');
          } else {
            navigation.navigate('Products');
          }
        }}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
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
  scrollView: {
    paddingBottom: 60,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 30,
    lineHeight: 40,
    color: COLORS.mainBackground,
    opacity: 0.4,
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  smile: {
    width: 150,
    height: 150,
    marginTop: 150,
  },
});
