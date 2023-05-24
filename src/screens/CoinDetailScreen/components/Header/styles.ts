import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  tickerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    width: 25,
    height: 25,
  },
  symbol: {
    marginHorizontal: 5,
    fontWeight: "700",
    color: "white",
    fontSize: 17,
  },
  tag: {
    fontWeight: "700",
    color: "white",
    fontSize: 15,
    backgroundColor: "#585858",
    width: 30,
    height: 30,
    verticalAlign: "middle",
    textAlign: "center",
    display: "flex",
    borderRadius: 5,
  },
});
