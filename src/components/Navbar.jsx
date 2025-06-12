// // import React from 'react';
// // import logo from "../assets/hamro.png";

// // const Navbar = () => {
// //   const navLinks = [
// //     { name: 'Home', path: '/' },
// //     { name: 'Products', path: '/' },
// //     { name: 'Contact', path: '/' },
// //     { name: 'About', path: '/' },
// //   ];

// //   const [isScrolled, setIsScrolled] = React.useState(false);
// //   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

// //   React.useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 10);
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "bg-green-500 py-4 md:py-6"}`}>
      
// //       {/* Logo */}
// //       <a href="/" className="flex items-center gap-2 max-h-12">
// //         <img
// //           src={logo}
// //           alt="logo"
// //           className={`h-18 md:h-20 max-h-16 w-auto object-contain transition-all duration-300 ${isScrolled ? "invert opacity-80" : ""}`}
// //         />
// //       </a>

// //       {/* Desktop Nav */}
// //       <div className="hidden md:flex items-center gap-4 lg:gap-8">
// //         {navLinks.map((link, i) => (
// //           <a key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}>
// //             {link.name}
// //             <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
// //           </a>
// //         ))}
// //         <button className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} transition-all`}>
// //           New Launch
// //         </button>
// //       </div>

// //       {/* Desktop Right */}
// //       <div className="hidden md:flex items-center gap-4">
// //         <svg className={`h-6 w-6 ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
// //           <circle cx="11" cy="11" r="8" />
// //           <line x1="21" y1="21" x2="16.65" y2="16.65" />
// //         </svg>
// //         <button className="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500">
// //           Login
// //         </button>
// //       </div>

// //       {/* Mobile Menu Button */}
// //       <div className="flex items-center gap-3 md:hidden">
// //         <svg onClick={() => setIsMenuOpen(!isMenuOpen)} className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
// //           <line x1="4" y1="6" x2="20" y2="6" />
// //           <line x1="4" y1="12" x2="20" y2="12" />
// //           <line x1="4" y1="18" x2="20" y2="18" />
// //         </svg>
// //       </div>

// //       {/* Mobile Menu */}
// //       <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
// //         <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
// //           <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
// //             <line x1="18" y1="6" x2="6" y2="18" />
// //             <line x1="6" y1="6" x2="18" y2="18" />
// //           </svg>
// //         </button>

// //         {navLinks.map((link, i) => (
// //           <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
// //             {link.name}
// //           </a>
// //         ))}

// //         <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
// //           New Launch
// //         </button>

// //         <button className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
// //           Login
// //         </button>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import React from 'react';
// // This component is a responsive navigation bar for a grocery website.

// const NavigationContext = React.createContext();
// const Navbar = () => {
//   const { navigate } = React.useContext(NavigationContext);
//   const { useState, useEffect } = React;

//   const navLinks = [
//     { name: 'Home', page: 'home' },
//     { name: 'Products', page: 'products' },
//     { name: 'Contact', page: 'contact' },
//     { name: 'About', page: 'about' },
//   ];

//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${isScrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-transparent"}`}>
//         <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
//             <a href="#" onClick={() => navigate('home')} className="text-2xl font-bold text-green-700">
//                 HamroGrocery
//             </a>

//             <div className="hidden lg:flex items-center gap-8">
//                 {navLinks.map((link) => (
//                     <a key={link.name} href="#" onClick={() => navigate(link.page)} className={`font-medium tracking-wide transition-colors ${isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-gray-200'}`}>
//                         {link.name}
//                     </a>
//                 ))}
//             </div>

//             <div className="hidden lg:flex items-center gap-4">
//                 <button className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-gray-600 hover:bg-gray-200' : 'text-white hover:bg-white/20'}`}>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
//                 </button>
//                 <button onClick={() => navigate('login')} className="bg-green-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-green-700 transition-transform transform hover:scale-105">
//                     Login
//                 </button>
//             </div>

//             <div className="lg:hidden">
//                 <button onClick={() => setIsMenuOpen(true)} className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
//                 </button>
//             </div>

//             {/* Mobile Menu */}
//             <div className={`fixed inset-0 bg-black/40 z-50 transition-opacity lg:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
//                 <div className={`absolute top-0 right-0 h-full w-2/3 max-w-sm bg-white shadow-xl transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
//                     <div className="p-6 flex flex-col h-full">
//                         <div className="flex justify-between items-center mb-8">
//                             <span className="text-2xl font-bold text-green-700">HamroGrocery</span>
//                             <button onClick={() => setIsMenuOpen(false)} className="p-2">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
//                             </button>
//                         </div>
//                         <div className="flex flex-col gap-6">
//                             {navLinks.map((link) => (
//                                 <a key={link.name} href="#" onClick={() => { navigate(link.page); setIsMenuOpen(false); }} className="text-gray-700 font-medium text-lg">
//                                     {link.name}
//                                 </a>
//                             ))}
//                         </div>
//                         <div className="mt-auto">
//                            <button onClick={() => { navigate('login'); setIsMenuOpen(false); }} className="w-full bg-green-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-700">
//                                 Login
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     </header>
//   );
// };

// export default Navbar;
// export { NavigationContext, Navbar };


// src/components/Navbar.jsx
import React, { useState, useEffect, useContext } from 'react';
import NavigationContext from '../context/NavigationContext'; // Adjust path as needed

const Navbar = () => {
  const { navigate } = useContext(NavigationContext);

  const navLinks = [
    { name: 'Home', page: 'home' },
    { name: 'Products', page: 'products' },
    { name: 'Contact', page: 'contact' },
    { name: 'About', page: 'about' },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${isScrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-transparent"}`}>
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" onClick={() => navigate('home')} className="flex items-center">
    <img 
      src="/hamro.png" 
      className="h-15 w-auto" 
    />
  </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href="#"
              onClick={() => navigate(link.page)}
              className={`font-medium tracking-wide transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-gray-200'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button
            className={`p-2 rounded-full transition-colors ${
              isScrolled ? 'text-gray-600 hover:bg-gray-200' : 'text-white hover:bg-white/20'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <button
            onClick={() => navigate('login')}
            className="bg-green-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-green-700 transition-transform transform hover:scale-105"
          >
            Login
          </button>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-black/40 z-50 transition-opacity lg:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className={`absolute top-0 right-0 h-full w-2/3 max-w-sm bg-white shadow-xl transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-center mb-8">
                <span className="text-2xl font-bold text-green-700">HamroGrocery</span>
                <button onClick={() => setIsMenuOpen(false)} className="p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href="#"
                    onClick={() => { navigate(link.page); setIsMenuOpen(false); }}
                    className="text-gray-700 font-medium text-lg"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="mt-auto">
                <button
                  onClick={() => { navigate('login'); setIsMenuOpen(false); }}
                  className="w-full bg-green-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-700"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
export { NavigationContext, Navbar };
// src/context/NavigationContext.jsx