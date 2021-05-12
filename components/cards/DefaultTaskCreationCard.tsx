import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, TouchableNativeFeedback } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../themes";

type DefaultTaskCreationCardProps = {
  iconName: string;
  desc: string;
} & React.ComponentProps<typeof TouchableNativeFeedback>;

export const DefaultTaskCreationCard: React.FC<DefaultTaskCreationCardProps> = ({
  iconName,
  desc,
  ...rest
}) => {
  return (
    <TouchableNativeFeedback {...rest}>
      <DefaultTaskCreationCardContainer style={{ elevation: 4 }}>
        <Ionicons
          name={iconName as any}
          size={theme.fontSize.lg}
          color={theme.colors.highlight}
          style={{ marginRight: theme.spacing.md }}
        />
        <Text style={{ fontSize: theme.fontSize.lg }}>{desc}</Text>
      </DefaultTaskCreationCardContainer>
    </TouchableNativeFeedback>
  );
};

const DefaultTaskCreationCardContainer = styled.View`
  border-radius: 12px;
  margin: ${theme.spacing.md}px ${theme.spacing.md}px 0;
  padding: ${theme.spacing.md}px;
  flex-direction: row;
  align-items: center;
  background-color: ${theme.colors.gray};
  box-shadow: 4px 4px ${theme.colors.secondary};
`;
