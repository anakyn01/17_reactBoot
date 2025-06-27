import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./include/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import RestShop from "./pages/RestShop";
import NoPage from "./pages/NoPage";
import Footer from "./include/Footer";
import './scss/style.scss';

function App() {
  return (
   <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="restshop" element={<RestShop />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer/> 
   </>
  );
}

export default App;
