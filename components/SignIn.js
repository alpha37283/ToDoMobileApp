import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Pressable, TextInput, useWindowDimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useFonts } from 'expo-font';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

function SignIn() {
  const { width } = useWindowDimensions();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [fontsLoaded] = useFonts({
    'Ubuntu-Medium': require('../assets/fonts/Ubuntu-Medium.ttf'),
  });

  const handleSubmit = () => {
    console.log('email', email);
    console.log('Password ', password);
  };

  if (!fontsLoaded) {
    return null; // Return null or a loader until fonts are loaded
  }

  return (
<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <LinearGradient colors={['#05243E', '#1253AA']} style={styles.gradient}>
      <SafeAreaView style={styles.safeArea}>

        <Image style={styles.img} source={require('../assets/Checkmark.png')} />
        <View style={styles.txts}>
                        <Text style={styles.txtWel}>Welcome Back to DO IT</Text>
                        <Text style={styles.txtWelSub}>Have another productive day!</Text>
        </View>

                <View style={styles.inupts}>
                        <View style={[styles.input1, { width: width * 0.9 }]}>
                            <Image style={styles.emailLogo} source={require('../assets/EmailLogo.png')}/>
                            <TextInput
                                style={[styles.email]}
                                placeholder="E-mail"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                returnKeyType="next"
                                onSubmitEditing={() => {
                                // Move to the next TextInput when return key is pressed
                                this.passwordInput.focus();
                                }}
                                blurOnSubmit={false}
                            />
                        </View>
                        <View style={[styles.input2, { width: width * 0.9 }]}>
                            <Image style={styles.emailLogo} source={require('../assets/Lock.png')}/>
                            <TextInput
                                ref={(input) => { this.passwordInput = input; }}
                                style={[styles.password, { width: width * 0.9 }]}
                                placeholder="Password"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                                returnKeyType="done"
                            />
                        </View>
                     
                        <Text style={[styles.forget, {marginLeft : width * 0.55}]}>forget password?</Text>
                        <Pressable style={[styles.button, { width: width * 0.9 }]} onPress={handleSubmit}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </Pressable>
                       <View style ={styles.dhac}>
                            <Text style = { styles.sgnup1}>Don't have an account?</Text>
                            <Text style = { styles.sgnup2}>Sign up</Text>
                       </View>
                </View>
            

      </SafeAreaView>
      <View style= {[styles.sgnWith]}>
                    <Text style={[styles.sgnup1, { marginRight : 20}]}>Sign In with: </Text>
                    <View style={styles.Logo1}>
                        <Image style = {styles.aplLogo} source={require('../assets/AppleLogo.png')}/>
                    </View>
                    <View style={[styles.Logo1, {marginLeft : 15, marginRight : 60}]}>
                        <Image style = {styles.gglLogo} source={require('../assets/GoogleLogo.png')}/>
                    </View>
        </View>
    </LinearGradient>
</TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  img: {
    width: 80,
    height: 80,
  },
  txts: {
    marginTop: 30,
    marginLeft: -60,
    alignItems: 'center',
  },
  txtWel: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
    fontFamily: 'Ubuntu-Medium',
  },
  txtWelSub: {
    fontWeight: '200',
    fontSize: 16,
    color: 'white',
    fontFamily: 'Ubuntu-Medium',
    marginLeft : -50,
    marginTop : 10
  },
  inputs: {
    marginTop: 30,
    alignItems: 'center',
  },
  input1 : {
    flexDirection: 'row',
    backgroundColor : 'white',
    marginTop : 20,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20, 

  },
  input2: {
    flexDirection: 'row',
    marginTop : 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,


  },
  email: {
    marginLeft : 10
    
  },
  emailLogo : {
    width : 25,
    height : 25,
    marginLeft : -5
  },
  password: {
    marginLeft : 10
    
  },
  button: {
    backgroundColor: '#0EA5E9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily : 'Ubuntu-Medium'
  },
  forget: {
    marginTop : 10,
    color: 'white',
    fontSize: 14,
    fontFamily: 'Ubuntu-Medium',
  },
  sgnup1: {
   
    color: 'white',
    fontSize: 14,
    fontFamily: 'Ubuntu-Medium',
  },
  sgnup2: {
    color: '#0EA5E9',
    fontSize: 14,
    fontFamily: 'Ubuntu-Medium',
    marginLeft: 5,
  },
  dhac: {
    flexDirection: 'row',
    marginTop: 20,
  },
  sgnWith : {
    flex : 2,
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center'
  },
  aplLogo : {
    width : 30,
    height : 30,

  },
  gglLogo : {   
    width : 30,
    height : 30,

  },
  Logo1 : {
    justifyContent : 'center',
    alignItems : 'center',
    width : 50,
    height : 50,
    backgroundColor : 'white',
    borderRadius : 10

  },
  Logo2 : {
   
  }
});

export default SignIn;