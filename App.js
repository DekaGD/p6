import './App.scss';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Infos from "./components/Infos/Infos";
import Error from "./components/Error/Error";
import Logements from "./components/Logements/Logements";
import Banner from './components/Banner/Banner';
import Cards from './components/Card/Cards';

function App() {
  return (
    <div className="App">
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infos" element={<Infos />} />
        <Route path="/error/*" element={<Error />} />
        <Route path="/logements/:id" element={<Logements />} />
      </Routes>
    </div>
  );
}

export default App;