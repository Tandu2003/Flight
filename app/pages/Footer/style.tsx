import { StyleSheet } from "react-native";

export default StyleSheet.create({
  footerContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
  },
  footerItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    fontSize: 14,
    marginTop: 4,
  },
});
