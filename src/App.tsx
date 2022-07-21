import AddTodo from "./components/AddTodo";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <AddTodo />
    </div>
  );
}

export default App;
