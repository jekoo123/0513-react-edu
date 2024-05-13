import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './header/header';
import { Main } from './main/main';
import { Footer } from './footer/footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          exact
          path='/'
          element={<Navigate to={"/main"} />}
        />
        <Route
          exact
          path='/main'
          element={<Main />}
        />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
