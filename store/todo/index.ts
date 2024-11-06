import { create } from 'zustand';
import { TodoItem } from '@/types/response/todoList';
import { FakeTodoData } from '@/fakeData';

interface TodoStore {
  TodoList: TodoItem[];
  filterText: string;
  filteredTodoList: TodoItem[];
  AddTodo: (todo: TodoItem) => void;
  RemoveTodo: (id: string) => void;
  UpdatedTodo: (id: string, todo: TodoItem) => void;
  checkedTodo: (id: string, checked: boolean) => void;
  setFlag: (id: string, flag: { type: string; color: string }) => void;
  setFilterText: (text: string) => void;
}

const useTodoStore = create<TodoStore>((set) => ({
  TodoList: FakeTodoData,
  filterText: '',
  filteredTodoList: FakeTodoData,
  AddTodo: (todo: TodoItem) =>
    set((state) => ({ 
      filteredTodoList: [...state.filteredTodoList, todo] 
    })),
  RemoveTodo: (id: string) =>
    set((state) => ({
      filteredTodoList: state.filteredTodoList.filter((todo) => todo.id !== id),
    })),
  UpdatedTodo: (id: string, todo: TodoItem) =>
    set((state) => ({
      filteredTodoList: state.filteredTodoList.map((item) => 
        item.id === id ? todo : item
      ),
    })),
  checkedTodo: (id: string, checked: boolean) =>
    set((state) => ({
      filteredTodoList: state.filteredTodoList.map((item) =>
        item.id === id ? { ...item, checked } : item
      ),
    })),
  setFlag: (id: string, flag: { type: string; color: string }) =>
    set((state) => ({
      filteredTodoList: state.filteredTodoList.map((item) =>
        item.id === id ? { ...item, flag } : item
      ),
    })),
  setFilterText: (text: string) =>
    set((state) => ({
      filterText: text,
      filteredTodoList: state.filteredTodoList.filter((todo) =>
        todo.title.toLowerCase().includes(text.toLowerCase())
      ),
    })),
}));

export default useTodoStore;
