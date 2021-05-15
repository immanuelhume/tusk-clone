import React from "react";
import { Animated, Image, Text, TouchableOpacity, View } from "react-native";
import Swipable from "react-native-gesture-handler/Swipeable";
import styled from "styled-components/native";
import { Icons } from "../../assets/index";
import { useAppDispatch } from "../../redux/hooks";
import { completeTask, Task } from "../../redux/tasksSlice";
import { theme } from "../../themes";
import { StatusBox } from "./StatusBox";
import { SwipeActionBoxContainer } from "./SwipeActionBoxContainerProps";

interface TaskCardProps extends Task {}

export const TaskCard: React.FC<TaskCardProps> = ({
  id,
  icon,
  name,
  status,
  time,
}) => {
  const dispatch = useAppDispatch();

  const RenderRightActions:
    | ((
        progressAnimatedValue: Animated.AnimatedInterpolation,
        dragAnimatedValue: Animated.AnimatedInterpolation
      ) => React.ReactNode)
    | undefined = (progress, dragX) => {
    return (
      <TouchableOpacity onPress={() => dispatch(completeTask(id))}>
        <SwipeActionBoxContainer
          backgroundColor={theme.colors.bad}
          iconName="trash"
        />
      </TouchableOpacity>
    );
  };
  const RenderLeftAction:
    | ((
        progressAnimatedValue: Animated.AnimatedInterpolation,
        dragAnimatedValue: Animated.AnimatedInterpolation
      ) => React.ReactNode)
    | undefined = (progress, dragX) => {
    return (
      <TouchableOpacity onPress={() => dispatch(completeTask(id))}>
        <SwipeActionBoxContainer
          backgroundColor={theme.colors.good}
          iconName="checkmark-done-circle-outline"
        />
      </TouchableOpacity>
    );
  };

  return (
    <Swipable
      // overshootRight={false}
      renderRightActions={RenderRightActions}
      // overshootLeft={false}
      renderLeftActions={RenderLeftAction}
    >
      <TaskContainer>
        <Image
          source={Icons[icon]}
          style={{
            height: theme.fontSize.xxl,
            width: theme.fontSize.xxl,
            marginRight: theme.spacing.md,
          }}
        />
        <View style={{ flex: 1 }}>
          <Text>{name}</Text>
          <StatusBox status={status} />
        </View>
        {time && (
          <Text style={{ marginBottom: "auto" }}>
            {typeof time === "number"
              ? new Date(time).toLocaleDateString()
              : time}
          </Text>
        )}
      </TaskContainer>
    </Swipable>
  );
};

const TaskContainer = styled.View`
  background-color: ${theme.colors.gray};
  padding: ${theme.spacing.sm}px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: ${theme.colors.primary};
`;
