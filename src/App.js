import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import LoginForm from './components/LoginForm';
import TiltingCard from './components/TiltingCard';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="login">
          <LoginForm />
        </div>
        <div className="tilting-card">
          <TiltingCard />
        </div>
      </div>
      <TodoWrapper />
    </div>
  );
}

export default App;
