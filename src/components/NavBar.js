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
  const navList = navLinks.map((nav) => (
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal hover:scale-110"
      key={nav.id}
    >
      <NavLink
        className="text-blue-600 hover:underline"
        end
        to={nav.link}
      >
        { nav.name }
      </NavLink>
    </Typography>
  ));
  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <NavLink
          className="flex items-center gap-x-1 hover:scale-110"
          to="/"
        >
          <img className="w-12 h-12 " src={Logo} alt="App Logo" />
          <h2 className="font-bold">
            Space Travellers&apos; Hub
          </h2>
        </NavLink>
        <nav className="hidden lg:block">
          <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
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

  );
};

export default NavBar;
