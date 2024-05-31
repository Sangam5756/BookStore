import Home from "./components/home/Home";
import Courses from "./components/Courses";
import { Route,Routes } from "react-router-dom";
function App() {
  return (
    <>
      {/* <Home />
      <Course /> */}
       <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Courses/>}/>
      </Routes>
      </div>
    </>
  );
}

export default App;
