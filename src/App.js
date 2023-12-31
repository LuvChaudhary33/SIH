import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import {useSelector} from "react-redux"
import ProtectedRoutes from "./components/ProtectedRoutes";
import PublicRoute from "./components/PublicRoute";
import ApplyDoctor from "./pages/ApplyDoctor";

function App() {
  const {loading} = useSelector(state => state.alerts)
  return (
    <BrowserRouter>
      {loading && <div className="spinner-parent">
      <div class="spinner-border" role="status">
      </div>
      </div>}
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
        <Route path="/" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
        <Route path="/apply-doctor" element={<ApplyDoctor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
