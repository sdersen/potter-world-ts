import './App.scss';
import Home from './pages/home';
import Book from './pages/book';

//import Book from "./pages/book";
//import Character from "./pages/character";
//import Spells from "./pages/spells";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Character from './pages/character';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books/:book' element={<Book />} />
          <Route path='/characters/:character' element={<Character />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
