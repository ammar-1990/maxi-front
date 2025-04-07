import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Container from "./Container";
import SearchComponent from "./SearchComponent";
import Menu from "./Menu";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className=" border-b p-3 ">
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Logo
            href="/"
            title="MAXI"
            className="text-4xl text-center p-0   bg-white text-black  hover:bg-white"
          />

          <div className="md:block hidden">
            {" "}
            <NavLinks />
          </div>
        </div>
        <div className="block md:hidden">
          <Menu />
        </div>
        <div className="md:block hidden">
        <SearchComponent />
        </div>
       
      </Container>
    </div>
  );
};

export default Header;
