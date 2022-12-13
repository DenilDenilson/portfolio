import WhatsappIcon from "./icons/WhatsappIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import InstagramIcon from "./icons/InstagramIcon";
import GithubIcon from "./icons/GithubIcon";

export default function SocialNetworks(props) {
  return (
    <ul className={`flex justify-between gap-24 ${props.extraCss}`}>
      <li>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/denilson-trujillo-salazar-057745162/"
        >
          <LinkedinIcon width={props.size} height={props.size}></LinkedinIcon>
        </a>
      </li>
      <li>
        <a target="_blank" href="https://www.instagram.com/denildenilsonig/">
          <InstagramIcon width={props.size} height={props.size}></InstagramIcon>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://wa.me/51933156539?text=Hola%20Denilson,%20vi%20tu%20portfolio,%20me%20gustaría%20conocerte%20mejor."
        >
          <WhatsappIcon width={props.size} height={props.size}></WhatsappIcon>
        </a>
      </li>
      <li>
        <a target="_blank" href="https://github.com/DenilDenilson">
          <GithubIcon width={props.size} height={props.size}></GithubIcon>
        </a>
      </li>
    </ul>
  );
}
