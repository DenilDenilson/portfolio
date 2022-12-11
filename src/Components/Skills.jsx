import SectionTitle from "./SectionTitles";
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

export default function Skills() {
  return (
    <section className="flex w-full flex-col items-center gap-3">
      <SectionTitle title="Skills" />
      <div className="grid w-full grid-cols-5 grid-rows-5 content-center justify-center gap-3">
        <Html
          className="justify-self-center"
          height={"32px"}
          width={"32px"}
        ></Html>
        <Windows
          className="justify-self-center"
          height={"32px"}
          width={"32px"}
        />
        <Arduino
          className="justify-self-center"
          height={"32px"}
          width={"32px"}
        ></Arduino>
        <C className="justify-self-center" height={"32px"} width={"32px"}></C>
        <Cplusplus
          className="justify-self-center"
          height={"32px"}
          width={"32px"}
        ></Cplusplus>
        <Vscode
          className="justify-self-center"
          height={"32px"}
          width={"32px"}
        ></Vscode>
        <Powerbi
          className="justify-self-center"
          height={"32px"}
          width={"32px"}
        ></Powerbi>
        <Sqlserver
          className="justify-self-center"
          height={"32px"}
          width={"32px"}
        ></Sqlserver>
        <Js className="justify-self-center" height={"32px"} width={"32px"}></Js>
        <Git
          className="justify-self-center"
          height={"32px"}
          width={"32px"}
        ></Git>
        <ReactIcon
          className="justify-self-center"
          height={"32px"}
          width={"32px"}
        ></ReactIcon>
        <Sass
          className="justify-self-center"
          height={"32px"}
          width={"32px"}
        ></Sass>
        <Sklearn className="justify-self-center"></Sklearn>
        <Python
          className="justify-self-center"
          height={"32px"}
          width={"32px"}
        ></Python>
        <Pandas
          className="justify-self-center"
          height={"32px"}
          width={"32px"}
        ></Pandas>
        <Matplotlib
          className="justify-self-center"
          height={"32px"}
          width={"32px"}
        ></Matplotlib>
        <Seaborn
          className="justify-self-center"
          height={"32px"}
          width={"32px"}
        ></Seaborn>
        <Tailwind
          className="justify-self-center"
          height={"32px"}
          width={"32px"}
        ></Tailwind>
        <Anaconda
          className="justify-self-center"
          height={"32px"}
          width={"32px"}
        ></Anaconda>
        <Excel
          className="justify-self-center"
          height={"32px"}
          width={"32px"}
        ></Excel>
        <Figma
          className="justify-self-center"
          height={"32px"}
          width={"32px"}
        ></Figma>
        <Solidworks
          className="justify-self-center"
          height={"32px"}
          width={"32px"}
        ></Solidworks>
        <Jupyter
          className="justify-self-center"
          height={"32px"}
          width={"32px"}
        ></Jupyter>
        <Numpy
          className="justify-self-center"
          height={"32px"}
          width={"32px"}
        ></Numpy>
        <Css
          className="justify-self-center"
          height={"32px"}
          width={"32px"}
        ></Css>
      </div>
    </section>
  );
}
