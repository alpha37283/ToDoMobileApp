import {React} from 'react';
import { SafeAreaView, StyleSheet, Text, Image, View, Pressable, useWindowDimensions, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from 'expo-font';

function TaskInfo() {

    const [fontsLoaded] = useFonts({
        'Ubuntu-Medium' : require('../assets/fonts/Ubuntu-Medium.ttf')
    })

    const {width} = useWindowDimensions();


  return (
    <LinearGradient colors={['#1253AA', '#05243E']} style={styles.gradient}>
      <SafeAreaView style={styles.safeAreaView}>
        
        <View style={styles.main}>


          {/* Header */}
            <View style={styles.header}>
                <Pressable style = {styles.back} onPress={()=>{console.log('Simon GO BACK')}}> 
                    <Image source={require('../assets/icnPrevious.png')} style={[styles.imgPrev, {width : width * 0.05, height : width * 0.05}]} />
                </Pressable>
                <Text style={styles.taskDetails}>Task Details</Text>
            </View>

          {/* Task Details */}
          <View style={[styles.headings, { marginTop: width * 0.1, }]}>
            <View style={[styles.titleandLogo, { marginBottom: width * 0.03,}]}>
              <Text style={styles.titleText}>Team Meeting</Text>
              <Image source={require('../assets/icnNote.png')} style={[styles.logo,{width : width * 0.05, height : width * 0.05}]} />
            </View>


            <View style={styles.dateAndTime}>
              
                <View style={styles.date}>
                  <Image source={require('../assets/icnTime.png')} style={[styles.dateIcon , {width : width * 0.035, height : width * 0.035}]} />
                  <Text style={styles.dateText}>'20-20-2002'</Text>
                </View>
              
                <Text style = {styles.bar}> | </Text>

             
                <View style={styles.time}>
                  <Image source={require('../assets/icnDate.png')} style={[styles.timeIcon, {width : width * 0.035, height : width * 0.035}]} />
                  <Text style={styles.timeText}>Tomorrow</Text>
                </View>

            </View>
          </View>

          <View style = {styles.desc}>
            <Text style = {[styles.txtDesc, {marginTop : width * 0.2}]}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
          </View>
        
        <View style = {[styles.vBtns, {marginTop : width * 0.2, width : width * 0.9}]}>
            <TouchableOpacity styles = {[styles.btns]}>
                <View style = {[styles.btn,{width : width * 0.23, height : width * 0.18}]}> 
                    <Image source={require('../assets/icnDone.png')} style = {[styles.icnBtns, { width : width * 0.1, height : width * 0.1}]}></Image>
                    <Text style = {styles.btnText}>Done</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity styles = {styles.btns}>
                <View style = {[styles.btn,{width : width * 0.23, height : width * 0.18}]}> 
                    <Image source={require('../assets/icnDlt.png')} style = {[styles.icnBtns, { width : width * 0.1, height : width * 0.1}]}></Image>
                    <Text style = {styles.btnText}>Delete</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity styles = {styles.btns}>
                <View style = {[styles.btn,{width : width * 0.23, height : width * 0.18}]}> 
                    <Image source={require('../assets/icnPin.png')} style = {[styles.icnBtns, { width : width * 0.1, height : width * 0.1}]}></Image>
                    <Text style = {styles.btnText}>Pin</Text>
                </View>
            </TouchableOpacity>
        </View>


            {/*main */}
        </View> 
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    gradient: {
      flex: 1,
    },
    safeAreaView: {
      flex: 1,

    },
    main: {
      flex: 1,
      padding: 20,
    },
    header: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    imgPrev: {
      marginRight: 10,
    },
    taskDetails: {
      fontSize: 15,
      color: 'white',
      letterSpacing: 1,
      fontFamily: 'Ubuntu-Medium',
    },
    headings: {
      // This block only affects headings, so changes here should be isolated
      
    },
    titleandLogo: {
      flexDirection: 'row',
      
    },
    titleText: {
      fontSize: 17,
      color: 'white',
      fontWeight: 'bold',
      letterSpacing: 1,
      fontFamily: 'Ubuntu-Medium',
      marginLeft: 6,
    },
    logo: {
      marginLeft: 6,
    },
    bar : {
        color : 'white'
    },
    dateAndTime: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems : 'center',
     // backgroundColor : 'orange',
      width : '70%',
      opacity : '0.5'
    },
    date: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    dateIcon: {
      width: 24,
      height: 24,
      marginRight: 5,
    },
    dateText: {
      fontSize: 13,
      color: 'white',
      fontWeight: 'bold',
      letterSpacing: 1,
      fontFamily: 'Ubuntu-Medium',
      marginLeft: 1,
    },
    time: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    timeIcon: {
      width: 24,
      height: 24,
      marginRight: 5,
    },
    timeText: {
      fontSize: 13,
      color: 'white',
      fontWeight: 'bold',
      letterSpacing: 1,
      fontFamily: 'Ubuntu-Medium',
      marginLeft: 1,
    },
    txtDesc : {
        fontSize: 13,
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 1,
        fontFamily: 'Ubuntu-Medium',
        marginLeft: 6,
        lineHeight : 20
        
    },
    btnText : {
        fontSize: 12,
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 1,
        fontFamily: 'Ubuntu-Medium',
       

    }, 
    vBtns : {
        flexDirection : 'row',
        justifyContent : 'space-evenly',
    },
    btn : {
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#05243E',
        borderRadius : 10,
        shadowColor : 'aqua',
        shadowOpacity : 0.2,
        shadowRadius : 5,
    }, 
    btns: {

    },
    icnBtns : {

    }
    
  });
  
export default TaskInfo;
