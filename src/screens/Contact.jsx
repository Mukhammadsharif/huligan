import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import {COLORS} from '../utils/colors';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import {BackButton, HeaderCart} from '../components/Svgs';
import Logo from '../assets/headerlogo.png';

export default function Contacts() {
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

        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <View style={styles.transform}>
            <HeaderCart />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Контакты</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.label}>Номер</Text>
        <TextInput
          editable={false}
          style={styles.input}
          placeholderTextColor={COLORS.white}
          activeOutlineColor={COLORS.white}
          outlineColor={'#F2F2F2'}
        />

        <Text style={styles.label}>Адрес</Text>
        <TextInput
          editable={false}
          style={styles.input}
          placeholderTextColor={COLORS.white}
          activeOutlineColor={COLORS.white}
          outlineColor={'#F2F2F2'}
        />

        <Text style={styles.label}>Данные</Text>
        <TextInput
          editable={false}
          style={styles.input}
          placeholderTextColor={COLORS.white}
          activeOutlineColor={COLORS.white}
          outlineColor={'#F2F2F2'}
        />

        <Text style={styles.label}>Индекс</Text>
        <TextInput
          editable={false}
          style={styles.input}
          placeholderTextColor={COLORS.white}
          activeOutlineColor={COLORS.white}
          outlineColor={'#F2F2F2'}
        />
      </ScrollView>

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
    backgroundColor: COLORS.white,
  },
  title: {
    textAlign: 'left',
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
  },
  titleContainer: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: COLORS.mainBackground,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderRadius: 24,
    color: COLORS.black,
    marginTop: 5,
    borderColor: COLORS.mainBackground,
    borderWidth: 1,
    paddingHorizontal: 20,
    fontFamily: 'Montserrat-Regular',
  },
  label: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: COLORS.black,
    opacity: 0.9,
    marginLeft: 10,
    marginTop: 10,
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
});
