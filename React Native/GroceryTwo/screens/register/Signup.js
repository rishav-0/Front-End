import { View, Text, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import { Globalcontext } from '../../context/Globalcontext'


const Signup = ({navigation}) => {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const {createUser,userDetail} = useContext(Globalcontext)

  const handleInput = () => {
    createUser(name,email,password)

    // setName('')
    // setEmail('')
    // setPassword('')

    navigation.navigate('Home')
  }


  return (
    <ScrollView style={{flex:1,paddingTop:40,paddingHorizontal:22,}}>
        <View style={{alignItems:'center',marginBottom:24}}>
        <Text style={{fontSize:22,fontWeight:'500'}}>Signup</Text>
        <Text style={{color:'#bbbbbb'}}>Please provide us your signup details</Text>
        </View>
        <Input onChangeText={name=>setName(name)} type='text' title='Full name' placeholder='Enter your name'/>
        <Input onChangeText={name=>setEmail(name)} type='email' title='Email' placeholder='Your Email address'/>
        <Input onChangeText={name=>setPassword(name)} type='password' title='Password' placeholder='Password'/>

        <Button title='Sign up' image='' bg='#3c966d' onPress={()=>handleInput()}/>

        <Text style={{marginBottom:16,textAlign:'center'}}>Or</Text>

        <Button title='Sign up' outline={1} image='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png'/>
        <Button title='Sign up' bg='black' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9uPEvaHJ3SDT_Qp73SqM-Yg512aKoHdadsQ&s'/>

        <View style={{flexDirection:'row',justifyContent:'center'}}>
          <Text style={{fontWeight:'500'}}>Already have an account?</Text>
          <Text style={{color:"#3c966d",fontWeight:'500'}} onPress={()=>navigation.navigate('Login')}> Log in</Text>
        </View>
    </ScrollView >
  )
}

export default Signup