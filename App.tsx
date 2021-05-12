import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
import { CreateNewTask } from "./screens/CreateNewTask";
import { SelectNewTask } from "./screens/SelectNewTask";
import { Tasks } from "./screens/Tasks";
import { Today } from "./screens/Today";
import { theme } from "./themes";

export type RootTabParamList = {
  Today: undefined;
  Tasks: undefined;
  "Select New Task": undefined;
  "Create New Task": undefined;
};

const RootTab = createBottomTabNavigator<RootTabParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <RootTab.Navigator
            initialRouteName="Today"
            tabBarOptions={{
              activeTintColor: theme.colors.primary,
              inactiveTintColor: theme.colors.dimmed,
            }}
          >
            <RootTab.Screen
              name="Today"
              component={Today}
              options={{
                tabBarIcon: ({ focused, color, size }) =>
                  focused ? (
                    <Ionicons name="home" color={color} size={size} />
                  ) : (
                    <Ionicons name="home-outline" color={color} size={size} />
                  ),
              }}
            />
            <RootTab.Screen
              name="Tasks"
              component={Tasks}
              options={{
                tabBarIcon: ({ focused, color, size }) =>
                  focused ? (
                    <Ionicons name="clipboard" color={color} size={size} />
                  ) : (
                    <Ionicons
                      name="clipboard-outline"
                      color={color}
                      size={size}
                    />
                  ),
              }}
            />
            <RootTab.Screen
              name="Select New Task"
              component={SelectNewTask}
              options={{ tabBarVisible: false, tabBarButton: () => null }}
            />
            <RootTab.Screen
              name="Create New Task"
              component={CreateNewTask}
              options={{ tabBarVisible: false, tabBarButton: () => null }}
            />
          </RootTab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
