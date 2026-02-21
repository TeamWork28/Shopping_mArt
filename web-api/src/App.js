import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContainer from "./components/layout/MainContainer";
import Layout from "./components/layout/Layout";

import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp'
import GroceryList from "./pages/GroceryList";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContainer><SignIn /></MainContainer>} />
        <Route path="/signup" element={<MainContainer><SignUp /></MainContainer>} />
      </Routes>


      <Routes>
        <Route path="/products" element={
          <MainContainer>
            <Layout>
              <GroceryList />
            </Layout>
          </MainContainer>
        } />
        <Route path="/checkout" element={
          <MainContainer>
            <Layout>
              <Checkout />
            </Layout>
          </MainContainer>
        } />
        <Route path="/payment" element={
          <MainContainer>
            <Layout>
              <Payment />
            </Layout>
          </MainContainer>
        } />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
