export default function Menu(props) {
  return (
    <ul
      id="Menu_Despegable"
      className={`absolute top-9 left-0 flex ${props.height} w-full flex-col items-center justify-center gap-6 overflow-hidden -bg--light_background shadow-[0px_20px_16px_#272743] transition-[height] duration-300 lg:top-0 lg:w-min lg:flex-row lg:shadow-none`}
    >
      <li className="-font--nunito text-xl font-bold italic -text--light_text-main">
        <a href="#Aboutme">About me</a>
      </li>
      <li className="-font--nunito text-xl font-bold italic -text--light_text-main">
        <a href="#Skills">Skills</a>
      </li>
      <li className="-font--nunito text-xl font-bold italic -text--light_text-main">
        <a href="#Projects">Projects</a>
      </li>
      <li className="-font--nunito text-xl font-bold italic -text--light_text-main">
        <a href="#Contacme">Contact me</a>
      </li>
    </ul>
  );
}
