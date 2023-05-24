import React from "react";

import { Text, View, Image } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { styles } from "./style";

export function CoinItem({ marketCoin }) {
  const percentageColor =
    marketCoin.price_change_percentage_24h < 0 ? "#ea3943" : "green";

  const name =
    marketCoin.price_change_percentage_24h < 0 ? "caretdown" : "caretup";

  const normalizeMarketCap = (market_cap) => {
    if (market_cap > 1_000_000_000_000) {
      return Math.floor(market_cap / 1_000_000_000_000);
    } else if (market_cap > 1_000_000_000) {
      return Math.floor(market_cap / 1_000_000_000);
    } else if (market_cap > 1_000_000) {
      return Math.floor(market_cap / 1_000_000);
    } else if (market_cap > 1_000) {
      return Math.floor(market_cap / 1_000);
    }
    return market_cap;
  };

  return (
    <View style={styles.coinContainer}>
      <Image
        source={{
          uri: marketCoin?.image,
        }}
        style={styles.img}
      />
      <View>
        <Text style={styles.title}>{marketCoin?.name}</Text>
        <View style={styles.bitcoinContainer}>
          <Text style={styles.rank}>{marketCoin?.market_cap_rank}</Text>
          <Text style={styles.text}>{marketCoin?.symbol.toUpperCase()}</Text>
          <AntDesign
            name={name}
            size={12}
            color={percentageColor}
            style={styles.antDesign}
          />
          <Text style={{ color: percentageColor }}>
            {marketCoin?.price_change_percentage_24h.toFixed(1)}%
          </Text>
        </View>
      </View>
      <View style={{ marginLeft: "auto", alignItems: "flex-end" }}>
        <Text style={styles.title}>{marketCoin?.current_price}</Text>
        <Text style={styles.text}>
          MCap $ {normalizeMarketCap(marketCoin?.market_cap)}{" "}
          {marketCoin?.name[0]}
        </Text>
      </View>
    </View>
  );
}
