import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Class11th from './pages/neet/class11th';
import Class11thJEE from './pages/jee/Class11th';
import Class12th from './pages/neet/class12th';
import Class12Droppers from './pages/neet/Class12Droppers';
import Class12thJEE from './pages/jee/Class12th';
import Class12thDroppersJEE from './pages/jee/class12thDroppers';
import Class6 from './pages/school/Class6';
import Class7 from './pages/school/Class7';
import Class8 from './pages/school/Class8';
import Class9 from './pages/school/Class9';
import Class10 from './pages/school/Class10';
import Neet from './pages/neet/Neet';
import Jee from './pages/jee/Jee';
import SchoolHomePage from './pages/school/SchoolHomePage';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/neet' element={<Neet />}/>
          <Route path='/neet/online-coaching-class-11' element={<Class11th />} />
          <Route path='/neet/online-coaching-class-12' element={<Class12th />} />
          <Route path='/neet/online-coaching-class-12-droppers' element={<Class12Droppers />} />
         
          <Route path='/jee' element={<Jee/>}/>
            <Route path='/jee/online-coaching-class-11' element={<Class11thJEE />} />
            <Route path='/jee/online-coaching-class-12' element={<Class12thJEE />} />
            <Route path='/jee/online-coaching-class-12-droppers' element={<Class12thDroppersJEE />} />
          <Route path='/classes-6-10'element={<SchoolHomePage/>} />
          <Route path='class-6' element={<Class6 />} />
          <Route path='class-7' element={<Class7 />} />
          <Route path='class-8' element={<Class8 />} />
          <Route path='class-9' element={<Class9 />} />
          <Route path='class-10' element={<Class10 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
