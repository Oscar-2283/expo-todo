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
  setStar: (id: string, star: boolean) => void;
  setFilterText: (text: string) => void;
  filterCategory: string | null;
  setFilterCategory: (category: string | null) => void;
}

const applyFilters = (
  todos: TodoItem[],
  filterText: string,
  filterCategory: string | null
) => {
  let filtered = [...todos];

  // 套用分類過濾
  if (filterCategory) {
    filtered = filtered.filter((todo) => todo.category === filterCategory);
  }

  // 套用文字搜尋
  if (filterText) {
    filtered = filtered.filter((todo) =>
      todo.title.toLowerCase().includes(filterText.toLowerCase())
    );
  }

  return filtered;
};

const useTodoStore = create<TodoStore>((set) => ({
  TodoList: FakeTodoData,
  filterText: '',
  filteredTodoList: FakeTodoData,
  filterCategory: null,
  AddTodo: (todo: TodoItem) =>
    set((state) => {
      const newTodoList = [...state.TodoList, todo];
      return {
        TodoList: newTodoList,
        filteredTodoList: applyFilters(newTodoList, state.filterText, state.filterCategory)
      };
    }),
  RemoveTodo: (id: string) =>
    set((state) => {
      const newTodoList = state.TodoList.filter((todo) => todo.id !== id);
      return {
        TodoList: newTodoList,
        filteredTodoList: applyFilters(newTodoList, state.filterText, state.filterCategory)
      };
    }),
  UpdatedTodo: (id: string, todo: TodoItem) =>
    set((state) => {
      const newTodoList = state.TodoList.map((item) => 
        item.id === id ? todo : item
      );
      return {
        TodoList: newTodoList,
        filteredTodoList: applyFilters(newTodoList, state.filterText, state.filterCategory)
      };
    }),
  checkedTodo: (id: string, checked: boolean) =>
    set((state) => {
      const newTodoList = state.TodoList.map((item) =>
        item.id === id ? { ...item, checked } : item
      );
      return {
        TodoList: newTodoList,
        filteredTodoList: applyFilters(newTodoList, state.filterText, state.filterCategory)
      };
    }),
  setFlag: (id: string, flag: { type: string; color: string }) =>
    set((state) => {
      const newTodoList = state.TodoList.map((item) =>
        item.id === id ? { ...item, flag } : item
      );
      return {
        TodoList: newTodoList,
        filteredTodoList: applyFilters(newTodoList, state.filterText, state.filterCategory)
      };
    }),
  setStar: (id: string, star: boolean) => set((state) => {
    const newTodoList = state.TodoList.map((item) =>
      item.id === id ? { ...item, star } : item
    );
    return {
      TodoList: newTodoList,
      filteredTodoList: applyFilters(newTodoList, state.filterText, state.filterCategory)
    };
  }),
  setFilterCategory: (category: string | null) =>
    set((state) => ({
      filterCategory: category,
      filteredTodoList: applyFilters(
        state.TodoList,
        state.filterText,
        category
      ),
    })),

  setFilterText: (text: string) =>
    set((state) => ({
      filterText: text,
      filteredTodoList: applyFilters(
        state.TodoList,
        text,
        state.filterCategory
      ),
    })),

}));

export default useTodoStore;
