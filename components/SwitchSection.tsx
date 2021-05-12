import React, { useState } from "react";
import { Switch, Text, View } from "react-native";
import styled from "styled-components/native";
import { theme } from "../themes";

interface SwitchSectionProps {
  label: string;
  defaultValue?: boolean;
}

// children refers to the Switch component
export const SwitchSection: React.FC<SwitchSectionProps> = ({
  label,
  defaultValue = false,
  children,
}) => {
  const [isEnabled, setIsEnabled] = useState(defaultValue);

  return (
    <View>
      <SwitchSectionContainer>
        <Text style={{ marginRight: "auto", fontSize: theme.fontSize.md }}>
          {label}
        </Text>
        <Switch
          trackColor={{
            false: theme.colors.dimmed,
            true: theme.colors.primary,
          }}
          thumbColor={isEnabled ? theme.colors.secondary : theme.colors.gray}
          value={isEnabled}
          onValueChange={() => setIsEnabled(!isEnabled)}
        />
      </SwitchSectionContainer>
      {isEnabled && children}
    </View>
  );
};

const SwitchSectionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: ${theme.spacing.sm}px ${theme.spacing.md}px;
`;
