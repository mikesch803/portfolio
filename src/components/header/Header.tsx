import React from "react";
import {  NavLink } from "react-router-dom";
import { Options } from "../options/Options";

export function Header() {
  const navLinks = ["projects", "blogs"];

  const navlinkStyles = ({isActive}:any) => {
    return {
      color : isActive ? '':'black',
      fontWeight : isActive ? '700':''
    }
  }

  return (
    <header className="flex justify-between py-5 " id="home">
      <h1 className="font-bold text-2xl">
        <NavLink to="/">
          Mahendra.
        </NavLink>
      </h1>

      <ul className="sm:hidden font text-xl flex items-center ">
        {navLinks.map((item) => (
          <li key={item} className="list-none ml-5 capitalize">
            <NavLink to={item} style={navlinkStyles}>
              {item}
            </NavLink>
          </li>
        ))}

        <a href="#connect" className="ml-5 capitalize ">
          connect
        </a>
      </ul>
        <Options/>
    </header>
  );
}
