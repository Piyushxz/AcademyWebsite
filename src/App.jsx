import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Class11th from './pages/neet/class11th';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='neet'>
            <Route path='online-coaching-class-11' element={<Class11th />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
