import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { RootTabParamList } from "../App";
import { DefaultTaskCreationCard } from "../components/cards/DefaultTaskCreationCard";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { useAppDispatch } from "../redux/hooks";
import { updateNewTask } from "../redux/newTaskSlice";

interface SelectNewTaskProps {}

type SelectNewTaskScreenNavigationProps = BottomTabNavigationProp<
  RootTabParamList,
  "Select New Task"
>;

export const SelectNewTask: React.FC<SelectNewTaskProps> = ({}) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<SelectNewTaskScreenNavigationProps>();
  return (
    <Layout>
      <Header title="Add Task" backButton={navigation.goBack} />
      <DefaultTaskCreationCard
        iconName="calendar"
        desc="One-time"
        onPress={() => {
          navigation.navigate("Create New Task");
          dispatch(updateNewTask({ field: "regular", value: false }));
        }}
      />
      <DefaultTaskCreationCard
        iconName="aperture-outline"
        desc="Regular"
        onPress={() =>
          dispatch(updateNewTask({ field: "regular", value: false }))
        }
      />
    </Layout>
  );
};
