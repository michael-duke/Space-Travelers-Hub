import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from '@material-tailwind/react';
import Logo from '../assets/app_logo.png';

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navLinks = [
    { id: 1, name: 'Rockets', link: '/' },
    { id: 2, name: 'Mission', link: '/missions' },
    { id: 3, name: 'My Profile', link: '/profile' },
  ];

  const activeClassName = 'text-blue-600 underline text-lg';

  const navList = navLinks.map(({ id, link, name }) => (
    <Typography
      as="li"
      variant="small"
      className={`text-blue-600 hover:scale-125 px-4 font-normal ${id === 3 ? 'border-l-2 border-gray-800 lgg:border-0' : ''}`}
      key={id}

    >
      <NavLink
        className={({ isActive }) => (isActive ? activeClassName : 'text-blue-600 text-lg hover:underline')}
        end
        to={link}
      >

        { name }
      </NavLink>
    </Typography>
  ));
  return (
    <header className="border-b-2 border-blue-gray-100 fixed-top bg-white">
      <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 border-none shadow-none">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <NavLink
            className="flex items-center gap-2 hover:scale-110"
            to="/"
          >
            <img className="w-20 sl:w-14" src={Logo} alt="App Logo" />
            <h2 className="font-bold text-4xl sl:text-xl sm:text-2xl fold:hidden">
              Space Travelers&apos; Hub
            </h2>
          </NavLink>
          <nav className="hidden lg:block">
            <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
              { navList }
            </ul>
          </nav>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <nav>
            <ul>
              { navList }
            </ul>
          </nav>
        </MobileNav>
      </Navbar>
    </header>

  );
};

export default NavBar;
