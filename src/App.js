import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../public/components/Home";
import Profile from "../public/components/Profile";
import PricingPage from "../public/components/ PricingPage";
import Header from "../public/components/Header";
export default function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/PricingPage" element={<PricingPage />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
