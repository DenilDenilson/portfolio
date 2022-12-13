import SectionTitles from "./SectionTitles";
import SocialNetworks from "./SocialNetworks";

export default function Contactme() {
  return (
    <section className="mx-auto flex max-w-md flex-col items-center justify-center gap-3 lg:max-w-[832px] lg:gap-6">
      <SectionTitles extraCss="lg2:text-6xl" title="Contact me"></SectionTitles>
      <SocialNetworks
        visibility="absolute invisible lg2:relative lg2:visible"
        size="48px"
        extraCss="lg:invisible lg:absolute"
      ></SocialNetworks>
      <SocialNetworks
        visibility="absolute invisible lg2:relative lg2:visible"
        size="96px"
        extraCss="absolute invisible lg:relative lg:visible"
      ></SocialNetworks>
    </section>
  );
}
