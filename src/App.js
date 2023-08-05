
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import DetailsPage from './Components/DetailsPage';


function App() {
  return (
    <div className="App">
       <div className="nav-bar">
              <h2>TravelMedia.in</h2>
              <div className="icons">
                    <i class="ri-home-4-fill"></i>
                    <i class="ri-notification-2-fill"></i>
                    <i class="ri-bookmark-fill"></i>
                    <i class="ri-user-fill"></i>
              </div>
        </div>
        
       <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/item/:id" element={<DetailsPage />} />
       </Routes>
    </div>
  );
}

export default App;
