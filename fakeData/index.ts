import { TodoItem } from "@/types/response/todoList";
import dayjs from "dayjs";

export const FakeTodoData: TodoItem[] = [
  {
    id: "1",
    title: "專案任務 A",
    description: "描述 A",
    subTasks: [
      {
        id: "1-1",
        title: "子項目 A1",
        checked: false,
      },
    ],
    dueDate: dayjs().subtract(1, "day").format("YYYY/MM/DD"), // 過去日期
    time: "09:00",
    reminder: {
      time: "08:55",
    },
    repeat: "不重複",
    notes: "這是主項目的備註 A",
    checked: false,
    flag: {
      type: "star",
      color: "#FF0000",
    }
  },
  {
    id: "2",
    title: "專案任務 B",
    description: "描述 B",
    subTasks: [
      {
        id: "2-1",
        title: "子項目 B1",
        checked: true,
      },
    ],
    dueDate: dayjs().format("YYYY/MM/DD"), // 今天的日期
    time: "14:00",
    reminder: {
      time: "13:55",
    },
    repeat: "每週",
    notes: "這是主項目的備註 B",
    checked: true,
  },
  {
    id: "3",
    title: "專案任務 C",
    description: "描述 C",
    subTasks: [
      {
        id: "3-1",
        title: "子項目 C1",
        checked: false,
      },
    ],
    dueDate: dayjs().add(1, "day").format("YYYY/MM/DD"), // 未來日期
    time: "16:00",
    reminder: {
      time: "15:55",
    },
    repeat: "每月",
    notes: "這是主項目的備註 C",
    checked: false,
  },
];
