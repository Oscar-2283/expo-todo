import { TodoItem } from "@/types/response/todoList";

export const FakeTodoData: TodoItem[] = [
  {
    id: "1",
    title: "專案任務 A",
    description: "描述 A",
    subTasks: [
      {
        id: "1-1",
        title: "子項目 A1",
        dueDate: "2024/10/15",
        time: "10:00",
        reminder: {
          time: "09:55",
        },
        repeat: "不重複",
        notes: "備註 A1",
        checked: false,
      },
    ],
    dueDate: "2024/10/14",
    time: "09:00",
    reminder: {
      time: "08:55",

    },
    repeat: "不重複",
    notes: "這是主項目的備註 A",
    checked: false,
  },
];
