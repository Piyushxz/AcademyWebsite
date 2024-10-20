import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Class11th from './pages/neet/class11th';
import Class11thJEE from './pages/jee/Class11th';
import Class12th from './pages/neet/class12th';
import Class12Droppers from './pages/neet/Class12Droppers';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='neet'>
            <Route path='online-coaching-class-11' element={<Class11th />} />
            <Route path='online-coaching-class-12' element={<Class12th />} />
            <Route path='online-coaching-class-12-droppers' element={<Class12Droppers />} />
          </Route>
          <Route path='jee'>
            <Route path='online-coaching-class-11' element={<Class11thJEE/>} />
            <Route path='online-coaching-class-12' element={<Class12th />} />
            <Route path='online-coaching-class-12-droppers' element={<Class12Droppers />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
