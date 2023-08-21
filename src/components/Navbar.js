import React from 'react';
// import svgLogo from '../assets/logo.png';



import Auth from '../utils/auth';


const Navbar = () => {
  const handleLogoutClick = () => {
    Auth.logout();
  };
  // const logo = [
  //   {
  //     src : svgLogo,
      

  //   }
  // ]

  return (
   <div className= "Navmedia">
    <nav className="flex  text-center  text-xl bg-[#8b5cf6] pl-20">
      <div className="flex justify-center items-center flex-shrink-0 text-white mr-6">
       {/* <img src={logo[0].src} alt="logo" className="h-40 w-15 mr-3" /> */}
        <span className="font-semibold text-3xl tracking-tight">HireScan</span>
      </div>
 
      <div className="w-full flex justify-evenly justify-center flex-grow lg:flex lg:items-center lg:w-auto  ">
        <div className=" flex  justify-center text-lg:flex-grow ">
          <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Home
          </a>
          <a href="/searchpage" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Search
          </a>
          <a href="/myprofile" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            My profile
          </a>
          <a href="/about-me" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            About me
          </a>
        </div>
        <div className='flex p-12'>
          {Auth.loggedIn() ? (
            <>
              <a href="/" onClick={handleLogoutClick} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Logout</a>
            </>
          ) : (
            <a href="/login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Login</a>
          )}


        </div>
      </div>
    </nav>
    </div>
   
  );
};

export default Navbar;
