import React from "react";
import { BsInstagram, BsGithub } from "react-icons/bs";
function Navbar() {
  return (
    <header className="header">
      <img
        src="https://i5.walmartimages.com/asr/bcc4085e-c311-4886-a7a4-aa58127883d7.5958f8a36f96aa4c08dbc4a8a580e57c.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
        alt="rick and morty"
      />
      <div className="header__left">
        <ul className="header__menu">
          <i>
            <BsInstagram />
          </i>
          <i>
            <BsGithub />
          </i>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
