import { Alert, FlatList, Text, View } from 'react-native'
import { styles } from './style'
import { Empty } from '../Empty'
import { TaskType } from '../AddNewTaskForm'
import { Task } from '../Task'
import { Dispatch, SetStateAction } from 'react'

interface TasksProps {
  tasks: TaskType[]
  setTasks: Dispatch<SetStateAction<TaskType[] | []>>
}

export function Tasks({ tasks, setTasks }: TasksProps) {
  function handleTaskStatus(id: string) {
    const newTasksData = tasks.map((task) => {
      if (task.id === id) {
        return {
          id: task.id,
          name: task.name,
          isDone: !task.isDone,
        }
      } else {
        return task
      }
    })

    setTasks([...newTasksData])
  }

  function handleTaskDelete(id: string) {
    Alert.alert(
      'Deletar tarefa',
      'Você realmente deseja deletar essa tarefa?',
      [
        {
          text: 'Sim',
          onPress: () => {
            const newTasksData = tasks.filter((task) => task.id !== id)

            setTasks([...newTasksData])
          },
        },
        {
          text: 'Não',
          style: 'cancel',
        },
      ],
    )
  }

  return (
    <View style={styles.tasksContainer}>
      <View style={styles.infos}>
        <View style={styles.infosTexts}>
          <Text style={styles.infoText}>Criadas</Text>
          <View style={styles.amountContainer}>
            <Text style={styles.amount}>{tasks.length}</Text>
          </View>
        </View>
        <View style={styles.infosTexts}>
          <Text style={styles.infoText}>Concluídas</Text>
          <View style={styles.amountContainer}>
            <Text style={styles.amount}>
              {tasks.filter((task) => task.isDone).length}
            </Text>
          </View>
        </View>
      </View>

      <FlatList
        style={styles.tasksCreatedContainer}
        data={tasks}
        keyExtractor={(task) => task.id}
        renderItem={({ item }) => (
          <Task
            key={item.id}
            task={item}
            handleTaskStatus={handleTaskStatus}
            handleTaskDelete={handleTaskDelete}
          />
        )}
        ListEmptyComponent={<Empty />}
      />
    </View>
  )
}
