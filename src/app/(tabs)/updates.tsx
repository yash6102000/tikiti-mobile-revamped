import { Text, View } from "react-native";

import { SCREENS } from "@/constants/screens";
import { TAB_STRINGS } from "@/constants/tab-strings";

export default function UpdatesScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>{TAB_STRINGS[SCREENS.UPDATES]}</Text>
    </View>
  );
}
