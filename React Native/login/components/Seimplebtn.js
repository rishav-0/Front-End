import { TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Seimplebtn = ({img}) => {
  return (
    <TouchableOpacity  style={{width:96,borderWidth:2,borderColor:'#dcdee0',padding:12,alignItems:'center',justifyContent:'center',borderRadius:20}} >
          <Image 
          style={{width: 36, height: 36}}
          source={{uri: img}} />
        </TouchableOpacity>
  )
}

export default Seimplebtn