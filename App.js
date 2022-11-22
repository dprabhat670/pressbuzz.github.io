import { React } from "react";
import { View, Text } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import "react-native-gesture-handler";
import  store  from './src/redux/store'
import { Provider} from 'react-redux'


export default function App() {
  return(
    <Provider store={store}>
  <AppNavigator />
  </Provider>
  ) ;
}
