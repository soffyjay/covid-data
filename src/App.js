import "./App.css";
import PageLayout from "./components/pagelayout";
import "./assets/fonts/gelion-cufonfonts-webfont/style.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PageLayout />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
