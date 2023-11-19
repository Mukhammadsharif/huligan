import React, {useContext, useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../utils/colors';
import AsyncStorage from '@react-native-community/async-storage';
import {GlobalContext} from '../contexts/GlobalContext';

export default function ProductCard({productItem}) {
  const {refresh, setRefresh} = useContext(GlobalContext);
  const [added, setAdded] = useState(false);
  const addToCart = async product => {
    const cartList = await AsyncStorage.getItem('cartList');
    if (cartList) {
      const cartArray = JSON.parse(cartList);
      const existProduct = cartArray.find(item => item.name === product.name);
      if (!existProduct) {
        cartArray.push(product);
        await AsyncStorage.setItem('cartList', JSON.stringify(cartArray));
      }
    } else {
      const cartArray = [];
      cartArray.push(product);
      await AsyncStorage.setItem('cartList', JSON.stringify(cartArray));
    }
    await setRefresh(!refresh);
  };

  const removeFromCart = async product => {
    const cartList = await AsyncStorage.getItem('cartList');
    if (cartList) {
      const cartArray = JSON.parse(cartList);
      const existProduct = cartArray.find(item => item.name === product.name);
      if (existProduct) {
        const newArray = cartArray.filter(item => item.name !== product.name);
        await AsyncStorage.setItem('cartList', JSON.stringify(newArray));
      }
    }
    await setRefresh(!refresh);
  };

  const defineProduct = async product => {
    const cartList = await AsyncStorage.getItem('cartList');
    if (cartList) {
      const cartArray = JSON.parse(cartList);
      const existProduct = cartArray.find(item => item.name === product.name);
      if (existProduct) {
        removeFromCart(product);
      } else {
        addToCart(product);
      }
    } else {
      addToCart(product);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      const cartList = await AsyncStorage.getItem('cartList');
      if (cartList) {
        const cartArray = JSON.parse(cartList);
        const existProduct = cartArray.find(
          item => item.name === productItem.name,
        );
        if (existProduct) {
          setAdded(true);
        } else {
          setAdded(false);
        }
      }
    };

    getProduct();
  }, [refresh]);

  return (
    <View style={styles.container}>
      <Image source={productItem.image} style={styles.image} />

      <View style={styles.row}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{productItem.price} $</Text>
        </View>

        <TouchableOpacity
          onPress={() => defineProduct(productItem)}
          style={[styles.priceContainer, {opacity: added ? 0.4 : 1}]}>
          <Text style={styles.price}>{'В КОРЗИНУ'}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.name}>{productItem.name}</Text>

      <Text style={styles.weight}>{productItem.weight}г</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#ECEBEB',
    height: 150,
    marginTop: 15,
    padding: 5,
    borderRadius: 8,
  },
  image: {
    height: 100,
    width: '98%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  name: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: COLORS.black,
    marginTop: 5,
    marginLeft: 5,
    fontWeight: '600',
  },
  weight: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: COLORS.black,
    opacity: 0.8,
    marginTop: 5,
    marginLeft: 5,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    paddingHorizontal: 15,
  },
  priceContainer: {
    backgroundColor: COLORS.mainBackground,
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  price: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    color: COLORS.white,
  },
});
