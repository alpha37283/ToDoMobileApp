import { SafeAreaView } from "react-native";
import { LinearGradient } from "react-native-svg";

function TaskInfo () {

    return(
        <LinearGradient colors={[ '#1253AA', '#05243E']} style={styles.gradient}>
        <SafeAreaView style={styles.safeAreaView}>
            <View style = {styles.main}>






                <View style = {styles.header}>
                    <Image/>
                    <Text>Task Details</Text>
                </View>




                
                <View style = {styles.headings}>
                    <View style = {styles.titleandLogo}>
                        <Text>Team Meeting</Text>
                        <Image style = {styles.logo}></Image>
                    </View>
                    <View style = {styles.dateAndTime}>
                        <View style = {styles.v1}>
                            <View style = {styles.date}>
                                <Image></Image>
                                <Text>Date</Text>
                            </View>
                        </View>
                        <View style = {styles.v2}>
                            <View style = {styles.time}>
                                <Image></Image>
                                <Text>Time</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </View>

        </SafeAreaView>
        </LinearGradient>
    )

}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    safeAreaView : {
        flex: 1, // Adjusted to make the SafeAreaView fill the available space
        justifyContent: 'center',
        alignItems: 'center',
    },
    main: {
        flex: 1,
        padding: 20,
        alignItems : 'center'
       
    },
    
})

export default TaskInfo;