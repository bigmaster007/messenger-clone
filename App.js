import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Feather, Entypo } from "@expo/vector-icons";
import { Colors } from "./src/styles/colors";

const BottomTab = createBottomTabNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTab.Navigator
          tabBarOptions={{
            style: { height: 75, paddingBottom: 15 },
            labelStyle: { fontSize: 14 },
          }}
        >
          <BottomTab.Screen
            name="Discussions"
            component={Home}
            options={{
              tabBarIcon: (props) => (
                <Feather name="message-circle" {...props} />
              ),
            }}
          />
          <BottomTab.Screen
            name="Contacts"
            component={Home}
            options={{
              tabBarIcon: (props) => <Feather name="users" {...props} />,
              tabBarBadge: "99+",
              tabBarBadgeStyle: {
                backgroundColor: Colors.GRAY_LIGHT,
                color: "green",
                fontWeight: "bold",
              },
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
