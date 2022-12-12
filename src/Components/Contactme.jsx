import WhatsappIcon from "./icons/WhatsappIcon";
import SectionTitles from "./SectionTitles";
import LinkedinIcon from "./icons/LinkedinIcon";
import InstagramIcon from "./icons/InstagramIcon";
import GithubIcon from "./icons/GithubIcon";

export default function Contactme() {
  return (
    <section className="flex flex-col gap-3">
      <SectionTitles title="Conctact me"></SectionTitles>
      <ul className="flex justify-between">
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/denilson-trujillo-salazar-057745162/"
          >
            <LinkedinIcon></LinkedinIcon>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.instagram.com/denildenilsonig/">
            <InstagramIcon></InstagramIcon>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://wa.me/51933156539?text=Hola%20Denilson,%20vi%20tu%20portfolio,%20me%20gustaría%20conocerte%20mejor."
          >
            <WhatsappIcon></WhatsappIcon>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/DenilDenilson">
            <GithubIcon></GithubIcon>
          </a>
        </li>
      </ul>
    </section>
  );
}
