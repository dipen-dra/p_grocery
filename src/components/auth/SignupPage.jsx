
// import React from 'react';

// import NavigationContext from '../../context/NavigationContext';
// const NavigationContext = React.createContext();

// const SignupPage = () => {
//     const { navigate } = React.useContext(NavigationContext);
//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-50">
//             <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg m-4">
//                 <div className="text-center mb-8">
//                      <a href="#" onClick={() => navigate('home')} className="text-3xl font-bold text-green-700">HamroGrocery</a>
//                      <p className="text-gray-500 mt-2">Start your fresh journey with us today.</p>
//                 </div>
//                 <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
//                     <div>
//                         <label className="text-sm font-medium text-gray-700 block mb-2">Full Name</label>
//                         <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition" placeholder="John Doe"/>
//                     </div>
//                     <div>
//                         <label className="text-sm font-medium text-gray-700 block mb-2">Email Address</label>
//                         <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition" placeholder="you@example.com"/>
//                     </div>
//                     <div>
//                         <label className="text-sm font-medium text-gray-700 block mb-2">Password</label>
//                         <input type="password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition" placeholder="••••••••"/>
//                     </div>
//                     <div>
//                         <button type="submit" className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition duration-300 transform hover:scale-105">Create Account</button>
//                     </div>
//                 </form>
//                 <p className="text-center text-sm text-gray-500 mt-8">
//                     Already have an account? <a href="#" onClick={() => navigate('login')} className="font-semibold text-green-600 hover:underline">Login</a>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default SignupPage;
// export { NavigationContext, SignupPage };



import React from 'react';
import NavigationContext from '../../context/NavigationContext'; // ✅ correct import

const SignupPage = () => {
    const { navigate } = React.useContext(NavigationContext);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg m-4">
                <div className="text-center mb-8">
                     <a href="#" onClick={() => navigate('home')} className="text-3xl font-bold text-green-700">HamroGrocery</a>
                     <p className="text-gray-500 mt-2">Start your fresh journey with us today.</p>
                </div>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label className="text-sm font-medium text-gray-700 block mb-2">Full Name</label>
                        <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition" placeholder="John Doe"/>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 block mb-2">Email Address</label>
                        <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition" placeholder="you@example.com"/>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 block mb-2">Password</label>
                        <input type="password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition" placeholder="••••••••"/>
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition duration-300 transform hover:scale-105">Create Account</button>
                    </div>
                </form>
                <p className="text-center text-sm text-gray-500 mt-8">
                    Already have an account? <a href="#" onClick={() => navigate('login')} className="font-semibold text-green-600 hover:underline">Login</a>
                </p>
            </div>
        </div>
    );
};

export default SignupPage;
export { NavigationContext, SignupPage };
// export { NavigationContext, SignupPage }; // ✅ export the context and component