import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Header from "./components/Header";
import GetStartedSection from "./components/GetStartedSection";
import Footer from "./components/Footer";
import "./App.css";

// pages
import Step1 from "./components/pages/Step1";
import Step2 from "./components/pages/Step2";
import CollectInfo from "./components/pages/CollectInfo";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<GetStartedSection />} />
          <Route path="/step1" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/collect-info" element={<CollectInfo />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
