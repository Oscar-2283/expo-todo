import { create } from 'zustand';
import { TodoItem } from '@/types/response/todoList';
import { FakeTodoData } from '@/fakeData';
interface TodoStore {
  TodoList: TodoItem[];
  AddTodo: (todo: TodoItem) => void;
  RemoveTodo: (id: string) => void;
  UpdatedTodo: (id: string, todo: TodoItem) => void;
  checkedTodo: (id: string, checked: boolean) => void;
  setFlag: (id: string, flag: { type: string; color: string }) => void;
}

const useTodoStore = create<TodoStore>((set) => ({
  TodoList: FakeTodoData,
  AddTodo: (todo: TodoItem) =>
    set((state) => ({ TodoList: [...state.TodoList, todo] })),
  RemoveTodo: (id: string) =>
    set((state) => ({
      TodoList: state.TodoList.filter((todo) => todo.id !== id),
    })),
  UpdatedTodo: (id: string, todo: TodoItem) =>
    set((state) => ({
      TodoList: state.TodoList.map((item) => (item.id === id ? todo : item)),
    })),
  checkedTodo: (id: string, checked: boolean) =>
    set((state) => ({
      TodoList: state.TodoList.map((item) =>
        item.id === id ? { ...item, checked } : item
      ),
    })),
  setFlag: (id: string, flag: { type: string; color: string }) => {
    set((state) => ({
      TodoList: state.TodoList.map((item) =>
        item.id === id ? { ...item, flag } : item
      ),
    }));
  },
}));

export default useTodoStore;
