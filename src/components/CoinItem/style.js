import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  coinContainer: {
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "gray",
    padding: 15,
    justifyContent: "space-between",
  },
  bitcoinContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  text: {
    color: "white",
    marginRight: 3,
  },
  img: {
    width: 30,
    height: 30,
    marginRight: 10,
    alignSelf: "center",
  },
  antDesign: {
    alignSelf: "center",
    marginRight: 5,
  },
  rank: {
    fontWeight: "700",
    color: "white",
    marginRight: 5,
    width: 20,
    height: 20,
    verticalAlign: "middle",
    textAlign: "center",
    backgroundColor: "#585858",
    borderRadius: 5,
  },
});
