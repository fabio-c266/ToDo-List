import { MaterialCommunityIcons } from '@expo/vector-icons'
import {
  Alert,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
} from 'react-native'
import { theme } from '../../theme'
import { styles } from './styles'
import { Dispatch, SetStateAction, useState } from 'react'
import { generateUUID } from '../../utils/generateUUID'

export interface TaskType {
  id: string
  name: string
  isDone: boolean
}

interface AddNewTaskFormProps {
  setTasks: Dispatch<SetStateAction<TaskType[] | []>>
}

export function AddNewTaskForm({ setTasks }: AddNewTaskFormProps) {
  const [newTask, setNewTask] = useState<string>('')

  function handleAddNewTask() {
    if (newTask.length === 0) {
      return Alert.alert(
        'Tarefa vazia',
        'Digite o nome da tarefa que você deseja realizar.',
      )
    }

    setTasks((prevState) => [
      ...prevState,
      {
        id: generateUUID(),
        name: newTask,
        isDone: false,
      },
    ])
    setNewTask('')
    Keyboard.dismiss()
  }

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={theme.colors.base.gray300}
        onChangeText={(currentInputValue) => setNewTask(currentInputValue)}
        value={newTask}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddNewTask}>
        <MaterialCommunityIcons
          name="plus-circle-outline"
          color={theme.colors.base.gray100}
          size={22}
        />
      </TouchableOpacity>
    </View>
  )
}
