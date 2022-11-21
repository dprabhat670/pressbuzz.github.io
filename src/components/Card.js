import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import newsimg1 from "D:/codeputs/android dev/newsApp/assets/42f2cc9ac3540d60c39ac7e7a6023cb9.webp";
import {MaterialIcons} from '@expo/vector-icons'
export default function card(props) {
  return (
    <TouchableOpacity onPress={()=>props.navigation.navigate('NewsDetails')}>
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image source={newsimg1} alt="img" style={styles.image}/>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>Title goes here </Text>
        <MaterialIcons name="favorite-border" size={24} color="#FF00FF" />
      </View>
      <View style={styles.descriptionWrapper}>
        <Text style={styles.description}>Description goes here ! </Text>
      </View>
    </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    height: 300,
    marginVertical: 25,
    marginHorizontal: 15,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: "0.25",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  imageWrapper: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  textWrapper: {
    height: "10%",
    paddingHorizontal: 15,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:10,
  },
  descriptionWrapper: {
    paddingHorizontal: 15,
  },
  image :{
    height:'120%',
    width:'100%'
  },
  title :{
    
    
    fontSize:15,
  },
  description:{
   
    marginTop:2,
  }
});
