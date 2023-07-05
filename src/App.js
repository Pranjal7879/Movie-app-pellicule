import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Pagination from './Components/Pagination';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favourites from './Components/Favourites';
function App() {
  return (
    <div style={{

      backgroundImage: `url("https://img.freepik.com/free-vector/movie-film-strip-blue-background_1017-33458.jpg?w=900&t=st=1688184165~exp=1688184765~hmac=4a8f6c45b1b79a302ca3455db5b827a68074af93466b0191d53e03b626207cda")`,
      backgroundSize: 'cover'

    }}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<>
              <Banner />
              <Movies />
              {/* <Pagination/> */}
            </>} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App; 
