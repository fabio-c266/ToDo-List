import { View } from 'react-native'
import { styles } from './style'
import { Header } from '../../components/Header'
import { Tasks } from '../../components/Tasks'
import {
  useFonts,
  Inter_700Bold,
  Inter_400Regular,
} from '@expo-google-fonts/inter'
import { useState } from 'react'

import { AddNewTaskForm, TaskType } from '../../components/AddNewTaskForm'

export function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([])

  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })

  if (!fontLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddNewTaskForm setTasks={setTasks} />
      <Tasks setTasks={setTasks} tasks={tasks} />
    </View>
  )
}
