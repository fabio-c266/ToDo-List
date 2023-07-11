import { Text, TouchableOpacity, View } from 'react-native'
import { TaskType } from '../AddNewTaskForm'
import { styles } from './style'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from '../../theme'

interface TaskProps {
  task: TaskType
  handleTaskStatus: (id: string) => void
  handleTaskDelete: (id: string) => void
}

export function Task({ task, handleTaskStatus, handleTaskDelete }: TaskProps) {
  const { id, name, isDone } = task

  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => handleTaskStatus(id)}>
        <MaterialCommunityIcons
          color={theme.colors.brand.blue}
          name={
            isDone
              ? 'checkbox-marked-circle-outline'
              : 'checkbox-blank-circle-outline'
          }
          size={24}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        {isDone ? (
          <Text style={styles.isDoneText}>{name}</Text>
        ) : (
          <Text style={styles.name}>{name}</Text>
        )}
      </View>
      <TouchableOpacity onPress={() => handleTaskDelete(task.id)}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={theme.colors.base.gray300}
          size={22}
        />
      </TouchableOpacity>
    </View>
  )
}
