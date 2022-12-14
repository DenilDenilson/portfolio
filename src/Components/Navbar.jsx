import { useState } from "react";
import Burguer from "./icons/Burguer";
import CloseIcon from "./icons/CloseIcon";
import Menu from "./Menu";

export default function Navbar() {
  const [BurguerIconCss, setBurguerIconCss] = useState(
    "lg:absolute lg:invisible"
  );
  const [CloseIconCss, setCloseIconCss] = useState(
    "invisible absolute  lg:absolute lg:invisible"
  );
  const [MenuHeight, setMenuHeight] = useState("h-0");

  const clickBurguer = () => {
    // console.log("click burguer");
    // console.log(BurguerIconCss);
    setBurguerIconCss("absolute invisible lg:absolute lg:invisible");
    setCloseIconCss("lg:absolute lg:invisible");
    setMenuHeight("h-96");
  };

  const clickClose = () => {
    // console.log("click close");
    // console.log(CloseIconCss);
    setCloseIconCss("absolute invisible lg:absolute lg:invisible");
    setBurguerIconCss("lg:absolute lg:invisible");
    setMenuHeight("h-0");
  };

  return (
    <nav className="relative mx-auto flex max-w-md justify-between px-6 py-3 md:px-0 lg:max-w-none lg:px-24 lg:pt-8 lg:pb-0 lg2:max-w-none">
      <a
        href="https://www.youtube.com/channel/UCkYXAoEQjQIIbOjgMAz4rYw"
        target="_blank"
        id="denildenilson"
        className="-font--nunito text-base font-extrabold italic leading-6 tracking-widest text-transparent lg:text-2xl lg2:text-2xl"
      >
        @DenilDenilson
      </a>
      <ul
        className="invisible absolute lg:visible lg:relative lg:flex lg:gap-12"
        id="menu-desk"
      >
        <li className="-font--nunito text-2xl font-bold italic -text--light_text-main hover:font-black">
          <a href="#Aboutme">About me</a>
        </li>
        <li className="-font--nunito text-2xl font-bold italic -text--light_text-main  hover:font-black">
          <a href="#Skills">Skills</a>
        </li>
        <li className="-font--nunito text-2xl font-bold italic -text--light_text-main hover:font-black">
          <a href="#Projects">Projects</a>
        </li>
        <li className="-font--nunito text-2xl font-bold italic -text--light_text-main hover:font-black">
          <a href="#Contactme">Contact me</a>
        </li>
      </ul>
      <Burguer click={clickBurguer} BurguerIconCss={BurguerIconCss}></Burguer>
      <CloseIcon click={clickClose} CloseIconCss={CloseIconCss}></CloseIcon>
      <Menu height={MenuHeight}></Menu>
    </nav>
  );
}
