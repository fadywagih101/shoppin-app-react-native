import React from 'react'

//import {Text,View,Button} from 'react-native'
import {createAppContainer} from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer,StackActions } from '@react-navigation/native';




import { createStackNavigator } from '@react-navigation/stack';



 import indexScreen from './src/screens/indexScreen'
 import ShopScreen from './src/screens/Shop'
 import MenuScreen from './src/screens/Menu'
 import ProfileScreen from './src/screens/Profile'
 import SliderBox from './src/screens/Components/SliderBox'
 import ProductScreen from './src/screens/ProductScreen'
 import ProductCardDetailsScreen from './src/screens/ProductCardDetailsScreen'
 import SigninScreen from './src/screens/SigninScreen'
 import SignupScreen from './src/screens/SignupScreen'

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity
  } from 'react-native';
  
  import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';
  import Icon from 'react-native-vector-icons/Ionicons';
//import { TouchableOpacity } from 'react-native-gesture-handler';


























const MenuStack=createStackNavigator();
const HomeStack=createStackNavigator();
const SigninStack = createStackNavigator()



function HomeStackScreen(){
  return(
       <HomeStack.Navigator>
          <HomeStack.Screen name="Home" component={indexScreen} />
       </HomeStack.Navigator>
  )
}

function SigninStackScreen(){
  return(
       <SigninStack.Navigator>
        <SigninStack.Screen name="PULL&PEAR" component={SigninScreen} />
        <SigninStack.Screen name="Signup" component={SignupScreen} />
       </SigninStack.Navigator>

  )
}


function MenuStackScreen(){
  return(
       <MenuStack.Navigator>
        <MenuStack.Screen name="Menu" component={MenuScreen} />
        <MenuStack.Screen name="Product" component={ProductScreen} />
        <MenuStack.Screen name="ProductCardDetails" component={ProductCardDetailsScreen} />
         
          
       </MenuStack.Navigator>

  )
}



const Tab=createBottomTabNavigator(



);








export default function App(){
  return(
    <NavigationContainer>
       <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Menu" component={MenuStackScreen} />
          <Tab.Screen name="Profile" component={SigninStackScreen} />
       </Tab.Navigator>
    </NavigationContainer>

  )
}




























// const TabNavigator = createMaterialBottomTabNavigator(
//     {
//       Home: {
//         screen: indexScreen,
//         navigationOptions: {
//           tabBarIcon: ({ tintColor }) => (
//             <View>
//               <Icon style={[{color: 'black'}]} size={25} name={'ios-home'} />
//             </View>
//           ),
          
//         }
//       },
//       Profile: {
//         screen: Profile,
//         navigationOptions: {
//           tabBarIcon: ({ tintColor }) => (
//             <View>
//               <Icon style={[{color: 'black'}]} size={25} name={'ios-person'} />
//             </View>
//           ),
//           activeColor: 'black',
//           inactiveColor: 'black',
//           barStyle: { backgroundColor: 'white' },
//         }
//       },
//       Menu: {
//         screen: Menu,
//         navigationOptions: {
//           tabBarIcon: ({ tintColor }) => (
//             <View>
//               <Icon style={[{color: 'black'}]} size={25} name={'ios-images'} />
//             </View>
//           ),
//           activeColor: 'black',
//           inactiveColor: 'black',
//           barStyle: { backgroundColor: 'white' },
//         }
//       },
//       Shop: {
//         screen: Shop,
//         navigationOptions: {
//           tabBarIcon: ({ tintColor }) => (
//             <View>
//               <Icon style={[{color:'black'}]} size={25} name={'ios-cart'} />
//             </View>
//           ),
//           activeColor: 'black',
//           inactiveColor: 'black',
//           barStyle: { backgroundColor: 'white' },
//         }
//       },
//     },
//     {
//       initialRouteName: 'Home',
//       activeColor: 'black',
//       inactiveColor: 'black',
//       barStyle: { backgroundColor: 'white' },
//     }
//   );
//    export default createAppContainer(TabNavigator);



























// const navigator=createStackNavigator({
//   index:indexScreen,
//   Shopping:Shop,
//   Product:Product,
//   Profile:Profile
  
// },
// {
//   initialRouteName:'index',

//   defaultNavigationOptions:{
//     title:'Bussiness Search'
//   }

// });

// export default createAppContainer(navigator);





