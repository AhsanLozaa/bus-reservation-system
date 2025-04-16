// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import NavBar from "./components/NavBar";
// import HomePage from "./pages/HomePage";
// import ReservationPage from "./pages/ReservationPage";
// import NavBar from "./pages/NavBar";
// import LoginPage from "./pages/login";
// // import NotFound from "./pages/NotFound"; // Uncomment if needed

// function App() {
//   return (
//     <Router>
//       <NavBar />
//       <div className="max-w-6xl mx-auto px-4 mt-6">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/home" element={<HomePage />} />
//           <Route path="/booking" element={<ReservationPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           {/* <Route path="*" element={<NotFound />} /> */} {/* Optional 404 route */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import ReservationPage from "./pages/ReservationPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyBookings from "./pages/MyBookings";
import AdminBookings from "./pages/AdminBookings";
import LoginPage from "./pages/login";
import HomePage from "./pages/HomePage";
import NavBar from "./pages/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/booking" element={<ReservationPage />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/admin-bookings" element={<AdminBookings />} />
      </Routes>
    </Router>
  );
}

export default App;
