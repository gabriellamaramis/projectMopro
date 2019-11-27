import React from 'react';
import { Text, View, Image, ImageBackground, StyleSheet } from 'react-native';
import ImageDetailMinuman from '../components/ImageDetailMinuman';
import { ScrollView } from 'react-native-gesture-handler';

const ImageScreenMinuman = () => {
    return (
        <View>
               <ImageBackground source={require('../assets/siang.jpg')} style={{width: '100%', height: '100%'}}>
           <ScrollView>
           <View style = {styles.container}>
                   <View style={styles.tengah}>
                   <Text style={styles.text}>NutriSari Biasa/Dingin Rp 5.000</Text>
                   <ImageDetailMinuman
                   imageSource={require('../assets/nutrisari.jpg')}
                   />
                 </View>
   
                 <View style={styles.tengah}>
                 <Text style={styles.text}>TehManis Biasa/Dingin Rp 5.000</Text>
                   <ImageDetailMinuman
                       imageSource={require('../assets/estehmanis.jpg')}
                   />
                 </View>
   
                 <View style={styles.tengah}>
                 <Text style={styles.text}>Coca-Cola Biasa/Dingin Rp 6.000</Text>
                   <ImageDetailMinuman 
                   imageSource={require('../assets/cocacola.jpg')}
                   />
                 </View>
   
               <View style={styles.tengah}>
                   <Text style={styles.text}>Fanta Biasa/Dingin Rp 6.000</Text>
                   <ImageDetailMinuman 
                   imageSource={require('../assets/fanta.jpg')}
                   />
                 </View>
   
               <View style={styles.tengah}>
                   <Text style={styles.text}>Aqua Biasa/Dingin Rp 4.000</Text>
                   <ImageDetailMinuman 
                   imageSource={require('../assets/aqua.jpg')}
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
       width: "55%",
       marginVertical:20
   }, 
   text:{
       color:'white',
       textAlign: 'center',
       fontSize : 25,
       
   
   }
   })

export default ImageScreenMinuman;