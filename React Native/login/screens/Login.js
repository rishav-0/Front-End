import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import Darkbtn from '../components/Darkbtn'

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View>

            <View style={{padding:20}}>
                <Image 
                style={{width: 300, height: 300}}
                source={{uri: 'https://cdni.iconscout.com/illustration/premium/thumb/data-security-illustration-download-in-svg-png-gif-file-formats--protection-secure-privacy-lock-database-cyber-pack-device-illustrations-4077854.png'}} />
            </View>
            
        <Text style={{fontSize:32,marginBottom:22,textAlign:'center',fontWeight:'500'}}>Let's you in</Text>
        </View>

    <View style={{width:'100%'}}>

      <Button title='Facebook' img='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1024px-Facebook_f_logo_%282021%29.svg.png'></Button>
      <Button title='Google' img='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png'></Button>
      <Button title='Apple' img='https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png'></Button>
    </View>

    <View style={{flexDirection:'row',gap:4,alignItems:'center'}}>
        <View style={{height:1,backgroundColor:'black',flex:1,width:'100%'}}></View>
        <Text>or Log in with</Text>
        <View style={{height:1,backgroundColor:'black',flex:1,width:'100%'}}></View>
    </View>

     <Darkbtn title='Phone Number/Email'></Darkbtn>

     <View style={{flexDirection:'row'}}>
        <Text>New to  Leafboard?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{color:'#001c3f',fontWeight:'600'}}>Create Account</Text>
        </TouchableOpacity>
     </View>
    </View>
  )
}

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      padding:24,
      paddingTop:38,
      alignItems:'center',
      backgroundColor:'white',
      justifyContent:'space-between'
    }
})

export default Login 