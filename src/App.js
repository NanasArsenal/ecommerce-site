import Navbar from "./components/Navbar";
import AppRoutes from "./Routes/AppRoutes";
import "swiper/css";
import "swiper/css/navigation";

import {CartContextProvider } from "./Context/CartContext";



function App() {
  return (
    <CartContextProvider>
      <div className="App">
          <Navbar/>
          <AppRoutes></AppRoutes>
      </div>
    </CartContextProvider>

  );
}

export default App;
