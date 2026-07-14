import * as Haptics from "expo-haptics";
import { Bell, House, User, type LucideIcon } from "lucide-react-native";
import { Pressable } from "react-native";
import Animated, { LinearTransition } from "react-native-reanimated";

import { COLORS } from "@/constants/colors";
import { SCREENS } from "@/constants/screens";
import { hp, wp } from "@/utils/responsive";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const ICONS: Record<string, LucideIcon> = {
  [SCREENS.HOME]: House,
  [SCREENS.UPDATES]: Bell,
  [SCREENS.PROFILE]: User,
};

export function MyTabBar({ state, descriptors, navigation }: any) {
  return (
    <Animated.View
      layout={LinearTransition}
      style={{
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        bottom: hp(20),
        alignSelf: "center",
        backgroundColor: COLORS.tabbarBg,
        height: 62,
        borderRadius: 40,
        paddingHorizontal: wp(1),
        paddingVertical: wp(1),
        borderWidth: 1.3,
        borderColor: COLORS.border,
      }}
    >
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;
        const { options } = descriptors[route.key];
        const label = options.title ?? route.name;
        const Icon = ICONS[route.name];

        const onPress = () => {
          if (process.env.EXPO_OS === "ios") {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          }

          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <AnimatedPressable
            layout={LinearTransition}
            key={route.key}
            onPress={onPress}
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              gap: wp(6),
              backgroundColor: isFocused ? COLORS.black : COLORS.white,
              paddingVertical: wp(5),
              paddingHorizontal: wp(12),
              borderRadius: 100,
              height: '100%',
            }}
          >
            {Icon ? <Icon size={23} color={isFocused ? COLORS.white : COLORS.black} /> : null}
            {isFocused && (
              <Animated.Text
                layout={LinearTransition}
                style={{
                  color: COLORS.white,
                  fontSize: hp(13),
                  fontWeight: "600",
                }}
              >
                {label}
              </Animated.Text>
            )}
          </AnimatedPressable>
        );
      })}
    </Animated.View>
  );
}
