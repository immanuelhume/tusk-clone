import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { TouchableOpacity } from "react-native";
import { theme } from "../../themes";

interface IconButtonProps
  extends React.ComponentProps<typeof TouchableOpacity> {
  iconName: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  ...props
}) => {
  return (
    <TouchableOpacity {...props}>
      <Ionicons
        name={iconName as any}
        size={theme.fontSize.xl}
        color={theme.colors.white}
      />
    </TouchableOpacity>
  );
};
