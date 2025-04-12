import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="md:hidden flex flex-col py-4 items-center ">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink key={index} href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
