import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Container from "./Container";

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
          <NavLinks />
        </div>
        <div>search</div>
      </Container>

    </div>
  );
};

export default Header;
