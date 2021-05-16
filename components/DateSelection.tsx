import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  Text,
  TouchableNativeFeedback,
  TouchableNativeFeedbackBase,
} from "react-native";
import styled from "styled-components/native";
import { useAppSelector } from "../redux/hooks";
import { theme } from "../themes";

interface Props
  extends React.ComponentProps<typeof TouchableNativeFeedbackBase> {
  iconName: string;
  text: string;
}

export const DateSelection: React.FC<Props> = ({
  iconName,
  text,
  ...props
}) => {
  const time = useAppSelector((state) => state.newTask.time);
  return (
    <TouchableNativeFeedback {...props}>
      <DateSelectionContainer>
        <Ionicons
          name={iconName as any}
          size={theme.fontSize.xl}
          style={{ marginRight: theme.spacing.md }}
          color={
            time === text.toLocaleLowerCase() ? theme.colors.highlight : "black"
          }
        />
        <Text>{text}</Text>
      </DateSelectionContainer>
    </TouchableNativeFeedback>
  );
};

const DateSelectionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${theme.spacing.sm}px ${theme.spacing.md}px;
`;
