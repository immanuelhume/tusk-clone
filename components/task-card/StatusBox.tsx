import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, View } from "react-native";
import { TaskStatus } from "../../redux/tasksSlice";
import { theme } from "../../themes";

interface TaskStatusProps extends TaskStatus {}

export const StatusBox: React.FC<TaskStatusProps> = ({ status }) => {
  let iconName;

  switch (status) {
    case "pending":
      iconName = "time-outline" as const;
      break;
    case "complete":
      iconName = "checkmark-done" as const;
      break;
    default:
      iconName = "time-outline" as const;
      break;
  }

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "flex-end",
      }}
    >
      <Ionicons
        name={iconName}
        color={theme.colors.dimmed}
        size={theme.fontSize.md}
      />
      <Text
        style={{ marginLeft: theme.spacing.sm, color: theme.colors.dimmed }}
      >
        {status}
      </Text>
    </View>
  );
};
