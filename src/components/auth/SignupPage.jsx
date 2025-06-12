


// import React from 'react';
// import NavigationContext from '../../context/NavigationContext'; // Correct import
// import Navbar from '../Navbar'; // Adjust the path if needed

// const SignupPage = () => {
//   const { navigate } = React.useContext(NavigationContext);

//   return (
//     <>
//       {/* Navbar with overridden styles */}
//       <Navbar />

//       {/* Scoped CSS to override Navbar styles and hide Login button */}
//       <style jsx>{`
//         /* Force the header to have a white background and shadow */
//         header {
//           background: rgba(255, 255, 255, 0.95) !important;
//           box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
//           backdrop-filter: blur(4px) !important;
//         }

//         /* Override nav link colors to extremely dark */
//         header nav a {
//           color: #1a1a1a !important; /* Extremely dark gray, almost black */
//         }

//         /* Hover state for nav links */
//         header nav a:hover {
//           color: #15803d !important; /* Green-600 for hover */
//         }

//         /* Search button icon color */
//         header nav button svg {
//           stroke: #1a1a1a !important; /* Extremely dark for the search icon */
//         }

//         /* Search button hover background */
//         header nav button:hover {
//           background: #e5e7eb !important; /* Gray-200 for hover */
//         }

//         /* Menu button (mobile) icon color */
//         header nav .lg\\:hidden button svg {
//           stroke: #1a1a1a !important; /* Extremely dark for the hamburger icon */
//         }

//         /* Mobile menu background and text */
//         .bg-black\\/40 .bg-white {
//           background: #ffffff !important; /* White background for mobile menu */
//         }

//         .bg-black\\/40 .bg-white a {
//           color: #1a1a1a !important; /* Extremely dark for mobile menu links */
//         }

//         /* Mobile menu close button icon */
//         .bg-black\\/40 .bg-white button svg {
//           stroke: #1a1a1a !important; /* Extremely dark for close icon */
//         }

//         /* Mobile menu logo text */
//         .bg-black\\/40 .bg-white span {
//           color: #15803d !important; /* Green-700 for logo */
//         }

//         /* Hide the Login button in desktop view */
//         header nav div button.bg-green-600 {
//           display: none !important;
//         }

//         /* Hide the Login button in mobile menu */
//         .bg-black\\/40 .bg-white button.bg-green-600 {
//           display: none !important;
//         }
//       `}</style>

//       <div className="pt-24 min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg m-4">
//           <div className="text-center mb-8">
//             <a href="#" onClick={() => navigate('home')} className="text-3xl font-bold text-green-700">
//               HamroGrocery
//             </a>
//             <p className="text-gray-500 mt-2">Start your fresh journey with us today.</p>
//           </div>
//           <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
//             <div>
//               <label className="text-sm font-medium text-gray-700 block mb-2">Full Name</label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
//                 placeholder="John Doe"
//               />
//             </div>
//             <div>
//               <label className="text-sm font-medium text-gray-700 block mb-2">Email Address</label>
//               <input
//                 type="email"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
//                 placeholder="you@example.com"
//               />
//             </div>
//             <div>
//               <label className="text-sm font-medium text-gray-700 block mb-2">Password</label>
//               <input
//                 type="password"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
//                 placeholder="••••••••"
//               />
//             </div>
//             <div>
//               <button
//                 type="submit"
//                 className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition duration-300 transform hover:scale-105"
//               >
//                 Create Account
//               </button>
//             </div>
//           </form>
//           <p className="text-center text-sm text-gray-500 mt-8">
//             Already have an account?{' '}
//             <a href="#" onClick={() => navigate('login')} className="font-semibold text-green-600 hover:underline">
//               Login
//             </a>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignupPage;
// export { NavigationContext, SignupPage };



import React from 'react';
import NavigationContext from '../../context/NavigationContext';
import Navbar from '../Navbar'; // Adjust the path if needed

const SignupPage = () => {
  const { navigate } = React.useContext(NavigationContext);

  return (
    <>
      {/* Navbar with overridden styles */}
      <Navbar />

      {/* Scoped CSS to override Navbar styles and hide Login button */}
      <style jsx>{`
        /* Force the header to have a white background and shadow */
        header {
          background: rgba(255, 255, 255, 0.95) !important;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
          backdrop-filter: blur(4px) !important;
        }

        /* Override nav link colors to extremely dark */
        header nav a {
          color: #1a1a1a !important; /* Extremely dark gray, almost black */
        }

        /* Hover state for nav links */
        header nav a:hover {
          color: #15803d !important; /* Green-600 for hover */
        }

        /* Search button icon color */
        header nav button svg {
          stroke: #1a1a1a !important; /* Extremely dark for the search icon */
        }

        /* Search button hover background */
        header nav button:hover {
          background: #e5e7eb !important; /* Gray-200 for hover */
        }

        /* Menu button (mobile) icon color */
        header nav .lg\\:hidden button svg {
          stroke: #1a1a1a !important; /* Extremely dark for the hamburger icon */
        }

        /* Mobile menu background and text */
        .bg-black\\/40 .bg-white {
          background: #ffffff !important; /* White background for mobile menu */
        }

        .bg-black\\/40 .bg-white a {
          color: #1a1a1a !important; /* Extremely dark for mobile menu links */
        }

        /* Mobile menu close button icon */
        .bg-black\\/40 .bg-white button svg {
          stroke: #1a1a1a !important; /* Extremely dark for close icon */
        }

        /* Mobile menu logo text */
        .bg-black\\/40 .bg-white span {
          color: #15803d !important; /* Green-700 for logo */
        }

        /* Hide the Login button in desktop view */
        header nav div button.bg-green-600 {
          display: none !important;
        }

        /* Hide the Login button in mobile menu */
        .bg-black\\/40 .bg-white button.bg-green-600 {
          display: none !important;
        }
      `}</style>

      <div className="pt-24 min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg m-4">
          <div className="text-center mb-8">
            <a href="#" onClick={() => navigate('home')}>
              <img
                src="/hamro2.png"
                className="h-12 w-auto mx-auto"
              />
            </a>
            <p className="text-gray-500 mt-2">Start your fresh journey with us today.</p>
          </div>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                placeholder="••••••••"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition duration-300 transform hover:scale-105"
              >
                Create Account
              </button>
            </div>
          </form>
          <p className="text-center text-sm text-gray-500 mt-8">
            Already have an account?{' '}
            <a href="#" onClick={() => navigate('login')} className="font-semibold text-green-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
export { NavigationContext, SignupPage };