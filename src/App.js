import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./components/auth";
import FeatureSetting from "./components/FeatureSetting";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import RequireAuth from "./components/RequireAuth";
import Settings from "./components/Settings";
import UpdatedSetting from "./components/UpdatedSetting";


function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
            <Route path="/settings" element={<RequireAuth><Settings /></RequireAuth>}>
              <Route index element={<Navigate to="updated" replace />} />
              <Route path="feature" element={<FeatureSetting />} />
              <Route path="updated" element={<UpdatedSetting />} />
            </Route>
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
