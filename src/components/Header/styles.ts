import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 75,
    backgroundColor: colors.gray700
  },
  logo: {
    height: 40,
    resizeMode: "contain",
  },
})