import { View, Text, Image } from "react-native";

import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

import { style } from "./styles";

interface IProps {
  image: {
    small: string;
    thumb: string;
    large: string;
  };
  symbol: string;
  market_data: {
    market_cap_rank: number;
  };
}

export function Header({ image, symbol, market_data }: IProps) {
  return (
    <View style={style.container}>
      <Ionicons name="arrow-back-circle-sharp" size={30} color="white" />
      <View style={style.tickerContainer}>
        <Image source={{ uri: image.small }} style={style.img} />
        <Text style={style.symbol}>{symbol.toUpperCase()}</Text>
        <Text style={style.tag}>#{market_data.market_cap_rank}</Text>
      </View>
      <FontAwesome5 name="user-astronaut" size={24} color="black" />
    </View>
  );
}
