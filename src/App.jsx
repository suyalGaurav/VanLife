import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/Home/Home'
import About from './component/About/About'
import Vans from './component/Vans/Vans'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import VanDetail from './component/VanDetail/VanDetail'
import Error from './component/Error/Error'

import "./server"

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path ="/vans/:id" element={<VanDetail />} />

          {/* <Route path="*" to="/error"/> */}

          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App



// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await fetch('/api/vans');
//       if (!response.ok) {
//         throw new Error('Failed to fetch vans');
//       }
//       const data = await response.json();
//       setVans(data);
//     } catch (error) {
//       console.error('Error fetching vans:', error);
//     }
//   };

//   fetchData();
// }, []);
