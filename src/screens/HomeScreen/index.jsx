import { FlatList, View } from "react-native";
import React from "react";

import { CoinItem } from "../../components/CoinItem";

import cryptocurrencies from "../../../assets/data/cryptocurrencies.json";

export function HomeScreen() {
  return (
    <View>
      <FlatList
        renderItem={({ item }) => <CoinItem marketCoin={item} />}
        data={cryptocurrencies}
      />
    </View>
  );
}
