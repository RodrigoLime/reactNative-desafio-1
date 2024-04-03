import { View, Text, TouchableOpacity } from "react-native";
import { Circle, Trash } from "phosphor-react-native";
import { styles } from "./styles";
import { colors } from "../../styles/colors";

type Props = {
  content: string
  isChecked: boolean
  onRemove: () => void
}

export function Task({content, isChecked, onRemove}: Props) {
  return (
    <View style={styles.container}>
      <Circle/>
      <Text style={styles.taskText}>
          {content}
      </Text>
      <TouchableOpacity onPress={onRemove}>
        <Trash color={colors.gray300}/>
      </TouchableOpacity>
    </View>
  )
}