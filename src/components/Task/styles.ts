import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: colors.gray500
  }, 
  checkedContent: {
    color: colors.gray300,
    flex: 1,
    textDecorationLine: "line-through"
  },
  uncheckedContent: {
    color: colors.gray100,
    flex: 1
  },
  checkTask: {
    padding: 6
  },
  deleteTask: {
    padding: 6
  }
})