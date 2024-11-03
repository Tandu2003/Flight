import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  headerLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 50,
    height: 50,
  },
  title: {
    marginLeft: 14,
    gap: 4,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 16,
    color: "#A0A0A0",
  },
  searchButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    margin: 16,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    gap: 10,
  },
  textSearch: {
    flex: 1,
    fontSize: 18,
  },
  bestCityContainer: {
    padding: 16,
  },
  bestCityTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  bestCityItem: {
    marginRight: 12,
    marginVertical: 12,
    gap: 4,
  },
  bestCityImage: {
    width: 200,
    height: 150,
    borderRadius: 10,
  },
  bestCityName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  bestCityPrice: {
    fontSize: 14,
    color: "#A0A0A0",
  },
  destinationContainer: {
    padding: 16,
  },
  destinationTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  destinationItem: {
    marginVertical: 10,
  },
  destinationImage: {
    width: "100%",
    height: "auto",
    aspectRatio: 1.5,
    // resizeMode: "contain",
    borderRadius: 10,
  },
});
