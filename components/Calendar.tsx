import React, { useState } from "react";
import { Dimensions, View } from "react-native";
import { CalendarList, DateObject } from "react-native-calendars";
import { useAppDispatch } from "../redux/hooks";
import { updateNewTask } from "../redux/newTaskSlice";
import { theme } from "../themes";
import { GenericButton } from "./buttons/GenericButton";

const { width: screenWidth } = Dimensions.get("window");

interface CalendarProps {
  closeCalendar: () => void;
}

export const Calendar: React.FC<CalendarProps> = ({ closeCalendar }) => {
  const dispatch = useAppDispatch();
  const [selectedDate, setSelectedDate] = useState<DateObject>();

  return (
    <View
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View
        style={{
          borderRadius: theme.spacing.md,
          backgroundColor: theme.colors.white,
          paddingVertical: theme.spacing.md,
          marginVertical: "auto",
        }}
      >
        <CalendarList
          onDayPress={(day) => {
            setSelectedDate(day);
          }}
          markedDates={{
            [selectedDate?.dateString || ""]: {
              selected: true,
              selectedColor: theme.colors.primary,
            },
          }}
          horizontal={true}
          pagingEnabled={true}
          calendarWidth={screenWidth * 0.8}
          style={{
            width: screenWidth * 0.8,
            backgroundColor: undefined,
          }}
          theme={{
            todayTextColor: theme.colors.dimmed,
            "stylesheet.calendar.main": {
              container: {
                backgroundColor: undefined,
              },
              monthView: {
                backgroundColor: undefined,
              },
            },
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: theme.spacing.md,
          }}
        >
          <GenericButton text="Cancel" onPress={closeCalendar} />
          <GenericButton
            text="OK"
            bgColor={theme.colors.highlight}
            onPress={() => {
              closeCalendar();
              dispatch(
                updateNewTask({
                  field: "date",
                  value: selectedDate?.timestamp || new Date().valueOf(),
                })
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};
