import React from 'react';
import { Text, View,Image, ImageBackground, StyleSheet } from 'react-native';
import ImageDetailEs from '../components/ImageDetailEs';
import { ScrollView } from 'react-native-gesture-handler';

const ImageScreenEs = ({}) => {
   return (
      <View>
             <ImageBackground source={require('../assets/siang.jpg')} style={{width: '100%', height: '100%'}}>
         <ScrollView>
         <View style = {styles.container}>
                 <View style={styles.tengah}>
                 <Text style={styles.text}>Es Campur Rp 20.000</Text>
                 <ImageDetailEs
                 imageSource={require('../assets/escampur.jpeg')}
                 />
               </View>
 
               <View style={styles.tengah}>
               <Text style={styles.text}>Es Kacang Rp 20.000</Text>
                 <ImageDetailEs
                     imageSource={require('../assets/eskacangmerah.jpg')}
                 />
               </View>
 
               <View style={styles.tengah}>
               <Text style={styles.text}>Es KelapaDurian Rp 20.000</Text>
                 <ImageDetailEs 
                 imageSource={require('../assets/esdurian.jpg')}
                 />
               </View>
 
             <View style={styles.tengah}>
                 <Text style={styles.text}>Es KelapaJeruk Rp 20.000</Text>
                 <ImageDetailEs 
                 imageSource={require('../assets/eskelapajeruk.jpg')}
                 />
               </View>
 
             <View style={styles.tengah}>
                 <Text style={styles.text}>Es Avokad Rp 20.000</Text>
                 <ImageDetailEs 
                 imageSource={require('../assets/esavokad.jpg')}
                 />
               </View>
         </View>
         </ScrollView>
         </ImageBackground>
     </View>
     )
 };
 
 const styles = StyleSheet.create({
     container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center'
     },
 tengah:{
     width: "62%",
     marginVertical:20
 }, 
 text:{
     color:'white',
     textAlign: 'center',
     fontSize : 25,
     
 
 }
 })

export default ImageScreenEs;