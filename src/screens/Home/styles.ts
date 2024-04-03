import { StyleSheet } from "react-native"
import { colors } from "../../styles/colors"

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginHorizontal: 30,
  },
  form: {
   flexDirection: "row", 
   gap: 6,
   marginTop: -30,
  },
  input: {
    flex: 1,
    padding: 16,
    borderRadius: 5,
    backgroundColor: colors.gray500,
    color: colors.gray100,
  },
  addButton: {
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: colors.blueDark,
  },
  addButtonText: {
    color: colors.gray100,
    fontFamily: "Inter-Bold",
  },
  taskInfo: {
    flexDirection: "row",
    marginTop: 35,
    marginBottom: 25,
    alignSelf: "stretch",
    justifyContent: "space-between"
  },
  tasks: {
    flexDirection: "row",
    gap: 10,
  },
  createdTasks: {
    color: colors.blue,
    fontWeight: "bold",
  },
  doneTasks: {
    color: colors.purple,
    fontWeight: "bold",
  },
  taskCounter: {
    color: colors.gray200,
    backgroundColor: colors.gray400,
    paddingHorizontal: 10,
    borderRadius: 999,
  },
  noTasks: {
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    paddingVertical: 50,
    gap: 20,
    borderTopWidth: 0.5,
    borderTopColor: colors.gray300
  },
  noTaskBold: {
    color: colors.gray300,
    fontWeight: "bold",
    fontSize: 14
  },
  noTaskRegular: {
    color: colors.gray300,
  },
  yesTasks: {
    
  }
})