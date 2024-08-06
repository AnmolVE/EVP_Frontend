import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/bars/Navbar";
import Login from "./components/auth/Login";
import CustomerDetail from "./components/customer-details/CustomerDetail";
import CompanyDetail from "./components/company-details/CompanyDetail";
import UserProfile from "./components/user-profile/UserProfile";
import PrivateRoutes from "./components/utils/privateroutes/PrivateRoutes";
import LandingPage from "./components/landingpage/LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<CustomerDetail />} path="/customer-detail" />
            <Route element={<CompanyDetail />} path="/company-detail" />
            <Route element={<UserProfile />} path="/user-profile" />
            <Route element={<LandingPage />} path="/home" />
          </Route>
          <Route element={<Login />} path="/login" />
          <Route element={<Navbar />} path="/navbar" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
