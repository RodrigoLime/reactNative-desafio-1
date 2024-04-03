import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: colors.gray500
  }, 
  taskText: {
    color: colors.gray100,
    flex: 1
  }
})