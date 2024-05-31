import Home from "./components/home/Home";
import Courses from "./components/Courses";
import { Route,Routes } from "react-router-dom";
function App() {
  return (
    <>
      {/* <Home />
      <Course /> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Courses/>}/>
      </Routes>
    </>
  );
}

export default App;
