import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { theme } from "../../themes";

interface Props extends React.ComponentProps<typeof TouchableOpacity> {
  text: string;
  bgColor?: string;
  fgColor?: string;
}

export const GenericButton: React.FC<Props> = ({
  text,
  bgColor = theme.colors.secondary,
  fgColor = theme.colors.white,
  ...props
}) => {
  return (
    <TouchableOpacity {...props}>
      <View
        style={{
          backgroundColor: bgColor,
          borderRadius: theme.spacing.md,
          height: theme.dim.buttonHeight,
          width: theme.dim.buttonWidth,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: fgColor, fontSize: theme.fontSize.md }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
