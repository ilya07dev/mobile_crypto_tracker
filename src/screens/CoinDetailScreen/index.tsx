import React from "react";

import { View } from "react-native";

import { Header } from "./components/Header";

import cryptocurrencies from "../../../assets/data/crypto.json";
export function CoinDetailScreen() {
  const { image, symbol, market_data } = cryptocurrencies;
  return (
    <View>
      <Header image={image} symbol={symbol} market_data={market_data} />
    </View>
  );
}
