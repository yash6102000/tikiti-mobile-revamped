import { Tabs } from 'expo-router/js-tabs';

import { MyTabBar } from '@/components/my-tab-bar';
import { SCREENS } from '@/constants/screens';
import { TAB_STRINGS } from '@/constants/tab-strings';

export default function TabsLayout() {
  return (
    <Tabs tabBar={(props) => <MyTabBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name={SCREENS.HOME} options={{ title: TAB_STRINGS[SCREENS.HOME] }} />
      <Tabs.Screen name={SCREENS.UPDATES} options={{ title: TAB_STRINGS[SCREENS.UPDATES] }} />
      <Tabs.Screen name={SCREENS.PROFILE} options={{ title: TAB_STRINGS[SCREENS.PROFILE] }} />
    </Tabs>
  );
}
