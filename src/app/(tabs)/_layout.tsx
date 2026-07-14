import { Tabs } from "expo-router";

import { MyTabBar } from "@/components/my-tab-bar";
import { SCREENS } from "@/constants/screens";

export default function TabsLayout() {
  return (
    <Tabs tabBar={(props) => <MyTabBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name={SCREENS.HOME} options={{ title: "Home" }} />
      <Tabs.Screen name={SCREENS.UPDATES} options={{ title: "Updates" }} />
      <Tabs.Screen name={SCREENS.PROFILE} options={{ title: "Profile" }} />
    </Tabs>
  );
}
