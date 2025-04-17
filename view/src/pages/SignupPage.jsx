// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const SignupPage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const navigate = useNavigate(); // useNavigate hook

//   const handleSignup = (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     // Here you can handle signup logic (e.g., call an API to create a new user)
//     // Assume signup is successful for now:
//     if (username && password) {
//       alert("Signup successful!");
//       navigate("/login"); // Redirect to the login page after successful signup
//     } else {
//       alert("Please fill out all fields");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
//         <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
//         <form onSubmit={handleSignup}>
//           <div className="mb-4">
//             <label
//               htmlFor="username"
//               className="block text-sm font-medium text-gray-700 mb-2"
//             >
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700 mb-2"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="mb-6">
//             <label
//               htmlFor="confirmPassword"
//               className="block text-sm font-medium text-gray-700 mb-2"
//             >
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="confirmPassword"
//               placeholder="Confirm Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;

// src/pages/SignupPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../services/authService";

const SignupPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile_number: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, mobile_number, password, confirmPassword } = form;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await signup({ name, email, mobile_number, password });
      alert("Signup successful!");
      navigate("/login");
    } catch (error) {
      console.error("Signup failed:", error.response?.data || error.message);
      alert(error.response?.data?.error || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSignup}>
          {[
            "name",
            "email",
            "mobile_number",
            "password",
            "confirmPassword",
          ].map((field) => (
            <div className="mb-4" key={field}>
              <label
                htmlFor={field}
                className="block text-sm font-medium text-gray-700 mb-2 capitalize"
              >
                {field.replace("_", " ")}
              </label>
              <input
                type={
                  field.toLowerCase().includes("password") ? "password" : "text"
                }
                id={field}
                name={field}
                placeholder={field.replace("_", " ")}
                value={form[field]}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
