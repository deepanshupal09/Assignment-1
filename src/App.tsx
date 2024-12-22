
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Repository from "./pages/Repository";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/repository" element={<Repository/>}/>
    </Routes>
  );
}

export default App;