import { View, Text, TouchableHighlight, TouchableWithoutFeedback } from "react-native";
import { Circle, CheckCircle, Trash } from "phosphor-react-native";
import { styles } from "./styles";
import { colors } from "../../styles/colors";
import { useState } from "react";

type Props = {
  content: string
  isChecked: boolean
  onRemove: () => void
  onCheck: () => void
  onUncheck: () => void
}

export function Task({content, isChecked, onRemove, onCheck, onUncheck}: Props) {
  const [isCheckPressed, setIsCheckPressed] = useState(false)
  const [isDeletePressed, setIsDeletePressed] = useState(false)

  const textConditional = isChecked ? styles.checkedContent : styles.uncheckedContent


  return (
    <View style={styles.container}>

      <TouchableWithoutFeedback
        onPress={isChecked ? onUncheck : onCheck}
        onPressIn={() => setIsCheckPressed(true)}
        onPressOut={() => setIsCheckPressed(false)}
        style={styles.checkTask}
      >
        <View>
          {isChecked ? (

            <CheckCircle color={isCheckPressed ? colors.purple : colors.purpleDark}/>

          ) : (

            <Circle color={isCheckPressed ? colors.blueDark : colors.blue}/>
          
          )}     
        </View>
        
      </TouchableWithoutFeedback>

      <Text style={textConditional}>
          {content}
      </Text>
      <TouchableHighlight 
        onPress={onRemove}
        onPressIn={() => setIsDeletePressed(true)}
        onPressOut={() => setIsDeletePressed(false)}
        underlayColor={colors.gray400}
        style={styles.deleteTask}
        >

        <Trash color={isDeletePressed ? colors.danger : colors.gray300}/>

      </TouchableHighlight>
    </View>
  )
}