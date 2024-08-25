import React from 'react'
import { NavLink, Link } from "react-router-dom";
import logo from './../../assets/Client-First - IMAGES/Logo.svg'
import { useEffect, useRef } from "react";
import { useAuthHook } from "../../context/AuthContext";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/blog",
    display: "Blog",
  },
  {
    path: "/about-us",
    display: "About Us",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

function Header() {

  const { token, user, role } = useAuthHook();
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current?.classList.add("sticky__header");
      } else {
        headerRef.current?.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  return (
    <div className='h-20 bg-primary font-heading bg-no-repeat bg-center bg-cover w-full' ref={headerRef}>
      <div className="flex items-center justify-between">
          {/*==========Logo========= */}
          <div>
            <img className='m-6 ml-16' src={logo} alt="" />
          </div>

          {/*==========menu========= */}
          <div className='flex' ref={menuRef} onClick={toggleMenu}>
          <ul className="flex items-center gap-[2.7rem] mr-10 text-xl">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-offWhite text-[16px] leading-7 font-[600]"
                        : "text-offWhite text-[16px] leading-7 font-[500] hover:text-slate-400"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
            <button className='mr-16 text-black bg-offWhite p-10 pt-4 pb-4 font-bold'>Subscribe</button>
          </div>
          {/*===========nav right================*/}
        
        </div>
    </div>
  )
}

export default Header
