import React, { useState, useCallback, useMemo, useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Text,
  View,
  XStack,
  ScrollView,
  TamaguiElement,
  useTheme,
} from 'tamagui';
import { Calendar } from 'react-native-calendars';
import { ArrowLeft, ArrowRight } from '@tamagui/lucide-icons';

import dayjs from 'dayjs';

const INITIAL_DATE = dayjs().format('YYYY-MM-DD');

type DayPressEvent = {
  dateString: string;
  day: number;
  month: number;
  year: number;
};

type CustomHeaderProps = {
  addMonth: (months: number) => void;
  month: string;
};

type CalendarScreenProps = {
  onDaySelect?: (date: string) => void;
};

const CalendarScreen: React.FC<CalendarScreenProps> = ({ onDaySelect }) => {
  const theme = useTheme();
  const [selected, setSelected] = useState<string>(INITIAL_DATE);
  const [currentMonth, setCurrentMonth] = useState<string>(INITIAL_DATE);

  const getDate = (count: number) => {
    return dayjs(INITIAL_DATE).add(count, 'day').format('YYYY-MM-DD');
  };

  const onDayPress = useCallback(
    (day: DayPressEvent) => {
      setSelected(day.dateString);
      if (onDaySelect) {
        onDaySelect(day.dateString); // 當用戶選擇日期時，傳遞選中的日期
      }
    },
    [onDaySelect]
  );

  const marked = useMemo(() => {
    return {
      [getDate(-1)]: {
        dotColor: 'red',
        marked: true,
      },
      [selected]: {
        selected: true,
        disableTouchEvent: true,
      },
    };
  }, [selected]);

  const customHeaderProps = useRef<CustomHeaderProps | null>(null);

  const CustomHeader = React.forwardRef<TamaguiElement, CustomHeaderProps>(
    (props, ref) => {
      customHeaderProps.current = props;

      return (
        <View ref={ref} {...props}>
          <XStack
            justifyContent="space-between"
            alignItems="center"
            padding="$2"
            backgroundColor="$background"
          >
            <TouchableOpacity onPress={movePrevious}>
              <ArrowLeft />
            </TouchableOpacity>
            <Text>{dayjs(currentMonth).format('YYYY-MM')}</Text>
            <TouchableOpacity onPress={moveNext}>
              <ArrowRight />
            </TouchableOpacity>
          </XStack>
        </View>
      );
    }
  );

  const setCustomHeaderNewMonth = (next = false) => {
    const add = next ? 1 : -1;
    const newMonth = dayjs(currentMonth).add(add, 'month').format('YYYY-MM-DD');
    customHeaderProps.current?.addMonth(add);
    setCurrentMonth(newMonth);
  };

  const moveNext = () => {
    setCustomHeaderNewMonth(true);
  };

  const movePrevious = () => {
    setCustomHeaderNewMonth(false);
  };

  return (
    <View flex={1} width="100%">
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <Calendar
          style={{ borderRadius: 10 }}
          current={INITIAL_DATE}
          onDayPress={onDayPress}
          markedDates={marked}
          theme={{
            calendarBackground: theme.background?.val ?? '#FFFFFF',
            textSectionTitleColor: theme.color6?.val ?? '#000000',
            dayTextColor: theme.color7?.val ?? '#000000',
            todayTextColor: theme.color8?.val ?? '#FF0000',
            selectedDayBackgroundColor: theme.color9?.val ?? '#FFA500',
            selectedDayTextColor: theme.color4?.val ?? '#FFFFFF',
          }}
          customHeader={CustomHeader}
        />
      </ScrollView>
    </View>
  );
};

export default CalendarScreen;
