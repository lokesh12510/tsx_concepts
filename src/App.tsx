import { Counter } from "./features/counter/Counter";
import "./App.css";
import TodoList from "features/todo/Todo";
import Weather from "features/weather/Weather";

function App() {
  return (
    <div className="App">
      {/* <TodoList />
      <Counter/> */}
      <Weather />
    </div>
  );
}

export default App;
