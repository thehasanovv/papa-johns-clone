import { Routes, Route } from "react-router-dom";

import "./App.css";
import Main from "./pages/Main";
import Offers from "./pages/Offers";
import Papadias from "./pages/Papadias";
import Pizzas from "./pages/Pizzas";
import Snackes from "./pages/Snackes";
import Salads from "./pages/Salads";
import Pastas from "./pages/Pastas";
import Drinks from "./pages/Drinks";
import Desserts from "./pages/Desserts";
import Sauces from "./pages/Sauces";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/papadias" element={<Papadias />} />
        <Route path="/pizza" element={<Pizzas />} />
        <Route path="/snackes" element={<Snackes />} />
        <Route path="/salads" element={<Salads />} />
        <Route path="/pasta" element={<Pastas />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/sauces" element={<Sauces />} />
      </Routes>
    </div>
  );
}

export default App;
