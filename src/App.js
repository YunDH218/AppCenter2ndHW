import { Route, Routes } from "react-router-dom";
import TodoList from "./pages/TodoList";
import Weather from "./pages/Weather";
import "./utils/DateFormat";


function App() {
  return (
    <Routes>
      <Route path="/todolist" element={<TodoList />} />
      <Route path="/weather" element={<Weather />} />
    </Routes>
  );
}

export default App;
