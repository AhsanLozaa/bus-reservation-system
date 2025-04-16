// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-gray-900 text-white shadow-lg">
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Brand */}
//         <Link to="/" className="text-xl font-semibold">
//           Bus Reservation
//         </Link>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-white focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             {isOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             )}
//           </svg>
//         </button>

//         {/* Navigation Links */}
//         <div className={`md:flex md:items-center space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
//           <Link to="/home" className="hover:text-gray-400">
//             Home
//           </Link>
//           <Link to="/booking" className="hover:text-gray-400">
//             Reservation
//           </Link>
//           <Link to="/login" className="hover:text-gray-400">
//             Login
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-gray-900 text-white shadow-lg">
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Brand */}
//         <Link to="/" className="text-xl font-semibold">
//           Bus Reservation
//         </Link>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-white focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             {isOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             )}
//           </svg>
//         </button>

//         {/* Navigation Links */}
//         <div className={`md:flex md:items-center space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
//           <Link to="/home" className="hover:text-gray-400">
//             Home
//           </Link>
//           <Link to="/booking" className="hover:text-gray-400">
//             Booking
//           </Link>
//           <Link to="/login" className="hover:text-gray-400">
//             Login
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="text-xl font-semibold">
          Bus Reservation
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/home" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/booking" className="hover:text-gray-400">
            Booking
          </Link>
          <Link to="/" className="hover:text-gray-400">
            {/* <Link to="/login" className="hover:text-gray-400"> */}
            Login
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 absolute w-full left-0 top-[60px] flex flex-col items-center gap-4 py-4 shadow-lg">
          <Link
            to="/home"
            className="hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/booking"
            className="hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Booking
          </Link>
          <Link
            to="/login"
            className="hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
