import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";



function App() {
  return (
    <>
      <BrowserRouter>
      <div className="page">
        <Header />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ürünler" element={<ProductsPage />} />
          <Route path="/ürün/:id" element={<ProductDetail />} 
  />
  <Route path="/kategori" element={<CategoryPage />}>
    <Route path="hikaye" element={<h1>Hikaye</h1>}/>
    <Route path="roman" element={<h1>Roman</h1>}/>

    
  

  </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
