import SectionTitles from "./SectionTitles";
import SocialNetworks from "./SocialNetworks";

export default function Contactme() {
  return (
    <section className="mx-auto flex max-w-md flex-col items-center gap-3 lg:max-w-[832px] lg:gap-6">
      <SectionTitles title="Conctact me"></SectionTitles>
      <SocialNetworks
        size="48px"
        extraCss="lg:invisible lg:absolute"
      ></SocialNetworks>
      <SocialNetworks
        size="96px"
        extraCss="absolute invisible lg:relative lg:visible"
      ></SocialNetworks>
    </section>
  );
}
