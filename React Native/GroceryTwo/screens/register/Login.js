import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import Button from '../../Components/Button'
import Input from '../../Components/Input'

const Login = ({navigation}) => {
  return (
    <ScrollView style={{flex:1,paddingTop:40,paddingHorizontal:22,}}>
        <View style={{alignItems:'center',marginBottom:24}}>
        <Text style={{fontSize:22,fontWeight:'500'}}>Login</Text>
        <Text style={{color:'#bbbbbb'}}>Please provide us your signup details</Text>
        </View>

        <Input type='email' title='Email' placeholder='Your Email address'/>
        <Input type='password' title='Password' placeholder='Password'/>

        <Button title='Sign up' image='' bg='#3c966d'/>

        <Text style={{marginBottom:16,textAlign:'center'}}>Or</Text>

        <Button title='Sign up' outline={1} image='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png'/>
        <Button title='Sign up' bg='black' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9uPEvaHJ3SDT_Qp73SqM-Yg512aKoHdadsQ&s'/>

        <View style={{flexDirection:'row',justifyContent:'center',marginBottom:16}}>
          <Text style={{fontWeight:'500'}}>Don't have an account?</Text>
          <Text style={{color:"#3c966d",fontWeight:'500'}} onPress={()=>navigation.navigate('Signup')}> Signup</Text>
        </View>

        <Text style={{textAlign:'center'}}>By Signing up you agree to <Text style={{fontWeight:'500'}}>Terms of Service</Text> and <Text style={{fontWeight:'500'}}>Privacy Policy</Text> </Text>
    </ScrollView >
  )
}

export default Login