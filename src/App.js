import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Details from './app/apis/detail';
import Header from './container/Header/header';
import './App.css';
import Home from './container/Home/home';

const App = () => (
  <>
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:rendered" element={<Details />} />
        </Routes>
      </Header>

    </BrowserRouter>
  </>
);

export default App;
