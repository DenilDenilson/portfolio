import Html from "./icons/Html";
import Windows from "./icons/Windows";
import Arduino from "./icons/Arduino";
import C from "./icons/C";
import Cplusplus from "./icons/Cplusplus";
import Vscode from "./icons/Vscode";
import Powerbi from "./icons/Powerbi";
import Sqlserver from "./icons/Sqlserver";
import Js from "./icons/Js";
import Git from "./icons/Git";
import ReactIcon from "./icons/ReactIcon";
import Sass from "./icons/Sass";
import Sklearn from "./icons/Sklearn";
import Python from "./icons/Python";
import Pandas from "./icons/Pandas";
import Matplotlib from "./icons/Matplotlib";
import Seaborn from "./icons/Seaborn";
import Tailwind from "./icons/Tailwind";
import Anaconda from "./icons/Anaconda";
import Excel from "./icons/Excel";
import Figma from "./icons/Figma";
import Solidworks from "./icons/Solidworks";
import Jupyter from "./icons/Jupyter";
import Numpy from "./icons/Numpy";
import Css from "./icons/Css";
import ProjectSlider from "./ProjectSlider";
import { useState } from "react";

export default function ProjectVis(props) {
  const tecKeys = props.tecIcons2;

  const [ProjectSliderCss_width, setProjectSliderCss_width] = useState("w-0");
  const [ProjectSliderCss_paddingx, setProjectSliderCss_paddingx] =
    useState("px-0");
  // const [ProjectSliderClick, setProjectSliderClick] = useState(0);

  const clickProjectVis = () => {
    if (ProjectSliderCss_width == "w-0") {
      setProjectSliderCss_width("w-64");
      setProjectSliderCss_paddingx("px-6");
      // console.log("click vis-0");
    } else {
      setProjectSliderCss_width("w-0");
      setProjectSliderCss_paddingx("px-0");
      // console.log("click vis-1");
    }
  };

  // const clickProjecSlider = () => {
  //   setProjectSliderCss_width("w-0");
  //   setProjectSliderCss_paddingx("px-0");
  //   console.log("click slider");
  // };

  const tecIcons = {
    Html: <Html width={"32px"} height={"32px"}></Html>,
    Windows: <Windows width={"32px"} height={"32px"}></Windows>,
    Arduino: <Arduino width={"32px"} height={"32px"}></Arduino>,
    C: <C width={"32px"} height={"32px"}></C>,
    Cplusplus: <Cplusplus width={"32px"} height={"32px"}></Cplusplus>,
    Vscode: <Vscode width={"32px"} height={"32px"}></Vscode>,
    Powerbi: <Powerbi width={"32px"} height={"32px"}></Powerbi>,
    Sqlserver: <Sqlserver width={"32px"} height={"32px"}></Sqlserver>,
    Js: <Js width={"32px"} height={"32px"}></Js>,
    Sass: <Sass width={"32px"} height={"32px"}></Sass>,
    Sklearn: <Sklearn></Sklearn>,
    Python: <Python width={"32px"} height={"32px"}></Python>,
    Pandas: <Pandas width={"32px"} height={"32px"}></Pandas>,
    Matplotlib: <Matplotlib width={"32px"} height={"32px"}></Matplotlib>,
    Seaborn: <Seaborn width={"32px"} height={"32px"}></Seaborn>,
    Anaconda: <Anaconda width={"32px"} height={"32px"}></Anaconda>,
    Excel: <Excel width={"32px"} height={"32px"}></Excel>,
    Figma: <Figma width={"32px"} height={"32px"}></Figma>,
    Solidworks: <Solidworks width={"32px"} height={"32px"}></Solidworks>,
    Jupyter: <Jupyter width={"32px"} height={"32px"}></Jupyter>,
    Numpy: <Numpy width={"32px"} height={"32px"}></Numpy>,
    ReactIcon: <ReactIcon width={"32px"} height={"32px"}></ReactIcon>,
    Tailwind: <Tailwind width={"32px"} height={"32px"}></Tailwind>,
    Git: <Git width={"32px"} height={"32px"}></Git>,
    Css: <Css width={"32px"} height={"32px"}></Css>,
  };

  const tecIcons2 = {
    Html: <Html width={"48px"} height={"48px"}></Html>,
    Windows: <Windows width={"48px"} height={"48px"}></Windows>,
    Arduino: <Arduino width={"48px"} height={"48px"}></Arduino>,
    C: <C width={"48px"} height={"48px"}></C>,
    Cplusplus: <Cplusplus width={"48px"} height={"48px"}></Cplusplus>,
    Vscode: <Vscode width={"48px"} height={"48px"}></Vscode>,
    Powerbi: <Powerbi width={"48px"} height={"48px"}></Powerbi>,
    Sqlserver: <Sqlserver width={"48px"} height={"48px"}></Sqlserver>,
    Js: <Js width={"48px"} height={"48px"}></Js>,
    Sass: <Sass width={"48px"} height={"48px"}></Sass>,
    Sklearn: <Sklearn></Sklearn>,
    Python: <Python width={"48px"} height={"48px"}></Python>,
    Pandas: <Pandas width={"48px"} height={"48px"}></Pandas>,
    Matplotlib: <Matplotlib width={"48px"} height={"48px"}></Matplotlib>,
    Seaborn: <Seaborn width={"48px"} height={"48px"}></Seaborn>,
    Anaconda: <Anaconda width={"48px"} height={"48px"}></Anaconda>,
    Excel: <Excel width={"48px"} height={"48px"}></Excel>,
    Figma: <Figma width={"48px"} height={"48px"}></Figma>,
    Solidworks: <Solidworks width={"48px"} height={"48px"}></Solidworks>,
    Jupyter: <Jupyter width={"48px"} height={"48px"}></Jupyter>,
    Numpy: <Numpy width={"48px"} height={"48px"}></Numpy>,
    ReactIcon: <ReactIcon width={"48px"} height={"48px"}></ReactIcon>,
    Tailwind: <Tailwind width={"48px"} height={"48px"}></Tailwind>,
    Git: <Git width={"48px"} height={"48px"}></Git>,
    Css: <Css width={"48px"} height={"48px"}></Css>,
  };

  const tecIconsFiltered = Object.entries(tecIcons)
    .filter(([key, value]) => tecKeys.includes(key))
    .reduce((obj, [key, value]) => {
      obj[key] = value;
      return obj;
    }, {});

  const tecIconsFiltered2 = Object.entries(tecIcons2)
    .filter(([key, value]) => tecKeys.includes(key))
    .reduce((obj, [key, value]) => {
      obj[key] = value;
      return obj;
    }, {});

  return (
    <div
      onClick={clickProjectVis}
      className="relative flex flex-col items-center justify-center"
    >
      <div id="project_vis--web1"></div>
      <div className="flex h-12 w-64 items-center justify-center gap-12 rounded-b-xl -bg--dark_background lg:invisible lg:absolute lg:h-auto lg:w-[512px] lg:gap-28 lg:py-4">
        {/* <ReactIcon width={"32px"} height={"32px"}></ReactIcon>
        <Tailwind width={"32px"} height={"32px"}></Tailwind>
        <Git width={"32px"} height={"32px"}></Git> */}
        {/* {tecs.map((tec) => Object.values(tec))} */}
        {Object.values(tecIconsFiltered).map((tec) => tec)}
        {/* <ReactIcon width={"32px"} height={"32px"}></ReactIcon> */}
      </div>
      <div className="invisible absolute flex h-12 w-64 items-center justify-center gap-12 rounded-b-xl -bg--dark_background lg:visible lg:relative lg:h-auto lg:w-[512px] lg:gap-28 lg:py-4">
        {/* <ReactIcon width={"32px"} height={"32px"}></ReactIcon>
        <Tailwind width={"32px"} height={"32px"}></Tailwind>
        <Git width={"32px"} height={"32px"}></Git> */}
        {/* {tecs.map((tec) => Object.values(tec))} */}
        {Object.values(tecIconsFiltered2).map((tec) => tec)}
        {/* <ReactIcon width={"32px"} height={"32px"}></ReactIcon> */}
      </div>
      <ProjectSlider
        width={ProjectSliderCss_width}
        paddingx={ProjectSliderCss_paddingx}
      ></ProjectSlider>
    </div>
  );
}
