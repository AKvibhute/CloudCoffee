// // Paymentcontext.jsx
// import React, { createContext, useContext } from 'react';

// // Create context
// export const PaymentContext = createContext();

// // Custom hook
// export const usePayment = () => useContext(PaymentContext);

// // Provider
// export const PaymentProvider = ({ children }) => {
//   const initiatePayment = (amount) => {
//     // Example Razorpay integration
//     const options = {
//       key: 'YOUR_KEY_HERE',
//       amount: amount ,
//       currency: 'INR',
//       name: 'Coffee Shop',
//       description: 'Buy Coffee',
//       handler: function (response) {
//         alert('Payment Successful!');
//       },
//       prefill: {
//         name: 'Customer',
//         email: 'customer@example.com',
//         contact: '9999999999',
//       },
//       theme: {
//         color: '#311b1b',
//       },
//     };
//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   return (
//     <PaymentContext.Provider value={{ initiatePayment }}>
//       {children}
//     </PaymentContext.Provider>
//   );
// };
