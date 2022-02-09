import { Counter } from "./features/counter/Counter";
import "./App.css";
import TodoList from "features/todo/Todo";
import Weather from "features/weather/Weather";
import Button from "features/Events/Button";
import Input from "features/Events/Input";
import Box from "features/ThemeContext/Box";
import { ThemeContextProvider } from "features/ThemeContext/ThemeContext";
import User from "features/UserContext/User";
import { UserContextProvider } from "features/UserContext/UserContext";
import { List } from "features/Generics/List";
import CustomButton from "features/CustomButton/CustomButton";

function App() {
  return (
    <div className="App">
      {/* <TodoList />
      <Counter/> */}
      <Weather />
      <Button handleClick={(e, id) => console.log("clicked", e, id)} />
      <Input value="" handleChange={(e) => console.log(e)} />
      <hr />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <List items={list} onClick={(item) => console.log(item)} />

      <CustomButton variant="primary" onClick={() => console.log("clicked")}>
        Custom Button
      </CustomButton>
    </div>
  );
}

export default App;

const list = [
  {
    id: 1,
    name: "lok",
  },
  {
    id: 2,
    name: "krish",
  },
];
