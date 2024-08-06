import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Pressable, SafeAreaView, TextInput, Keyboard, TouchableWithoutFeedback, useWindowDimensions, TouchableOpacity } from 'react-native';
import { View, StyleSheet, Image, Text } from 'react-native';

import TodayTasks from '../rawDATA/TodayTasks';
import { useFonts } from 'expo-font';

function TasksPage() {
    const { width } = useWindowDimensions();

    const [fontsLoaded] = useFonts({
        'Ubuntu-Medium': require('../assets/fonts/Ubuntu-Medium.ttf')
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>; // Placeholder while fonts are loading
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={['#1253AA', '#05243E']} style={styles.gradient}>
                <SafeAreaView style={styles.safeArea}>
                    <View style={[styles.main, { top: width * 0.1 }]}>
                        <View style={styles.v1}>
                            <Pressable style={[styles.pressableSearch, { width: width * 0.65 }]}>
                                <View style={styles.search}>
                                    <TextInput
                                        placeholder='Search by task title'
                                        style={styles.input}
                                        placeholderTextColor='#ababab'
                                    />
                                    <Image source={require('../assets/icnSearch.png')} style={styles.icns} />
                                </View>
                            </Pressable>
                            <Pressable style={[styles.pressableSearch, { width: width * 0.3 }]}>
                                <View style={styles.sort}>
                                    <TextInput
                                        placeholder='Sort by: '
                                        style={styles.input}
                                        placeholderTextColor='#ababab'
                                    />
                                    <Image source={require('../assets/icnDown.png')} style={styles.icns} />
                                </View>
                            </Pressable>
                        </View>
                        <Text style={styles.todayTasks}>Today Tasks</Text>
                        <View style={styles.v2}>
                            {TodayTasks.map((data) => (
                                <TouchableOpacity key={data.id}>
                                    <View style={[styles.tasks, { width: width * 0.45 }]}>
                                        <Text style={styles.title}>{data.title}</Text>
                                        <Text style={styles.desc}>{data.desc}</Text>
                                        <Text style={styles.time}>{data.time}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View style={styles.v3}>
                            {/* Additional content can be added here */}
                        </View>
                    </View>
                </SafeAreaView>
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
        padding: 20,
    },
    main: {
        flex: 1,
    },
    v1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        borderTopWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
    },
    pressableSearch: {
        marginHorizontal: 5,
        borderRadius: 8,
        backgroundColor: '#102D53',
        elevation: 3,
    },
    search: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    sort: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    v2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    },
    v3: {
        flex: 1,
    },
    icns: {
        height: 30,
        width: 30,
    },
    input: {
        flex: 1,
        color: '#FFFFFF',
    },
    todayTasks: {
        fontSize: 20,
        letterSpacing: 1.5,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 20,
        marginLeft: 15,
        fontFamily: 'Ubuntu-Medium',
    },
    tasks: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 8,
        flexShrink: 1,
        marginBottom: 20,
    },
    title: {
        fontWeight: 'bold',
        fontFamily: 'Ubuntu-Medium',
        letterSpacing: 1.5,
        marginBottom: 5,
    },
    desc: {
        color: 'gray',
        fontFamily: 'Ubuntu-Medium',
        letterSpacing: 1,
        marginBottom: 5,
    },
    time: {
        color: 'gray',
        fontFamily: 'Ubuntu-Medium',
        letterSpacing: 1.5,
    },
});

export default TasksPage;
