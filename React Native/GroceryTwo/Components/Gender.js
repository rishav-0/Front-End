 import React, { useState } from 'react';
  import { StyleSheet } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import FontAwesome from '@expo/vector-icons/FontAwesome';

  const data = [
    { label: 'Male', value: '1' },
    { label: 'Female', value: '2' },
    
    
  ];

  const DropdownComponent = ({icon,title}) => {
    const [value, setValue] = useState(null);
    const offcolor = icon == 'power-off'?'red':'black'

    return (
      <Dropdown
        style={styles.dropdown}
       placeholderStyle={[styles.placeholderStyle, { color: offcolor,fontSize:14,paddingRight:8 }]} 
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={title}
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        renderLeftIcon={() => (
          <FontAwesome name={icon} size={20} color={offcolor} />
        )}
      />
    );
  };

  export default DropdownComponent;

  const styles = StyleSheet.create({
    dropdown: {
    //   margin: 16,
      height: 50,
      borderRadius:16,
      borderColor: '#bbbbbb',
      borderWidth: 1,
    },
    icon: {
      marginRight: 5,
    //   paddingRight:5
    },
   
    selectedTextStyle: {
      fontSize: 16,
      
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
      display:'none'
    },
  });