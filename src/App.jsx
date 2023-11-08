import Home from "./Page/Home";
import { Routes, Route } from "react-router-dom";
import Footer from "./Page/Footer";
import NavBar from "./component/NavBar";
import SideBar from "./Page/SideBar";
function App() {
  return (
    <section className="">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <SideBar />
    </section>
  );
}

export default App;
