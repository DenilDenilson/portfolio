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

export default function AllIcons(props) {
  return (
    <div
      className={`grid w-full grid-cols-5 grid-rows-5 content-center justify-center gap-3 lg:gap-y-12 ${props.extraCss}`}
    >
      <Html
        className="justify-self-center"
        height={props.size}
        width={props.size}
      ></Html>
      <Windows
        className="justify-self-center"
        height={props.size}
        width={props.size}
      />
      <Arduino
        className="justify-self-center"
        height={props.size}
        width={props.size}
      ></Arduino>
      <C
        className="justify-self-center"
        height={props.size}
        width={props.size}
      ></C>
      <Cplusplus
        className="justify-self-center"
        height={props.size}
        width={props.size}
      ></Cplusplus>
      <Vscode
        className="justify-self-center"
        height={props.size}
        width={props.size}
      ></Vscode>
      <Powerbi
        className="justify-self-center"
        height={props.size}
        width={props.size}
      ></Powerbi>
      <Sqlserver
        className="justify-self-center"
        height={props.size}
        width={props.size}
      ></Sqlserver>
      <Js
        className="justify-self-center"
        height={props.size}
        width={props.size}
      ></Js>
      <Git
        className="justify-self-center"
        height={props.size}
        width={props.size}
      ></Git>
      <ReactIcon
        className="justify-self-center"
        height={props.size}
        width={props.size}
      ></ReactIcon>
      <Sass
        className="justify-self-center"
        height={props.size}
        width={props.size}
      ></Sass>
      <Sklearn className="justify-self-center"></Sklearn>
      <Python
        className="justify-self-center"
        height={props.size}
        width={props.size}
      ></Python>
      <Pandas
        className="justify-self-center"
        height={props.size}
        width={props.size}
      ></Pandas>
      <Matplotlib
        className="justify-self-center"
        height={props.size}
        width={props.size}
      ></Matplotlib>
      <Seaborn
        className="justify-self-center"
        height={props.size}
        width={props.size}
      ></Seaborn>
      <Tailwind
        className="justify-self-center"
        height={props.size}
        width={props.size}
      ></Tailwind>
      <Anaconda
        className="justify-self-center"
        height={props.size}
        width={props.size}
      ></Anaconda>
      <Excel
        className="justify-self-center"
        height={props.size}
        width={props.size}
      ></Excel>
      <Figma
        className="justify-self-center"
        height={props.size}
        width={props.size}
      ></Figma>
      <Solidworks
        className="justify-self-center"
        height={props.size}
        width={props.size}
      ></Solidworks>
      <Jupyter
        className="justify-self-center"
        height={props.size}
        width={props.size}
      ></Jupyter>
      <Numpy
        className="justify-self-center"
        height={props.size}
        width={props.size}
      ></Numpy>
      <Css
        className="justify-self-center"
        height={props.size}
        width={props.size}
      ></Css>
    </div>
  );
}
