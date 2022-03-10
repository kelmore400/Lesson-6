import './App.css';
import { SupportForm } from './components/SupportForm';
import { Task1 } from './homework/Task1';
import { Task2 } from './homework/Task2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>Work at Class</h2>
          <SupportForm />
        </div>
        <div>
          <h2>Task 1</h2>
          <Task1 />
        </div>
        <div>
          <h2>Task 2</h2>
          <Task2 />
        </div>
      </header>
    </div>
  );
}

export default App;
