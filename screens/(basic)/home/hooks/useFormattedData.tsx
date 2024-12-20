import { useEffect, useState } from "react";
import { TodoItem } from "@/types/response/todoList";
import dayjs from "dayjs";

interface FormattedData {
  past: TodoItem[];
  present: TodoItem[];
  future: TodoItem[];
  star: TodoItem[];
}

const useFormattedData = (data: TodoItem[]): FormattedData => {
  const today = dayjs().format('YYYY-MM-DD');

  const [sortedTodos, setSortedTodos] = useState<FormattedData>({
    past: [],
    present: [],
    future: [],
    star: []
  });

  useEffect(() => {
    const newSortedTodos: FormattedData = {
      past: [],
      present: [],
      future: [],
      star: []
    };

    data.forEach((item) => {
      const itemDate = dayjs(item.dueDate);
      const todayDate = dayjs(today);

      if (item.star) {
        newSortedTodos.star.push(item);
      }
  
      if (itemDate.isBefore(todayDate, 'day')) {
        newSortedTodos.past.push(item);
      } else if (itemDate.isSame(todayDate, 'day')) {
        newSortedTodos.present.push(item);
      } else {
        newSortedTodos.future.push(item);
      }
    });

    setSortedTodos(newSortedTodos);
  }, [data]);

  return sortedTodos;
};

export default useFormattedData;
