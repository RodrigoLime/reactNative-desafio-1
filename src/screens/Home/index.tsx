import { View, Text, TextInput, FlatList, Alert, TouchableHighlight } from "react-native";
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
  const [isFocused, setIsFocused] = useState(false) /*Estado para deixar a borda do textInput roxa quando estiver em focus */


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
    Alert.alert("Remover", `Remover a tarefa ${name}?`, [
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

  function handleCheckTask(id: string) {
    setTasks(prevTasks => {
      return prevTasks.map(task => {
        if (task.id === id) {
          return { ...task, isChecked: true };
        }
        return task;
      })
    })
  }

  function handleUncheckTask(id: string) {
    setTasks(prevTasks => {
      return prevTasks.map(task => {
        if (task.id === id) {
          return { ...task, isChecked: false };
        }
        return task;
      })
    })
  }

  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.isChecked === false && b.isChecked === true) {
      return -1; 
    } else if (a.isChecked === true && b.isChecked === false) {
      return 1; 
    } else {
      return 0; 
    }
  });

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={styles.container}>

      <View style={styles.form}>

        <TextInput 
          style={[styles.input, isFocused && styles.focusedInput]}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={colors.gray300}
          onChangeText={setNewTask}
          value={newTask}
        />

        <TouchableHighlight style={styles.addButton} onPress={handleAddTask} underlayColor={colors.blue}>
          <Text>
            <PlusCircle color={colors.gray100}/>
          </Text>
        </TouchableHighlight >
        
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
            {tasks.reduce((count, task) => {
              if (task.isChecked) {
                return count + 1
              }
              return count
            }, 0)}
          </Text>
        </View>
      </View>

        <View>
          <FlatList
            data={sortedTasks}
            renderItem={({ item }) => (
              <Task
                key={item.id}
                content={item.content}
                isChecked={item.isChecked}
                onRemove={() => handleRemoveTask(item.id, item.content)}
                onCheck={() => handleCheckTask(item.id)}
                onUncheck={() => handleUncheckTask(item.id)}
              />
            )}
            showsVerticalScrollIndicator={false}
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