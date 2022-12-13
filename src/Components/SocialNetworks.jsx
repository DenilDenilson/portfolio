import WhatsappIcon from "./icons/WhatsappIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import InstagramIcon from "./icons/InstagramIcon";
import GithubIcon from "./icons/GithubIcon";

export default function SocialNetworks(props) {
  return (
    <ul
      className={`flex w-full max-w-md items-center justify-between lg:max-w-none lg:justify-between lg2:flex-wrap ${props.extraCss}`}
    >
      <li className="flex items-center">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/denilson-trujillo-salazar-057745162/"
        >
          <LinkedinIcon width={props.size} height={props.size}></LinkedinIcon>
        </a>
        <p
          className={`${props.visibility} -font--nunito text-3xl font-bold -text--light_text-main`}
        >
          Denilson Trujillo Salazar
        </p>
      </li>
      <li className="flex items-center">
        <a target="_blank" href="https://www.instagram.com/denildenilsonig/">
          <InstagramIcon width={props.size} height={props.size}></InstagramIcon>
        </a>
        <p
          className={`${props.visibility} -font--nunito text-3xl font-bold -text--light_text-main`}
        >
          denildenilsonig
        </p>
      </li>
      <li className="flex items-center">
        <a
          target="_blank"
          href="https://wa.me/51933156539?text=Hola%20Denilson,%20vi%20tu%20portfolio,%20me%20gustaría%20conocerte%20mejor."
        >
          <WhatsappIcon width={props.size} height={props.size}></WhatsappIcon>
        </a>
        <p
          className={`${props.visibility} -font--nunito text-3xl font-bold -text--light_text-main`}
        >
          +51 933 156 5**
        </p>
      </li>
      <li className="flex w-[309px] items-center">
        <a target="_blank" href="https://github.com/DenilDenilson">
          <GithubIcon width={props.size} height={props.size}></GithubIcon>
        </a>
        <p
          className={`${props.visibility} -font--nunito text-3xl font-bold -text--light_text-main`}
        >
          DenilDenilson
        </p>
      </li>
    </ul>
  );
}
