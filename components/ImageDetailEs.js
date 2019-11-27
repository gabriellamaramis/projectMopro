import React from 'react';
import { View, Text, Image } from 'react-native';

const ImageDetailMinuman = ({imageSource, title, rating}) => {
    return(
        <View>
            <Image 
                style={{width: 225, height: 200}}
                source={imageSource}
            />
            <Text>{title}</Text>
        </View>
    )
};

export default ImageDetailMinuman;