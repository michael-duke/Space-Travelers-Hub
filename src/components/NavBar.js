import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/app_logo.png';

const NavBar = () => {
  const NavLinks = [
    { id: 1, name: 'Rockets', link: '/' },
    { id: 2, name: 'Mission', link: '/missions' },
    { id: 3, name: 'My Profile', link: '/profile' },
  ];
  return (
    <header className="flex justify-between items-center h-12 px-8 py-4">
      <NavLink
        className="flex items-center gap-x-1"
        to="/"
      >
        <img className="w-12 h-12 " src={Logo} alt="App Logo" />
        <h2 className="">
          Space Travellers&apos; Hub
        </h2>
      </NavLink>
      <nav className="flex gap-x-2.5">
        { NavLinks.map((nav) => (
          <NavLink
            className="text-blue-600 hover:underline hover:scale-110"
            end
            to={nav.link}
            key={nav.id}
          >
            { nav.name }
          </NavLink>

        ))}
      </nav>
    </header>
  );
};

export default NavBar;
