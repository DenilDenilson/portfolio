import { useState } from "react";
import Burguer from "./icons/Burguer";
import CloseIcon from "./icons/CloseIcon";
import Menu from "./Menu";

export default function Navbar() {
  const [BurguerIconCss, setBurguerIconCss] = useState("");
  const [CloseIconCss, setCloseIconCss] = useState("invisible absolute");
  const [MenuHeight, setMenuHeight] = useState("h-0");

  const clickBurguer = () => {
    // console.log("click burguer");
    // console.log(BurguerIconCss);
    setBurguerIconCss("absolute invisible");
    setCloseIconCss("");
    setMenuHeight("h-96");
  };

  const clickClose = () => {
    // console.log("click close");
    // console.log(CloseIconCss);
    setCloseIconCss("absolute invisible");
    setBurguerIconCss("");
    setMenuHeight("h-0");
  };

  return (
    <nav className="relative flex justify-between px-6 py-3">
      <a
        href="https://www.youtube.com/channel/UCkYXAoEQjQIIbOjgMAz4rYw"
        target="_blank"
        id="denildenilson"
        className="-font--nunito text-base font-extrabold italic leading-6 tracking-widest text-transparent"
      >
        @DenilDenilson
      </a>

      <Burguer click={clickBurguer} BurguerIconCss={BurguerIconCss}></Burguer>
      <CloseIcon click={clickClose} CloseIconCss={CloseIconCss}></CloseIcon>
      <Menu height={MenuHeight}></Menu>
    </nav>
  );
}
