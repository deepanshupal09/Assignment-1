
import { Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage";
import RepositoryPage from "./pages/RepositoryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}/>
      <Route path="/repository" element={<RepositoryPage/>}/>
    </Routes>
  );
}

export default App;