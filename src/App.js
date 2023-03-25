import Todo from './components/Todo';
import './App.css'
function App() {
  return (
    <>
    <header>
      <a href='/'>
        <h1 className='Title'>Todo List</h1>
      </a>
    </header>
      <Todo />
    </>
  );
}

export default App;