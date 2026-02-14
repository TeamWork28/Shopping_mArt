import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContainer from "./components/layout/MainContainer";
import Layout from "./components/layout/Layout";

import GroceryList from "./pages/GroceryList";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";

function App() {
  return (
    <BrowserRouter>
      <MainContainer>
        <Layout>
          <Routes>
            <Route path="/" element={<GroceryList />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </Layout>
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;
