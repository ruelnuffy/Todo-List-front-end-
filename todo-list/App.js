import React, { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Platform, TouchableOpacity } from 'react-native';
import Task from './components/todo';

export default function App() {

  const [task, setTask] = useState();
  const handleAddTask = () => {
    console.log(task);
  };
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.topWriting}>Today's Task</Text>
        <View style={styles.items}>
          <Task text={'Task 1'} />
          <Task text={'Task 2'} />
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writing}>
        <TextInput style={styles.input} placeholder={'Add Your Task Here'} value={task} onChange={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask}>
          <View style={styles.btn}>
            <Text style={styles.btnValue}>
              +
            </Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',

  },
  sectionHeader: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  topWriting: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  writing: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    maxHeight: 50,
    backgroundColor: '#FFF',
    borderRadius: 60,
    width: 310,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 60,
    backgroundColor: '#55BCF6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnValue: {
    color: '#FFFF',
    fontWeight: 'bold',
    fontSize: 25,
  }
});
