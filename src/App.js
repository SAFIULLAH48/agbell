import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcomescreen from "./pages/Welcomescreen";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Forgotpassword from "./pages/Forgotpassword";
import Resetpassword from "./pages/Resetpasswordpage";
import OtpVerification from "./pages/otpvarification";
import Homepage from "./pages/homepage";
import Community from "./pages/Community";
import UpcomingEvents from "./pages/UpcommingEvents";
import Profile from "./pages/Profile";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcomescreen />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/resetpassword" element={<Resetpassword />} />
        <Route path="/otpverification" element={<OtpVerification />} />
        <Route path="/homepage" element={<Homepage />} />

        {/* Routes with Layout */}
        <Route element={<Layout />}>
          <Route path="/community" element={<Community />} />
          <Route path="/upcomingevents" element={<UpcomingEvents />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
