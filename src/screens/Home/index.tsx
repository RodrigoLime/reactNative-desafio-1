import { View, Text, Image, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { colors } from "../../styles/colors";
import { PlusCircle, ClipboardText } from "phosphor-react-native";
import { useState } from "react";
import { Task } from "../../components/Task"


interface Task {
  id: string
  content: string
  isChecked: boolean
}
/* Funcao para gerar id aleatorio*/
function guidGenerator() {
  var S4 = function() {
     return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}


export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState('')

  function handleAddTask() {

    const addedTask: Task = {
      id: guidGenerator(),
      content: newTask,
      isChecked: false,
    }

    setTasks(state => [...state, addedTask])
    setNewTask('')
  }

  function handleRemoveTask(id: string, name: string) {
    Alert.alert("Remover", `Remover a tarefa ${name}`, [
      {
        text: 'Sim',
        onPress: () => setTasks(state => state.filter(task => task.id !== id))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }
  return (
    <View style={styles.container}>

      <View style={styles.form}>

        <TextInput 
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={colors.gray300}
          onChangeText={setNewTask}
          value={newTask}
        />

        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text>
            <PlusCircle color={colors.gray100}/>
          </Text>
        </TouchableOpacity >
        
      </View>
      <View style={styles.taskInfo}>
        <View style={styles.tasks}>
          <Text style={styles.createdTasks}>
            Criadas
          </Text>
          <Text style={styles.taskCounter}>
            {tasks.length}
          </Text>
        </View>
        <View style={styles.tasks}>
          <Text style={styles.doneTasks}>
            Concluídas
          </Text>
          <Text style={styles.taskCounter}>
            0
          </Text>
        </View>
      </View>

        <View>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <Task
                key={item.id}
                content={item.content}
                isChecked={item.isChecked}
                onRemove={() => handleRemoveTask(item.id, item.content)}
              />
            )}
            showsVerticalScrollIndicator={false}
            style={styles.yesTasks}
            ListEmptyComponent={() => (
              <View style={styles.noTasks}>
                <ClipboardText color={colors.gray400} size={70}/>
                <View>
                  <Text style={styles.noTaskBold}>
                    Você ainda não tem tarefas cadastradas
                  </Text>
                  <Text style={styles.noTaskRegular}>
                    Crie tarefas e organize seus itens a fazer
                  </Text>
                </View>
              </View>
            )}
          />

        </View>

    </View>
  )
}