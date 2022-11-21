import React from 'react'
import { View  , Text , StyleSheet } from 'react-native'
export default function header() {
  return (
    <>
    <View style={styles.header}>
        <Text style={styles.headerText}>NewsApp</Text>
    </View>
    </>
  )
}
const styles = StyleSheet.create({
  header: {
  
    alignItems: 'center',
    justifyContent: 'center',
    height : 80,
    backgroundColor : 'yellow',
  },
  headerText :{
    color : 'black',
    fontSize :20,
    marginTop : 22,
    fontWeight: 'bold'
    
  }
});
    


