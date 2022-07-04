import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  NavLink,
} from "react-router-dom";
import FeatureSetting from "./components/FeatureSetting";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import UpdatedSetting from "./components/UpdatedSetting";


function App() {

  return (
    <>
      <BrowserRouter>
        <nav style={{ display: 'flex', justifyContent: 'space-around' }}>
          <NavLink to="/" style={({ isActive }) => {
            return { color: isActive ? 'red' : '' }
          }}>Home</NavLink >
          <NavLink to="/login" style={({ isActive }) => {
            return { color: isActive ? 'red' : '' }
          }}>Login</NavLink >
          <NavLink to="/profile/userId" style={({ isActive }) => {
            return { color: isActive ? 'red' : '' }
          }}>Profile</NavLink >
          <NavLink to="/settings" style={({ isActive }) => {
            return { color: isActive ? 'red' : '' }
          }}>Settings</NavLink >
        </nav>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/settings" element={<Settings />}>
            <Route path="feature" element={<FeatureSetting />} />
            <Route path="updated" element={<UpdatedSetting />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
