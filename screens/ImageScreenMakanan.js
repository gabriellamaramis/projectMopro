import React from 'react';
import { Text, View, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import ImageDetailMakanan from '../components/ImageDetailMakanan';
import { ScrollView } from 'react-native-gesture-handler';

const ImageScreenMakanan = () => {
      return (
      <View>
              <ImageBackground source={require('../assets/siang.jpg')} style={{width: '100%', height: '100%'}}>
          <ScrollView>
          <View style = {styles.container}>
                  <View style={styles.tengah}>
                  <Text style={styles.text}>Ayam Lalapan Rp 20.000</Text>
                  <ImageDetailMakanan 
                  imageSource={require('../assets/ayamlalapan.jpg')}
                  />
                </View>

                <View style={styles.tengah}>
                <Text style={styles.text}>Bakso Rp 20.000</Text>
                  <ImageDetailMakanan
                      imageSource={require('../assets/bakso.jpg')}
                  />
                </View>

                <View style={styles.tengah}>
                <Text style={styles.text}>Nasi Goreng Rp 20.000</Text>
                  <ImageDetailMakanan 
                  imageSource={require('../assets/nasigoreng.jpg')}
                  />
                </View>

              <View style={styles.tengah}>
                  <Text style={styles.text}>Nasi Kuning Rp 20.000</Text>
                  <ImageDetailMakanan 
                  imageSource={require('../assets/nasikuning.jpg')}
                  />
                </View>

              <View style={styles.tengah}>
                  <Text style={styles.text}>Tinutuan Rp 20.000</Text>
                  <ImageDetailMakanan 
                  imageSource={require('../assets/tinutuan.jpg')}
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

export default ImageScreenMakanan;