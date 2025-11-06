import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./Reducers/Counter";
import TodoReducer from "./Reducers/Todo";

const store = configureStore({
  reducer: {
    count: CounterReducer,
    Todo: TodoReducer,
  },
});

export default store;
