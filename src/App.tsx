import { Route, Routes } from 'react-router-dom';
import Layout from './components/Common/Layout';
import Home from './pages/Home';
import Character from './pages/Character';

function App() {
  return (
      <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='character/:id' element={<Character/>}/>
            <Route path='*' element={<Home />} />
          </Route>
				</Routes>
  )
}

export default App
