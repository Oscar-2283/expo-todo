import { TodoItem } from "@/types/response/todoList";
import dayjs from "dayjs";
import { CategoryEnum } from "@/constants";

export const FakeTodoData: TodoItem[] = [
  {
    id: "1",
    title: "專案任務 A",
    category: CategoryEnum.WORK,
    description: "描述 A",
    subTasks: [

    ],
    dueDate: dayjs().subtract(1, "day").format("YYYY-MM-DD"), // 過去日期
    time: "09:00",  // 使用24小時制
    reminder: {
      time: "08:55",  // 使用24小時制
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
    category: CategoryEnum.PERSONAL,
    description: "描述 B",
    subTasks: [
      {
        id: "2-1",
        title: "子項目 B1",
        checked: true,
      },
    ],
    dueDate: dayjs().format("YYYY-MM-DD"), // 今天的日期
    time: "14:00",
    reminder: {
      time: "13:55",
    },
    repeat: "每週",
    notes: "這是主項目的備註 B",
    checked: true,
    flag: {
      type: "star",
      color: "#FF0000",
    }
  },
  {
    id: "3",
    title: "專案任務 C",
    category: CategoryEnum.WISHLIST,
    description: "描述 C",
    subTasks: [
      {
        id: "3-1",
        title: "子項目 C1",
        checked: false,
      },
    ],
    dueDate: dayjs().add(1, "day").format("YYYY-MM-DD"), // 未來日期
    time: "16:00",
    reminder: {
      time: "15:55",
    },
    repeat: "每月",
    notes: "這是主項目的備註 C",
    checked: false,
    star: true,
  },
  {
    id: "4",
    title: "專案任務 D",
    category: CategoryEnum.WORK,
    description: "描述 D",
    subTasks: [
      {
        id: "4-1",
        title: "子項目 D1",
        checked: false,
      },
      {
        id: "4-2",
        title: "子項目 D2",
        checked: true,
      }
    ],
    dueDate: dayjs().add(3, "day").format("YYYY-MM-DD"),
    time: "10:30",
    reminder: {
      time: "10:25",
    },
    repeat: "每天",
    notes: "這是主項目的備註 D",
    checked: false,
    flag: {
      type: "book",
      color: "#4A90E2",
    },
    star: true,
  },
  {
    id: "5",
    title: "專案任務 E",
    category: CategoryEnum.PERSONAL,
    description: "描述 E",
    subTasks: [
      {
        id: "5-1",
        title: "子項目 E1",
        checked: false,
      }
    ],
    dueDate: dayjs().add(5, "day").format("YYYY-MM-DD"),
    time: "15:45",
    reminder: {
      time: "15:40",
    },
    repeat: "不重複",
    notes: "這是主項目的備註 E",
    checked: false,
  }
];
