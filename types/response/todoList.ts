export interface TodoItem {
  id: string;
  title: string;
  description?: string;
  subTasks?: TodoSubTask[]; // 子任務使用 TodoSubTask
  dueDate: string; // 預定日期
  time: string;
  reminder: {
    time: string;
  };
  repeat: string;
  attachments?: string[];  //
  notes?: string;
  tag?: string[];
  checked: boolean;
}

export interface TodoSubTask {
  id: string;
  title: string;
  description?: string;
  dueDate: string;
  time: string;
  reminder: {
    time: string;
  };
  repeat: string ;
  attachments?: string[];
  notes?: string;
  checked?: boolean;
}