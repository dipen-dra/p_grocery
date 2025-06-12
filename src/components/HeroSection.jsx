import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

const NavigationContext = React.createContext();



const HeroSection = () => {
  return (
    <div
      className="relative h-[600px] lg:h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://pplx-res.cloudinary.com/image/upload/v1749716832/gpt4o_images/wpvxp1fjrg880dnrssv4.png')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Freshness Delivered Daily
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          The best quality groceries, sourced locally and delivered to your doorstep with care.
        </p>
        <div className="w-full max-w-lg bg-white rounded-full p-2 flex items-center shadow-lg">
          <input
            type="text"
            placeholder="Search for fresh vegetables, fruits..."
            className="w-full bg-transparent text-gray-700 px-4 focus:outline-none"
          />
          <button className="bg-green-600 text-white rounded-full px-6 py-3 font-semibold hover:bg-green-700 transition-colors">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

// const HeroSection = () => {
//   return (
//     <div className="relative h-[600px] lg:h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://placehold.co/1920x1080/c8e6c9/4caf50?text=Quality+Produce')` }}>
//       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
//         <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">Freshness Delivered Daily</h1>
//         <p className="text-lg md:text-xl max-w-2xl mb-8">The best quality groceries, sourced locally and delivered to your doorstep with care.</p>
//         <div className="w-full max-w-lg bg-white rounded-full p-2 flex items-center shadow-lg">
//           <input 
//             type="text" 
//             placeholder="Search for fresh vegetables, fruits..." 
//             className="w-full bg-transparent text-gray-700 px-4 focus:outline-none"
//           />
//           <button className="bg-green-600 text-white rounded-full px-6 py-3 font-semibold hover:bg-green-700 transition-colors">
//             Search
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

export default HeroSection;
export { NavigationContext, HeroSection };


// import React from 'react';
// const NavigationContext = React.createContext();

// const HeroSection = () => {
//   return (
//     <div className="relative h-[600px] lg:h-screen overflow-hidden">
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//       >
//         <source src="https://videos.pexels.com/video-files/8446806/8446806-hd_1080_1920_24fps.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/60 z-0"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
//         <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
//           Freshness Delivered Daily
//         </h1>
//         <p className="text-lg md:text-xl max-w-2xl mb-8">
//           The best quality groceries, sourced locally and delivered to your doorstep with care.
//         </p>
//         <div className="w-full max-w-lg bg-white rounded-full p-2 flex items-center shadow-lg">
//           <input
//             type="text"
//             placeholder="Search for fresh vegetables, fruits..."
//             className="w-full bg-transparent text-gray-700 px-4 focus:outline-none"
//           />
//           <button className="bg-green-600 text-white rounded-full px-6 py-3 font-semibold hover:bg-green-700 transition-colors">
//             Search
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
// export { NavigationContext, HeroSection };
