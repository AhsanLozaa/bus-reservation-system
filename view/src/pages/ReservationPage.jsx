// // src/ReservationPage.js
// import React, { useState } from 'react';

// const ReservationPage = () => {
//   const [from, setFrom] = useState('');
//   const [to, setTo] = useState('');
//   const [date, setDate] = useState('');
//   const [passengerCount, setPassengerCount] = useState(1);

//   const handleReservation = (e) => {
//     e.preventDefault();
//     alert(`Reservation confirmed from ${from} to ${to} on ${date} for ${passengerCount} passengers.`);
//   };

//   return (
//     <div className="container">
//       <h1>Bus Ticket Reservation</h1>
//       <form onSubmit={handleReservation}>
//         <div className="mb-3">
//           <label htmlFor="from" className="form-label">From</label>
//           <input
//             type="text"
//             className="form-control"
//             id="from"
//             value={from}
//             onChange={(e) => setFrom(e.target.value)}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="to" className="form-label">To</label>
//           <input
//             type="text"
//             className="form-control"
//             id="to"
//             value={to}
//             onChange={(e) => setTo(e.target.value)}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="date" className="form-label">Travel Date</label>
//           <input
//             type="date"
//             className="form-control"
//             id="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="passengerCount" className="form-label">Number of Passengers</label>
//           <input
//             type="number"
//             className="form-control"
//             id="passengerCount"
//             value={passengerCount}
//             onChange={(e) => setPassengerCount(e.target.value)}
//             min="1"
//             required
//           />
//         </div>

//         <button type="submit" className="btn btn-primary">Reserve Now</button>
//       </form>
//     </div>
//   );
// };

// export default ReservationPage;



import React, { useState } from 'react';

const ReservationPage = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [passengerCount, setPassengerCount] = useState(1);

  const handleReservation = (e) => {
    e.preventDefault();
    alert(`Reservation confirmed from ${from} to ${to} on ${date} for ${passengerCount} passengers.`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center mb-6">Bus Ticket Reservation</h1>
      <form onSubmit={handleReservation}>
        <div className="mb-4">
          <label htmlFor="from" className="block text-sm font-medium text-gray-700 mb-2">From</label>
          <input
            type="text"
            id="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="to" className="block text-sm font-medium text-gray-700 mb-2">To</label>
          <input
            type="text"
            id="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">Travel Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="passengerCount" className="block text-sm font-medium text-gray-700 mb-2">Number of Passengers</label>
          <input
            type="number"
            id="passengerCount"
            value={passengerCount}
            onChange={(e) => setPassengerCount(e.target.value)}
            min="1"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Reserve Now
        </button>
      </form>
    </div>
  );
};

export default ReservationPage;
