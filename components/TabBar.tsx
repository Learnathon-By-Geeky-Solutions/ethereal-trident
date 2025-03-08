import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Text,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { Link } from "expo-router";
import { useTheme, useLinkBuilder, Route } from "@react-navigation/native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

type Icon = keyof typeof MaterialCommunityIcons.glyphMap;

const icons: { [key: string]: Icon } = {
  index: "home-outline",
  create: "plus",
  members: "account-multiple-outline",
  meals: "food-outline",
  settings: "cog-outline",
};

export default function TabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const screenWidth = Dimensions.get("window").width;
  const cutoutWidth = 80;
  const cutoutHeight = 50;
  const cutoutStartX = (screenWidth - cutoutWidth) / 2;
  const cutoutEndX = cutoutStartX + cutoutWidth;

  const pathData = `M0,0 L${cutoutStartX},0 C${cutoutStartX + 10},${cutoutHeight} ${cutoutEndX - 10},${cutoutHeight} ${cutoutEndX},0 L${screenWidth},0 L${screenWidth},63 L0,63 Z`;

  const focusedName = state.routes[state.index].name;

  const routes = state.routes.filter((route) => {
    return !["+not-found", "_sitemap"].includes(route.name);
  });

  const onLinkPressed = (isFocused: boolean, route: Route<string>) => {
    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });
    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name, route.params);
    }
  };

  return (
    <View style={styles.container}>
      <Svg style={styles.cutoutSvg} width={screenWidth} height="63">
        <Path d={pathData} fill="#fff" stroke="#f0f0f0" />
      </Svg>
      <View style={styles.bottomNav}>
        <Link href="/create" asChild>
          <TouchableOpacity style={styles.plusButton}>
            <MaterialCommunityIcons name="plus" size={24} color="#007bff" />
          </TouchableOpacity>
        </Link>

        <View style={styles.navItemsContainer}>
          <View style={styles.navItemsLeft}>
            <HalfTabLinks
              routes={routes.slice(0, 2)}
              focusedName={focusedName}
              descriptors={descriptors}
              onLinkPressed={onLinkPressed}
            />
          </View>

          <View style={styles.navItemsRight}>
            <HalfTabLinks
              routes={routes.slice(2, 4)}
              focusedName={focusedName}
              descriptors={descriptors}
              onLinkPressed={onLinkPressed}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

function HalfTabLinks({
  routes,
  focusedName,
  descriptors,
  onLinkPressed,
}: {
  readonly routes: Route<string>[];
  readonly focusedName: string;
  readonly descriptors: { [key: string]: any };
  readonly onLinkPressed: (isFocused: boolean, route: Route<string>) => void;
}) {
  return (
    <>
      {routes.map((route: Route<string>) => {
        const { options } = descriptors[route.key];
        let label = route.name;

        if (options.title !== undefined) {
          label = options.title;
        }

        if (options.tabBarLabel !== undefined) {
          label = options.tabBarLabel.toString();
        }

        const isFocused = focusedName === route.name;

        return (
          <TabLink
            key={route.key}
            icon={icons[route.name]}
            route={route}
            onPress={() => onLinkPressed(isFocused, route)}
            label={label}
            isFocused={isFocused}
          />
        );
      })}
    </>
  );
}

function TabLink({
  route,
  onPress,
  icon,
  isFocused,
  label,
}: {
  readonly route: Route<string>;
  readonly onPress: () => void;
  readonly icon: Icon;
  readonly isFocused: boolean;
  readonly label: string;
}) {
  const { buildHref } = useLinkBuilder();
  const { colors } = useTheme();

  return (
    <Link
      href={{
        pathname: buildHref(route.name, route.params) as string,
      }}
      onPress={onPress}
      asChild
    >
      <TouchableOpacity style={styles.navItemContainer}>
        <MaterialCommunityIcons
          name={icon}
          size={26}
          color={isFocused ? colors.primary : "gray"}
        />
        <Text
          style={[
            styles.navItemText,
            { color: isFocused ? colors.primary : "gray" },
          ]}
        >
          {label}
        </Text>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 63,
  },
  cutoutSvg: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  plusButton: {
    position: "absolute",
    bottom: 35,
    left: "50%",
    transform: [{ translateX: -30 }],
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
  navItemsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 60,
  },
  navItemsLeft: {
    flexDirection: "row",
    flex: 1,
  },
  navItemsRight: {
    flexDirection: "row",
    flex: 1,
  },
  navItemText: {
    fontSize: 12,
  },
  navItemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    marginHorizontal: 15,
  },
});
