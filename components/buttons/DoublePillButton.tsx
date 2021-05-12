import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { updateNewTask } from "../../redux/newTaskSlice";
import { theme } from "../../themes";

interface DoublePillButtonProps {
  leftHandText: string;
  leftHandIcon: string;
  rightHandText: string;
  rightHandIcon: string;
}
export const DoublePillButton: React.FC<DoublePillButtonProps> = ({
  leftHandText,
  leftHandIcon,
  rightHandText,
  rightHandIcon,
}) => {
  const regular = useAppSelector((state) => state.newTask.regular);
  const dispatch = useAppDispatch();

  return (
    <PillContainer>
      <InnerPill
        style={{
          backgroundColor: regular ? theme.colors.gray : theme.colors.primary,
          borderTopLeftRadius: theme.spacing.md,
          borderBottomLeftRadius: theme.spacing.md,
        }}
        onPress={() => {
          dispatch(updateNewTask({ field: "regular", value: false }));
        }}
      >
        <Ionicons
          name={leftHandIcon as any}
          size={theme.fontSize.lg}
          style={{ marginRight: theme.spacing.sm }}
        />
        <Text>{leftHandText}</Text>
      </InnerPill>
      <View style={{ width: 1, backgroundColor: theme.colors.secondary }} />
      <InnerPill
        style={{
          backgroundColor: regular ? theme.colors.primary : theme.colors.gray,
          borderTopRightRadius: theme.spacing.md,
          borderBottomRightRadius: theme.spacing.md,
        }}
        onPress={() => {
          dispatch(updateNewTask({ field: "regular", value: true }));
        }}
      >
        <Ionicons
          name={rightHandIcon as any}
          size={theme.fontSize.lg}
          style={{ marginRight: theme.spacing.sm }}
        />
        <Text>{rightHandText}</Text>
      </InnerPill>
    </PillContainer>
  );
};

const InnerPill = styled.Pressable`
  /* padding: ${theme.spacing.md}px; */
  flex-direction: row;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface PillContainerProps {}

const PillContainer: React.FC<PillContainerProps> = ({ children }) => {
  return <View style={styles.PillContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  PillContainer: {
    elevation: 2,
    flexDirection: "row",
    margin: theme.spacing.md,
    height: theme.dim.barHeight,
    borderRadius: theme.spacing.md,
  },
});
