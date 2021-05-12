import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, ListRenderItem } from "react-native";
import { RootTabParamList } from "../App";
import { IconButton } from "../components/buttons/IconButton";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { TaskCard } from "../components/task-card/TaskCard";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Task } from "../types/Task";

type HomeScreenNavigationProps = BottomTabNavigationProp<
  RootTabParamList,
  "Today"
>;

interface TodayProps {}

export const Today: React.FC<TodayProps> = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>();
  const tasks = useAppSelector((state) => state.tasks.values());
  const dispatch = useAppDispatch();

  const renderTask: ListRenderItem<Task> = ({ item }) => {
    return (
      <TaskCard
        id={item.id}
        icon={item.icon}
        name={item.name}
        status={item.status}
        time={item.time}
        regular={item.regular}
      />
    );
  };

  return (
    <Layout>
      <Header title="Today">
        <IconButton
          iconName="add-circle-outline"
          onPress={() => {
            navigation.navigate("Select New Task");
          }}
        />
      </Header>
      <FlatList
        data={Array.from(tasks)}
        renderItem={renderTask}
        keyExtractor={({ id }) => id.toString()}
      />
    </Layout>
  );
};
