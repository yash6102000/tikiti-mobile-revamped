import { Text, View } from 'react-native';

import { SCREENS } from '@/constants/screens';
import { TAB_STRINGS } from '@/constants/tab-strings';

export default function ProfileScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>{TAB_STRINGS[SCREENS.PROFILE]}</Text>
    </View>
  );
}
