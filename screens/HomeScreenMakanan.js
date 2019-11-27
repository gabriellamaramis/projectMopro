import React from 'react';
import { Text, View, Button, ImageBackground, StyleSheet } from 'react-native';

const HomeScreenMakanan = ({navigation}) => {

     return (
 
        <View style={styles.container}>
             <ImageBackground source={require('../assets/cafe.jpg')} style={{width: '100%', height: '100%'}}>

         <View style={styles.container} >
            
              <View style={styles.tengah}>
                  <Button style={styles.Button}
                     text color = 'black'
                     title="Silahkan pilih Makanan"
                     onPress={()=> navigation.navigate('ImageMakanan')}
                    />
              </View>
 
              <View style={styles.tengah}>
                  <Button style={styles.Button}
                  text color = 'black'
                  title="Silahan pilih Minuman"
                  onPress={()=> navigation.navigate('ImageMinuman')}
                  />
              </View>
              
              <View style={styles.tengah}>
                  <Button style={styles.Button}
                  text color = 'black'
                  title="Silahkan Pilih Es"
                  onPress={()=> navigation.navigate('ImageEs')}
                  />
               </View>

            </View>
         </ImageBackground>  
     </View>
   
     )};
 
     const styles = StyleSheet.create({
         container: {
             flex: 1,
             justifyContent: 'center',
             alignItems: 'center'
         },
     tengah:{
         width: "70%",
         marginVertical:5
     }, 
     })
 

export default HomeScreenMakanan;
