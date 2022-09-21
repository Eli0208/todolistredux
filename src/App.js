import './App.css';
import Todos from './Todo';
import TodoInput from './TodoInput';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>To do list</h1>
      </header>
      <body className='body' >
        <Todos/>
      </body>
      <footer>
        <TodoInput/>
      </footer>
      
    </div>
  );
}

export default App;
