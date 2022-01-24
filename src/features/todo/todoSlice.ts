import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "./type";
import { v1 as uuid } from "uuid";
import { RootState } from "../../app/store";

const todosInitialState: Todo[] = [
  {
    id: uuid(),
    desc: "Learn React",
    isComplete: true,
  },
  {
    id: uuid(),
    desc: "Learn Redux",
    isComplete: true,
  },
  {
    id: uuid(),
    desc: "Learn Redux-ToolKit",
    isComplete: false,
  },
];

export const todoSlice = createSlice({
  name: "todos",
  initialState: todosInitialState,
  reducers: {
    create: {
      reducer: (
        state,
        {
          payload,
        }: PayloadAction<{ id: string; desc: string; isComplete: boolean }>
      ) => {
        state.push(payload);
      },
      prepare: ({ desc }: { desc: string }) => ({
        payload: {
          id: uuid(),
          desc,
          isComplete: false,
        },
      }),
    },
    edit: (state, { payload }: PayloadAction<{ id: string; desc: string }>) => {
      const todoItem = state.find((todo) => todo.id === payload.id);
      if (todoItem) {
        todoItem.desc = payload.desc;
      }
    },
    toggle: (
      state,
      { payload }: PayloadAction<{ id: string; isComplete: boolean }>
    ) => {
      const todoItem = state.find((todo) => todo.id === payload.id);
      if (todoItem) {
        todoItem.isComplete = payload.isComplete;
      }
    },
    remove: (state, { payload }: PayloadAction<{ id: string }>) => {
      const todoIndex = state.findIndex((todo) => todo.id === payload.id);
      if (todoIndex !== -1) {
        state.splice(todoIndex, 1);
      }
    },
  },
});

export const selectedTodoSlice = createSlice({
  name: "selectedTodo",
  initialState: null as string | null,
  reducers: {
    select: (state, { payload }: PayloadAction<{ id: string }>) => payload.id,
  },
});

export const actionCounterSlice = createSlice({
  name: "actionCounter",
  initialState: 0,
  reducers: {},
  extraReducers: {
    [todoSlice.actions.create.type]: (state) => state + 1,
    [todoSlice.actions.edit.type]: (state) => state + 1,
    [todoSlice.actions.toggle.type]: (state) => state + 1,
    [todoSlice.actions.remove.type]: (state) => state + 1,
  },
});

// export actions
export const {
  create: createTodoActionCreator,
  edit: editTodoActionCreator,
  toggle: toggleTodoActionCreator,
  remove: deleteTodoActionCreator,
} = todoSlice.actions;

export const { select: selectTodoActionCreator } = selectedTodoSlice.actions;

// TodoList
export const todoList = (state: RootState) => state.todoList;

// Selected Todo item
export const selectedItem = (state: RootState) => state.selectedTodo;

// Selected Todo item
export const todoCount = (state: RootState) => state.count;
