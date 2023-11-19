import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BackButton, HeaderCart} from '../components/Svgs';
import {COLORS} from '../utils/colors';
import Logo from '../assets/headerlogo.png';
import {useNavigation} from '@react-navigation/native';
import {data} from '../utils/data';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const navigation = useNavigation();
  const [category, setCategory] = useState(0);
  const [categoryName, setCategoryName] = useState('Обед');

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

      <ScrollView
        contentContainerStyle={styles.horizontalScroll}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => {
            setCategory(0);
            setCategoryName('Обед');
          }}
          style={styles.category}>
          <Image source={data[0][0].image} style={styles.categoryImage} />
          <Text
            style={[
              styles.categoryText,
              {color: category === 0 ? COLORS.activeCategory : COLORS.black},
            ]}>
            Обед
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setCategory(1);
            setCategoryName('Паста');
          }}
          style={styles.category}>
          <Image source={data[1][0].image} style={styles.categoryImage} />
          <Text
            style={[
              styles.categoryText,
              {color: category === 1 ? COLORS.activeCategory : COLORS.black},
            ]}>
            Паста
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setCategory(2);
            setCategoryName('Пицца');
          }}
          style={styles.category}>
          <Image source={data[2][0].image} style={styles.categoryImage} />
          <Text
            style={[
              styles.categoryText,
              {color: category === 2 ? COLORS.activeCategory : COLORS.black},
            ]}>
            Пицца
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setCategory(3);
            setCategoryName('Салаты');
          }}
          style={styles.category}>
          <Image source={data[3][0].image} style={styles.categoryImage} />
          <Text
            style={[
              styles.categoryText,
              {color: category === 3 ? COLORS.activeCategory : COLORS.black},
            ]}>
            Салаты
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setCategory(4);
            setCategoryName('Супы');
          }}
          style={styles.category}>
          <Image source={data[4][0].image} style={styles.categoryImage} />
          <Text
            style={[
              styles.categoryText,
              {color: category === 4 ? COLORS.activeCategory : COLORS.black},
            ]}>
            Супы
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setCategory(5);
            setCategoryName('Напитки');
          }}
          style={styles.category}>
          <Image source={data[5][0].image} style={styles.categoryImage} />
          <Text
            style={[
              styles.categoryText,
              {color: category === 5 ? COLORS.activeCategory : COLORS.black},
            ]}>
            Напитки
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <ScrollView
        contentContainerStyle={styles.verticalScroll}
        showsVerticalScrollIndicator={false}>
        <View style={styles.categoryNameContainer}>
          <Text style={styles.categoryName}>{categoryName}</Text>
        </View>

        {data[category].map((item, index) => (
          <ProductCard productItem={item} key={category + index} />
        ))}
      </ScrollView>
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
    marginLeft: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '85%',
    height: '90%',
  },
  category: {
    marginLeft: 15,
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
  categoryText: {
    textAlign: 'center',
    marginTop: 5,
    fontFamily: 'Montserrat-Regular',
    paddingBottom: 40,
    shadowColor: COLORS.black,
    shadowOffset: {width: 8, height: 10},
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
  horizontalScroll: {
    paddingVertical: 15,
  },
  verticalScroll: {
    paddingHorizontal: 15,
    marginTop: 30,
    paddingBottom: 40,
  },
  categoryNameContainer: {
    alignSelf: 'center',
    marginTop: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: COLORS.mainBackground,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryName: {
    color: COLORS.white,
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    fontWeight: '600',
  },
});
