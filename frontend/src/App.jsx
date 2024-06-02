import Home from "./components/home/Home";
import Courses from "./components/Courses";
import { Navigate, Route,Routes } from "react-router-dom";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser)
  return (
    <>
      {/* <Home />
      <Course /> */}
       <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={authUser? <Courses/> : <Navigate to={"/signup"}/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Toaster/>
      </div>
    </>
  );
}

export default App;
