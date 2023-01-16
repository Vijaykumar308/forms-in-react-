import './App.css';
import Forms from './components/Forms';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Forms/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
