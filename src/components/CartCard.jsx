import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import {GlobalContext} from '../contexts/GlobalContext';
import AsyncStorage from '@react-native-community/async-storage';
import {COLORS} from '../utils/colors';

export default function CartCard({item}) {
  const {refresh, setRefresh} = useContext(GlobalContext);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const getCartList = async () => {
      const cartList = await AsyncStorage.getItem('cartList');
      if (cartList?.length) {
        setCarts(JSON.parse(cartList));
      }
    };

    getCartList();
  }, [refresh]);

  const addNumber = async () => {
    if (carts?.length) {
      const selectedItem = carts.find(product => product.name === item.name);
      if (selectedItem) {
        const selectedIndex = carts.indexOf(selectedItem);
        if (selectedIndex !== null) {
          const newArray = carts;
          newArray[selectedIndex].count = newArray[selectedIndex].count + 1;
          await AsyncStorage.setItem('cartList', JSON.stringify(carts));
          await setRefresh(!refresh);
        }
      }
    }
  };

  const minusNumber = async () => {
    if (carts?.length) {
      const selectedItem = carts.find(product => product.name === item.name);
      if (selectedItem) {
        const selectedIndex = carts.indexOf(selectedItem);
        if (selectedIndex !== null) {
          const newArray = carts;
          if (newArray[selectedIndex].count > 0) {
            newArray[selectedIndex].count = newArray[selectedIndex].count - 1;
            await AsyncStorage.setItem('cartList', JSON.stringify(carts));
            await setRefresh(!refresh);
          }
        }
      }
    }
  };

  const deleteFromCart = async () => {
    if (carts?.length) {
      const newArray = carts.filter(product => product.name !== item.name);
      await setCarts(newArray);
      await AsyncStorage.setItem('cartList', JSON.stringify(newArray));
      await setRefresh(!refresh);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image source={item.image} style={styles.image} />

        <View style={styles.row}>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{item.price} $</Text>
          </View>
        </View>

        <Text style={styles.name}>{item.name}</Text>

        <Text style={styles.weight}>{item.weight}г</Text>
      </View>

      <View style={styles.actionsContainer}>
        <View style={styles.sumContainer}>
          <TouchableOpacity
            style={styles.minus}
            onPress={() => {
              if (item.count) {
                minusNumber();
              } else {
                deleteFromCart();
              }
            }}>
            <Text style={styles.minusText}>-</Text>
          </TouchableOpacity>

          <View style={styles.countContainer}>
            <Text style={styles.count}>{item.count}</Text>
          </View>

          <TouchableOpacity style={styles.plus} onPress={() => addNumber()}>
            <Text style={styles.plusText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 15,
    backgroundColor: COLORS.productCardBackground,
    marginTop: 10,
    padding: 15,
    flexDirection: 'row',
  },
  cardContainer: {
    width: '90%',
    backgroundColor: '#ECEBEB',
    height: 150,
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
  actionsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '10%',
    height: '82%',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  trash: {
    width: 20,
    height: 20,
  },
  sumContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  minus: {
    width: 30,
    height: 40,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  minusText: {
    color: COLORS.mainBackground,
    fontSize: 18,
    fontWeight: '700',
  },
  plus: {
    width: 30,
    height: 40,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  plusText: {
    color: COLORS.mainBackground,
    fontSize: 18,
    fontWeight: '700',
  },
  count: {
    marginHorizontal: 10,
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
  },
  countContainer: {
    backgroundColor: COLORS.mainBackground,
    paddingVertical: 3,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
