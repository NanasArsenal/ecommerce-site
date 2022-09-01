import Navbar from "./components/Navbar";
import AppRoutes from "./Routes/AppRoutes";
import "swiper/css";
import "swiper/css/navigation";



function App() {
  return (
    <div className="App">
        <Navbar/>
        <AppRoutes></AppRoutes>
    </div>
  );
}

export default App;
