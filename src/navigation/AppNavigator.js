import * as React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import Favourite from "../screens/Favourite";
import NewsListScreen from "../screens/NewsListScreen";
import NewsDetails from "../screens/NewsDetails";
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewsList"
        component={NewsListScreen}
        options={{ title: "All News" }}
      />
      <Stack.Screen
        name="NewsDetails"
        component={NewsDetails}
        options={{ title: "News Details" }}
      />
    </Stack.Navigator>
  );
}
// function FavoritesNavigator() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Favorites" component={Favourite} />
//     </Stack.Navigator>
//   );
// }
function TabsNavigator(){
  return(
<Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconName;
          if (route.name == "Home") {
            iconName = "home";
          } else if (route.name == "Favorite") {
            iconName = "favorite";
          }

          return <MaterialIcons name={iconName} size={20} />;
        },
      })}
    >
      <Tabs.Screen name="HomeNavigator" component={HomeNavigator} />
      <Tabs.Screen name="Favorites" component={Favourite} />
    </Tabs.Navigator>
  )
}

function AppNavigator() {
 
  return (
    <NavigationContainer>
       <Drawer.Navigator initialRouteName='Pressify'>
        <Drawer.Screen name='Pressify' component={TabsNavigator}/>
       </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;
