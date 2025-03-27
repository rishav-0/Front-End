import { View, Text,Image,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import Darkbtn from '../components/Darkbtn'
import Seimplebtn from '../components/Seimplebtn'

const Signup = ({navigation}) => {
  return (
    <View style={{ flex: 1, 
    padding:24,
    alignItems:'center',
    backgroundColor:'white',
    justifyContent:'space-between'
    }}>
        <View style={{alignItems:'center'}}>

        <Image 
                style={{width: 300, height: 300}}
                source={{uri: 'https://cdni.iconscout.com/illustration/premium/thumb/cyber-security-illustration-download-in-svg-png-gif-file-formats--information-safety-data-electronic-user-secure-pack-crime-illustrations-5175406.png?f=webp'}} />
      <Text style={{fontSize:32,fontWeight:'400'}}>Create an account</Text>
        </View>

            <View style={{flexDirection:'row'}}>
              <Text style={{}}>Alrady have an account?</Text>
              <TouchableOpacity style={{marginBottom:'26'}} onPress={() => navigation.navigate('Login')}>
                  <Text style={{color:'#001c3f',fontWeight:'600'}}>Login</Text>
              </TouchableOpacity>
           </View>
            <View style={{flexDirection:'row',gap:16,marginBottom:12}}>
                   <TouchableOpacity  style={{backgroundColor:'#001943',flex:1,borderWidth:1,padding:18,alignItems:'center',borderRadius:10}}>
                     <Text style={{color:'white',fontWeight:'bold'}}>Phone Number</Text>
                   </TouchableOpacity>
                   <TouchableOpacity  style={{borderColor:'#001943',flex:1,borderWidth:1,padding:18,alignItems:'center',borderRadius:10}}>
                     <Text style={{color:'#001943',fontWeight:'bold'}}>Email</Text>
                   </TouchableOpacity>
            </View>
            <TouchableOpacity  style={{borderWidth:2,marginBottom:12,borderColor:'#dcdee0',flexDirection:'row',gap:8,padding:8,borderRadius:20,width:'100%'}} >

             <TextInput
                    style={{height: 40, padding: 5,textAlign:'left'}}
                    placeholder="Phone number"
                    onChangeText={newText => setText(newText)}
                   
                />
            </TouchableOpacity>
            <TouchableOpacity  style={{borderWidth:2,marginBottom:12,borderColor:'#dcdee0',flexDirection:'row',gap:8,padding:8,borderRadius:20,width:'100%'}} >
             <TextInput
                    style={{height: 40, padding: 5,textAlign:'left'}}
                    placeholder="Password"
                    onChangeText={newText => setText(newText)}
                   
                />
            </TouchableOpacity>

            <Darkbtn title='Log in'></Darkbtn>

             <View style={{flexDirection:'row',gap:4,alignItems:'center'}}>
                    <View style={{height:1,backgroundColor:'black',flex:1,width:'100%'}}></View>
                    <Text>or continue with</Text>
                    <View style={{height:1,backgroundColor:'black',flex:1,width:'100%'}}></View>
                </View>

            <View style={{width:'100%',flexDirection:'row',justifyContent:'space-around'}}>
                <Seimplebtn img='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1024px-Facebook_f_logo_%282021%29.svg.png'></Seimplebtn>
                <Seimplebtn img='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png'></Seimplebtn>
                <Seimplebtn img='https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png'></Seimplebtn>
            </View>

    </View>
  )
}

export default Signup