import React from "react";
import { Text, StyleSheet, View,TouchableOpacity} from 'react-native';

const Task = (props) => {
    return(
        <View style={styles.item}>
            <View style={styles.itemsLeft}>
            <TouchableOpacity style={styles.square}></TouchableOpacity>
            <Text style={styles.itemText}>{props.text}</Text>
           
            </View>
            <View style={styles.circular}></View>
        </View>
    )

}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    itemsLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square:{
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 10,
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        borderColor: '#55BCF6',
        width : 12,
        height: 12,
        borderRadius: 5,
        borderWidth: 2,
        marginTop: 7,
    }
});

export default Task;