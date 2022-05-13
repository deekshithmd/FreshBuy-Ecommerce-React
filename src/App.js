import "./App.css";
import {
  HomePage,
  ProductList,
  Cart,
  Wishlist,
  Login,
  Signup,
  Error,
  SingleProductPage,
} from "./pages";
import { Routes, Route } from "react-router-dom";
import { Navigation, Footer } from "../src/components";
import { useAuth } from "./contexts/AuthContext/AuthContext";
import Mockman from "mockman-js";

function App() {
  const { token } = useAuth();
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/cart" element={token ? <Cart /> : <Login />} />
        <Route path="/wishlist" element={token ? <Wishlist /> : <Login />} />
        <Route
          path="/singleproduct/:productId"
          element={token ? <SingleProductPage /> : <Login />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
