import Header from "./components/Header";
import GetStartedSection from "./components/GetStartedSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header></Header>
      <main className="content">{/* Your main content goes here */}</main>
      <GetStartedSection></GetStartedSection>
      <Footer />
    </div>
  );
}

export default App;
