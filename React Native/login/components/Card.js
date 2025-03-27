import { View, Text, Image,TextInput } from 'react-native';

import React, { useState } from 'react';

const Card = (props) => {
    const {title,img,caption} = props
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={{ borderRadius: 10, borderWidth: 1, padding:25,flexDirection:'row',gap:10,marginBottom:10,overflow:'hidden'}}>
      <View style={{ borderRadius: 25, width: 50, height: 50, backgroundColor: '#ebe5f2',overflow:'hidden' }}>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: img }}
        />
      </View>
      <View style={{flex:1}}>
        
          <Text style={{fontWeight:'bold'}}>{title}</Text>
           

        
        <Text numberOfLines={2} style={{}}>{caption}</Text>
      </View>
   
    </View>
  );
};

export default Card;
