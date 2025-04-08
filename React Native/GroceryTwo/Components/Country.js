 import React, { useState } from 'react';
  import { StyleSheet } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import FontAwesome from '@expo/vector-icons/FontAwesome';

  const data = [
    { label: '+ 1', value: 'United States' },
  { label: '+ 44', value: 'United Kingdom' },
  { label: '+ 91', value: 'India' },
  { label: '+ 81', value: 'Japan' },
  { label: '+ 86', value: 'China' },
  { label: '+ 33', value: 'France' },
  { label: '+ 49', value: 'Germany' },
  { label: '+ 61', value: 'Australia' },
  { label: '+ 7', value: 'Russia' },
  { label: '+ 39', value: 'Italy' },
  { label: '+ 34', value: 'Spain' },
  { label: '+ 55', value: 'Brazil' },
  { label: '+ 27', value: 'South Africa' },
  { label: '+ 82', value: 'South Korea' },
  { label: '+ 60', value: 'Malaysia' },
  { label: '+ 65', value: 'Singapore' },
  { label: '+ 62', value: 'Indonesia' },
  { label: '+ 63', value: 'Philippines' },
  { label: '+ 234', value: 'Nigeria' },
  { label: '+ 92', value: 'Pakistan' },
  { label: '+ 880', value: 'Bangladesh' },
  { label: '+ 20', value: 'Egypt' },
  { label: '+ 971', value: 'United Arab Emirates' },
  { label: '+ 966', value: 'Saudi Arabia' },
  { label: '+ 964', value: 'Iraq' },
  { label: '+ 98', value: 'Iran' },
  { label: '+ 90', value: 'Turkey' },
  { label: '+ 351', value: 'Portugal' },
  { label: '+ 46', value: 'Sweden' },
  { label: '+ 47', value: 'Norway' },
  { label: '+ 45', value: 'Denmark' },
  { label: '+ 31', value: 'Netherlands' },
  { label: '+ 41', value: 'Switzerland' },
  { label: '+ 43', value: 'Austria' },
  { label: '+ 48', value: 'Poland' },
  { label: '+ 380', value: 'Ukraine' },
  { label: '+ 420', value: 'Czech Republic' },
  { label: '+ 40', value: 'Romania' },
  { label: '+ 36', value: 'Hungary' },
  { label: '+ 358', value: 'Finland' },
  { label: '+ 372', value: 'Estonia' },
  { label: '+ 371', value: 'Latvia' },
  { label: '+ 370', value: 'Lithuania' },
  { label: '+ 994', value: 'Azerbaijan' },
  { label: '+ 66', value: 'Thailand' },
  { label: '+ 84', value: 'Vietnam' },
  { label: '+ 92', value: 'Pakistan' },
  { label: '+ 1', value: 'Canada' },
  { label: '+ 595', value: 'Paraguay' },
  { label: '+ 54', value: 'Argentina' },
  { label: '+ 56', value: 'Chile' },
  { label: '+ 57', value: 'Colombia' },
  { label: '+ 593', value: 'Ecuador' },
  { label: '+ 51', value: 'Peru' },
  { label: '+ 598', value: 'Uruguay' },
  { label: '+ 591', value: 'Bolivia' },
  { label: '+ 386', value: 'Slovenia' },
  { label: '+ 381', value: 'Serbia' },
  { label: '+ 385', value: 'Croatia' },
  { label: '+ 682', value: 'Cook Islands' },
  { label: '+ 256', value: 'Uganda' },
  { label: '+ 254', value: 'Kenya' },
  { label: '+ 255', value: 'Tanzania' },
  { label: '+ 250', value: 'Rwanda' },
  { label: '+ 237', value: 'Cameroon' },
  { label: '+ 221', value: 'Senegal' },
  { label: '+ 212', value: 'Morocco' },
  { label: '+ 213', value: 'Algeria' },
  { label: '+ 216', value: 'Tunisia' },
  { label: '+ 94', value: 'Sri Lanka' },
  { label: '+ 977', value: 'Nepal' },
  { label: '+ 975', value: 'Bhutan' },
  { label: '+ 856', value: 'Laos' },
  { label: '+ 855', value: 'Cambodia' },
  { label: '+ 962', value: 'Jordan' },
  { label: '+ 961', value: 'Lebanon' },
  { label: '+ 972', value: 'Israel' },
  { label: '+ 965', value: 'Kuwait' },
  { label: '+ 968', value: 'Oman' },
  { label: '+ 973', value: 'Bahrain' },
  { label: '+ 974', value: 'Qatar' }
    
    
  ];

  const Country = ({icon,title}) => {
    const [value, setValue] = useState(null);
    const offcolor = icon == 'power-off'?'red':'black'

    return (
      <Dropdown
        style={styles.dropdown}
       placeholderStyle={[styles.placeholderStyle, { color: offcolor,fontSize:14,paddingRight:12 }]} 
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder='Code'
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

  export default Country;

  const styles = StyleSheet.create({
    dropdown: {
    //   margin: 16,
      height: 50,
      borderRadius:16,
      width:134,
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
    
    },
  });