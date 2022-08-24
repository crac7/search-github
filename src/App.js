import logo from './logo.svg';
import './App.css';
import Users from "./pages/user";
import Repositories from './pages/repositories';
import NavBar from './components/nav-bar/index.';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { DataProivder } from './context/DataContext';
function App() {
  return (
    <DataProivder>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="" element={<Navigate to="user" />} />
          <Route path="user" element={<Users />} />
          <Route path="respositories" element={<Repositories />} />
        </Routes>
      </BrowserRouter>
    </DataProivder>
  );
}

export default App;
