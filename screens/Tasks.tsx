import React from "react";
import { Text } from "react-native";
import { Layout } from "../components/Layout";

interface TaskProps {}

export const Tasks: React.FC<TaskProps> = () => {
  return (
    <Layout title="All tasks">
      <Text>tasks screen</Text>
    </Layout>
  );
};
