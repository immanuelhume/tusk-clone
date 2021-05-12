import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../themes";

const width = Dimensions.get("window").width;

interface SwipeActionBoxContainerProps extends SwipeActionBoxProps {
  iconName: string;
}
export const SwipeActionBoxContainer: React.FC<SwipeActionBoxContainerProps> = ({
  backgroundColor,
  iconName,
}) => {
  return (
    <SwipeActionBox backgroundColor={backgroundColor}>
      <Ionicons
        name={iconName as any}
        size={theme.fontSize.xl}
        color={theme.colors.white}
      />
    </SwipeActionBox>
  );
};
interface SwipeActionBoxProps {
  backgroundColor: string;
}
const SwipeActionBox = styled.View<SwipeActionBoxProps>`
  background-color: ${(props) => props.backgroundColor};
  width: ${(33 * width) / 100}px;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
