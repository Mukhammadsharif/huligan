import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
// import Products from './screens/Products';
import {COLORS} from './utils/colors';
import Products from './screens/Products';
import LinearGradient from 'react-native-linear-gradient';
import Logo from './assets/headerlogo.png';
import {DrawerCardIcon} from './components/Svgs';
import Cart from './screens/Cart';
import OrderThank from './screens/OrderThank';
import Reservation from './screens/Reservation';
import ReserveThank from './screens/ReserveThank';
import Contacts from './screens/Contact';
import ContactThank from './screens/ContactThank';
import Events from './screens/Events';
import Game from './screens/Game';
import Cinema from './screens/Cinema';
import Regbi from './screens/Regbi';
import Cricket from './screens/Cricket';
import CloseIcon from './assets/icons8-close-64.png';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const {width, height} = Dimensions.get('window');
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: width,
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Products"
        component={Products}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="OrderThank"
        component={OrderThank}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="ReserveThank"
        component={ReserveThank}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="Reservation"
        component={Reservation}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="Contacts"
        component={Contacts}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="ContactThank"
        component={ContactThank}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="Events"
        component={Events}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="Game"
        component={Game}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="Cinema"
        component={Cinema}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="Regbi"
        component={Regbi}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="Cricket"
        component={Cricket}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

function CustomDrawer(props) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <View style={styles.container}>
        <View style={styles.closeIconContainer}>
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            <Image source={CloseIcon} style={styles.close} />
          </TouchableOpacity>
        </View>

        <LinearGradient
          colors={['#5E00A8', '#120338']}
          style={styles.logoContainer}>
          <Image source={Logo} style={styles.logo} />
        </LinearGradient>

        <View style={styles.mainContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Products')}
            style={styles.drawerItem}>
            {/*<Image source={CatalogImage} style={styles.icon} />*/}
            <Text style={styles.itemText}>МАГАЗИН</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Reservation')}
            style={styles.drawerItem}>
            {/*<Image source={ReservationImage} style={styles.icon} />*/}
            <Text style={styles.itemText}>{'Бронь'.toUpperCase()}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Contacts')}
            style={styles.drawerItem}>
            {/*<Image source={BroadcastImage} style={styles.icon} />*/}
            <Text style={styles.itemText}>{'Контакты'.toUpperCase()}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Events')}
            style={styles.drawerItem}>
            {/*<Image source={ContactImage} style={styles.icon} />*/}
            <Text style={styles.itemText}>
              {'События ресторана'.toUpperCase()}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <View style={styles.transform}>
            <DrawerCardIcon />
          </View>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    height: height - (height / 100) * 6,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 60,
    alignItems: 'center',
  },
  mainContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContainer: {
    width: '100%',
    height: 150,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    marginTop: 50,
  },
  logo: {
    width: '80%',
    height: '80%',
  },
  drawerItem: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: COLORS.buttonBackground,
    marginTop: 10,
    borderRadius: 24,
  },
  icon: {
    width: 25,
    height: 25,
  },
  footer: {
    justifyContent: 'center',
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 30,
    fontFamily: 'Montserrat-Bold',
  },
  itemText: {
    color: COLORS.white,
    fontWeight: '900',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
  transform: {
    transform: 'scale(0.35)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 30,
  },
  closeIconContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  close: {
    width: 40,
    height: 40,
  },
});
