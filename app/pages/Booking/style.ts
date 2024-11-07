import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  closeButton: {
    position: "absolute",
    left: 0,
    padding: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  tabContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  tabItem: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    color: "#888",
    textAlign: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },
  tabSelected: {
    color: "#000",
    borderBottomWidth: 3,
    borderBottomColor: "#000",
  },
  tabContent: {
    flex: 1,
    padding: 16,
  },
  footerContainer: {
    paddingTop: 16,
    paddingBottom: 40,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  footerButton: {
    padding: 16,
    backgroundColor: "#00BDD6",
    borderRadius: 8,
  },
  footerButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
