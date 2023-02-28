import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import TodoItem from "./MyComponents/TodoItem";

function App() {
  let todos = [
    {
      sno:1,
      title:"Go to the market",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
      sno:2,
      title:"Go to the mall",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
      sno:3,
      title:"Go to the bazar",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    }
  ]
  return (
    <>
    <Header searchBar={true}/>
    <Todos todos={todos}/>
    <TodoItem/>
    <Footer/>
    </>
  );
}

export default App;
