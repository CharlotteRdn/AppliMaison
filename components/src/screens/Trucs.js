import React, {useState} from 'react';
import { KeyboardAvoidingView, Text, View, SafeAreaView, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from '../../Task';
import SelectDropdown from 'react-native-select-dropdown'
import styles from "../../../assets/styles"

export default function Trucs() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const users = ["Jibé", "Charly"]

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
      // saving error
    }
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
    storeData(index)
  }
  
  return (
    <View style={styles.wrap}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Trucs à faire</Text>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={()  => completeTask(index)}>
                    <View>
                        <Task text={item}/>
                        <SelectDropdown
                          data={users}
                          onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                          }}
                          buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem
                          }}
                          rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item
                          }}/>
                    </View>                    
                </TouchableOpacity>
              )
            })
          }
      </View>        
      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView 
       // behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Rajouter un truc à faire'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}
